<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'md', // sm, md, lg, xl
  },
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs': return 'w-4'
    case 'sm': return 'w-6'
    case 'md': return 'w-10'
    case 'lg': return 'w-16'
    case 'xl': return 'w-24'
    default: return 'w-10'
  }
})

const iconSrc = computed(() => {
  switch (props.name) {
    case 'plane':
    case 'plane-right': return '/doodles/plane-right.png'
    case 'plane-left': return '/doodles/plane-left.png'
    case 'camera': return '/doodles/camera.png'
    case 'sunglasses':
    case 'glasses': return '/doodles/sunglasses.png'
    case 'suitcase':
    case 'luggage': return '/doodles/suitcase.png'
    case 'car': return '/doodles/car.png'
    case 'map': return '/doodles/map.png'
    case 'star': return '/doodles/star.png'
    case 'heart': return '/doodles/heart.png'
    case 'avatar': return '/doodles/avatar.png'
    case 'learning': return '/doodles/learning.png'
    case 'arrow':
    case 'arrow-right': return '/doodles/arrow-down-right.png'
    case 'arrow-left': return '/doodles/arrow-down-left.png'
    default: return '/doodles/star.png'
  }
})
</script>

<template>
  <img :src="iconSrc" :alt="name" class="inline-block object-contain pointer-events-none" :class="sizeClass" />
</template>
