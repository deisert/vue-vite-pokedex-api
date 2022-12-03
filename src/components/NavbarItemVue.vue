<template>
  <div
    class="nav-item px-2 min-w-max h-14 text-center rounded-lg border border-black cursor-pointer"
    @click="setClickState"
  >
    {{ description }}
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

let clickedState = reactive({
  isClicked: false,
});

const props = defineProps({
  description: String,
});

function setClickState() {
  clickedState.isClicked = !clickedState.isClicked;
  console.log(clickedState.isClicked);
}
</script>

<style scoped></style>
