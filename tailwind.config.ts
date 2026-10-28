import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        char: { 950: '#0e0c0a', 900: '#16130f', 800: '#211c17', 700: '#2e2720', 600: '#463d33' },
        copper: { DEFAULT: '#b87333', light: '#d38d4a', dark: '#8f5624' },
        brass: '#c9a24b',
        cream: { DEFAULT: '#f3ead9', dark: '#e6d9bf' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
