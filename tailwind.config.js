// tailwind.config.js
 const nativewind = require("nativewind/tailwind/css")

module.exports = {
  content: [
    "./App.tsx", "./app/**/*.tsx",
    "./components/**/*.tsx"
  ],
  theme:{
    extend:{
      colors: {
        'purplePrimary': '#414396',
        'purpleSeccondary':'#6061A7',
        'colorGray':'#F2EDED',
        'colorWhite':'#FFF'
      },
    }
  }

};