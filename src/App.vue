<template>
  <div>
    <h1 class="text-6xl mb-6 text-center font-bold">Pokedex</h1>
    <h3 class="text-4xl mb-6 text-center">Wir bauen einen Pokedex mit Vue und Vite</h3>
    <p class="text-center font-bold">Und nutzen dafür die Poke API </p>
  </div>
  <input type="text" v-model="filterText"/>
  <div class="poke-data">
    <!-- Old options api Looping over data  -->
    <!-- <li v-for="(pokemon, index) in pokemonList" :key="`poke-${ index }`">
      {{ pokemon.pokemon_species }}
    </li> -->
    <li class="text-center" v-for="(pokemon, index) in pokemonList" :key="`poke-${ index }`">
      #{{pokemon.entry_number}} - {{pokemon.pokemon_species.name}}
    </li>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const pokemonList = ref([])

onMounted(async () => {
  const pokemonData = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then(response => response.json()
    )
  pokemonList.value = pokemonData.pokemon_entries
})



//*** 
//OLD options api 
// export default {
//   data: () => ({
//     pokemonList: []
//   }), 
//   async mounted() {
//     const pokemonData = await fetch('https://pokeapi.co/api/v2/pokedex/2/').then(
//       response => response.json()
//     )
//     this.pokemonList = pokemonData.pokemon_entries
//     console.log({pokemonData})
//   },
// }
</script>



<style scoped>
.poke-data{
  margin-top: 2rem;
}
</style>
