<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeading from '@/components/SectionHeading.vue'
import SectionReveal from '@/components/SectionReveal.vue'
import { Mail, GitBranch, Linkedin, FileDown } from 'lucide-vue-next'

const { t } = useI18n()

const contactLinks = [
  {
    href: 'mailto:smithanacristina@gmail.com',
    icon: Mail,
    labelKey: 'contact.email',
    external: false,
  },
  {
    href: 'https://github.com/aniitasmith',
    icon: GitBranch,
    labelKey: 'contact.github',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/anac-smith',
    icon: Linkedin,
    labelKey: 'contact.linkedin',
    external: true,
  },
  {
    href: 'https://drive.google.com/file/d/1vNvRNxt4sju5u0PV3dI8qVbuv5-IOED5/view?usp=sharing',
    icon: FileDown,
    labelKey: 'contact.resume',
    external: true,
  },
]
</script>

<template>
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
            v-for="link in contactLinks"
            :key="link.href"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener noreferrer' : undefined"
            class="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-surface/80 backdrop-blur-sm border border-separator/40 hover:border-accent/50 hover:shadow-lg transition-all"
          >
            <div class="p-4 bg-accent/10 rounded-full group-hover:bg-accent group-hover:scale-110 transition-all">
              <component :is="link.icon" class="w-6 h-6 text-accent group-hover:text-white" />
            </div>
            <span class="font-medium text-foreground">{{ t(link.labelKey) }}</span>
          </a>
        </div>
      </div>
    </SectionReveal>
  </section>
</template>
