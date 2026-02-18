<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { education, experiences, skills } from '@/lib/data'
import type { Locale } from '@/i18n'

type TabId = 'experience' | 'skills' | 'education'

const props = defineProps<{
  locale: Locale
}>()

const { t } = useI18n()
const activeTab = ref<TabId>('experience')

const localeExperiences = computed(() => experiences[props.locale])
const localeEducation = computed(() => education[props.locale])
const localeSkills = computed(() => skills[props.locale])

const tabs = computed<{ id: TabId; label: string }[]>(() => [
  { id: 'experience', label: t('home.experience') },
  { id: 'skills', label: t('home.skills') },
  { id: 'education', label: t('home.education') },
])
</script>

<template>
  <div class="w-full max-w-4xl mx-auto">
    <!-- Tab bar -->
    <div class="flex border-b border-separator/60 mb-6">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="[
          'px-5 py-3 text-sm font-medium transition-colors border-b-2 -mb-px',
          activeTab === tab.id
            ? 'border-accent text-accent'
            : 'border-transparent text-foreground-muted hover:text-foreground hover:border-separator'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab panels with subtle fade -->
    <div class="min-h-[280px]">
      <!-- Experience Tab -->
      <div v-if="activeTab === 'experience'" class="animate-fadeIn space-y-6">
        <div
          v-for="(exp, idx) in localeExperiences"
          :key="idx"
          class="border-l-2 border-accent pl-4"
        >
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
            <div>
              <h3 class="text-lg font-semibold text-foreground">
                {{ exp.title }}
              </h3>
              <p class="text-foreground-muted font-medium">
                {{ exp.company }}
              </p>
              <p class="text-sm text-foreground-muted">
                {{ exp.location }}
              </p>
            </div>
            <div class="text-sm text-foreground-muted mt-1 sm:mt-0">
              <p>{{ exp.period }}</p>
            </div>
          </div>
          <ul class="mt-3 space-y-2">
            <li
              v-for="(item, itemIdx) in exp.description"
              :key="itemIdx"
              class="text-foreground text-sm flex items-start"
            >
              <span class="mr-2 text-accent">•</span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <div class="mt-3 flex flex-wrap gap-3">
            <span
              v-for="(tech, techIdx) in exp.technologies"
              :key="techIdx"
              class="inline-flex items-center justify-center min-w-[2.75rem] px-4 py-2 text-sm font-medium bg-accent text-white rounded-full"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- Skills Tab -->
      <div v-else-if="activeTab === 'skills'" class="animate-fadeIn flex flex-col gap-6">
        <div v-for="(skillGroup, idx) in localeSkills" :key="idx">
          <h3 class="text-sm font-semibold text-foreground mb-3">
            {{ skillGroup.category }}
          </h3>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="(item, itemIdx) in skillGroup.items"
              :key="itemIdx"
              class="inline-flex items-center justify-center min-w-[2.75rem] px-4 py-2 text-sm font-medium bg-accent text-white rounded-full"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>

      <!-- Education Tab -->
      <div v-else-if="activeTab === 'education'" class="animate-fadeIn space-y-4">
        <div
          v-for="(edu, idx) in localeEducation"
          :key="idx"
          class="rounded-lg border border-separator/60 p-4 bg-surface"
        >
          <p class="text-base font-semibold text-foreground">
            {{ edu.degree }}
          </p>
          <p class="text-sm text-foreground-muted mt-1">
            {{ edu.school }} — {{ edu.location }} • {{ edu.year }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
