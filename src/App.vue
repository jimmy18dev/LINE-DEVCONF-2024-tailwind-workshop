<script setup lang="ts">
import VideoCard from './components/VideoCard.vue'
import HeaderBar from './components/HeaderBar.vue'
</script>

<template>
  <div class="flex flex-col">
    <!-- <HeaderBar /> -->
    <template v-for="index in 1" :key="index">
      <VideoCard :postId="1" />
      <!-- <VideoCard :postId="2" /> -->
      <!-- <VideoCard :postId="3" /> -->
      <!-- <VideoCard :postId="4" /> -->
      <!-- <VideoCard :postId="5" /> -->
    </template>
  </div>
</template>