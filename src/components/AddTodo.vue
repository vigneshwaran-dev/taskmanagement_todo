<template>
  <div class="parent-add-todo-container">
    <transition name="modal-fade">
      <div class="modal-backdrop">
        <div class="modal" role="dialog">
          <div class="add-todo-grid">
            <div class="add-todo-close">
              <i class="fas fa-times-circle fa-lg button" @click="close"></i>
            </div>

            <div class="input-container">
              <i
                class="fa fa-sticky-note fa-lg"
                :class="{ 'icon-error': error.title }"
              ></i>
              <input
                class="input-text"
                type="text"
                v-model="data.title"
                placeholder="Title ..."
                @keyup="checkTitle"
              />
            </div>

            <div class="input-container">
              <i
                class="fa fa-clipboard fa-lg"
                :class="{ 'icon-error': error.note }"
              ></i>
              <textarea
                class="input-textarea"
                v-model="data.note"
                placeholder="Note ..."
                @keyup="checkNote"
              ></textarea>
            </div>

            <div class="date-label-container">
              <div class="input-container-date">
                <v-date-picker
                  :value="null"
                  v-model="data.date"
                  color="green"
                  is-inline
                  tiitle-position="left"
                  class="no-border"
                />
              </div>

              <div class="select-label">
                <div class="label-filters">
                  <div
                    class="label-filter"
                    :class="{ 'filter-selected': label.personal }"
                    @click="togglePersonal"
                  >
                    <i class="fa fa-user fa-lg"></i>
                    <span class="tooltip">Personal</span>
                  </div>

                  <div
                    class="label-filter"
                    :class="{ 'filter-selected': label.work }"
                    @click="toggleWork"
                  >
                    <i class="fa fa-briefcase fa-lg"></i>
                    <span class="tooltip">Work</span>
                  </div>

                  <div
                    class="label-filter"
                    :class="{ 'filter-selected': label.shopping }"
                    @click="toggleShopping"
                  >
                    <i class="fa fa-shopping-cart fa-lg"></i>
                    <span class="tooltip">Shopping</span>
                  </div>

                  <div
                    class="label-filter"
                    :class="{ 'filter-selected': label.others }"
                    @click="toggleOthers"
                  >
                    <i class="fa fa-th fa-lg"></i>
                    <span class="tooltip">Others</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="add-todo-submit">
              <i class="fas fa-plus-circle fa-lg button" @click="submit"></i>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      label: {
        personal: true,
        work: false,
        shopping: false,
        others: false,
      },
      data: {
        title: "",
        note: "",
        label: "personal",
        date: null,
      },
      error: {
        title: true,
        note: true,
      },
    };
  },
  methods: {
    close() {
      this.$emit("close");
      this.data.title = this.data.note = "";
      const temp = new Date();
      this.data.date = new Date(
        temp.getFullYear(),
        temp.getMonth(),
        temp.getDate(),
        0,
        0
      );
      this.error.title = this.error.note = true;
      this.togglePersonal();
    },

    togglePersonal() {
      this.label.personal = true;
      this.label.work = this.label.shopping = this.label.others = false;
      this.data.label = "personal";
    },

    toggleWork() {
      this.label.work = true;
      this.label.personal = this.label.shopping = this.label.others = false;
      this.data.label = "work";
    },

    toggleShopping() {
      this.label.shopping = true;
      this.label.work = this.label.personal = this.label.others = false;
      this.data.label = "shopping";
    },

    toggleOthers() {
      this.label.others = true;
      this.label.work = this.label.shopping = this.label.personal = false;
      this.data.label = "others";
    },

    checkTitle() {
      if (this.data.title.length == 0 || this.data.title.length > 30)
        this.error.title = true;
      else this.error.title = false;
    },

    checkNote() {
      if (this.data.note.length == 0) this.error.note = true;
      else this.error.note = false;
    },

    async submit() {
      if (this.error.title == true || this.error.note == true) return;

      await this.$store.dispatch("insertTodo", this.data);
      this.close();
    },
  },
  created() {
    const temp = new Date();
    this.data.date = new Date(
      temp.getFullYear(),
      temp.getMonth(),
      temp.getDate(),
      0,
      0
    );
  },
};
</script>