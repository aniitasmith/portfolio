import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        foreground: 'var(--foreground)',
        'foreground-muted': 'var(--foreground-muted)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        footer: 'var(--footer-bg)',
        separator: 'var(--separator)',
      },
    },
  },
  plugins: [],
}
export default config
