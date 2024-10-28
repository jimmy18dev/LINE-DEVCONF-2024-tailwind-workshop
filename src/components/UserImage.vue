<script setup lang="ts">
defineProps({
  imageId: {
    type: Number,
    required: true,
  },
})

function srcImage (id: Number) {
  return new URL(`../assets/avatars/user${id}.jpg`, import.meta.url).href
}
</script>

<template>
   <img :src="srcImage(imageId)" class="avatar-img">
</template>

<style lang="postcss" scoped>
.avatar-img {
  @apply w-10 h-10 rounded-full object-cover aspect-square;
}
</style>
