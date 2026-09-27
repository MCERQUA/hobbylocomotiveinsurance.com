import type { Config } from "tailwindcss";

/**
 * HOBBY LOCOMOTIVE INSURANCE — Heritage Railroad design system (Worker B).
 *
 * Two layers:
 *  1. NEW heritage tokens (brand burgundy, gold brass, steel, cream, espresso ink).
 *     Used by the premium restyled section components.
 *  2. LEGACY ALIASES (forest-green / ember-orange / warm-white / bark / timber / muted / border)
 *     mapped onto the heritage palette so every page file that still references the
 *     framing template's old class names restyles cohesively WITHOUT being edited
 *     (keeps Worker C's parallel content work unclobbered).
 *
 * Brand direction (blueprint §8): deep railroad burgundy/oxblood primary,
 * brass-gold accent, steel/charcoal secondary, warm cream canvas, heritage serif.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── NEW: shared CCA foundation (heritage-warm override) ──────────────
        canvas: "#FAF5EC", // page background — warm cream, vintage catalog
        card: "#FFFFFF", // elevated card surface
        panel: "#F3ECDF", // recessed surface (FAQ rows, sub-panels)
        ink: "#241A14", // primary text — warm espresso near-black
        "ink-soft": "#3D322A", // secondary heading text
        muted: "#6B5E52", // body / secondary text — warm taupe
        line: "#E7DBC8", // borders (warm cream)
        "line-soft": "#F0E8D8", // hairline dividers

        // ── NEW: brand burgundy / oxblood ramp (railroad red) ───────────────
        brand: {
          DEFAULT: "#6E1E2A",
          bright: "#B0544C", // rosier light stop for gradients on light bg
          ink: "#400F15", // deepest — footer / stat dark sections
          50: "#F8EDF0",
          100: "#EFD3D9",
          200: "#DDA8A2",
          300: "#C57A76",
          400: "#A6504A",
          500: "#872F30",
          600: "#6E1E2A",
          700: "#571620",
          800: "#400F15",
          900: "#2A080D",
        },

        // ── NEW: brass-gold accent (locomotive fittings) ────────────────────
        // Gold is DECORATIVE only on light backgrounds (fills w/ dark text, large
        // numbers, rings, gradient stops) — it fails body-text contrast on cream.
        // Use burgundy (brand) for eyebrows/text on light; gold sings on dark.
        gold: {
          DEFAULT: "#C49225",
          bright: "#E0B23C",
          soft: "#F7E9C2",
          dark: "#8A6515",
        },

        // ── NEW: steel / charcoal (track steel, industrial) ─────────────────
        steel: {
          DEFAULT: "#2E3640",
          soft: "#E8EBEF",
          600: "#3A434E",
        },

        // ── LEGACY ALIASES (framing template → heritage) ────────────────────
        // Kept so any file still using the old class names renders correctly.
        "forest-green": {
          DEFAULT: "#6E1E2A", // → brand burgundy
          dark: "#571620",
          50: "#F8EDF0",
          light: "#872F30",
        },
        "ember-orange": {
          DEFAULT: "#6E1E2A", // → burgundy (safe contrast for buttons/text everywhere)
          dark: "#571620",
          light: "#A6504A",
        },
        "warm-white": "#FAF5EC", // → cream canvas
        bark: {
          DEFAULT: "#241A14", // → espresso ink
          light: "#3D322A",
        },
        timber: {
          DEFAULT: "#5A4636",
          light: "#6E5746",
        },
        border: "#E7DBC8",
      },
      fontFamily: {
        // CSS vars are set by next/font in src/lib/fonts.ts (Fraunces + Inter).
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(36,26,20,.05)",
        card: "0 1px 2px rgba(36,26,20,.05), 0 12px 32px -14px rgba(36,26,20,.16)",
        "card-hover":
          "0 4px 10px rgba(36,26,20,.07), 0 28px 52px -18px rgba(110,30,42,.24)",
        cta: "0 14px 30px -10px rgba(110,30,42,.45)",
        float: "0 26px 70px -28px rgba(36,26,20,.34)",
        gold: "0 14px 34px -10px rgba(196,146,37,.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up .6s cubic-bezier(.22,1,.36,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
