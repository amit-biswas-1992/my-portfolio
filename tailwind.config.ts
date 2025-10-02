import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  darkMode: ['class'],
  content: {
    files: [
      './app/**/*.{ts,tsx,mdx,css}',
      './components/**/*.{ts,tsx,mdx,css}',
      './styles/**/*.{css,mdx}',
      './content/**/*.{md,mdx}',
    ],
    // Keep utilities referenced only via @apply
    safelist: [
      'text-2xl',
      'text-xl',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        brand: {
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
