import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { BigCTA } from "@/components/sections/BigCTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Tujuh layanan inti PT Wira Karya Sinergi: pengadaan barang & jasa, konstruksi sipil, M&E, instalasi listrik, transportasi alat, interior, dan coating lantai.",
  alternates: { canonical: "/layanan" },
};

export default function LayananPage() {
  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-offwhite border-b border-hairline overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-blueprint" aria-hidden />
        <div className="container-page">
          <SectionHeader number="03" label="Layanan Kami" />
          <h1 className="heading-display mt-8 text-[clamp(48px,9vw,140px)]">
            TUJUH LINI
            <br />
            <span className="text-brand">SATU TIM.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-steel leading-relaxed">
            Setiap layanan dijalankan oleh tim spesialis dengan pengalaman
            lapangan langsung — bukan sekadar nama di brosur. Mulai dari
            pengadaan material kecil hingga konstruksi pabrik berskala penuh.
          </p>
        </div>
      </section>

      <section className="section-y bg-concrete">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/layanan/${s.slug}`}
                  className="group block bg-white border border-hairline corner-bracket p-8 md:p-10 hover:border-brand hover:shadow-2xl hover:shadow-brand/10 transition-all relative overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <span className="font-mono text-xs tracking-[0.18em] text-brand">
                        SVC / {s.number}
                      </span>
                      <h2 className="mt-4 font-display text-2xl md:text-3xl tracking-wide uppercase leading-tight">
                        {s.title}
                      </h2>
                      <p className="mt-4 text-steel leading-relaxed">
                        {s.summary}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {s.highlights.slice(0, 2).map((h) => (
                          <span
                            key={h}
                            className="text-xs px-3 py-1.5 bg-concrete border border-hairline text-steel"
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 inline-flex items-center gap-2 text-mono-label text-ink group-hover:text-brand transition-colors">
                        Pelajari Detail
                        <ArrowUpRight
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>

                    <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 grid place-items-center bg-brand/5 text-brand rounded-md group-hover:bg-brand group-hover:text-white transition-colors">
                      <ServiceIcon iconKey={s.iconKey} size={36} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BigCTA
        heading="Layanan Anda tidak ada di daftar?"
        emphasis="Mari diskusikan."
        ctaText="Konsultasi Gratis"
      />
    </>
  );
}
