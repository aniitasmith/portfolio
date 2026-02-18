<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import EmojiText from '@/components/EmojiText.vue'
import { MapPin, FileDown } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <section id="home" class="relative z-10 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <div class="mb-2">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
          <span class="block">{{ t('home.title') }}</span>
          <span class="block text-accent"><EmojiText :text="`${t('home.subtitle')} ✨`" /></span>
          <span class="block text-foreground-muted text-2xl sm:text-3xl md:text-4xl mt-2 font-normal">
            <EmojiText :text="`🎨 ${t('home.heroTagline')}`" />
          </span>
        </h1>
      </div>
      <div class="flex items-center gap-3 text-foreground-muted mb-8">
        <MapPin class="w-5 h-5 text-accent" />
        <span class="text-lg">{{ t('home.location') }}</span>
      </div>
      <p class="text-lg text-foreground-muted max-w-2xl mb-10 leading-relaxed">
        {{ t('home.description') }}
      </p>
      <div class="flex flex-wrap gap-4">
        <a
          href="https://drive.google.com/file/d/1vNvRNxt4sju5u0PV3dI8qVbuv5-IOED5/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-white font-medium transition-colors"
        >
          <FileDown class="w-5 h-5" />
          {{ t('contact.resume') }}
        </a>
        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white font-medium transition-colors"
        >
          {{ t('contact.title') }}
        </a>
      </div>
    </div>
  </section>
</template>
