import type { Config } from "tailwindcss"
import  { fontFamily } from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./core/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
        roboto: ["Roboto, sans-serif"],
        dancing: ["Dancing Script, sans-serif"],
        nunito: ["Nunito, sans-serif"],
        condensed: ["Roboto Condensed, sans-serif"],
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {},
      colors: {
        primary: {
          DEFAULT: "#0755d1",
          light: "#0755d1",
          dark: "#0755d1",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
        },
      },
      maxWidth: {
        container: "1140px",
      },
      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    screens: {
      "xsr": "350px",

      "xs": "375px",
      // => @media (min-width: 375px) { ... }

      "xss": "396px",

      "xsss": "420px",

      "sm": "640px",

      "md": "768px",

      "mds": "916px",

      "lg": "1024px",

      "lgs": "1200px",

      "xl": "1280px",

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config