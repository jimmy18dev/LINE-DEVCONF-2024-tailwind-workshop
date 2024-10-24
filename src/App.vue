<script setup lang="ts">
import VideoCard from './components/VideoCard.vue'
</script>

<template>
  <div
    class=""
  >
    <div
      class=""
    >
      <h1 class="text-xl font-bold">LINE DEVCONF 2024</h1>
      <div class="text-sm">Workshop: Tailwind CSS</div>
    </div>
    <template v-for="index in 1" :key="index">
      <VideoCard :postId="1" />
      <VideoCard :postId="2" />
      <VideoCard :postId="3" />
      <VideoCard :postId="4" />
      <VideoCard :postId="5" />
    </template>
  </div>
</template>
