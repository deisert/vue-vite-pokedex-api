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

const searchInput = ref("");

//first try at bringing searchInput to Uppercase, so that the search functions works as expected.
// function stringToUpperCase(foo) {
//   if (foo == " ") {
//     return foo;
//   } else return foo[0].toUpperCase() + foo.slice(1);
// }
// const searchInputUpper = stringToUpperCase(searchInput.value);

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

//Object to store berries inside
const berrieStore = reactive({
  list: [],
});

onMounted(async () => {
  const pokemonData = await fetch("/.netlify/functions/fetchPokemonData").then(
    (response) => response.json()
  );
  pokemonStore.list = pokemonData;

  //TODO: move to extra berrieComponent. Again in onMounted.
  const berrieData = await fetch("/.netlify/functions/fetchBerrieData").then(
    (response) => response.json()
  );
  berrieStore.list = berrieData;
  //console.log({ berrieStore });
});
</script>

<style scoped>
.pokemon-data {
  margin-top: 2rem;
}
</style>
