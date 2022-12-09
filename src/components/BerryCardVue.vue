<template>
  <div class="berry-card">
    <div class="border bg-slate-50 border-red-300 rounded-lg shadow-md">
      <a :href="berryItem.url" class="">
        <img
          class="rounded-t-lg w-40 m-auto"
          :src="berryItem.imageUrl"
          alt=""
        />
      </a>
      <div class="p-3">
        <h5 class="berry-name mb-1 text-2xl font-semibold">{{ berryName }}</h5>
        <p class="berry-description mb-2 font-thin">
          {{ berryItem.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, defineProps, onMounted } from "vue";

const props = defineProps({
  berryId: Number,
  berryName: String,
  berryUrl: String,
});

//Item Data, that gets fetched via berrieItemDataApi
let berryItem = reactive({
  url: "", //url for the item to fetch further information
  description: "", //effect of the berry
  imageUrl: "",
});

onMounted(async () => {
  const berrieDataApi = await fetch(`${props.berryUrl}`).then((response) =>
    response.json()
  );
  //set the item url to fetch in the next block
  berryItem.url = berrieDataApi.item.url;

  //get the itemData from the berrieDataApi
  const berrieItemDataApi = await fetch(`${berryItem.url}`).then((response) =>
    response.json()
  );

  //set the description to display in the card
  berryItem.description = berrieItemDataApi.effect_entries[0].short_effect;

  //set the berry image to display in the card
  berryItem.imageUrl = berrieItemDataApi.sprites.default;
});
</script>

<style scoped></style>
