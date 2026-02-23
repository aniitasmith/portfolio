<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <router-view />
  <Footer />
  <Analytics />
</template>
