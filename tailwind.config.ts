import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C", graphite: "#1A1B1E", slate: "#55585F", mist: "#8A8D94",
        stone: "#E4E2DD", ivory: "#F8F7F4", champagne: "#B8975A",
        "champagne-dark": "#9F7F47", "champagne-tint": "#F3ECDD",
        success: "#1E7F4F", warning: "#B7791F", danger: "#B42318", info: "#1F5FA8",
      },
      fontFamily: { heading: ["var(--font-jost)"], body: ["var(--font-inter)"] },
      borderRadius: { sm: "6px", md: "10px", lg: "14px" },
    },
  },
  plugins: [],
};
export default config;
