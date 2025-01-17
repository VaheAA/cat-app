<template>
  <div class="px-4 sm:px-6 lg:px-8 py-0 sm:py-8">
    <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center">
      🐾 Welcome To Meow Gallery
    </h1>
    <div class="min-h-[600px] sm:min-h-[800px] lg:min-h-[900px] flex flex-col">
      <!-- Loading Spinner -->
      <div v-if="isLoading" class="flex-1 flex justify-center items-center">
        <loading-spinner />
      </div>

      <!-- Cat Cards -->
      <div
        v-else-if="cats?.length"
        class="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        <cat-card v-for="cat in cats" :key="cat.id" :cat="cat" />
      </div>

      <!-- No Cats Available Message -->
      <div v-else class="flex-1 flex justify-center items-center text-center text-gray-500">
        No cats available at the moment. 🐱
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="flex flex-wrap justify-between items-center gap-4 mt-8">
      <app-button
        variant="secondary"
        size="small"
        :disabled="isLoading || page === 1"
        @on-click="previousPage"
      >
        Previous
      </app-button>
      <span class="text-sm sm:text-base text-gray-600">Page {{ page }} of {{ totalPages }}</span>
      <app-button
        variant="secondary"
        size="small"
        :disabled="isLoading || page * limit >= totalCount"
        @on-click="nextPage"
      >
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

// Fetch cats, initialize total count for the pagination
const totalPages = computed(() => Math.ceil(totalCount.value / limit.value))
await fetchCats()

// Specify meta tags for the home page
useHead({
  title: 'Meow Gallery',
  meta: [
    {
      name: 'description',
      content: 'Visit our gallery and brighter your days with photos of the cutest cats!',
    },
  ],
})
</script>
