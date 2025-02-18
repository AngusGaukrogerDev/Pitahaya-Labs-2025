import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#ECBA0B",
        "mid-gray": "#A8A9AB",
        "light-gray": "#E7E7E7",
        white: "#FFFFFF",
        beige: "#E3DDD5",
        black: "#2C2C2D",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        medium: "500",
        extrabold: "800",
      },
    },
  },
  plugins: [],
} satisfies Config;
