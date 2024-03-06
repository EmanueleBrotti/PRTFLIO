/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xsm": "490px"
      },
    },
    
    colors: {
      dark: "#0e0e0e",
      light: "#e0e0e0",
      green: "#96AA8A",
    },
    fontFamily: {
      'grotesk': ['Familjen Grotesk', 'sans-serif'],
    }
  },
  plugins: [],
}

