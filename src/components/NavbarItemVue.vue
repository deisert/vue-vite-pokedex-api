<template>
  <div class="nav-item w-16 h-16 rounded-lg border border-black">
    {{ description }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  description: String,
});
</script>

<style scoped></style>
