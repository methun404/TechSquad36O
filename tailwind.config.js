/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#213A57",         // Dark blue
        secondary: "#0B6477",       // Teal
        accent: "#14919B",          // Light teal
        lightAccent: "#0AD1C8",     // Lighter teal
        highlight: "#5EDFB1",       // Soft green
        lightGreen: "#80ED99",      // Very light green
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #213A57, #0B6477)', // Gradient from primary to secondary
        'gradient-accent': 'linear-gradient(to right, #14919B, #0AD1C8)',  // Accent gradient
      },
    },
  },
  plugins: [],
}
