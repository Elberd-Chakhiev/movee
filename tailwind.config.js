const colors = require('tailwindcss/colors')
const defaulTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  prefix: 'tw-',
  theme: {
    screens: {
      'fullxs': '280px',
      '3xs': '320px',
      '2xs': '375px',
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'media805px': '806px',
      'media890px': '891px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    
    extend: {   
      inset:{
        '-50px': '-50px',
        '50px': '50px',
        '25%': '25%',
        '30%': '30%',
        '125px': '125px',
      },
      zIndex: {
        '-10': '-10',
       },

      fontSize:{
        // '30px': '30px',
        // '70px': '70px',
      },
      colors:{
        yellow:{
          light: '#FED100',
          DEFAULT: '#FED100',
          dark: '#FED100',
        },
        black:{
          light: '#333333',
          DEFAULT: '#333333',
          dark: '#333333',
        },
        dark:{
          light: '#000000',
          DEFAULT: '#000000',
          dark: '#000000',
        },
        red:{
          light: '#FF352B',
          DEFAULT: '#FF352B',
          dark: '#FF352B',
        } 
      },
      maxHeight:{
        // '60px': '60px',
        // '80px': '80px',
      },
      spacing:{
        '90p': '90%',
        // '10px': '10px',
        // '20px': '20px',
        // '15px': '15px',
        // '18px': '18px',
        // '23px': '23px',
        // '32px': '32px',
        // '40px': '40px',
        // '50px': '50px',
        // '60px': '60px',
        // '95px': '95px',
        // '100px': '100px',
        // '258px': '258px',
        // '261px': '261px',
        // '115px': '115px',
        // '138px': '138px',
        // '177px': '177px',
        // '218px': '218px',
        // '304px': '304px',
        // '404px': '404px',
        // '808px': '808px',
        // '452px': '452px',
        // '480px': '480px',
        // '1000px': '1000px',
        // '1106px': '1106px',
        // '1220px': '1220px',
        // '1306px': '1306px',
      },
      maxWidth:{
        '90p': '90%',
        // '32px': '32px',
        // '90px': '90px',
        // '60px': '60px',
        // '150px': '150px',
        // '1000px': '1000px',
        // '136px': '136px',
        // '177px': '177px',
        // '248px': '248px',
        // '258px': '258px',
        // '277px': '277px',
        // '280px': '280px',
        // '292px': '292px',
        // '304px': '304px',
        // '314px': '314px',
        // '404px': '404px',
        // '420px': '420px',
        // '480px': '480px',
        // '808px': '808px',
        // '1106px': '1106px',
        // '1220px': '1220px',
        // '1306px': '1306px',

      },
      minWidth:{
        '90p': '90%',
        '32px': '32px',
        '50px': '50px',
      },
      margin:{
        '-26px': '-26px',
        '-10px': '-10px',
      },
      lineHeight:{
        '126p': '126.9%',
        '131p': '131.9%',
      },



  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
