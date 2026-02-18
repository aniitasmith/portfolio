<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { ChevronUp } from 'lucide-vue-next'
import type { Locale } from '@/i18n'

const route = useRoute()
const { t } = useI18n()

const currentLocale = computed(() => (route.params.locale as Locale) || 'en')
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-footer text-white py-6 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-sm text-white/90">
        © {{ currentYear }} Ana Smith
      </p>
      <a
        :href="`/${currentLocale}#home`"
        class="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-white/80 transition-colors"
      >
        <ChevronUp class="w-4 h-4" />
        {{ t('footer.backToTop') }}
      </a>
    </div>
  </footer>
</template>
