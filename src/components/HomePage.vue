<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { projects } from '@/lib/data'
import type { Locale } from '@/i18n'
import ExperienceTabs from '@/components/ExperienceTabs.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import SectionReveal from '@/components/SectionReveal.vue'
import EmojiText from '@/components/EmojiText.vue'
import { MapPin, Mail, GitBranch, Linkedin, FileDown, ExternalLink } from 'lucide-vue-next'

const route = useRoute()
const { t } = useI18n()

const locale = computed(() => (route.params.locale as Locale) || 'en')
const localeProjects = computed(() => projects[locale.value])
const featuredProjects = computed(() => localeProjects.value.filter(p => p.featured))
</script>

<template>
  <main class="min-h-screen relative overflow-hidden">
    <!-- Gradient circles -->
    <div
      class="absolute top-0 left-0 right-0 h-[500px] pointer-events-none z-0 opacity-30"
      :style="{
        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(145,107,137,0.5) 0%, transparent 70%)',
      }"
    />
    <div
      class="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-0 opacity-20"
      :style="{
        background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(145,107,137,0.4) 0%, transparent 70%)',
      }"
    />

    <!-- Hero -->
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

    <!-- About -->
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
              <h3 class="text-xl font-semibold text-foreground mb-4"><EmojiText :text="`💡 ${t('about.focus')}`" /></h3>
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

    <!-- Experience -->
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

    <!-- Projects -->
    <section id="projects" class="relative z-10 py-14 px-4 sm:px-6 lg:px-8">
      <SectionReveal>
        <div class="max-w-5xl mx-auto">
          <SectionHeading :title="`🚀 ${t('projects.title')}`" />
          <p class="text-center text-foreground-muted text-lg mb-10">
            {{ t('projects.subtitle') }}
          </p>
          <div class="grid md:grid-cols-2 gap-8">
            <div
              v-for="project in featuredProjects"
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

    <!-- Contact -->
    <section id="contact" class="relative z-10 py-14 px-4 sm:px-6 lg:px-8 pb-24">
      <SectionReveal>
        <div class="max-w-5xl mx-auto">
          <SectionHeading :title="`💬 ${t('contact.title')}`" />
          <p class="text-center text-foreground-muted text-lg mb-4">
            {{ t('contact.subtitle') }}
          </p>
          <p class="text-center text-foreground max-w-2xl mx-auto mb-10">
            {{ t('contact.description') }}
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="mailto:smithanacristina@gmail.com"
              class="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-surface/80 backdrop-blur-sm border border-separator/40 hover:border-accent/50 hover:shadow-lg transition-all"
            >
              <div class="p-4 bg-accent/10 rounded-full group-hover:bg-accent group-hover:scale-110 transition-all">
                <Mail class="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <span class="font-medium text-foreground">{{ t('contact.email') }}</span>
            </a>
            <a
              href="https://github.com/aniitasmith"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-surface/80 backdrop-blur-sm border border-separator/40 hover:border-accent/50 hover:shadow-lg transition-all"
            >
              <div class="p-4 bg-accent/10 rounded-full group-hover:bg-accent group-hover:scale-110 transition-all">
                <GitBranch class="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <span class="font-medium text-foreground">{{ t('contact.github') }}</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anac-smith"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-surface/80 backdrop-blur-sm border border-separator/40 hover:border-accent/50 hover:shadow-lg transition-all"
            >
              <div class="p-4 bg-accent/10 rounded-full group-hover:bg-accent group-hover:scale-110 transition-all">
                <Linkedin class="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <span class="font-medium text-foreground">{{ t('contact.linkedin') }}</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1vNvRNxt4sju5u0PV3dI8qVbuv5-IOED5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-surface/80 backdrop-blur-sm border border-separator/40 hover:border-accent/50 hover:shadow-lg transition-all"
            >
              <div class="p-4 bg-accent/10 rounded-full group-hover:bg-accent group-hover:scale-110 transition-all">
                <FileDown class="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <span class="font-medium text-foreground">{{ t('contact.resume') }}</span>
            </a>
          </div>
        </div>
      </SectionReveal>
    </section>
  </main>
</template>
