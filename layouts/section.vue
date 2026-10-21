<script setup lang="ts">
const props = defineProps({
  part: {
    type: String,
    default: 'Part 01',
  },
  title: {
    type: String,
    default: '章节标题',
  },
})
</script>

<template>
  <div class="slidev-layout section relative w-full h-full overflow-hidden flex flex-col items-center justify-center p-8 select-none">
    <!-- Left flying plane -->
    <div class="absolute left-8 top-1/2 -translate-y-1/2 animate-doodle-float">
      <img src="/doodles/plane-right.png" alt="plane" class="w-20 opacity-80" />
    </div>

    <!-- Right flying plane -->
    <div class="absolute right-8 top-1/2 -translate-y-1/2 animate-doodle-float">
      <img src="/doodles/plane-left.png" alt="plane" class="w-20 opacity-80" />
    </div>

    <!-- Center Cloud Container -->
    <div class="relative w-full max-w-[620px] flex items-center justify-center my-auto">
      <img src="/doodles/cloud-heart.png" alt="cloud-heart" class="w-full object-contain pointer-events-none drop-shadow-sm" />
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-10 z-10 pt-4">
        <span class="text-xl md:text-2xl font-bold tracking-widest text-gray-800 font-hand uppercase mb-2">
          {{ part }}
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-black font-hand">
          <slot>{{ title }}</slot>
        </h2>
      </div>
    </div>

    <!-- Corner stars and doodles -->
    <div class="absolute top-6 right-10">
      <img src="/doodles/star.png" alt="star" class="w-8 opacity-75 animate-doodle-wiggle" />
    </div>
    <div class="absolute bottom-6 left-10">
      <img src="/doodles/heart.png" alt="heart" class="w-7 opacity-75" />
    </div>
  </div>
</template>
