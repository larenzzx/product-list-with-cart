/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screnns: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    extend: {},
    fontFamily: {
      RedHat: ["Red Hat Text", "serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "32px"
      }
    },
  },
  plugins: [],
}

