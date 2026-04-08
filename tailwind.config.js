/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F7F5',
        surface: '#EBEAE6',
        card: '#FFFFFF',
        border: '#D6D5D0',
        primary: '#1D3D14',
        accent: '#526B4D',
        textPrimary: '#1D3D14',
        textSecondary: '#6B7A65',
        textMuted: '#9CA396',
        success: '#2D6A2E',
        highlight: '#D4C17C',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '25px',
        '4xl': '32px',
      },
    },
  },
  plugins: [],
}
