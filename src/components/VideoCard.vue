<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { mockPosts } from '../datasets/posts'
import UserProfile from './UserProfile.vue'
import ActionButtons from './ActionButtons.vue'

defineProps({
  postId: {
    type: Number,
    required: true,
  },
})

const videoRef = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  // const observer = new IntersectionObserver(
  //   ([entry]) => {
  //     if (entry.isIntersecting) {
  //       videoRef.value?.play()
  //     } else {
  //       videoRef.value?.pause()
  //     }
  //   },
  //   { threshold: 0.5 }
  // )

  // if (videoRef.value) {
  //   observer.observe(videoRef.value)
  // }
})

function srcVideo (postId: number | undefined) {
  if (postId === undefined) return ''
  return new URL(`../assets/videos/video${postId}.mp4`, import.meta.url).href
}
</script>

<template>
  <div class="bg-gray-400">
    <div class="">
      <!-- <UserProfile
        :imageId="postId"
        :displayName="mockPosts[postId - 1].displayName"
      /> -->

      <!-- <div
        class="text-white bg-green-600"
      >{{ mockPosts[postId - 1].caption }}</div> -->
    </div>

    <!-- <ActionButtons
      class="bg-rose-600"
      :totalSmiles="mockPosts[postId - 1].totalSmiles"
      :totalComments="mockPosts[postId - 1].totalComments"
      :totalBookmarks="mockPosts[postId - 1].totalBookmarks"
      :totalHearts="mockPosts[postId - 1].totalHearts"
    /> -->
    
    <video
      ref="videoRef"
      class="video-player"
      :src="srcVideo(postId)"
    ></video>
  </div>
</template>

<style lang="postcss" scoped>
.video-player {
  @apply bg-transparent;
}
</style>