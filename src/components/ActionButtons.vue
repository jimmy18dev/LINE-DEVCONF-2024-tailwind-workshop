<script setup lang="ts">
import ActionButton from './ActionButton.vue'

defineProps({
  totalSmiles: Number,
  totalComments: Number,
  totalBookmarks: Number,
  totalHearts: Number,
})
</script>

<template>
  <div class="">
    <ActionButton
      class="mb-2"
      icon="heart"
      :total="totalHearts"
    />
    <ActionButton
      class="mb-2"
      icon="face-smile"
      :total="totalSmiles"
    />
    <ActionButton
      class="mb-2"
      icon="comments"
      :total="totalComments"
    />
    <ActionButton
      icon="bookmark"
      :total="totalBookmarks"
    />
  </div>
</template>
