import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { MissionIcon } from "@/components/ui/MissionIcon";
import { BigCTA } from "@/components/sections/BigCTA";
import { TeamSection } from "@/components/sections/TeamSection";
import { WorkshopSection } from "@/components/sections/WorkshopSection";
import { mission, vision } from "@/data/mission";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Sejarah, visi, misi, tim inti, dan fasilitas workshop PT Wira Karya Sinergi — perusahaan penyedia barang & jasa, mobilisasi alat, dan konstruksi sejak 2014, berbasis di Pluit & Koja, Jakarta Utara.",
  alternates: { canonical: "/tentang" },
};

export default function TentangPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-offwhite border-b border-hairline overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-blueprint" aria-hidden />
        <div className="container-page">
          <SectionHeader number="01" label="Tentang Perusahaan" />
          <h1 className="heading-display mt-8 text-[clamp(48px,9vw,140px)]">
            BERDIRI
            <br />
            <span className="text-brand">SEJAK {company.foundedYear}.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-steel leading-relaxed">
            {company.legalName} adalah perusahaan lokal berorientasi pelanggan
            yang berbasis di kawasan industri Tanjung Priok, Jakarta Utara.
            Kantor dan workshop kami memberi akses bisnis langsung ke pelanggan
            di seluruh kawasan industri Jakarta Utara.
          </p>

          {/* Anchor jumps */}
          <nav aria-label="Section navigation" className="mt-8 flex flex-wrap gap-2">
            {[
              { href: "#narrative", label: "Sejarah" },
              { href: "#vision", label: "Visi & Misi" },
              { href: "#tim", label: "Tim Inti" },
              { href: "#workshop", label: "Workshop" },
            ].map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="inline-flex items-center gap-2 px-4 py-2 text-mono-label text-ink border border-hairline hover:border-brand hover:text-brand transition-colors"
              >
                {a.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Sejarah / paragraf naratif */}
      <section id="narrative" className="section-y bg-offwhite scroll-mt-28">
        <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="text-mono-label">[ NARATIF ]</div>
            <h2 className="heading-display mt-4 text-[clamp(36px,4.5vw,60px)]">
              Tim profesional dengan pengalaman{" "}
              <span className="text-brand">10 tahun lebih.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-base md:text-lg text-steel leading-relaxed">
              <p>
                {company.legalName} berdiri pada tahun {company.foundedYear} dari
                gabungan profesional dan teknisi yang sebelumnya telah berkarier
                lebih dari satu dekade di bidang pengadaan barang dan jasa,
                konstruksi sipil, serta mobilisasi alat berat di kawasan
                industri Indonesia.
              </p>
              <p>
                Berkantor di Jl. Kramat Jaya, Tugu Utara, Koja — kami berada di
                jantung kawasan industri Jakarta Utara, hanya beberapa menit
                dari Pelabuhan Tanjung Priok. Lokasi ini bukan kebetulan: kami
                ingin dekat dengan klien dan ekosistem industri yang kami layani
                setiap hari.
              </p>
              <p>
                Lebih dari sekadar penyedia jasa, kami melihat diri kami sebagai{" "}
                <strong className="text-ink font-medium">
                  partner pelaksana
                </strong>{" "}
                yang ikut menjaga reputasi proyek klien. Itulah sebabnya kami
                tidak pernah berkompromi pada tiga hal: ketepatan waktu, mutu
                pengerjaan, dan keselamatan kerja.
              </p>
              <p>
                Setiap proyek — dari pengadaan material kecil hingga konstruksi
                pabrik berskala besar — dijalankan dengan dokumentasi yang rapi,
                komunikasi yang transparan, serta tim yang dapat
                dipertanggungjawabkan.
              </p>
            </div>

            {/* Stats inline */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-10 border-t border-hairline">
              <div>
                <div className="font-display text-5xl text-brand leading-none">
                  10+
                </div>
                <div className="mt-2 text-mono-label">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="font-display text-5xl text-brand leading-none">
                  7
                </div>
                <div className="mt-2 text-mono-label">Layanan Inti</div>
              </div>
              <div>
                <div className="font-display text-5xl text-brand leading-none">
                  5
                </div>
                <div className="mt-2 text-mono-label">Sertifikasi Resmi</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Visi */}
      <section id="vision" className="section-y bg-concrete relative overflow-hidden scroll-mt-28">
        <div
          aria-hidden
          className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(220px, 36vw, 520px)",
            letterSpacing: "-0.05em",
            lineHeight: "0.85",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(234,88,12,0.15)",
          }}
        >
          02
        </div>

        <div className="container-page relative z-10">
          <Reveal>
            <SectionHeader number="02" label="Visi & Misi" />
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-3 gap-10">
            <Reveal className="lg:col-span-1">
              <div className="bg-gradient-to-br from-brand to-orange-700 text-white p-10 md:p-12 relative overflow-hidden h-full">
                <span
                  aria-hidden
                  className="absolute -right-10 -bottom-20 select-none font-display leading-none"
                  style={{
                    fontSize: "240px",
                    color: "rgba(255,255,255,0.15)",
                  }}
                >
                  V
                </span>
                <h3 className="font-display text-4xl md:text-5xl tracking-widest uppercase relative z-10">
                  Visi
                </h3>
                <p className="mt-5 text-base md:text-lg leading-relaxed relative z-10">
                  {vision}
                </p>
              </div>
            </Reveal>

            <div className="lg:col-span-2">
              <Reveal>
                <h3 className="font-display text-3xl md:text-4xl tracking-widest uppercase mb-2">
                  Misi
                </h3>
                <p className="text-mono-label mb-6">
                  Tujuh komitmen yang kami pegang setiap hari
                </p>
              </Reveal>

              <ul>
                {mission.map((m, i) => (
                  <Reveal key={m.number} delay={i * 0.04}>
                    <li className="group grid grid-cols-[auto_1fr] gap-5 py-6 border-b border-hairline transition-all hover:pl-3">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs tracking-widest text-steel-soft group-hover:text-brand transition-colors w-10">
                          M.{m.number}
                        </span>
                        <span className="text-brand">
                          <MissionIcon iconKey={m.iconKey} size={22} />
                        </span>
                      </div>
                      <div>
                        <h4 className="font-display text-xl md:text-2xl tracking-wider uppercase">
                          {m.title}
                        </h4>
                        <p className="mt-1.5 text-steel leading-relaxed">
                          {m.text}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
      <WorkshopSection />

      <BigCTA
        heading="Lebih dekat dengan tim kami,"
        emphasis="lebih cepat solusinya."
        ctaText="Hubungi Kami"
      />
    </>
  );
}
