/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
         "grey":'#F0F0FACC',
         "grey200":'#999999',
         "violet":"#7266FA"
      },
      fontSize:{
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

