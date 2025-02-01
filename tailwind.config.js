/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Add paths to your source files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // Hides scrollbar
  ],
};
