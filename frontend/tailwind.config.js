import containerQueries from '@tailwindcss/container-queries';

export default {
  content: ['./index.html', './src/**/*.{jsx,js,html}'],
  theme: {
    extend: {
      colors: {
        night: '#0E0826',
        deep: '#1C0D3D',
        indigo: { DEFAULT: '#33248A', soft: '#4A3BB0' },
        royal: '#51218A',
        violet: '#7A35BE',
        magenta: '#E3127A',
        pink: '#FF4DA8',
        gold: '#F6CD20',
        lavender: '#F3EAFB',
        mist: '#FAF6FE',
        ink: '#241239',
        muted: '#6B5C86',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        score: ['"Barlow Condensed"', 'Oswald', 'sans-serif'],
      },
      containers: {
        tab: '760px',
        desk: '1060px',
      },
    },
  },
  plugins: [containerQueries],
};