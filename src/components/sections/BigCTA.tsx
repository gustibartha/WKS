import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  heading?: string;
  emphasis?: string;
  ctaText?: string;
  ctaHref?: string;
};

export function BigCTA({
  heading = "Siap membangun sesuatu yang",
  emphasis = "luar biasa?",
  ctaText = "Mulai Proyek Bersama Kami",
  ctaHref = "/kontak",
}: Props) {
  return (
    <section className="relative overflow-hidden text-white py-24 md:py-40 bg-gradient-to-br from-brand via-orange-500 to-brand">
      <div
        aria-hidden
        className="absolute -bottom-20 -left-10 select-none pointer-events-none whitespace-nowrap"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(180px, 28vw, 460px)",
          letterSpacing: "-0.05em",
          lineHeight: "0.85",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.18)",
        }}
      >
        LET&apos;S BUILD
      </div>

      <div className="container-page relative z-10">
        <h2 className="heading-display text-[clamp(48px,9vw,140px)] max-w-5xl">
          {heading}
          <br />
          <span className="italic font-display">{emphasis}</span>
        </h2>

        <Link
          href={ctaHref}
          className="group inline-flex items-center gap-5 md:gap-8 mt-12 text-white border-b-2 border-white pb-4 font-display tracking-[0.15em] text-lg md:text-2xl uppercase transition-all hover:gap-10"
        >
          {ctaText}
          <ArrowRight size={28} strokeWidth={2} className="shrink-0" />
        </Link>
      </div>
    </section>
  );
}
