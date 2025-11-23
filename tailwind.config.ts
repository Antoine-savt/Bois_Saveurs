import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wood-light': '#d4a574',
        'wood-medium': '#8b6f47',
        'wood-dark': '#5E7C5F',
        'wood-brown': '#5c4a2f',
        'accent-green': '#6b8e5a',
        'accent-beige': '#e8ddd4',
        background: '#faf9f6',
        foreground: '#2c2416',
      },
    },
  },
  plugins: [],
};

export default config;

