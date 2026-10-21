<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '目录',
  },
  subtitle: {
    type: String,
    default: 'CONTENTS',
  },
})
</script>

<template>
  <div class="slidev-layout toc relative w-full h-full overflow-hidden flex flex-col p-8">
    <!-- Top Center Header Cloud -->
    <div class="relative w-64 mx-auto mb-4 flex items-center justify-center">
      <img src="/doodles/cloud-small.png" alt="cloud" class="w-full object-contain pointer-events-none" />
      <div class="absolute inset-0 flex flex-col items-center justify-center pt-2">
        <h2 class="text-3xl font-bold font-hand text-black leading-none m-0">
          {{ title }}
        </h2>
        <span class="text-xs font-hand text-gray-500 tracking-widest uppercase">{{ subtitle }}</span>
      </div>
    </div>

    <!-- Main TOC Content / Cards -->
    <div class="flex-1 max-w-3xl mx-auto w-full flex flex-col justify-center gap-3.5 z-10">
      <slot />
    </div>

    <!-- Bottom Left Luggage -->
    <div class="absolute bottom-4 left-6 pointer-events-none">
      <img src="/doodles/suitcase.png" alt="suitcase" class="w-20 opacity-80" />
    </div>

    <!-- Bottom Right Map -->
    <div class="absolute bottom-4 right-6 pointer-events-none">
      <img src="/doodles/map.png" alt="map" class="w-24 opacity-80" />
    </div>

    <!-- Floating Star -->
    <div class="absolute top-1/2 left-8 -translate-y-1/2 pointer-events-none">
      <img src="/doodles/star.png" alt="star" class="w-7 opacity-70 animate-doodle-wiggle" />
    </div>
  </div>
</template>
