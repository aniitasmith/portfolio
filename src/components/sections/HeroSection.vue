<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import EmojiText from '@/components/EmojiText.vue'
import { MapPin, FileDown } from 'lucide-vue-next'
const avatarImg = new URL('../../assets/avatar.png', import.meta.url).href

const { t } = useI18n()
</script>

<template>
  <section id="home" class="relative z-10 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <div class="flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
        <!-- Text content -->
        <div class="flex-1">
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

        <div class="flex justify-center lg:justify-end lg:pt-2">
          <div class="relative group hover:scale-105 transition-transform duration-300">
            <!-- Outer glow (most faded) -->
            <div class="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/20 via-pink-200/30 to-white/10 blur-xl" />
            <!-- Middle glow -->
            <div class="absolute -inset-2 rounded-full bg-gradient-to-br from-accent/40 via-pink-200/50 to-white/20 blur-md" />
            <!-- Inner border -->
            <div class="relative p-1 rounded-full bg-gradient-to-br from-accent/60 via-pink-200 to-white/80">
              <!-- Image with pastel overlay -->
              <div class="relative rounded-full overflow-hidden">
                <img
                  :src="avatarImg"
                  alt="Avatar"
                  class="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full saturate-[0.7] brightness-105 contrast-[0.95]"
                />
                <!-- Pastel overlay -->
                <div class="absolute inset-0 rounded-full bg-white/15 mix-blend-overlay pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
