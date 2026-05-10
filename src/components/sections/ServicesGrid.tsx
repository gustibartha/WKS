import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesGrid() {
  return (
    <section id="layanan" className="section-y bg-offwhite">
      <div className="container-page">
        <Reveal>
          <SectionHeader number="02" label="Apa yang Kami Kerjakan" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="heading-display mt-8 text-[clamp(48px,7vw,110px)]">
            TUJUH{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "2px var(--color-ink)",
              }}
            >
              LAYANAN
            </span>
            <br />
            INTI.
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-hairline">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                href={`/layanan/${s.slug}`}
                className="group relative block bg-white p-7 md:p-8 border-r border-b border-hairline overflow-hidden h-full min-h-[260px]"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-br from-brand to-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                />
                <div className="relative z-10 flex flex-col justify-between h-full text-ink group-hover:text-white transition-colors duration-500">
                  <div>
                    <span className="font-mono text-xs tracking-[0.18em] text-brand group-hover:text-white/90 transition-colors">
                      SVC / {s.number}
                    </span>
                    <div className="my-5 text-ink group-hover:text-white transition-colors">
                      <ServiceIcon iconKey={s.iconKey} size={44} />
                    </div>
                    <h3 className="font-display text-2xl md:text-[26px] tracking-wide uppercase leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel group-hover:text-white/90 transition-colors max-w-xs">
                      {s.summary}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-widest uppercase">
                      Detail
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}

          {/* CTA tile — 8th slot to fill last row on large screens */}
          <Reveal delay={services.length * 0.04}>
            <Link
              href="/kontak"
              className="group relative block bg-ink text-offwhite p-7 md:p-8 border-r border-b border-hairline overflow-hidden h-full min-h-[260px]"
            >
              <span className="font-mono text-xs tracking-[0.18em] text-amber-400">
                CONSULT / 00
              </span>
              <div className="my-5 text-amber-400">
                <ArrowUpRight size={44} strokeWidth={1.4} />
              </div>
              <h3 className="font-display text-2xl md:text-[26px] tracking-wide uppercase leading-tight text-amber-400">
                Custom Project
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-offwhite/70 max-w-xs">
                Kebutuhan Anda di luar kategori? Kami terbuka untuk solusi
                terkustomisasi. Mari diskusikan.
              </p>
              <div className="mt-6 font-mono text-[11px] tracking-widest uppercase text-amber-400">
                Hubungi Kami →
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
