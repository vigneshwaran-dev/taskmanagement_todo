<template>
  <div class="grid-container">
    <SideBar />

    <ContentHolder />
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import ContentHolder from "./ContentHolder.vue";

export default {
  name: "GridContainer",
  components: {
    SideBar,
    ContentHolder,
  }
};
</script>
