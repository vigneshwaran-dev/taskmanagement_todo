<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog">
        <div class="add-todo-grid">
          <div class="add-todo-close">
            <i
              class="fas fa-times-circle fa-lg button"
              @click="close"
            ></i>
          </div>

          <div class="input-container">
            <i class="fa fa-sticky-note fa-lg" :class="{'icon-error' : error.title}"></i>
            <input class="input-text" type="text" v-model="data.title" placeholder="Title ..." @keyup="checkTitle" />
          </div>

          <div class="input-container">
            <i class="fa fa-clipboard fa-lg" :class="{'icon-error' : error.note}"></i>
            <textarea class="input-textarea" v-model="data.note" placeholder="Note ..." @keyup="checkNote"></textarea>
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
        title: '',
        note: '',
        label: 'personal',
        date: null
      },
      error : {
        title : true,
        note: true
      }
    }
  },
  methods: {
    close() {
      this.$emit('close');
      this.data.title = this.data.note = '';
      const temp = new Date();
      this.data.date = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate(), 0, 0);
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
      if(this.data.title.length == 0 || this.data.title.length > 30)
        this.error.title = true;
      else
        this.error.title = false;
    },

    checkNote() {
      if(this.data.note.length == 0)
        this.error.note = true;
      else
        this.error.note = false;
    },

    async submit(){
      if(this.error.title == true || this.error.note == true)
        return;

      await this.$store.dispatch('insertTodo', this.data);
      this.close();
    }
  },
  created(){
    const temp = new Date();
    this.data.date = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate(), 0, 0);
  }
};
</script>

<style scoped>
.no-border {
  border: unset;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.modal-backdrop {
  z-index: 2;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  border-radius: 2em;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: auto;
}

.add-todo-grid {
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  margin: 2em;
  padding: 1em;
  grid-row-gap: 1em;
}

.add-todo-close {
  text-align: right;
}

.add-todo-close .button {
  cursor: pointer;
}

.input-container {
  position: relative;
}

.input-container i {
  position: absolute;
  left: 0;
  top: 8px;
  padding: 9px 8px;
  color: #357d72;
}

.input-container .icon-error {
  color: #fc8460;
}

.input-container input[type="text"] {
  padding-left: 40px;
}

.input-container textarea {
  padding-left: 40px;
  font-family: "Roboto", sans-serif;
}

.input-text, .input-textarea {
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
}

.input-textarea {
  resize : none;
}

.input-text:focus, .input-textarea:focus {
  border-color: #feb800;
  box-shadow: 0 0 8px 0 #feb800;
}

.date-label-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1em;
}

.date-label-container .select-label .label-filters {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3em;
  padding: 70px 0;
}

.add-todo-submit {
  text-align: center;
}

.add-todo-submit .button {
  color: #feb800;
  font-size: 50px;
  cursor: pointer;
}
</style>
