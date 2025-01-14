<template>
  <div>
    <h1 class="text-3xl font-bold">Cat Gallery</h1>
    <div v-if="cats?.length" class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <cat-card v-for="cat in cats" :key="cat.id" :cat="cat" />
    </div>
    <div class="flex justify-between mt-4">
      <button class="bg-gray-500 text-white px-4 py-2 rounded">Previous</button>
      <button class="bg-gray-500 text-white px-4 py-2 rounded">Next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import CatCard from '~/components/cats/CatCard.vue'
const store = useCatStore()
const { fetchCats } = store
const { cats } = storeToRefs(store)

await fetchCats()
</script>
