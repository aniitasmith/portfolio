<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeading from '@/components/SectionHeading.vue'
import SectionReveal from '@/components/SectionReveal.vue'
import EmojiText from '@/components/EmojiText.vue'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="relative z-10 py-10 px-4 sm:px-6 lg:px-8">
    <SectionReveal>
      <div class="max-w-5xl mx-auto">
        <SectionHeading :title="`✨ ${t('about.title')}`" />
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-surface/80 backdrop-blur-sm rounded-2xl border border-separator/40 p-8 shadow-lg">
            <p class="text-2xl mb-4"><EmojiText text="👩‍💻" /></p>
            <p class="text-lg text-foreground leading-relaxed">
              {{ t('about.bio') }}
            </p>
          </div>
          <div class="bg-surface/80 backdrop-blur-sm rounded-2xl border border-separator/40 p-8 shadow-lg">
            <h3 class="text-xl font-semibold text-foreground mb-4">
              <EmojiText :text="`💡 ${t('about.focus')}`" />
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start text-foreground">
                <span class="mr-3 mt-0.5"><EmojiText text="🎬" /></span>
                <span>{{ t('about.focus1') }}</span>
              </li>
              <li class="flex items-start text-foreground">
                <span class="mr-3 mt-0.5"><EmojiText text="🖼️" /></span>
                <span>{{ t('about.focus2') }}</span>
              </li>
              <li class="flex items-start text-foreground">
                <span class="mr-3 mt-0.5"><EmojiText text="⚡" /></span>
                <span>{{ t('about.focus3') }}</span>
              </li>
              <li class="flex items-start text-foreground">
                <span class="mr-3 mt-0.5"><EmojiText text="🛒" /></span>
                <span>{{ t('about.focus4') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionReveal>
  </section>
</template>
