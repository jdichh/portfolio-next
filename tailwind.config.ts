import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-theme-bg': '#E3E3E5',
        'light-theme-bg-lighter': '#EAEAEA',
        'light-theme-text': '#16181D',
        'light-theme-accent': '#397EBF',
        'dark-theme-bg': '#16181D',
        'dark-theme-bg-lighter': '#1F2128',
        'dark-theme-text': '#E3E3E5',
        'dark-theme-accent': '#FFD700',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
