import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
        roboto: ["Roboto, sans-serif"],
      },
      backgroundImage: {},
      colors: {
        primary: {
          DEFAULT: "#0473aa",
          light: "#60A5FA",
          dark: "#286090",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
        },
      },
      maxWidth: {
        container: "1140px",
      },
    },
    screens: {
      'xsr': '350px',

      'xs': '375px',
      // => @media (min-width: 375px) { ... }

      'xss': '396px',

      'xsss': '420px',

      'sm': '640px',

      'md': '768px',
      
      'mds': '916px',

      'lg': '1024px',
      'lgs': '1200px',

      'xl': '1280px',

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
export default config;
