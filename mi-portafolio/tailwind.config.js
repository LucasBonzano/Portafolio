/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F6F8",
        ink: "#17202E",
        muted: "#5A6474",
        rule: "#DCE0E6",
        accent: "#1F5FA8",
        ok: "#2E8B57",
      },
      fontFamily: {
        sans: ['"Schibsted Grotesk"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
