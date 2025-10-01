import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx,mdx}','./components/**/*.{ts,tsx}'],
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
