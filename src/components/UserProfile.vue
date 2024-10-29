<script setup lang="ts">
import UserImage from './UserImage.vue'

defineProps({
  imageId: Number,
  displayName: String,
})
</script>

<template>
  <div class="flex items-center">
    <UserImage
      :imageId="imageId"
    />
    <div class="text-white font-bold ml-3">{{ displayName }}</div>
  </div>
</template>