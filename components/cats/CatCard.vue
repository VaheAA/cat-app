<template>
  <div
    class="border rounded-lg shadow-md p-4 bg-white transition-transform hover:scale-105 hover:shadow-lg"
  >
    <nuxt-img loading="lazy" :src="cat?.url" alt="Cat" class="h-40 w-full object-cover rounded-lg mb-4" />
    <h2 class="text-lg font-semibold text-gray-800 mb-2">
      {{ cat?.breeds[0]?.name || 'Unknown Cat' }}
    </h2>
    <nuxt-link
      :to="{ name: 'cats-id', params: { id: cat?.id } }"
      class="inline-block px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
    >
      View Details
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type { ICat } from '#shared/types'

const props = defineProps<{
  cat: ICat | null
}>()

const { cat } = toRefs(props)
</script>
