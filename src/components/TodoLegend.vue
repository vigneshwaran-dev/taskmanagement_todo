<template>
  <div class="todo-legend">
    <div class="legend" :class="{ 'new': $store.state.todo.new }" @click="toggleNew">
      New
    </div>

    <div
      class="legend"
      :class="{ 'progress': $store.state.todo.progress }"
      @click="toggleProgress"
    >
      On Progress
    </div>

    <div
      class="legend"
      :class="{ 'completed': $store.state.todo.completed }"
      @click="toggleCompleted"
    >
      Completed
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoLegend",
  methods: {
    toggleNew() {
      this.$store.state.todo.new = !this.$store.state.todo.new;
      this.$store.dispatch('fetchTodos');
    },

    toggleProgress() {
      this.$store.state.todo.progress = !this.$store.state.todo.progress;
      this.$store.dispatch('fetchTodos');
    },

    toggleCompleted() {
      this.$store.state.todo.completed = !this.$store.state.todo.completed;
      this.$store.dispatch('fetchTodos');
    }
  },
};
</script>
