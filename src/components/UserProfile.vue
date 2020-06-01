<template>
  <div class="user-profile-parent-container">
    <transition name="modal-fade">
      <div class="modal-backdrop">
        <div class="modal" role="dialog">
          <div class="profile-grid">
            <div class="profile-close">
              <i class="fas fa-times-circle fa-lg button" @click="close"></i>
            </div>

            <div class="profile-photo">
              <div class="current-img">
                <div class="img-border">
                  <img
                    :src="$API + '/' + $store.state.user.image"
                    class="profile-img"
                  />
                </div>
              </div>

              <div class="img-setters">
                <img
                  :src="$API + '/images/default-boy.png'"
                  @click="changePhoto(false, 1)"
                  class="set-img"
                />
                <img
                  :src="$API + '/images/default-girl.png'"
                  @click="changePhoto(false, 2)"
                  class="set-img"
                />
                <img
                  :src="$API + '/images/upload-photo.svg'"
                  @click="$refs.photo.click()"
                  class="set-img"
                />
                <input
                  type="file"
                  class="hide"
                  @change="changePhoto(true)"
                  ref="photo"
                  accept=".jpeg, .png, .jpg"
                />
              </div>
            </div>

            <div class="profile-name">
              <div class="input-container">
                <i
                  class="fa fa-user fa-lg"
                  :class="{ 'icon-error': error.name }"
                ></i>
                <input
                  type="text"
                  class="input-text"
                  v-model="name"
                  placeholder="Name to change ... and ↵"
                  @keyup="changeName"
                />
              </div>
            </div>

            <div class="profile-password">
              <div class="input-container">
                <i
                  class="fa fa-user-lock fa-lg"
                  :class="{ 'icon-error': error.currentPassword }"
                ></i>
                <input
                  type="password"
                  class="input-password"
                  v-model="currentPassword"
                  placeholder="Current password ..."
                />
              </div>

              <div class="input-container">
                <i
                  class="fa fa-lock fa-lg"
                  :class="{ 'icon-error': error.password }"
                ></i>
                <input
                  type="password"
                  class="input-password"
                  v-model="password"
                  placeholder="New password ..."
                />
              </div>

              <div class="input-container">
                <i
                  class="fa fa-lock fa-lg"
                  :class="{ 'icon-error': error.confirmPassword }"
                ></i>
                <input
                  type="password"
                  class="input-password"
                  v-model="confirmPassword"
                  placeholder="Confirm password ... and ↵"
                  @keyup="changePassword"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import bcrypt from "bcryptjs";

export default {
  name: "UserProfile",
  data() {
    return {
      name: "",
      currentPassword: "",
      password: "",
      confirmPassword: "",
      error: {
        name: false,
        currentPassword: false,
        password: false,
        confirmPassword: false,
      },
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },

    changePassword() {
      if (event.keyCode !== 13) return;

      this.error.password = this.error.currentPassword = this.error.confirmPassword = false;

      if (
        !bcrypt.compareSync(
          this.currentPassword,
          this.$store.state.user.password
        )
      ) {
        this.error.currentPassword = true;
        return;
      }

      if (this.password.length < 8) {
        this.error.password = true;
        this.error.currentPassword = true;
        return;
      }

      if (this.password !== this.confirmPassword) {
        this.error.confirmPassword = true;
        this.confirmPassword = "";
        return;
      }

      axios
        .put(
          this.$API + "/user/" + localStorage.getItem("token") + "/password",
          { password: this.password }
        )
        .then(() => {
          axios
            .get(this.$API + "/user/" + localStorage.getItem("token"))
            .then((user) => {
              this.$store.state.user.name = user.data.name;
              this.$store.state.user.email = user.data.email;
              this.$store.state.user.password = user.data.password;
              this.$store.state.user._id = user.data._id;
              this.$store.state.user.image = user.data.image;
              this.$store.state.user.token = localStorage.getItem("token");
              this.confirmPassword = this.password = this.currentPassword = "";
            });
        });
    },

    changePhoto(upload, gender) {
      if (!upload) {
        var image = "";
        if (gender === 1) image = "images/default-boy.png";

        if (gender === 2) image = "images/default-girl.png";

        axios
          .put(
            this.$API + "/user/" + localStorage.getItem("token") + "/image",
            { image: image }
          )
          .then(() => {
            axios
              .get(this.$API + "/user/" + localStorage.getItem("token"))
              .then((user) => {
                this.$store.state.user.name = user.data.name;
                this.$store.state.user.email = user.data.email;
                this.$store.state.user.password = user.data.password;
                this.$store.state.user._id = user.data._id;
                this.$store.state.user.image = user.data.image;
                this.$store.state.user.token = localStorage.getItem("token");
              });
          });
        return;
      }
      var fd = new FormData();
      fd.append("image", event.target.files[0]);

      axios
        .put(
          this.$API + "/user/" + localStorage.getItem("token") + "/image/file",
          fd
        )
        .then(() => {
          axios
            .get(this.$API + "/user/" + localStorage.getItem("token"))
            .then((user) => {
              this.$store.state.user.name = user.data.name;
              this.$store.state.user.email = user.data.email;
              this.$store.state.user.password = user.data.password;
              this.$store.state.user._id = user.data._id;
              this.$store.state.user.image = user.data.image;
              this.$store.state.user.token = localStorage.getItem("token");
            });
        });
    },

    changeName() {
      if (event.keyCode !== 13) return;

      this.error.name = false;
      if (this.name.length < 4) {
        this.error.name = true;
        return;
      }

      axios
        .put(this.$API + "/user/" + localStorage.getItem("token") + "/name", {
          name: this.name,
        })
        .then(() => {
          axios
            .get(this.$API + "/user/" + localStorage.getItem("token"))
            .then((user) => {
              this.$store.state.user.name = user.data.name;
              this.$store.state.user.email = user.data.email;
              this.$store.state.user.password = user.data.password;
              this.$store.state.user._id = user.data._id;
              this.$store.state.user.image = user.data.image;
              this.$store.state.user.token = localStorage.getItem("token");
              this.name = "";
            });
        });
    },
  },
};
</script>