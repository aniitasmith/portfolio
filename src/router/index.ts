import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { locales, defaultLocale, type Locale } from '@/i18n'
import i18n from '@/i18n'
import HomePage from '@/components/HomePage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: () => {
      const browserLang = navigator.language.split('-')[0]
      const locale = locales.includes(browserLang as Locale) ? browserLang : defaultLocale
      return `/${locale}`
    },
  },
  {
    path: '/:locale',
    name: 'home',
    component: HomePage,
    beforeEnter: (to, _from, next) => {
      const locale = to.params.locale as string
      if (!locales.includes(locale as Locale)) {
        return next(`/${defaultLocale}`)
      }
      i18n.global.locale.value = locale as Locale
      next()
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, _savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

router.beforeEach((to, _from, next) => {
  const locale = to.params.locale as string
  if (locale && locales.includes(locale as Locale)) {
    i18n.global.locale.value = locale as Locale
  }
  next()
})

export default router
