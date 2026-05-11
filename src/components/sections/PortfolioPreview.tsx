import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { visibleProjects } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { PortfolioImage } from "@/components/ui/PortfolioImage";

/**
 * Showcase 6 proyek terpilih di home, satu per kategori (kecuali yang sudah
 * tampil sebelumnya). Tidak menampilkan semua 28 — biarkan halaman /portofolio
 * jadi tujuan utama.
 */
export function PortfolioPreview() {
  // Pick first project from each unique category, max 6 — only visible
  const featured: typeof visibleProjects = [];
  const seen = new Set<string>();
  for (const p of visibleProjects) {
    if (!seen.has(p.category)) {
      seen.add(p.category);
      featured.push(p);
    }
    if (featured.length === 6) break;
  }

  return (
    <section className="section-y bg-offwhite">
      <div className="container-page">
        <Reveal>
          <SectionHeader number="04" label="Karya Pilihan" />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <h2 className="heading-display text-[clamp(48px,7vw,110px)]">
              KARYA <span className="italic text-brand">terbaik.</span>
            </h2>
            <Link
              href="/portofolio"
              className="group inline-flex items-center gap-2 text-mono-label text-ink hover:text-brand transition-colors border border-hairline hover:border-brand px-4 py-3"
            >
              LIHAT SEMUA PROYEK
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-4 auto-rows-[180px]">
            {featured.map((p, i) => {
              // Asymmetric grid for visual interest
              const span = [
                "col-span-2 md:col-span-4 row-span-2",
                "col-span-2 md:col-span-2 row-span-1",
                "col-span-2 md:col-span-2 row-span-1",
                "col-span-2 md:col-span-3 row-span-2",
                "col-span-2 md:col-span-3 row-span-1",
                "col-span-2 md:col-span-3 row-span-1",
              ];
              return (
                <Link
                  key={p.id}
                  href="/portofolio"
                  className={`${span[i]} group relative overflow-hidden border border-hairline`}
                >
                  <PortfolioImage project={p} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent group-hover:from-brand/90 group-hover:via-brand/40 transition-all duration-500" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-amber-300 group-hover:text-white transition-colors">
                      {p.categoryLabel}
                    </span>
                    <h3 className="mt-1 font-display text-lg md:text-xl tracking-wide text-white leading-tight">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
