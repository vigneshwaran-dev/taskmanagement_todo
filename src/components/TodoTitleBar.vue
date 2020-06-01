<template>
  <div class="todo-title-bar">
    <div class="welcome-user">
      <h2><font color="#357d72">{{$store.state.user.name}}</font>'s To-do List</h2>
    </div>

    <div class="label-filters">
      <div class="label-filter" :class="{'filter-selected' : !$store.state.todo.personal}" @click="togglePersonal">
        <i class="fa fa-user fa-lg"></i>
        <span class="tooltip">Personal</span>
      </div>

      <div class="label-filter" :class="{'filter-selected' : !$store.state.todo.work}" @click="toggleWork">
        <i class="fa fa-briefcase fa-lg"></i>
        <span class="tooltip">Work</span>
      </div>

      <div class="label-filter" :class="{'filter-selected' : !$store.state.todo.shopping}" @click="toggleShopping">
        <i class="fa fa-shopping-cart fa-lg"></i>
        <span class="tooltip">Shopping</span>
      </div>

      <div class="label-filter" :class="{'filter-selected' : !$store.state.todo.others}" @click="toggleOthers">
        <i class="fa fa-th fa-lg"></i>
        <span class="tooltip">Others</span>
      </div>
    </div>

    <div class="pagination">
      <div class="pagination-item">
        <i class="fas fa-arrow-circle-left fa-lg" @click="$store.dispatch('prevPage')"></i>
      </div>
      <div class="pagination-item">{{$store.state.todo.currentPage+1}}</div>
      <div class="pagination-item">
        <i class="fas fa-arrow-circle-right fa-lg" @click="$store.dispatch('nextPage')"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoTitleBar",
  methods : {
    togglePersonal(){
      this.$store.state.todo.personal = !this.$store.state.todo.personal;
      this.$store.dispatch('fetchTodos');
    },

    toggleWork(){
      this.$store.state.todo.work = !this.$store.state.todo.work;
      this.$store.dispatch('fetchTodos');
    },

    toggleShopping(){
      this.$store.state.todo.shopping = !this.$store.state.todo.shopping;
      this.$store.dispatch('fetchTodos');
    },

    toggleOthers(){
      this.$store.state.todo.others = !this.$store.state.todo.others;
      this.$store.dispatch('fetchTodos');
    },
  }
};
</script>