import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BigCTA } from "@/components/sections/BigCTA";
import { PortfolioFilter } from "@/components/interactive/PortfolioFilter";

export const metadata: Metadata = {
  title: "Portofolio",
  description:
    "Galeri karya PT Wira Karya Sinergi — pengadaan, konstruksi sipil, M&E, instalasi listrik, transportasi alat, interior, dan coating lantai. Difilter berdasarkan 7 kategori layanan.",
  alternates: { canonical: "/portofolio" },
};

export default function PortofolioPage() {
  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-offwhite border-b border-hairline overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-blueprint" aria-hidden />
        <div className="container-page">
          <SectionHeader number="04" label="Karya Kami" />
          <div className="mt-8 flex items-end justify-between gap-6 flex-wrap">
            <h1 className="heading-display text-[clamp(48px,9vw,140px)]">
              PORTOFOLIO.
            </h1>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-steel-soft border border-hairline px-4 py-2">
              2014 — 2025
            </span>
          </div>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-steel leading-relaxed">
            Pilihan proyek yang sudah kami selesaikan — dari pengadaan material
            kecil hingga konstruksi industri berskala penuh. Filter berdasarkan
            kategori layanan untuk lihat detail per bidang.
          </p>
        </div>
      </section>

      <section className="section-y bg-offwhite">
        <div className="container-page">
          <PortfolioFilter />

          <div className="mt-16 p-6 md:p-8 bg-concrete border-l-4 border-brand">
            <p className="text-sm md:text-base text-steel leading-relaxed">
              <strong className="text-ink font-medium">
                Catatan untuk pengunjung:
              </strong>{" "}
              Foto-foto akan diperbarui secara berkala. Beberapa proyek belum
              dapat ditampilkan secara visual karena alasan kerahasiaan klien.
              Untuk diskusi spesifik mengenai pengalaman kami pada bidang
              tertentu, silakan hubungi kami langsung.
            </p>
          </div>
        </div>
      </section>

      <BigCTA
        heading="Punya proyek yang ingin dikerjakan?"
        emphasis="Mari mulai."
        ctaText="Konsultasi Sekarang"
      />
    </>
  );
}
