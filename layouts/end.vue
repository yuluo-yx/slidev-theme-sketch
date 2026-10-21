<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'THANK YOU',
  },
  subtitle: {
    type: String,
    default: '感谢聆听 · Q&A',
  },
})
</script>

<template>
  <div class="slidev-layout end relative w-full h-full overflow-hidden flex flex-col items-center justify-center p-8 select-none">
    <!-- Top Left Sunglasses & Plane -->
    <div class="absolute top-8 left-10 flex items-center gap-4 animate-doodle-float">
      <img src="/doodles/plane-right.png" alt="plane" class="w-24 opacity-85" />
    </div>

    <!-- Top Right Camera -->
    <div class="absolute top-8 right-10">
      <img src="/doodles/camera.png" alt="camera" class="w-24 opacity-85" />
    </div>

    <!-- Center Big Cloud -->
    <div class="relative w-full max-w-[620px] flex items-center justify-center my-auto">
      <img src="/doodles/cloud-banner.png" alt="cloud-banner" class="w-full object-contain pointer-events-none drop-shadow-sm" />
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-10 z-10">
        <h1 class="text-5xl md:text-6xl font-bold tracking-wider text-black font-hand mb-2">
          {{ title }}
        </h1>
        <p class="text-xl text-gray-700 font-hand tracking-widest opacity-85">
          <slot>{{ subtitle }}</slot>
        </p>
      </div>
    </div>

    <!-- Bottom Left Suitcase & Star -->
    <div class="absolute bottom-6 left-10 flex items-end gap-3">
      <img src="/doodles/suitcase.png" alt="suitcase" class="w-24 opacity-90" />
      <img src="/doodles/star.png" alt="star" class="w-7 opacity-75 animate-doodle-wiggle mb-4" />
    </div>

    <!-- Bottom Right Car & Map -->
    <div class="absolute bottom-6 right-10 flex items-end gap-3">
      <img src="/doodles/heart.png" alt="heart" class="w-8 opacity-75 mb-4 animate-doodle-wiggle" />
      <img src="/doodles/car.png" alt="car" class="w-24 opacity-90" />
    </div>
  </div>
</template>
