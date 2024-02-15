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
        sm: {'min': '320px', 'max': '639px'},   // Adjusted max size to cover smaller devices
        md: {'min': '640px', 'max': '767px'},   // Adjusted min size to avoid overlap with sm
        lg: {'min': '768px', 'max': '1023px'},  // Adjusted max size for better differentiation
        xl: {'min': '1024px', 'max': '1279px'}, // Adjusted min size to avoid overlap with lg
        '2xl': {'min': '1280px'}                // Introduced a new breakpoint for larger screens
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

