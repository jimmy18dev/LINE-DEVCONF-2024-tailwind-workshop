<script setup lang="ts">
import UserImage from './UserImage.vue'

defineProps({
  imageId: Number,
  displayName: String,
})
</script>

<template>
  <div class="flex items-center bg-blue-600">
    <UserImage
      :imageId="imageId"
    />
    <div class="text-white font-bold">{{ displayName }}</div>
  </div>
</template>