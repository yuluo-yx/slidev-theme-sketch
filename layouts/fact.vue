<script setup lang="ts">
const props = defineProps({
  part: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="slidev-layout fact relative w-full h-full overflow-hidden flex flex-col p-8">
    <!-- Header -->
    <header class="flex items-center justify-between pb-3 mb-4 border-b-2 border-dashed border-gray-300">
      <div class="flex items-center gap-3">
        <img src="/doodles/plane-right.png" alt="plane" class="w-10 opacity-85" />
        <div class="text-2xl font-bold font-hand text-black flex items-center">
          <slot name="header" />
        </div>
      </div>
      <div v-if="part" class="sketch-tag font-hand text-xs text-gray-700 bg-white/80">
        {{ part }}
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col justify-center items-center z-10 w-full">
      <slot />
    </main>

    <!-- Bottom Left Star -->
    <div class="absolute bottom-4 left-6 pointer-events-none">
      <img src="/doodles/star.png" alt="star" class="w-8 opacity-70 animate-doodle-wiggle" />
    </div>

    <!-- Bottom Right Map -->
    <div class="absolute bottom-4 right-6 pointer-events-none">
      <img src="/doodles/map.png" alt="map" class="w-20 opacity-75" />
    </div>

    <!-- Footer -->
    <footer class="mt-auto pt-2 flex items-center justify-between text-xs text-gray-500 font-hand border-t border-gray-200/60">
      <div class="flex items-center gap-1.5 opacity-70">
        <img src="/doodles/star.png" alt="star" class="w-3.5 opacity-60" />
        <span>Hand-Drawn Sketch</span>
      </div>
      <div class="flex items-center gap-2">
        <SlideCurrentNo class="font-bold text-gray-700" />
        <span>/</span>
        <SlidesTotal />
      </div>
    </footer>
  </div>
</template>
