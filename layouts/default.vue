<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  part: {
    type: String,
    default: '',
  },
  headerPlane: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="slidev-layout default relative w-full h-full overflow-hidden flex flex-col p-8">
    <!-- Header Row -->
    <header class="flex items-center justify-between pb-3 mb-4 border-b-2 border-dashed border-gray-300">
      <div class="flex items-center gap-3">
        <img v-if="headerPlane" src="/doodles/plane-right.png" alt="plane" class="w-10 opacity-85" />
        <div class="text-2xl font-bold font-hand text-black flex items-center">
          <slot name="header">{{ title }}</slot>
        </div>
      </div>

      <div v-if="part" class="sketch-tag font-hand text-xs text-gray-700 bg-white/80">
        {{ part }}
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="flex-1 w-full overflow-y-auto pr-2 z-10">
      <slot />
    </main>

    <!-- Footer Row -->
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

    <!-- Subtle corner doodle -->
    <div class="absolute bottom-2 right-4 pointer-events-none opacity-20 -z-0">
      <img src="/doodles/star.png" alt="star" class="w-8" />
    </div>
  </div>
</template>
