<template>
  <div class="todo-container">
    <Todo
      v-for="todo in $store.state.todo.visibleTodos"
      :key="todo._id"
      :data="todo"
    />
  </div>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  name: "TodoContainer",
  components: {
    Todo,
  },
  async created(){
    await this.$store.dispatch('fetchTodos');
  }
};
</script>
