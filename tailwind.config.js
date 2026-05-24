/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF6F0",
        charcoal: "#1A1F2C",
        terracotta: "#C68B6B",
        sage: "#9BA89A",
        muted: "#6B6B6B",
        line: "#E8E0D4",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "720px",
      },
    },
  },
  plugins: [],
};
