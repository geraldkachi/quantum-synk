/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        green: {
          qs: '#89C441',
          dim: '#6fa332',
        },
      },
      animation: {
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'rotate-slow-rev': 'rotateSlow 15s linear infinite reverse',
        'rotate-slow-3': 'rotateSlow 25s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
        'blink': 'blink 1s ease-in-out infinite',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
      },
      keyframes: {
        slideUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-28px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        rotateSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(-50%, -50%) translateY(0px)' },
          '50%': { transform: 'translate(-50%, -50%) translateY(-12px)' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(137,196,65,0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(137,196,65,0)' },
        },
      },
    },
  },
  plugins: [],
}