/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─── BRAND COLORS ──────────────────────────────────────────────────────
      // [COMPANY_INFO: Update accent and gold to match your brand palette]
      colors: {
        brand: {
          bg: '#F8F8F8',
          'bg-alt': '#FAFAF7',
          text: '#111111',
          dark: '#0A0A0A',
          accent: '#D72638',     // [COMPANY_INFO: Primary accent color]
          gold: '#C19A6B',       // [COMPANY_INFO: Secondary accent / luxury gold]
          muted: '#666666',
          light: '#AAAAAA',
          card: '#FFFFFF',
          border: '#E8E8E8',
          'border-dark': '#2A2A2A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marqueeReverse 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.15)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'luxury': '0 4px 40px rgba(0, 0, 0, 0.08)',
        'luxury-lg': '0 12px 60px rgba(0, 0, 0, 0.12)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'glow-red': '0 0 20px rgba(215, 38, 56, 0.4)',
        'glow-gold': '0 0 20px rgba(193, 154, 107, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
