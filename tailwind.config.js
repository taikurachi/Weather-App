/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        iconSize: "20px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        iconColor: "#FFBEBE",
        iconColorHover: "#FF9A9A",
      },
      fontSize: {
        sm: "clamp(1rem, 5vw, 4rem)",
      },
      gap: {
        icons: "clamp(1rem, 4vw, 3rem)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".transition-icon": {
          "transition-property": "background-color",
          "transition-duration": "300ms",
          "transition-timing-function": "ease-in-out",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
