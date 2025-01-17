<template>
  <button
    :class="[
      'rounded-lg shadow transition-all focus:outline-none focus:ring',
      sizeStyles[size],
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
type ButtonProps = {
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'small' | 'medium' | 'large'
}
const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  disabled: false,
  size: 'medium',
})

const { disabled, variant, size } = toRefs(props)
const emits = defineEmits(['onClick'])

// Emit custom click event to the parent
const handleClick = () => {
  if (!disabled.value) {
    emits('onClick')
  }
}

// Default style for different size and variant properties
const variantStyles: Record<string, string> = {
  primary: 'bg-blue-500 text-white focus:ring-blue-400',
  secondary: 'bg-gray-200 text-gray-800 focus:ring-gray-300',
  danger: 'bg-red-500 text-white focus:ring-red-400',
  success: 'bg-green-500 text-white focus:ring-green-400',
}

const sizeStyles: Record<string, string> = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-6 py-2 text-base',
  large: 'px-8 py-3 text-lg',
}
</script>
