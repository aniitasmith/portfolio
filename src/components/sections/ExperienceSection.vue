<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Locale } from '@/i18n'
import ExperienceTabs from '@/components/ExperienceTabs.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import SectionReveal from '@/components/SectionReveal.vue'

defineProps<{
  locale: Locale
}>()

const { t } = useI18n()
</script>

<template>
  <section class="relative z-10 py-14 px-4 sm:px-6 lg:px-8">
    <SectionReveal>
      <div class="max-w-5xl mx-auto">
        <SectionHeading :title="`💼 ${t('home.resume')}`" />
        <div class="bg-surface/60 backdrop-blur-sm rounded-2xl border border-separator/40 p-6 shadow-lg">
          <ExperienceTabs :locale="locale" />
        </div>
      </div>
    </SectionReveal>
  </section>
</template>
