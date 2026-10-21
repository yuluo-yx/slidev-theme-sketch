<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '创意手绘风 PPT',
  },
  subtitle: {
    type: String,
    default: 'Creative Hand-Drawn Sketch Presentation',
  },
  author: {
    type: String,
    default: '',
  },
  date: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="slidev-layout cover relative w-full h-full overflow-hidden flex flex-col items-center justify-center p-8 select-none">
    <!-- Top Left Plane & Clouds -->
    <div class="absolute top-6 left-8 flex items-center gap-3 animate-doodle-float">
      <img src="/doodles/plane-right.png" alt="plane" class="w-28 opacity-90" />
    </div>

    <!-- Top Heart & Small Cloud -->
    <div class="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
      <img src="/doodles/heart.png" alt="heart" class="w-8 mb-1 animate-doodle-wiggle" />
    </div>

    <!-- Top Right Sunglasses & Camera -->
    <div class="absolute top-6 right-8 flex items-center gap-6">
      <img src="/doodles/sunglasses.png" alt="sunglasses" class="w-24 opacity-85" />
      <img src="/doodles/camera.png" alt="camera" class="w-24 opacity-90 animate-doodle-float" />
    </div>

    <!-- Center Main Cloud Title Box -->
    <div class="relative w-full max-w-[680px] flex items-center justify-center my-auto">
      <img src="/doodles/cloud-banner.png" alt="cloud-banner" class="w-full object-contain pointer-events-none drop-shadow-sm" />
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-12 z-10">
        <h1 class="text-4xl md:text-5xl font-bold tracking-wider text-black font-hand mb-2">
          <slot name="title">{{ title }}</slot>
        </h1>
        <p v-if="subtitle" class="text-base md:text-lg text-gray-700 font-hand tracking-widest opacity-80 uppercase">
          <slot name="subtitle">{{ subtitle }}</slot>
        </p>
      </div>
    </div>

    <!-- Bottom Left Car & Suitcase -->
    <div class="absolute bottom-6 left-8 flex items-end gap-4">
      <img src="/doodles/car.png" alt="car" class="w-24 opacity-90" />
    </div>

    <!-- Bottom Center Author Tag -->
    <div v-if="author || date" class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <div class="sketch-tag px-5 py-1.5 bg-white/90 text-sm font-hand text-gray-800 tracking-wider">
        <span v-if="author" class="font-bold mr-3">{{ author }}</span>
        <span v-if="date" class="text-gray-500">{{ date }}</span>
      </div>
    </div>

    <!-- Bottom Right Map & Stars -->
    <div class="absolute bottom-6 right-8 flex items-end gap-3">
      <img src="/doodles/star.png" alt="star" class="w-9 opacity-85 animate-doodle-wiggle mb-6" />
      <img src="/doodles/map.png" alt="map" class="w-28 opacity-90" />
    </div>

    <!-- Custom Slot for extra content if passed -->
    <div class="hidden">
      <slot />
    </div>
  </div>
</template>
