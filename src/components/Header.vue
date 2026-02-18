<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { locales, type Locale } from '@/i18n'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()

const currentLocale = computed(() => (route.params.locale as Locale) || 'en')

const switchToLocale = (newLocale: Locale) => {
  if (newLocale !== currentLocale.value) {
    locale.value = newLocale
    const hash = window.location.hash
    router.push(`/${newLocale}${hash}`)
  }
}

const getLocalizedPath = (section: string) => {
  if (section === 'home') return `/${currentLocale.value}`
  return `/${currentLocale.value}#${section}`
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-separator/60 bg-surface/95 backdrop-blur-sm">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <div class="flex items-center">
        <router-link
          :to="`/${currentLocale}`"
          class="text-xl font-semibold text-foreground transition-opacity hover:opacity-70"
        >
          Ana Smith
        </router-link>
      </div>
      <div class="flex items-center gap-6">
        <ul class="hidden items-center gap-6 md:flex">
          <li>
            <a
              :href="getLocalizedPath('home')"
              class="text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {{ t('nav.home') }}
            </a>
          </li>
          <li>
            <a
              :href="getLocalizedPath('about')"
              class="text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {{ t('nav.about') }}
            </a>
          </li>
          <li>
            <a
              :href="getLocalizedPath('projects')"
              class="text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {{ t('nav.projects') }}
            </a>
          </li>
          <li>
            <a
              :href="getLocalizedPath('contact')"
              class="text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {{ t('nav.contact') }}
            </a>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-0.5 rounded-md border border-separator bg-surface p-0.5">
        <button
          v-for="loc in locales"
          :key="loc"
          @click="switchToLocale(loc)"
          :class="[
            'rounded px-2 py-1 text-xs font-medium transition-colors',
            currentLocale === loc
              ? 'bg-accent text-white'
              : 'text-foreground-muted hover:text-foreground'
          ]"
          :aria-label="loc === 'en' ? 'English' : 'Español'"
        >
          {{ loc.toUpperCase() }}
        </button>
      </div>
    </nav>
  </header>
</template>
