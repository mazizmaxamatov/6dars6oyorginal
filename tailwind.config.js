/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     backgroundImage: {
      burger: "url('/src/Assets/hidr.png')",
      bur: "url('/src/Assets/burger.png')"
     }
    },
  },
  plugins: [],
}

