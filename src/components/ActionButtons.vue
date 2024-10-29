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
  <div class="flex gap-3">
    <ActionButton
      icon="heart"
      :total="totalHearts"
    />
    <ActionButton
      icon="face-smile"
      :total="totalSmiles"
    />
    <ActionButton
      icon="comments"
      :total="totalComments"
    />
    <ActionButton
      icon="bookmark"
      :total="totalBookmarks"
    />
  </div>
</template>