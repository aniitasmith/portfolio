<script setup lang="ts">
import { computed } from 'vue'
import emojiRegex from 'emoji-regex'

const props = defineProps<{
  text: string
  emojiSize?: string
}>()

const EMOJI_CDN = 'https://emojicdn.elk.sh'
const regex = emojiRegex()

const parts = computed(() => {
  const result: { type: 'text' | 'emoji'; value: string }[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  const re = new RegExp(regex.source, 'gu')
  while ((match = re.exec(props.text)) !== null) {
    if (match.index > lastIndex) {
      result.push({ type: 'text', value: props.text.slice(lastIndex, match.index) })
    }
    result.push({ type: 'emoji', value: match[0] })
    lastIndex = re.lastIndex
  }
  if (lastIndex < props.text.length) {
    result.push({ type: 'text', value: props.text.slice(lastIndex) })
  }
  return result
})

const emojiSize = computed(() => props.emojiSize ?? '1em')
</script>

<template>
  <span class="emoji-text-inline">
    <template v-for="(part, i) in parts" :key="i">
      <template v-if="part.type === 'text'">{{ part.value }}</template>
      <img
        v-else
        :src="`${EMOJI_CDN}/${encodeURIComponent(part.value)}?style=apple`"
        :alt="part.value"
        class="emoji-apple-img"
        :style="{ height: emojiSize, width: emojiSize, verticalAlign: 'middle' }"
        loading="lazy"
      />
    </template>
  </span>
</template>

<style scoped>
.emoji-apple-img {
  display: inline-block;
  object-fit: contain;
}
</style>
