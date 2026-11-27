import type { Config } from "tailwindcss";

// DESIGN.md Section 3 tokens. Typography (3.2), elevation (3.3) and motion (3.4)
// are baked in here so no component needs an arbitrary value (AGENTS.md Section 6).
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
      // DESIGN.md Section 3.3: inputs/buttons 6px, cards 10px, modals/sheets 14px.
      borderRadius: { sm: "6px", md: "10px", lg: "14px" },
      // DESIGN.md Section 3.2 type scale. Mobile first; `-lg` sizes are the desktop
      // column. Weights and letter spacing follow the spec table exactly.
      fontSize: {
        display: ["40px", { lineHeight: "44px", letterSpacing: "-0.01em", fontWeight: "500" }],
        "display-lg": ["64px", { lineHeight: "68px", letterSpacing: "-0.02em", fontWeight: "500" }],
        h1: ["34px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "500" }],
        "h1-lg": ["48px", { lineHeight: "54px", letterSpacing: "-0.015em", fontWeight: "500" }],
        h2: ["28px", { lineHeight: "34px", fontWeight: "500" }],
        "h2-lg": ["36px", { lineHeight: "44px", fontWeight: "500" }],
        h3: ["22px", { lineHeight: "30px", fontWeight: "500" }],
        "h3-lg": ["24px", { lineHeight: "32px", fontWeight: "500" }],
        "body-l": ["17px", { lineHeight: "28px" }],
        "body-l-lg": ["18px", { lineHeight: "30px" }],
        body: ["16px", { lineHeight: "26px" }],
        small: ["14px", { lineHeight: "22px" }],
        caption: ["12px", { lineHeight: "18px", fontWeight: "500" }],
        eyebrow: ["12px", { lineHeight: "16px", letterSpacing: "0.12em", fontWeight: "600" }],
        button: ["15px", { lineHeight: "20px", fontWeight: "600" }],
        price: ["22px", { lineHeight: "28px", fontWeight: "600" }],
      },
      // DESIGN.md Section 3.3 elevation.
      boxShadow: {
        sm: "0 1px 2px rgba(11, 11, 12, 0.06)",
        md: "0 8px 24px rgba(11, 11, 12, 0.08)",
        lg: "0 16px 40px rgba(11, 11, 12, 0.12)",
      },
      // Section vertical padding: 56px mobile, 72px tablet, 96px desktop (3.3).
      spacing: { 18: "72px" },
      // DESIGN.md Section 3.4 motion: 200-300ms, this easing only.
      transitionTimingFunction: { design: "cubic-bezier(0.22, 1, 0.36, 1)" },
      // Card image hover zoom 1.03, button press 0.98 (3.4).
      scale: { 98: "0.98", 103: "1.03" },
      // Vehicle card media is 4:3 (3.5); collection panels are 3:2 (3.5).
      aspectRatio: { card: "4 / 3", panel: "3 / 2" },
      // Cookie banner max width 440px (Section 4).
      maxWidth: { banner: "440px" },
    },
  },
  plugins: [],
};
export default config;
