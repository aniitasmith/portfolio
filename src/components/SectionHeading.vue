<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h2 class="text-3xl font-bold text-foreground text-center mb-10">
    {{ title }}
  </h2>
</template>
