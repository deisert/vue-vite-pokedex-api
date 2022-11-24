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
        #{{ pokemon.pokemonId }} - {{ pokemon.pokemonName }}
      </li>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from "vue";

const searchInput = ref("");

//first try at bringing searchInput to Uppercase, so that the search functions works as expected.
// function stringToUpperCase(foo) {
//   if (foo == " ") {
//     return foo;
//   } else return foo[0].toUpperCase() + foo.slice(1);
// }
// const searchInputUpper = stringToUpperCase(searchInput.value);

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
  console.log({ pokemonData });
  pokemonStore.list = pokemonData;
});
</script>

<style scoped>
.pokemon-data {
  margin-top: 2rem;
}
</style>
