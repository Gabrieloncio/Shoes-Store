/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-base': "url('assets/media/Home/HomeIMG1-base.png')",
        'home-md': "url('assets/media/Home/HomeIMG1-lg.png')",
        notfound: "url('assets/media/Home/NotFoundIMG.png')"
      },
      keyframes: {
        addedToFav: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1.2)' },
          '30%': { transform: 'scale(.9)' },
          '80%': { transform: 'scale(1)' }
        },
        couponMessage: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        detailsBackgroundActive: {
          '0%' : { opacity: 0},
          '100%': { opacity: 1}
        },
        loader:{
          '0%' : {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'}
        }
      },
      animation: {
        addToFav: 'addedToFav .6s ease-in-out',
        couponAnimation: 'couponMessage .4s ease-in-out',
        detailsBackgroundActive: 'detailsBackgroundActive .2s',
        loader: 'loader .7s linear infinite'
      },
      dropShadow: {
        outline:
          '10px 10px 0 #FFFFFF, 10px -10px 0 #FFFFFF, -10px 10px 0 #FFFFFF, -10px -10px 0 #FFFFFF, 10px 0px 0 #FFFFFF, 0px 10px 0 #FFFFFF, -10px 0px 0 #FFFFFF, 0px -10px 0 #FFFFFF, 0px 0px 4px #FFFFFF'
      }
    }
  },
  plugins: []
}
