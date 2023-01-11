/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: {
          50: "#052962",
          100: "#041F4A",
        },
        red: {
          50: "#c70000",
          100: "#ab0613",
        },
        yellow: {
          50: "#ffe500",
        },
        netral: {
          50: "#DCDCDC",
          100: "#f6f6f6",
        },
      },
      fontFamily: {
        bold: ["Guardian-Egyp-Web-Bold", "monospace"],
        semibold: ["Guardian-Egyp-Web-Semibold", "monospace"],
        medium: ["Guardian-Egyp-Web-Medium", "monospace"],
        regular: ["Guardian-Egyp-Web-Regular", "monospace"],
        light: ["Guardian-Egyp-Web-Light", "monospace"],
      },
    },
  },
  plugins: [],
};
