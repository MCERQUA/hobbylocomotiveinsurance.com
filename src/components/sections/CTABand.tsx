import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { FadeIn } from "@/components/animations/FadeIn";

export function CTABand() {
  return (
    <section className="relative section-pad-lg overflow-hidden bg-brand-ink">
      {/* Layered dark depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-ink to-brand-900" />
      <div className="absolute -top-24 left-1/4 w-[38rem] h-[38rem] rounded-full bg-brand-bright/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[42rem] h-[42rem] rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      <div className="relative container-xl text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-bright" />
            <span className="font-body text-xs font-bold uppercase tracking-[0.16em] text-white/90">
              Don&rsquo;t let a homeowners rider shortchange your collection
            </span>
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold mb-5 tracking-tight max-w-3xl mx-auto leading-[1.1]">
            Your <span className="text-gold-grad">$40,000 layout</span> deserves better than
            a $1,500 homeowners rider.
          </h2>
          <p className="font-body text-lg text-white/80 mb-9 max-w-2xl mx-auto leading-relaxed">
            Get a true agreed-value quote in minutes. Same-day binding, same-day
            certificates, and 20+ years protecting collectors and hobby railroads.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 rounded-xl font-body font-bold text-base shadow-gold hover:bg-gold-bright hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Get Your Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-body font-bold text-base hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
