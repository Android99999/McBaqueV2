/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        PlayFair: ['Playfair Display', 'serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Comme: ['Comme', 'sans-serif'],
        Lexend: ['Lexend', 'sans-serif'],
        Rufina: ['Rufina', 'serif']
      },
      screens: {
        xs: "550px",
        md: "850px",
        xl: "1180px",
        "2xl": "1280px",
      },
      colors: {
        cgray: "#3F3F46",
        cred: "#7C2629",
        cblue: "#475569",
        cbrown: "#DDCFC5",
        cwhite: "#E7E5E4"
      },


    },
  },
  plugins: [
  
    
  ],
  "prettier":{
    "plugins": ["prettier-plugin-tailwindcss"]
  }

}

