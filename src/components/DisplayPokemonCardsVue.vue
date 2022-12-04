<template>
  <div class="pokemon-searchbar flex justify-center py-0">
    <input
      type="text"
      class="border border-gray-900 rounded-lg p-2 my-6"
      name="pokemon-search"
      placeholder="search for pokemon"
      v-model="searchInput"
    />
  </div>
  <div class="container mx-auto max-w-6xl">
    <div
      class="card-container flex flex-wrap gap-4 gap-y-4 justify-center items-center border border-red-600"
    >
      <PokemonCardVue
        v-for="(pokemon, index) in pokemonStore.filteredList"
        :key="`poke-${index}`"
        :pokeName="pokemonStore.filteredList[index].pokemonName"
        :pokeId="pokemonStore.filteredList[index].pokemonId"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from "vue";
import PokemonCardVue from "./PokemonCardVue.vue";

const searchInput = ref("");

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
  //console.log(pokemonStore);
});
</script>

<style scoped></style>
