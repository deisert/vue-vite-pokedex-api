<template>
  <div class="berry-card">
    <div
      class="max-w-sm border bg-slate-50 border-red-300 rounded-lg shadow-md"
    >
      <a href="#">
        <img
          class="rounded-t-lg w-full h-48"
          src="../assets/Berry_Basket.png"
          alt="berry basket"
        />
      </a>
      <div class="p-3">
        <h5 class="berry-name mb-1 text-2xl font-semibold">{{ berrieName }}</h5>
        <p class="berry-description mb-2 font-thin">I am berry text</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, defineProps } from "vue";

const props = defineProps({
  berrieName: String,
  berrieUrl: String,
});
</script>

<style scoped>
.berrie-card {
  border: 1px solid orangered;
}
</style>
