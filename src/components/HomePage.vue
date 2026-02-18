<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/lib/data'
import type { Locale } from '@/i18n'

import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
} from '@/components/sections'
import BackgroundGradients from '@/components/BackgroundGradients.vue'

const route = useRoute()

const locale = computed(() => (route.params.locale as Locale) || 'en')
const localeProjects = computed(() => projects[locale.value])
const featuredProjects = computed(() => localeProjects.value.filter(p => p.featured))
</script>

<template>
  <main class="min-h-screen relative overflow-hidden">
    <BackgroundGradients />

    <HeroSection />
    <AboutSection />
    <ExperienceSection :locale="locale" />
    <ProjectsSection :projects="featuredProjects" />
    <ContactSection />
  </main>
</template>
