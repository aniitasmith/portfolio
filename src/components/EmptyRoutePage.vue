<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { locales, defaultLocale, type Locale } from '@/i18n'

const { t } = useI18n()
const router = useRouter()

const goHome = (locale: Locale = defaultLocale) => {
  router.push(`/${locale}`)
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-background px-4">
    <div class="text-center max-w-md">
      <h1 class="text-6xl font-bold text-foreground-muted tabular-nums mb-4">404</h1>
      <h2 class="text-xl font-semibold text-foreground mb-2">
        {{ t('notFound.title') }}
      </h2>
      <p class="text-foreground-muted mb-8">
        {{ t('notFound.message') }}
      </p>
      <div class="flex flex-wrap gap-3 justify-center">
        <button
          v-for="loc in locales"
          :key="loc"
          type="button"
          class="px-4 py-2 rounded-md bg-accent text-white font-medium hover:opacity-90 transition-opacity"
          @click="goHome(loc)"
        >
          {{ t('notFound.backHome') }} ({{ loc }})
        </button>
      </div>
    </div>
  </div>
</template>
