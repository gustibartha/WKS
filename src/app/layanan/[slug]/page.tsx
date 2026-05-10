import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { BigCTA } from "@/components/sections/BigCTA";
import { findService, services } from "@/data/services";
import { portfolio } from "@/data/portfolio";
import { company } from "@/data/company";
import { buildServiceInquiry, buildWhatsAppUrl } from "@/lib/whatsapp";
import { PortfolioImage } from "@/components/ui/PortfolioImage";

type RouteParams = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const service = findService(slug);
  if (!service) return { title: "Layanan tidak ditemukan" };
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/layanan/${service.slug}` },
  };
}

export default async function ServiceDetailPage(props: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await props.params;
  const service = findService(slug);
  if (!service) notFound();

  const related = portfolio.filter((p) => p.category === slug).slice(0, 4);
  const idx = services.findIndex((s) => s.slug === slug);
  const nextService = services[(idx + 1) % services.length];
  const waUrl = buildWhatsAppUrl(
    company.primaryWhatsApp,
    buildServiceInquiry(service.title)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-offwhite border-b border-hairline overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-blueprint" aria-hidden />
        <div className="container-page">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 text-mono-label text-steel hover:text-brand transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Semua Layanan
          </Link>

          <div className="grid lg:grid-cols-[1fr_auto] items-end gap-10">
            <div>
              <span className="font-mono text-xs tracking-[0.18em] text-brand">
                LAYANAN / {service.number}
              </span>
              <h1 className="heading-display mt-5 text-[clamp(40px,7vw,108px)]">
                {service.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base md:text-lg text-steel leading-relaxed">
                {service.summary}
              </p>
            </div>

            <div className="shrink-0 w-28 h-28 md:w-36 md:h-36 grid place-items-center bg-brand text-white rounded-md shadow-2xl shadow-brand/30">
              <ServiceIcon iconKey={service.iconKey} size={64} />
            </div>
          </div>
        </div>
      </section>

      {/* Detail */}
      <section className="section-y bg-offwhite">
        <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-8">
            <SectionHeader label="Penjelasan Layanan" />
            <div className="mt-8 space-y-5 text-base md:text-lg text-steel leading-relaxed">
              {service.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="bg-concrete border border-hairline p-7 sticky top-28">
              <SectionHeader label="Yang Anda Dapat" />
              <ul className="mt-6 space-y-4">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-brand shrink-0 mt-0.5"
                    />
                    <span className="text-ink leading-snug">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 pt-6 border-t border-hairline space-y-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 hover:bg-[#1fbb59] transition-colors text-sm font-medium tracking-wider uppercase"
                >
                  <MessageCircle size={16} />
                  Tanya via WhatsApp
                </a>
                <Link
                  href="/kontak"
                  className="w-full inline-flex items-center justify-center gap-2 border border-ink text-ink py-3 hover:bg-ink hover:text-white transition-colors text-sm font-medium tracking-wider uppercase"
                >
                  Form Kontak
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related portfolio */}
      {related.length > 0 && (
        <section className="section-y bg-concrete">
          <div className="container-page">
            <Reveal>
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <div>
                  <SectionHeader label="Karya Terkait" />
                  <h2 className="heading-display mt-4 text-[clamp(32px,4vw,56px)]">
                    Proyek dalam kategori ini
                  </h2>
                </div>
                <Link
                  href="/portofolio"
                  className="text-mono-label text-ink hover:text-brand inline-flex items-center gap-2 transition-colors"
                >
                  Lihat Semua →
                </Link>
              </div>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.05}>
                  <Link
                    href="/portofolio"
                    className="group relative block aspect-[4/3] overflow-hidden border border-hairline bg-white"
                  >
                    <PortfolioImage project={p} />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent group-hover:from-brand/85 transition-colors duration-500" />
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <span className="font-mono text-[10px] tracking-widest text-amber-300 uppercase">
                        {p.year}
                      </span>
                      <h3 className="mt-1 font-display text-base md:text-lg text-white tracking-wide leading-tight">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next service */}
      <section className="bg-ink text-offwhite py-12 md:py-16">
        <div className="container-page flex items-center justify-between gap-6 flex-wrap">
          <div>
            <span className="text-mono-label !text-amber-400">
              Layanan Berikutnya
            </span>
            <Link
              href={`/layanan/${nextService.slug}`}
              className="block mt-2 font-display text-3xl md:text-5xl tracking-wide uppercase hover:text-brand transition-colors"
            >
              {nextService.title} →
            </Link>
          </div>
          <div className="font-mono text-mono-label !text-offwhite/60">
            SVC / {nextService.number} of {services.length}
          </div>
        </div>
      </section>

      <BigCTA
        heading="Diskusikan kebutuhan Anda"
        emphasis="dengan tim kami."
        ctaText="Mulai Konsultasi"
      />
    </>
  );
}
