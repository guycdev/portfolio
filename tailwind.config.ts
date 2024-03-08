import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "black",
        "bg-hue": "#0c142a",
        text: "#64748b",
        primary: "#64748b",
        secondary: "#cbd5e1",
        accent: "#f1f5f9",
        "lamp-glow": "#64748b",
        "lamp-bar": "#64748b",
        // bg: "#000a1e",
        // "bg-hue": "#0c142a",
        // text: "#d7e3ff",
        // primary: "rgb(143, 179, 255)",
        // secondary: "rgb(235, 241, 255)",
        // accent: "rgb(212, 29, 109)",
        // "lamp-glow": "rgb(143, 179, 255)",
        // "lamp-bar": "rgb(143, 179, 255)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      borderRadius: {
        border: "12px",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
        "glow-button":
          "0px 0px 5px #f1f5f9,0px 0px 10px #f1f5f9, 0px 0px 15px #f1f5f9,0px 0px 20px #f1f5f9, 0px 0px 25px #f1f5f9,0px 0px 30px #f1f5f9, 0px 0px 35px #f1f5f9;",
        border: "0px 4px 16px rgba(235, 241, 255, 0.075);",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
