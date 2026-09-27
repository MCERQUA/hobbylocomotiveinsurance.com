import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

// Heritage, hobby-correct reasons (template copy was a framing find-replace).
const REASONS = [
  {
    title: "Hobby Specialists, Not Generalists",
    desc: "We know agreed value for brass and postwar Lionel, NBIC boiler inspections for live steam, and the certificate demands fairgrounds put on show vendors.",
  },
  {
    title: "Specialty Markets Only",
    desc: "Access to collector and personal-articles carriers that actually underwrite model railroads, garden railways, and live steam — not homeowners markets that cap and depreciate.",
  },
  {
    title: "Same-Day Certificates",
    desc: "A venue or club needs proof of liability by tomorrow? We issue certificates of insurance and additional-insured endorsements the same day.",
  },
  {
    title: "Licensed in All 50 States",
    desc: "Whether your layout lives in your basement or your locomotive runs at a club three states over, we bind coverage exactly where you need it.",
  },
  {
    title: "Trusted Since 2005",
    desc: "Two decades placing specialty hobby coverage. We know the carriers that pay claims promptly — and the ones that argue over depreciation.",
  },
  {
    title: "Claims Advocacy",
    desc: "When a loss happens, we're in your corner with direct advocate support — not a carrier call-center maze that has never heard of a DCC decoder.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-canvas">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="right" className="relative">
            <div className="relative h-[440px] sm:h-[520px] rounded-3xl overflow-hidden shadow-float ring-1 ring-line">
              <Image
                src="/images/brass-locomotive.jpg"
                alt="Model railroad enthusiasts examining layouts and locomotives together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-ink/45 via-brand/10 to-transparent" />
            </div>
            {/* Floating credential chip */}
            <div className="absolute -bottom-5 -right-3 sm:right-6 bg-card rounded-2xl shadow-card ring-1 ring-line px-5 py-4 flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand text-white">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading font-extrabold text-ink text-lg leading-none">20+ yrs</p>
                <p className="font-body text-xs text-muted mt-1">50-state licensed</p>
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="eyebrow mb-3">Why CCA</p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-ink font-extrabold mb-4 tracking-tight">
                The specialty insurer for the{" "}
                <span className="text-brand">hobby railroad community</span>
              </h2>
              <p className="font-body text-lg text-muted leading-relaxed mb-8">
                We&rsquo;re not a generalist agency Googling &ldquo;LGB train value&rdquo;
                at claim time. We know agreed value, we know live-steam liability, and we
                know the markets built to underwrite this niche.
              </p>
            </FadeIn>

            <div className="space-y-5">
              {REASONS.map((r, i) => (
                <FadeIn key={r.title} delay={i * 0.05}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand/10 ring-1 ring-brand/20 flex items-center justify-center mt-0.5">
                      <BadgeCheck className="w-4 h-4 text-brand" strokeWidth={2.2} />
                    </div>
                    <div>
                      <p className="font-body font-bold text-ink text-[0.95rem] mb-1">{r.title}</p>
                      <p className="font-body text-sm text-muted leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
