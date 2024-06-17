/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': "#121116",
        'header-color': "#3E3454",
        'text-color': "#3A4545",
        'element-color': "#2A2833"
      },
    },
    
  },
  plugins: [],
}

