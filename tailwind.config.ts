import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ffcc",
        secondary: "#00ccb3",
        backgr: "#131c2e",
      },
      gridTemplateColumns: {
        custom:
          "0.2fr 0.2fr 0.6fr 0.3fr 0.4fr 0.4fr 0.3fr 0.2fr 0.35fr 0.5fr 0.5fr",
        custom2: "0.2fr 0.2fr 1fr 2fr 0.7fr 1fr",
        custom3: "2.5fr 0.5fr 0.58fr",
      },
    },
  },
  plugins: [],
};

export default config;
