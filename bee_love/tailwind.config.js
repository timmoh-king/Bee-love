/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '480px',
      'md': '640px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1680px',
    },
    container: {
      center: true,
      padding: '1 rem'
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#1B0E00",
        orange: "#F8821E",
        yellow: "#FAC81A",
        brown: "#E58A27",
        dark_brown: "#663A11",
        background: {
          1: "#FAD7B7",
          2: "#FFFBF6",
          3: "#FFF3E8",
          4: "#FFE1C5",
          5: "#FFF8F2"
        }
      }
    },
  },
  plugins: [],
}
