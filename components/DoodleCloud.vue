<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: '260px',
  },
})
</script>

<template>
  <div class="relative inline-flex items-center justify-center select-none" :style="{ width }">
    <img src="/doodles/cloud-small.png" alt="cloud" class="w-full object-contain pointer-events-none drop-shadow-sm" />
    <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pb-2 z-10">
      <slot />
    </div>
  </div>
</template>
