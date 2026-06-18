/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3D2817',
        secondary: '#8B6F47',
        accent: '#B8860B',
        background: '#FAF7F2',
        surface: '#F0EBE3',
        text: '#2C1810',
        'text-muted': '#6B5D52',
        border: '#E0D5C7',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
      },
      lineHeight: {
        tight: '1.05',
        relaxed: '1.7',
      },
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [],
}
