<template id="app">
  <div class="container-wrapper">
    <h1 class="text-6xl my-8 text-center font-bold">Pokedex</h1>
    <NavbarVue />
    <div class="searchbar flex justify-center py-0 border">
      <input
        type="text"
        class="border border-gray-900 rounded-lg p-2 my-6"
        name="pokemon-search"
        placeholder="search for pokemon"
        v-model="searchInput"
      />
    </div>
    <div class="headlines">
      <h4 class="text-3xl mb-6 text-center">
        Wir bauen einen Pokedex mit Vue und Vite
      </h4>
      <p class="text-center font-bold">Und nutzen dafür die Poke API</p>
    </div>
    <div class="component-data flex flex-wrap justify-center gap-4">
      <BerryCardVue></BerryCardVue>
    </div>
    <div class="pokemon-data">
      <li
        class="text-center"
        v-for="(pokemon, index) in pokemonStore.filteredList"
        :key="`poke-${index}`"
      >
        #{{ pokemon.pokemonId }} - {{ pokemon.pokemonName }}
      </li>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from "vue";
import BerryCardVue from "./components/BerryCardVue.vue";

const searchInput = ref("");

//Object to Store the pokemon dat
//reactive "Store" obj
//its reactive so the list (api response)
//and the filteredList is together in one obj
const pokemonStore = reactive({
  list: [],
  filteredList: computed(() =>
    pokemonStore.list.filter((pokemon) =>
      pokemon.pokemonName
        .toLowerCase()
        .includes(searchInput.value.toLowerCase())
    )
  ),
});

onMounted(async () => {
  const pokemonData = await fetch("/.netlify/functions/fetchPokemonData").then(
    (response) => response.json()
  );
  pokemonStore.list = pokemonData;
});
</script>

<style scoped>
.pokemon-data {
  margin-top: 2rem;
}
</style>
