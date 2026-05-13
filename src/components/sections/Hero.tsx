import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-start overflow-hidden pt-24 md:pt-28 pb-20">
      {/* Layered backgrounds */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 1000px 600px at 80% 20%, rgba(245,158,11,0.18) 0%, transparent 60%), radial-gradient(ellipse 800px 500px at 10% 80%, rgba(234,88,12,0.10) 0%, transparent 55%), var(--color-offwhite)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-blueprint" aria-hidden />

      {/* Big background text */}
      <div
        aria-hidden
        className="absolute -bottom-10 -left-6 select-none pointer-events-none whitespace-nowrap"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(120px, 28vw, 420px)",
          letterSpacing: "-0.04em",
          lineHeight: "0.85",
          color: "transparent",
          WebkitTextStroke: "1px rgba(234,88,12,0.15)",
        }}
      >
        CONSTRUCTION
      </div>

      {/* Corner brackets */}
      <div className="absolute inset-6 md:inset-10 pointer-events-none" aria-hidden>
        <span className="absolute top-0 left-0 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-brand" />
        <span className="absolute top-0 right-0 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-brand" />
        <span className="absolute bottom-0 left-0 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-brand" />
        <span className="absolute bottom-0 right-0 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-brand" />
      </div>

      <div className="container-page relative z-[1]">
        <div className="flex items-center gap-4 mb-8 animate-[fadeUp_0.8s_0.2s_both]">
          <span className="w-14 h-px bg-brand" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-steel-soft">
            EST. {company.foundedYear} — JAKARTA, INDONESIA
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.35fr_1fr] items-center gap-10 lg:gap-14">
          <div>
            <h1 className="heading-display text-[clamp(48px,9vw,148px)] leading-[0.88] mb-6">
              <span className="block">BUILDING</span>
              <span className="block text-brand">BEYOND</span>
              <span
                className="block"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px var(--color-ink)",
                }}
              >
                BOUNDARIES
              </span>
            </h1>

            <div className="grid md:grid-cols-[1fr_auto] items-end gap-6 md:gap-10 mt-8 max-w-3xl">
              <p className="text-base md:text-lg text-steel leading-relaxed">
                <strong className="text-ink font-medium">{company.legalName}</strong>{" "}
                — Mitra terpercaya untuk pengadaan barang & jasa, mobilisasi alat,
                dan konstruksi. Dibangun atas dasar integritas, keahlian teknis lebih
                dari satu dekade, dan komitmen terhadap kualitas tanpa kompromi.
              </p>
              <Link
                href="/layanan"
                className="group relative inline-flex items-center gap-3 bg-ink text-offwhite px-7 py-4 font-display tracking-[0.2em] text-sm overflow-hidden hover:shadow-2xl hover:shadow-brand/30 transition-shadow"
              >
                <span className="absolute inset-0 bg-brand -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10">JELAJAHI LAYANAN</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Hero video */}
          <div className="relative animate-[fadeUp_0.9s_0.35s_both]">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden border border-hairline bg-ink shadow-2xl shadow-ink/20">
              <video
                src="/videos/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
                aria-label="Cuplikan proyek PT Wira Karya Sinergi"
              />
              {/* Subtle overlay for premium feel */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent pointer-events-none"
              />
              {/* Corner accents */}
              <span className="absolute top-3 left-3 w-5 h-5 border-t-[1.5px] border-l-[1.5px] border-brand" aria-hidden />
              <span className="absolute bottom-3 right-3 w-5 h-5 border-b-[1.5px] border-r-[1.5px] border-brand" aria-hidden />

              {/* Caption */}
              <div className="absolute top-4 left-4 flex items-center gap-2 text-white">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase">
                  Live from the Field
                </span>
              </div>
            </div>

            {/* Decorative offset frame */}
            <div
              aria-hidden
              className="hidden lg:block absolute -top-3 -right-3 w-full h-full border border-brand/40 -z-10"
            />
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </section>
  );
}
