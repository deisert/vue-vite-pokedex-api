<template>
  <div
    class="nav-item px-2 min-w-max h-14 text-center rounded-lg border border-black cursor-pointer"
    @click="doSomething()"
  >
    {{ description }}
  </div>
</template>

<script setup>
//import { defineProps } from "vue";

const props = defineProps({
  description: String,
});

function doSomething() {
  console.log(props.description);
}
</script>

<style scoped></style>
