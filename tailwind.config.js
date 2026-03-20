/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        serif: ['DM Serif Display', 'serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#050608',
          200: '#0c0d11',
          300: '#12141a',
          500: '#1c1e28',
          600: '#16181f',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#e8e4db',
          700: '#c8cadd',
          600: '#9da0ad',
          500: '#6b6d78',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
      animation: {
        'fade-up': 'section-reveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};