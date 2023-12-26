import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container: {
      center: true
    }
  },
  daisyui: {
    darkTheme: "customDark",
    themes: [
      {
        customLight: {
          "primary": "#390099",
          "secondary": "#FFFFFF",
          "accent": "#FF5400",
          "neutral": "#FFFFFF",
          "base-100": "#FFFFFF",
          "info": "#9E0059",
          "success": "#FFBD00",
          "warning": "#FF0054",
          "error": "#000000",
        },
        customDark: {
          "primary": "#FFFFFF",
          "secondary": "#390099",
          "accent": "#FF5400",
          "neutral": "#FFFFFF",
          "base-100": "#390099",
          "info": "#9E0059",
          "success": "#FFBD00",
          "warning": "#FF0054",
          "error": "#000000",
        }
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
