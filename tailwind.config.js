/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "patungan-grey": "#757C98",
        "patungan-bg-grey": "#F6F7F9",
        "patungan-black": "#170C36",
        "patungan-orange": "#E25520",
        "patungan-violet": "#7A7291",
        "patungan-red": "#FF0C81",
        "patungan-yellow": "#FED049",
        "patungan-border": "#DCDFE6",
      },
      fontFamily:{
        "newbrug": "newbrug-Bold"
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideToR: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
}