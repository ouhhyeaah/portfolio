/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "dark-mode": "#16181c",
        "brown-color": "#743308",
        "light-brown-color": "#a45f2e",
        "pink-color": "#e2a2ac",
        "radial-gradient":
            "radial-gradient(circle, rgba(248, 107, 223, 1) 0%, rgba(107, 107, 248, 0.8) 100%);",
      },
      backgroundImage: {
        "radial-gradient":
            "radial-gradient(circle, rgba(248, 107, 223, 1) 0%, rgba(107, 107, 248, 0.8) 100%);",
      },
    },
  },
  plugins: [],
}

