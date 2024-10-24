<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { mockPosts } from '../datasets/posts'
import UserImage from './UserImage.vue'
import ActionButtons from './ActionButtons.vue'

defineProps({
  postId: Number,
})

const videoRef = ref(null)
const isSeeMore = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // videoRef.value.play()
      } else {
        // videoRef.value.pause()
      }
    },
    { threshold: 0.5 }
  )
  // observer.observe(videoRef.value)
})

function onSeeMore () {
  isSeeMore.value = !isSeeMore.value
}
</script>

<template>
  <div class="">
    <div class="">
      <div class="flex items-center">
        <UserImage
          :imageId="postId"
        />
        <div class="text-white font-bold">{{ mockPosts[postId - 1].displayName }}</div>
      </div>
      <div
        @click="onSeeMore"
      >{{ mockPosts[postId - 1].caption }}</div>
    </div>

    <ActionButtons
      class=""
      :totalSmiles="mockPosts[postId - 1].totalSmiles"
      :totalComments="mockPosts[postId - 1].totalComments"
      :totalBookmarks="mockPosts[postId - 1].totalBookmarks"
      :totalHearts="mockPosts[postId - 1].totalHearts"
    />
    
    <video
      v-if="postId === 1"
      ref="videoRef"
      class="video-player"
      src="../assets/videos/video1.mp4"
    ></video>
    <video
      v-else-if="postId === 2"
      ref="videoRef"
      class="video-player"
      src="../assets/videos/video2.mp4"
    ></video>
    <video
      v-else-if="postId === 3"
      ref="videoRef"
      class="video-player"
      src="../assets/videos/video3.mp4"
    ></video>
    <video
      v-else-if="postId === 4"
      ref="videoRef"
      class="video-player"
      src="../assets/videos/video4.mp4"
    ></video>
    <video
      v-else-if="postId === 5"
      ref="videoRef"
      class="video-player"
      src="../assets/videos/video5.mp4"
    ></video>
  </div>
</template>
