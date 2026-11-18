import localFont from "next/font/local";

// Heritage typography (blueprint §8): authoritative serif headings
// (Playfair Display — premium heritage / collectibles-authority feel) + clean
// readable sans body (Inter). Playfair is statically weighted → reliable with
// next/font (variable fonts like Fraunces can reject explicit weight arrays).
// Export names + CSS vars are unchanged from the template so layout.tsx and the
// `font-heading` / `font-body` Tailwind families keep working untouched.
export const headingFont = localFont({
  src: [
    { path: "./fonts/PlayfairDisplay-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/PlayfairDisplay-variable.woff2", weight: "700", style: "normal" },
    { path: "./fonts/PlayfairDisplay-variable.woff2", weight: "800", style: "normal" },
    { path: "./fonts/PlayfairDisplay-variable.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

export const bodyFont = localFont({
  src: [
    { path: "./fonts/Inter-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Inter-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});
