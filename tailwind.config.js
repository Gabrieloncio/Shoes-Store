/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-base' : "url('assets/media/Home/HomeIMG1-base.png')",
        'home-md' : "url('assets/media/Home/HomeIMG1-lg.png')"
      }
    },
  },
  plugins: [],
}
