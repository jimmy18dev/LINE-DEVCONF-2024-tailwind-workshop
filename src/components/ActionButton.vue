<script setup lang="ts">
defineProps({
  total: Number,
  icon: String,
})
</script>

<template>
  <div class="flex flex-col w-12 h-12 text-white items-center justify-center">
    <font-awesome-icon
      v-if="icon === 'face-smile'"
      class="text-2xl"
      :icon="['far', 'face-smile']"
    />
    <font-awesome-icon
      v-else-if="icon === 'comments'"
      class="text-2xl"
      :icon="['far', 'comments']"
    />
    <font-awesome-icon
      v-else-if="icon === 'heart'"
      class="text-2xl"
      :icon="['far', 'heart']"
    />
    <font-awesome-icon
      v-else-if="icon === 'bookmark'"
      class="text-2xl"
      :icon="['far', 'bookmark']"
    />
    <div class="text-xs mt-1">{{ total }}</div>
  </div>
</template>