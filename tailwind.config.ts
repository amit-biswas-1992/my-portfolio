import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx,css}',
    './components/**/*.{ts,tsx,mdx,css}',
    './styles/**/*.{css,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
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
