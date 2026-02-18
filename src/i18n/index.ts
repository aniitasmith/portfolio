import { createI18n } from 'vue-i18n'
import en from './locales/en'
import es from './locales/es'

export type Locale = 'en' | 'es'
export const locales: Locale[] = ['en', 'es']
export const defaultLocale: Locale = 'en'

function getBrowserLocale(): Locale {
  const browserLang = navigator.language.split('-')[0]
  return locales.includes(browserLang as Locale) ? (browserLang as Locale) : defaultLocale
}

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLocale(),
  fallbackLocale: defaultLocale,
  messages: {
    en,
    es,
  },
})

export default i18n
