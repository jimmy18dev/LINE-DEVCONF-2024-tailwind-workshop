<script setup lang="ts">
defineProps({
  imageId: Number,
})
</script>

<template>
  <img v-if="imageId === 1" src="../assets/avatars/user1.jpg" class="avatar-img">
  <img v-else-if="imageId === 2" src="../assets/avatars/user2.jpg" class="avatar-img">
  <img v-else-if="imageId === 3" src="../assets/avatars/user3.jpg" class="avatar-img">
  <img v-else-if="imageId === 4" src="../assets/avatars/user4.jpg" class="avatar-img">
  <img v-else-if="imageId === 5" src="../assets/avatars/user5.jpg" class="avatar-img">
</template>
