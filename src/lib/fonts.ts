import { Playfair_Display, Inter } from "next/font/google";

// Heritage typography (blueprint §8): authoritative serif headings
// (Playfair Display — premium heritage / collectibles-authority feel) + clean
// readable sans body (Inter). Playfair is statically weighted → reliable with
// next/font (variable fonts like Fraunces can reject explicit weight arrays).
// Export names + CSS vars are unchanged from the template so layout.tsx and the
// `font-heading` / `font-body` Tailwind families keep working untouched.
export const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
