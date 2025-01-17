<template>
  <div class="px-6 py-8">
    <div v-if="isLoading" class="flex-1 flex justify-center items-center">
      <loading-spinner />
    </div>
    <div v-else class="max-w-6xl mx-auto">
      <app-button size="small" class="my-4" @on-click="router.push('/')">Back</app-button>
      <div>
        <cat-detail v-if="currentCat" :cat="currentCat" />
        <template v-if="relatedCats?.length">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Other Cats of the Same Breed</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <cat-card v-for="relatedCat in relatedCats" :key="relatedCat.id" :cat="relatedCat" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CatCard from '~/components/cats/CatCard.vue'
import CatDetail from '~/components/cats/CatDetail.vue'
import LoadingSpinner from '~/components/app/AppLoader.vue'

const store = useCatStore()
const route = useRoute()
const router = useRouter()

const catId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id

const { fetchCatDetails, fetchRelatedCats } = store
const { currentCat, relatedCats, isLoading, requestStatus } = storeToRefs(store)

await fetchCatDetails(catId)
await fetchRelatedCats(currentCat.value?.breeds[0]?.id, currentCat.value?.id)
</script>
