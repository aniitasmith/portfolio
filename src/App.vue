<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Analytics } from '@vercel/analytics/vue'
import { SpeedInsights } from "@vercel/speed-insights/vue"
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute()
const isEmptyRoute = computed(() => route.name === 'not-found')
</script>

<template>
  <Header v-if="!isEmptyRoute" />
  <router-view />
  <Footer v-if="!isEmptyRoute" />
  <Analytics />
  <SpeedInsights />
</template>
