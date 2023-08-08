/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Epilogue", "sans-serif"],
      },
      colors: {
        primary: "#1DC071",
        secondary: "#6F49FD",
        text1: "#171725",
        text2: "#4B5264",
        text3: "#808191",
        text4: "#B2B3BD",
        iconColor: "#808191",
        white: "#FFFFFF",
        whiteSoft: "#FCFBFF",
        graySoft: "#FCFCFC",
        strock: "#F1F1F3",
        liteBg: "#FCFCFD",
        error: "#EB5757",
        darkBg: "#13131A",
        darkSecond: "#1C1C24",
        softDark: "#22222C",
        darkSoft: "#24242C",
        redSoft: "#F9E3E3",
        darkStroke: "#3A3A43",
        darkRed: "#422C32",
        grayf6: "#F6F6F6",
      },
      boxShadow: {
        itemCam: '0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)',
        nav: '10px 10px 20px 0px rgba(2, 2, 2, 0.25)',
        1: '4px 4px 8px 0px rgba(226, 226, 226, 0.20), -4px 4px 8px 0px rgba(226, 226, 226, 0.20)',
      }
    },
  },
  plugins: [],
}