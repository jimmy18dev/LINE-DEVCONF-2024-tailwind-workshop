<script setup lang="ts">
import VideoCard from './components/VideoCard.vue'
import HeaderBar from './components/HeaderBar.vue'
</script>

<template>
  <div class="flex flex-col bg-neutral-100 w-1/2 mx-auto">
    <HeaderBar />
    <template v-for="index in 5" :key="index">
      <VideoCard :postId="1" />
      <VideoCard :postId="2" />
      <VideoCard :postId="3" />
      <VideoCard :postId="4" />
      <VideoCard :postId="5" />
    </template>
  </div>
</template>
