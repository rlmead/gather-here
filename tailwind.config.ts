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
    darkTheme: "customDark5",
    themes: [
      {
        // customLight: {
        //   "primary": "#7C274B",
        //   "secondary": "#FFFFFF",
        //   "accent": "#FBB13C",
        //   "neutral": "#FFFFFF",
        //   "base-100": "#FFFFFF",
        //   "info": "#73D2DE",
        //   "success": "#29A39F",
        //   "warning": "#D81159",
        //   "error": "#000000",
        // },
        // customDark: {
        //   "primary": "#FFFFFF",
        //   "secondary": "#7C274B",
        //   "accent": "#FBB13C",
        //   "neutral": "#FFFFFF",
        //   "base-100": "#7C274B",
        //   "info": "#73D2DE",
        //   "success": "#29A39F",
        //   "warning": "#D81159",
        //   "error": "#000000",
        // },
        // customLight2: {
        //   "primary": "#390099",
        //   "secondary": "#FFFFFF",
        //   "accent": "#FF5400",
        //   "neutral": "#FFFFFF",
        //   "base-100": "#FFFFFF",
        //   "info": "#9E0059",
        //   "success": "#FFBD00",
        //   "warning": "#FF0054",
        //   "error": "#000000",
        // },
        // customDark2: {
        //   "primary": "#FFFFFF",
        //   "secondary": "#390099",
        //   "accent": "#FF5400",
        //   "neutral": "#FFFFFF",
        //   "base-100": "#390099",
        //   "info": "#9E0059",
        //   "success": "#FFBD00",
        //   "warning": "#FF0054",
        //   "error": "#000000",
        // },
        // customLight3: {
        //   "primary": "#233D4D",
        //   "secondary": "#FFFFFF",
        //   "accent": "#FE7F2D",
        //   "neutral": "#FFFFFF",
        //   "base-100": "#FFFFFF",
        //   "info": "#619B8A",
        //   "success": "#A1C181",
        //   "warning": "#FCCA46",
        //   "error": "#000000",
        // },
        // customDark3: {
        //   "primary": "#FFFFFF",
        //   "secondary": "#233D4D",
        //   "accent": "#FE7F2D",
        //   "neutral": "#FFFFFF",
        //   "base-100": "#233D4D",
        //   "info": "#619B8A",
        //   "success": "#A1C181",
        //   "warning": "#FCCA46",
        //   "error": "#000000",
        // },
        // customLight4: {
        //   "primary": "#6457A6",
        //   "secondary": "#FFFFFF",
        //   "accent": "#23F0C7",
        //   "neutral": "#FFFFFF",
        //   "base-100": "#FFFFFF",
        //   "info": "#7D7ABC",
        //   "success": "#FFE347",
        //   "warning": "#EF767A",
        //   "error": "#000000",
        // },
        // customDark4: {
        //   "primary": "#FFFFFF",
        //   "secondary": "#6457A6",
        //   "accent": "#23F0C7",
        //   "neutral": "#FFFFFF",
        //   "base-100": "#6457A6",
        //   "info": "#7D7ABC",
        //   "success": "#FFE347",
        //   "warning": "#EF767A",
        //   "error": "#000000",
        // },
        customLight5: {
          "primary": "#504684",
          "secondary": "#FFFFFF",
          "accent": "#23F0C7",
          "neutral": "#FFFFFF",
          "base-100": "#FFFFFF",
          "info": "#8D89D0",
          "success": "#FFE347",
          "warning": "#EF767A",
          "error": "#000000",
        },
        customDark5: {
          "primary": "#FFFFFF",
          "secondary": "#504684",
          "accent": "#23F0C7",
          "neutral": "#FFFFFF",
          "base-100": "#6457A6",
          "info": "#8D89D0",
          "success": "#FFE347",
          "warning": "#EF767A",
          "error": "#000000",
        }
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
