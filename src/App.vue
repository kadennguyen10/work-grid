<template>
  <div id="app">
    <WorkGrid />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WorkGrid from "./components/WorkGrid.vue";

export default defineComponent({
  name: "App",
  components: {
    WorkGrid,
  },
});
</script>

<style></style>
