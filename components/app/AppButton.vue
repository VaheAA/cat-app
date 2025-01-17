<template>
  <button
    :class="[
      'px-6 py-2 rounded-lg shadow transition-all focus:outline-none focus:ring',
      disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : variantStyles[variant],
      { 'hover:opacity-90': !disabled },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    disabled?: boolean
    variant?: 'primary' | 'secondary' | 'danger' | 'success'
  }>(),
  {
    variant: 'primary',
    disabled: false,
  },
)

const emits = defineEmits(['onClick'])
const { disabled, variant } = toRefs(props)

const handleClick = () => {
  if (!disabled.value) {
    emits('onClick')
  }
}

const variantStyles: Record<string, string> = {
  primary: 'bg-blue-500 text-white focus:ring-blue-400',
  secondary: 'bg-gray-200 text-gray-800 focus:ring-gray-300',
  danger: 'bg-red-500 text-white focus:ring-red-400',
  success: 'bg-green-500 text-white focus:ring-green-400',
}
</script>
