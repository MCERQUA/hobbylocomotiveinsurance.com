import Link from "next/link";
import { AlertTriangle, TrendingDown, PackageX, ShieldAlert, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const GAPS = [
  {
    icon: AlertTriangle,
    title: "Capped at $1,000–$3,000",
    desc: "Collectibles sub-limits total just a few thousand dollars. A single brass locomotive — let alone a full layout — can exceed the entire cap.",
  },
  {
    icon: TrendingDown,
    title: "Paid at depreciated value",
    desc: "Homeowners pays actual cash value. That hand-built brass steamer you paid $3,500 for may settle at $900 after depreciation.",
  },
  {
    icon: PackageX,
    title: "No transit coverage",
    desc: "Hauling your layout or locomotive to a show? Damage in the truck is almost never covered once your collection leaves the house.",
  },
  {
    icon: ShieldAlert,
    title: "No club or event liability",
    desc: "Running live steam with passengers or exhibiting at a fairground? Homeowners excludes those liability exposures entirely.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-pad bg-panel/70">
      <div className="container-xl">
        <FadeIn>
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">The Problem</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-ink font-extrabold mb-4 tracking-tight">
              Your homeowners policy isn&rsquo;t built for this hobby.
            </h2>
            <p className="font-body text-lg text-muted leading-relaxed">
              Standard homeowners and renters policies treat a lifetime collection like a
              few hundred dollars of miscellany — and they quietly exclude almost everything
              that makes live steam, garden railways, and train shows possible.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 mb-10">
          {GAPS.map((g, i) => (
            <FadeIn key={g.title} delay={(i % 2) * 0.08}>
              <div className="flex gap-4 bg-card border border-line rounded-2xl p-6 h-full shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand/10 ring-1 ring-brand/15 flex items-center justify-center">
                  <g.icon className="w-6 h-6 text-brand" strokeWidth={1.9} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-ink text-lg mb-1.5 leading-snug">
                    {g.title}
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed">{g.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Outcome callout */}
        <FadeIn delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl bg-brand-ink px-7 py-8 sm:px-12 sm:py-10 shadow-float">
            <div className="absolute inset-0 bg-grid-dark opacity-30" />
            <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-gold/15 blur-3xl" />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-gold-bright mb-2">
                  The real-world result
                </p>
                <p className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-snug max-w-2xl">
                  A <span className="text-gold-grad">$40,000 collection</span> can be
                  reimbursed at <span className="line-through decoration-gold/60">$1,500</span>{" "}
                  — if it&rsquo;s covered at all.
                </p>
              </div>
              <Link
                href="/quote"
                className="inline-flex flex-shrink-0 items-center gap-2 bg-gold text-ink px-6 py-3.5 rounded-xl font-body font-bold text-base shadow-gold hover:bg-gold-bright hover:-translate-y-0.5 transition-all"
              >
                See true value coverage
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
