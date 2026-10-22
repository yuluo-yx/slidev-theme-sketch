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
})
</script>

<template>
  <div class="slidev-layout two-cols relative w-full h-full overflow-hidden flex flex-col p-8">
    <!-- Header -->
    <header class="flex items-center justify-between pb-3 mb-4 border-b-2 border-dashed border-gray-300">
      <div class="flex items-center gap-3">
        <img src="/doodles/plane-right.png" alt="plane" class="w-10 opacity-85" />
        <div class="text-2xl font-bold font-hand text-black flex items-center">
          <slot name="header">{{ title }}</slot>
        </div>
      </div>
      <div v-if="part" class="sketch-tag font-hand text-xs text-gray-700 bg-white/80">
        {{ part }}
      </div>
    </header>

    <!-- Two Columns Grid -->
    <main class="flex-1 grid grid-cols-2 gap-6 items-stretch z-10">
      <div class="sketch-card p-5 flex flex-col justify-between overflow-y-auto">
        <slot name="left">
          <slot name="default" />
        </slot>
      </div>

      <div class="sketch-card p-5 flex flex-col justify-between overflow-y-auto">
        <slot name="right" />
      </div>
    </main>

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
