/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
         "grey":'#F0F0FACC',
         "grey100":"#999999CC",
         "grey200":'#999999',
          "grey900":"#4B4B4B",
          "white69":"#ffffffb0",

         "lightviolet":"#F3F3FB",
         "violet":"#7266FA",
         "violet100":"#B147F2"
      },
      fontSize:{
        'size-14':'14px',
        'size-18':'18px',
        'size-20':'20px',
        'size-14':'14px'
      },
      boxShadow:{
        'shdaowHeader':'0px 0px 4px rgba(138, 138, 138, 0.5)'
      }
    },
  },
  plugins: [],
}

