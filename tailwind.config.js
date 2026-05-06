/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0B0F12',
          elevated: '#12181C',
          card: '#151D22',
        },
        foreground: {
          DEFAULT: '#F5F5F7',
          muted: '#A1A1AA',
          subtle: '#71717A',
        },
        accent: {
          DEFAULT: '#2CBFAE',
          light: '#77D6CB',
          dark: '#178D82',
          muted: 'rgba(44, 191, 174, 0.15)',
        },
        warm: '#DDA15E',
        success: '#4FB286',
        surface: {
          DEFAULT: '#FAFAF9',
          dark: '#11191D',
        },
        border: {
          DEFAULT: '#253137',
          light: '#3B4A51',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display-xl': ['120px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['96px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['72px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-sm': ['56px', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'heading-lg': ['40px', { lineHeight: '1.2' }],
        'heading-md': ['32px', { lineHeight: '1.3' }],
        'heading-sm': ['24px', { lineHeight: '1.4' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body': ['16px', { lineHeight: '1.7' }],
        'label': ['12px', { lineHeight: '1.5', letterSpacing: '0.1em' }],
      },
      spacing: {
        'section': '160px',
        'section-sm': '120px',
      },
      transitionDuration: {
        'hover': '300ms',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'count-up': 'count-up 2s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'progress': 'progress 1.5s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'progress': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
