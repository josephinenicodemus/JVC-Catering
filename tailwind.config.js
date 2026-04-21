/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        amber: {
          DEFAULT: '#C97A2A',
          dark: '#A85E18',
          light: '#E8A05C',
          pale: 'rgba(201,122,42,0.08)',
        },
        forest: {
          DEFAULT: '#1B6B3A',
          dark: '#134F2B',
          light: '#2A9D5C',
        },
        dark: '#0D0D0D',
        charcoal: '#1A1A2E',
        ivory: '#FAF9F6',
        cream: '#F4EDE0',
        muted: '#71717A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
