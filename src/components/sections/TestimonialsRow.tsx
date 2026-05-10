import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function TestimonialsRow() {
  return (
    <section className="section-y bg-ink text-offwhite relative overflow-hidden">
      {/* Decorative big quote in background */}
      <div
        aria-hidden
        className="absolute -right-8 top-8 select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(280px, 36vw, 540px)",
          letterSpacing: "-0.05em",
          lineHeight: "0.85",
          color: "transparent",
          WebkitTextStroke: "1.5px rgba(234,88,12,0.15)",
        }}
      >
        “
      </div>

      <div className="container-page relative z-10">
        <Reveal>
          <SectionHeader number="05" label="Testimoni Klien" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="heading-display mt-8 text-[clamp(40px,6vw,92px)] max-w-4xl">
            APA KATA{" "}
            <span className="text-brand">MEREKA</span> YANG SUDAH BEKERJA SAMA.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-offwhite/70 leading-relaxed">
            Pengakuan terbaik datang dari mitra yang setiap hari merasakan
            hasil kerja kami di lapangan.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.08}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  const quote = t.highlightWord
    ? renderHighlightedQuote(t.quote, t.highlightWord)
    : t.quote;

  const isAnonymous = !t.name;
  const initials = (t.name ?? t.sector)
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <article className="group h-full bg-white/[0.04] border border-white/10 backdrop-blur-sm p-7 md:p-8 hover:border-brand/60 hover:bg-white/[0.06] transition-all duration-300 flex flex-col">
      <Quote
        size={32}
        strokeWidth={1.4}
        className="text-brand mb-5"
        aria-hidden
      />

      <blockquote className="text-base md:text-lg leading-relaxed text-offwhite/90 italic flex-1">
        “{quote}”
      </blockquote>

      <div className="mt-7 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="shrink-0 w-11 h-11 rounded-full bg-brand/15 border border-brand/40 grid place-items-center text-brand font-display text-base">
            {isAnonymous ? <Quote size={16} /> : initials}
          </div>
          <div className="min-w-0">
            <div className="font-display text-base tracking-wider uppercase text-offwhite leading-tight">
              {t.name ?? "Klien Anonim"}
            </div>
            <div className="text-xs text-offwhite/60 leading-tight mt-0.5">
              {t.role}
              {t.company ? ` · ${t.company}` : ""}
            </div>
          </div>
        </div>
        <div className="mt-3 text-mono-label !text-amber-400/70">
          {t.sector}
        </div>
      </div>
    </article>
  );
}

/**
 * Render kutipan dengan highlight kata kunci di-warnai brand orange.
 */
function renderHighlightedQuote(quote: string, highlight: string) {
  const idx = quote.toLowerCase().indexOf(highlight.toLowerCase());
  if (idx === -1) return quote;
  const before = quote.slice(0, idx);
  const match = quote.slice(idx, idx + highlight.length);
  const after = quote.slice(idx + highlight.length);
  return (
    <>
      {before}
      <span className="text-brand not-italic font-medium">{match}</span>
      {after}
    </>
  );
}
