<template id="app">
  <div class="container-wrapper">
    <h1 class="text-6xl my-8 text-center font-bold">Pokedex</h1>
    <NavbarVue />
    <div class="headlines">
      <h4 class="text-3xl mb-6 text-center">
        Wir bauen einen Pokedex mit Vue und Vite
      </h4>
      <p class="text-center font-bold">Und nutzen dafür die Poke API</p>
    </div>
    <div class="component-data flex flex-wrap justify-center gap-4">
      <!-- <BerryCardVue></BerryCardVue> -->
    </div>
    <div class="pokemon-data">
      <!-- <DisplayPokemonCardsVue /> -->

      <DisplayBerryCardsVue />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import DisplayPokemonCardsVue from "./components/DisplayPokemonCardsVue.vue";
import DisplayBerryCardsVue from "./components/DisplayBerryCardsVue.vue";
</script>

<style scoped>
.pokemon-data {
  margin-top: 2rem;
}
</style>
