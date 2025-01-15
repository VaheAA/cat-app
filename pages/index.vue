<template>
  <div class="px-6 py-8">
    <h1 class="text-4xl font-bold text-gray-800 mb-6 text-center">🐾 Welcome To Meow Gallery</h1>
    <div class="min-h-[900px] flex flex-col">
      <div v-if="isLoading" class="flex-1 flex justify-center items-center">
        <loading-spinner />
      </div>
      <div
        v-else-if="cats?.length"
        class="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <cat-card v-for="cat in cats" :key="cat.id" :cat="cat" />
      </div>
      <div v-else class="flex-1 flex justify-center items-center text-center text-gray-500">
        No cats available at the moment. 🐱
      </div>
    </div>
    <div class="flex justify-between items-center mt-8">
      <app-button :disabled="isLoading || page === 1" @on-click="previousPage">
        Previous
      </app-button>
      <span class="text-gray-600 text-sm"> Page {{ page }} of {{ totalPages }} </span>
      <app-button :disabled="isLoading || page * limit >= totalCount" @on-click="nextPage">
        Next
      </app-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import CatCard from '~/components/cats/CatCard.vue'
import LoadingSpinner from '~/components/app/AppLoader.vue'

const store = useCatStore()
const { fetchCats, nextPage, previousPage } = store
const { cats, page, limit, totalCount, isLoading } = storeToRefs(store)

const totalPages = computed(() => Math.ceil(totalCount.value / limit.value))

await fetchCats()
</script>
