/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C3440',
        secondary: '#5A6577',
        accent: '#E8C547',
        background: '#F5F7FA',
        surface: '#FFFFFF',
        text: '#1A1F2B',
        'text-muted': '#6B7280',
        border: '#D1D5DB',
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
