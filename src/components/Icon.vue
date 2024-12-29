<template>
  <span v-html="svg" class="fill-current inline-flex" v-if="name.length"/>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
    default: "",
  },
  src: {
    type: String,
    default: "",
  },
});
const path = props.src ? props.src : "";
const file = `${path}${props.name}`;
const modules = import.meta.glob("../assets/svg/**/*.svg", {
  as: "raw",
  eager: true,
});
const svg = computed(() => {
  return (
      modules["../assets/svg/" + file + ".svg"] ??
      modules["../assets/svg/icon-logo-cone.svg"]
  );
});
</script>