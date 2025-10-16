/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        slate300:"#cbd5e1",
        slate400:"#94a3b8",
        dark: "#0f172a",
        indigo: "#6366f1",
        indigo800:"#1e3a8a",
        indigo300:"#a5b4fc",
        indigo200:"#c7d2fe",
        indigo100:"#e0e7ff",
        indigo100:"#e0e7ff",
        indigo50:"#eef2ff",
        indigo400:"#818cf8",
        indigo700: "#4338ca",
        indigo600: "#4f46e5",
      },
      screens: {
        "xl": "1140px",
      },
    },
    plugins: [],
  },
};
