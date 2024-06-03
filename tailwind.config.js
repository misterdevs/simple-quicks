/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          blue: "#2F80ED",
          gray: {
            dark: "#4F4F4F",
            light: "#828282",
          },
          white: "#E0E0E0",
        },
        indicator: {
          orange: "#F8B76B",
          purple: "#8785FF",
          red: "#EB5757",
          yellow: "#F2C94C",
        },
        chat: {
          primary: {
            orange: "#FCEED3",
            purple: "#EEDCF",
            green: "#D2F2EA",
          },
          secondary: {
            orange: "#E5A443",
            purple: "#9B51E0",
            green: "#43B78D",
          },
        },
        sticker: {
          gray: "#E9F3FF",
          orange: {
            100: "#F9E9C3",
            200: "#FDCFA4",
          },
          green: {
            100: "#CBF1C2",
            200: "#AFEBDB",
          },
          purple: {
            100: "#F9E0FD",
            200: "#CFCEF9",
          },
        },
      },
    },
  },
  plugins: [],
};
