<template>
  <div class="pokemon-card flex flex-row flex-wrap">
    <div
      class="max-w-sm bg-slate-50 border border-red-300 rounded-lg shadow-md"
    >
      <a href="#">
        <img
          class="rounded-t-lg w-full h-48"
          src="src\assets\Berry_Basket.png"
          alt="berry basket"
        />
      </a>
      <div class="p-3">
        <h5 class="pokemon-name mb-1 text-2xl font-semibold">{{ pokeName }}</h5>

        <p class="pokemon-description mb-2 font-thin"># {{ pokeId }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, defineProps } from "vue";

const props = defineProps({
  pokeName: String,
  pokeId: Number,
  pokeImage: {
    type: String,
    //default: "srassets\Berry_Basket.png",
  },
  pokeUrl: String,
});
</script>

<style scoped></style>
