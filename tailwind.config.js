// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "main-mobile": "url('../images/bg-main-mobile.png')",
        "front-card": "url('../images/bg-card-front.png')",
        "back-card": "url('../images/bg-card-back.png')",
      },
      colors: {
        "dark-grayish": "hsl(279, 6%, 55%)",
        "light-grayish": "hsl(270, 3%, 87%)",
        "verydark-violet": "hsl(278, 68%, 11%)",
      },
    },
  },
  plugins: [],
}
