<template>
  <div class="top-bar">
    <div class="logout-container">
      <i class="fas fa-sign-out-alt fa-lg logout" @click="logout"></i>
    </div>

    <div class="todo-search-container">
      <i class="fa fa-search fa-lg"></i>
      <input
        class="todo-search"
        type="text"
        placeholder="Search ..."
        aria-hidden="true"
        v-model="query"
        @keyup="search"
      />
    </div>

    <div>
      <button class="add-todo-btn" @click="addTodo = true">Add To-do</button>
      <AddTodo v-show="addTodo" @close="addTodo = false" />
    </div>
  </div>
</template>

<script>
import AddTodo from './AddTodo.vue';

export default {
  name: 'TopBar',
  components: {
    AddTodo,
  },
  data() {
    return {
      addTodo: false,
      query: '',
    };
  },
  methods: {
    search() {
      this.$store.state.todo.query = this.query;
      this.$store.dispatch('fetchTodos');
    },

    logout() {
      localStorage.removeItem('token');
      this.$store.state.user._id = '';
      this.$store.state.user.name = '';
      this.$store.state.user.email = '';
      this.$store.state.user.password = '';
      this.$store.state.user.image = '';
      this.$store.state.user.token = '';
      this.$router.push("/signin");
    },
  },
};
</script>
