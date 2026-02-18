<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  class?: string
}>()

const el = ref<HTMLDivElement | null>(null)
const visible = ref(false)

onMounted(() => {
  if (!el.value) return
  
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  )
  
  observer.observe(el.value)
})
</script>

<template>
  <div
    ref="el"
    :class="[
      'transition-all duration-500 ease-out',
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      $props.class
    ]"
  >
    <slot />
  </div>
</template>
