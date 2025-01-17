<template>
  <div class="flex flex-col md:flex-row items-center space-x-6 mb-6">
    <nuxt-img
      loading="lazy"
      :src="cat?.url"
      alt="Cat"
      class="w-full md:w-80 h-full md:h-80 object-cover rounded-lg mb-8 md:mb-0"
    />
    <div>
      <h1 class="text-2xl font-bold text-gray-800 mb-2">
        {{ cat?.breeds[0]?.name || 'Unknown Breed' }}
      </h1>
      <p class="text-gray-600 mb-4">
        {{ cat?.breeds[0]?.description || 'No description available.' }}
      </p>
      <p class="text-gray-600"><strong>Weight:</strong> {{ cat?.breeds[0]?.weight?.metric }} lbs</p>
      <p class="text-gray-600">
        <strong>Child Friendly:</strong>
        {{ cat?.breeds[0]?.child_friendly ? 'Yes' : 'No' }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICat } from '#shared/types'

const props = defineProps<{
  cat: ICat | null
}>()

const { cat } = toRefs(props)
</script>
