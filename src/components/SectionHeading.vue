<script setup lang="ts">
import EmojiText from '@/components/EmojiText.vue'

defineProps<{
  title: string
}>()
</script>

<template>
  <h2 class="text-3xl font-bold text-foreground text-center mb-10">
    <EmojiText :text="title" />
  </h2>
</template>
