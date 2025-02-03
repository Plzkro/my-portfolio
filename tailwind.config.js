/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Archivos en la carpeta app/
    './components/**/*.{js,ts,jsx,tsx}', // Archivos en la carpeta components/
    './pages/**/*.{js,ts,jsx,tsx}', // Archivos en la carpeta pages/ (si existe)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};