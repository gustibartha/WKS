import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

const stats = [
  { num: "10+", label: "Tahun Pengalaman" },
  { num: "7", label: "Layanan Inti" },
  { num: "6", label: "Sertifikasi Resmi" },
];

export function AboutPreview() {
  return (
    <section className="section-y bg-concrete relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(251,191,36,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="container-page">
        <Reveal>
          <SectionHeader number="01" label="Tentang Perusahaan" />
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <Reveal>
            <h2 className="heading-display text-[clamp(40px,5.5vw,76px)]">
              Forging
              <br />
              <span className="text-brand">progress</span>
              <br />
              since {company.foundedYear}.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-base md:text-lg text-steel leading-relaxed">
              <p>
                {company.legalName} berdiri pada tahun {company.foundedYear} sebagai
                perusahaan lokal yang berorientasi pelanggan, berbasis di kawasan
                industri Tanjung Priok, Jakarta Utara.
              </p>
              <p>
                Kami merupakan gabungan profesional dan teknisi berpengalaman{" "}
                <strong className="text-ink font-medium">lebih dari 10 tahun</strong>{" "}
                di bidang pengadaan barang dan jasa, mobilisasi alat berat, serta
                konstruksi sipil. Setiap proyek kami kerjakan dengan standar tertinggi —
                tepat waktu, tepat mutu, tepat biaya.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 pt-10 border-t border-hairline">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-5xl md:text-6xl text-brand leading-none">
                    {s.num}
                  </div>
                  <div className="mt-2 text-mono-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/tentang"
                className="group inline-flex items-center gap-2 text-ink hover:text-brand transition-colors font-medium border-b-2 border-ink hover:border-brand pb-1"
              >
                Pelajari sejarah & visi kami
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
