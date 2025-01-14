<template>
  <div class="border p-4">
    <img :src="cat?.url" alt="Cat" class="h-40 w-full object-cover" />
    <nuxt-link :to="`/cat/${cat?.id}`" class="text-blue-500 hover:underline">
      View Details
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { type ICat } from '#shared/types/types'

const props = defineProps<{
  cat: ICat | null
}>()

const { cat } = toRefs(props)
</script>
