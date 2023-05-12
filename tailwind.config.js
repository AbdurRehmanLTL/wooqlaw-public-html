/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1152px',
        }
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
        // 'jameel': ['jameel-noori-nastaleeq'],
      },
      extend: {
        fontSize: {
          '2xs': ['0.625rem', '0.75rem'], // 10px
          '3xs': ['0.5rem', '0.625rem'], // 8px
        },
        spacing:{
          '18': '4.5rem'
        },
        colors: {
          primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms')
    ],
  }
  