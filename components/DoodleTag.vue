<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'default', // default, yellow, red, blue
  },
})
</script>

<template>
  <span class="sketch-tag font-hand inline-flex items-center gap-1.5 px-3 py-1 font-bold select-none"
    :class="{
      'bg-white text-gray-800': color === 'default',
      'bg-amber-100/80 text-amber-900': color === 'yellow',
      'bg-rose-100/80 text-rose-900': color === 'red',
      'bg-sky-100/80 text-sky-900': color === 'blue',
    }">
    <slot />
  </span>
</template>
