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
      <BerryCardVue
        v-for="(berry, index) in berryStore.filteredList"
        :key="`berry-${index}`"
        :berrieName="berryStore.filteredList[index].berrieName"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from "vue";
import BerryCardVue from "./BerryCardVue.vue";

const searchInput = ref("");

const berryStore = reactive({
  list: [],
  filteredList: computed(() =>
    berryStore.list.filter((berry) =>
      berry.berrieName.toLowerCase().includes(searchInput.value.toLowerCase())
    )
  ),
});

onMounted(async () => {
  const berrieData = await fetch("/.netlify/functions/fetchBerrieData").then(
    (response) => response.json()
  );
  berryStore.list = berrieData;
});
</script>

<style scoped></style>
