<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Project } from '@/lib/data'
import SectionHeading from '@/components/SectionHeading.vue'
import SectionReveal from '@/components/SectionReveal.vue'
import { GitBranch, ExternalLink } from 'lucide-vue-next'

defineProps<{
  projects: Project[]
}>()

const { t } = useI18n()
</script>

<template>
  <section id="projects" class="relative z-10 py-14 px-4 sm:px-6 lg:px-8">
    <SectionReveal>
      <div class="max-w-5xl mx-auto">
        <SectionHeading :title="`🚀 ${t('projects.title')}`" />
        <p class="text-center text-foreground-muted text-lg mb-10">
          {{ t('projects.subtitle') }}
        </p>
        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="project in projects"
            :key="project.id"
            class="group bg-surface/80 backdrop-blur-sm rounded-2xl border border-separator/40 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div v-if="project.imageSrc" class="relative h-48 overflow-hidden">
              <img
                :src="project.imageSrc"
                :alt="project.title"
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-foreground mb-2">{{ project.title }}</h3>
              <p class="text-foreground-muted mb-4 line-clamp-2">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies.slice(0, 4)"
                  :key="tech"
                  class="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="flex gap-3">
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                >
                  <ExternalLink class="w-4 h-4" />
                  {{ t('projects.view') }}
                </a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
                >
                  <GitBranch class="w-4 h-4" />
                  {{ t('projects.github') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  </section>
</template>
