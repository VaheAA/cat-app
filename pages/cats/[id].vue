<template>
  <div class="px-6 py-8">
    <div v-if="requestStatus === 'pending'" class="flex-1 flex justify-center items-center">
      <loading-spinner />
    </div>
    <div v-else class="max-w-6xl mx-auto">
      <div>
        <div class="flex items-center space-x-6 mb-6">
          <nuxt-img :src="currentCat?.url" alt="Cat" class="w-48 h-48 object-cover rounded-lg" />
          <div>
            <h1 class="text-2xl font-bold text-gray-800 mb-2">
              {{ currentCat?.breeds[0]?.name || 'Unknown Breed' }}
            </h1>
            <p class="text-gray-600 mb-4">
              {{ currentCat?.breeds[0]?.description || 'No description available.' }}
            </p>
            <p class="text-gray-600">
              <strong>Weight:</strong> {{ currentCat?.breeds[0]?.weight?.metric }} lbs
            </p>
            <p class="text-gray-600">
              <strong>Child Friendly:</strong>
              {{ currentCat?.breeds[0]?.child_friendly ? 'Yes' : 'No' }}
            </p>
          </div>
        </div>
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Other Cats of the Same Breed</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <cat-card v-for="relatedCat in relatedCats" :key="relatedCat.id" :cat="relatedCat" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CatCard from '~/components/cats/CatCard.vue'
import LoadingSpinner from '~/components/app/AppLoader.vue'

const store = useCatStore()
const route = useRoute()

const catId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id

const { fetchCatDetails, fetchRelatedCats } = store
const { currentCat, relatedCats, isLoading, requestStatus } = storeToRefs(store)

await fetchCatDetails(catId)
await fetchRelatedCats(currentCat.value?.breeds[0]?.id)
</script>
