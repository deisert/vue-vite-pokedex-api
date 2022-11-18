<template id="app">
  <div class="container-wrapper">
    <div class="headlines">
      <h1 class="text-6xl mb-6 text-center font-bold">Pokedex</h1>
      <h4 class="text-3xl mb-6 text-center">
        Wir bauen einen Pokedex mit Vue und Vite
      </h4>
      <p class="text-center font-bold">Und nutzen dafür die Poke API</p>
    </div>
    <div class="pokemon-data">
      <input
        type="text"
        class="block m-auto border border-gray-900 rounded-md p-2 my-6"
        name="pokemon-search"
        placeholder="search for pokemon"
        v-model="searchInput"
      />
      <li
        class="text-center"
        v-for="(pokemon, index) in pokemonStore.filteredList"
        :key="`poke-${index}`"
      >
        #{{ pokemon.entry_number }} - {{ pokemon.pokemon_species.name }}
      </li>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from "vue";

const searchInput = ref("");

//reactive "Store" obj
//its reactive so the list (api response)
//and the filteredList is together in one obj
const pokemonStore = reactive({
  list: [],
  filteredList: computed(() =>
    pokemonStore.list.filter((pokemon) =>
      pokemon.pokemon_species.name.includes(searchInput.value)
    )
  ),
});

onMounted(async () => {
  const pokemonData = await fetch("https://pokeapi.co/api/v2/pokedex/2/").then(
    (response) => response.json()
  );

  const helloFetch = await fetch("/.netlify/functions/fetchPokemonData").then(
    (response) => response.json()
  );
  console.log({ helloFetch });

  pokemonStore.list = pokemonData.pokemon_entries;
});
</script>

<style scoped>
.pokemon-data {
  margin-top: 2rem;
}
</style>
