<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
  tag: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="sketch-card p-4 my-2 relative bg-white">
    <div v-if="title || tag" class="flex items-center justify-between pb-2 mb-2 border-b border-dashed border-gray-200">
      <h4 v-if="title" class="font-hand font-bold text-lg text-black m-0">
        {{ title }}
      </h4>
      <span v-if="tag" class="sketch-tag font-hand text-xs text-gray-600 bg-amber-50">
        {{ tag }}
      </span>
    </div>
    <div class="text-sm md:text-base text-gray-800">
      <slot />
    </div>
  </div>
</template>
