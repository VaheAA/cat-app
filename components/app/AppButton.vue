<template>
  <button
    :class="[
      'px-6 py-2 rounded-lg shadow transition-all focus:outline-none focus:ring',
      disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : baseStyle,
      { 'hover:bg-gray-300 focus:ring-gray-400': !disabled },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  disabled: boolean
}>()

const emits = defineEmits(['onClick'])
const { disabled } = toRefs(props)

const handleClick = () => {
  if (!disabled.value) {
    emits('onClick')
  }
}

const baseStyle = 'bg-gray-200 text-gray-800'
</script>
