import type { Config } from "tailwindcss";

const config: Config = {
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
          "primary": "#7C274B",
          "secondary": "#FFFFFF",
          "accent": "#FBB13C",
          "neutral": "#FFFFFF",
          "base-100": "#FFFFFF",
          "info": "#73D2DE",
          "success": "#29A39F",
          "warning": "#D81159",
          "error": "#000000",
        },
        customDark: {
          "primary": "#FFFFFF",
          "secondary": "#7C274B",
          "accent": "#FBB13C",
          "neutral": "#FFFFFF",
          "base-100": "#FFFFFF",
          "info": "#73D2DE",
          "success": "#29A39F",
          "warning": "#D81159",
          "error": "#000000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
