<script setup lang="ts">
import VideoCard from './components/VideoCard.vue'
import HeaderBar from './components/HeaderBar.vue'
</script>

<template>
  <div
    id="container"
    class="flex flex-col fixed inset-0 overflow-y-auto snap-y snap-mandatory"
  >
    <HeaderBar
      class="fixed top-0 z-10"
    />
    <template v-for="index in 5" :key="index">
      <VideoCard :postId="1" />
      <VideoCard :postId="2" />
      <VideoCard :postId="3" />
      <VideoCard :postId="4" />
      <VideoCard :postId="5" />
    </template>
  </div>
</template>