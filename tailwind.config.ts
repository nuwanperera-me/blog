const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

import { fontFamily } from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      minHeight: {
        newscreen: "calc(100vh - 8rem)",
      },
      fontFamily: {
        geist: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [addVariablesForColors, require("@tailwindcss/typography")],
};

export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
