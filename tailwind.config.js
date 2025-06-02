import lineClamp from '@tailwindcss/line-clamp';
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // scan all JS/TS files in src folder
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        googleGray: '#9aa0a6',
      },
    },
  },
  plugins: [lineClamp],
};
