/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/blog.js",
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",

  ],
  
  theme: {
    extend: {},
  },
  plugins: [],
}