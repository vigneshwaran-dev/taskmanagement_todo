<template>
  <div class="content-holder">
    <TodoTitleBar />

    <TodoLegend />

    <TodoContainer/>
  </div>
</template>

<script>
import TodoTitleBar from "./TodoTitleBar.vue";
import TodoLegend from "./TodoLegend.vue";
import TodoContainer from "./TodoContainer.vue";

export default {
  name: "ContentHolder",
  components: {
    TodoTitleBar,
    TodoLegend,
    TodoContainer,
  }
};
</script>
