<script setup lang="ts">
defineProps({
  imageId: {
    type: Number,
    required: true,
  },
  displayName: String,
})

function srcImage (id: Number) {
  return new URL(`../assets/avatars/user${id}.jpg`, import.meta.url).href
}
</script>

<template>
  <div class="flex items-center">
    <img
      class="w-10 h-10 rounded-full object-cover aspect-square"
      :src="srcImage(imageId)"
    >
    <div class="text-white font-bold ml-3">{{ displayName }}</div>
  </div>
</template>