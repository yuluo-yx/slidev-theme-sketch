<script setup lang="ts">
const props = defineProps({
  author: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="slidev-layout quote relative w-full h-full overflow-hidden flex flex-col items-center justify-center p-12">
    <!-- Memo Card -->
    <div class="sketch-card sketch-tape relative w-full max-w-2xl bg-white p-10 flex flex-col items-center text-center z-10">
      <div class="text-4xl text-amber-500/80 font-hand font-bold mb-2">“</div>

      <div class="text-2xl md:text-3xl font-bold font-hand text-gray-900 leading-relaxed mb-6">
        <slot />
      </div>

      <div v-if="author" class="sketch-tag font-hand text-sm text-gray-700 bg-amber-50">
        —— {{ author }}
      </div>
    </div>

    <!-- Floating Doodles -->
    <div class="absolute top-8 left-12">
      <img src="/doodles/plane-right.png" alt="plane" class="w-20 opacity-70 animate-doodle-float" />
    </div>
    <div class="absolute bottom-8 right-12">
      <img src="/doodles/camera.png" alt="camera" class="w-20 opacity-75" />
    </div>
    <div class="absolute bottom-10 left-16">
      <img src="/doodles/heart.png" alt="heart" class="w-8 opacity-75 animate-doodle-wiggle" />
    </div>
  </div>
</template>
