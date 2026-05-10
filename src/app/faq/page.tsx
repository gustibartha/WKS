import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ChevronDown, MessageCircle, Mail } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { BigCTA } from "@/components/sections/BigCTA";
import { faqGroups } from "@/data/faq";
import { company } from "@/data/company";
import { buildWhatsAppUrl, defaultGreeting } from "@/lib/whatsapp";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — Pertanyaan yang Sering Diajukan",
  description:
    "Jawaban atas pertanyaan paling sering diajukan tentang kerja sama dengan PT Wira Karya Sinergi: cakupan layanan, proses kerja sama, garansi, K3, pembayaran, dan tender.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  // FAQPage schema.org JSON-LD untuk Google rich results
  const allItems = faqGroups.flatMap((g) => g.items);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq#faq`,
    mainEntity: allItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const waUrl = buildWhatsAppUrl(company.primaryWhatsApp, defaultGreeting);

  return (
    <>
      <Script
        id="ld-json-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-offwhite border-b border-hairline overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-blueprint" aria-hidden />
        <div className="container-page">
          <SectionHeader number="07" label="Pertanyaan Sering Diajukan" />
          <h1 className="heading-display mt-8 text-[clamp(48px,9vw,140px)]">
            FAQ.
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-steel leading-relaxed">
            Jawaban atas pertanyaan yang paling sering masuk dari calon klien
            kami. Tidak ketemu yang Anda cari? Hubungi kami langsung — tim
            kami siap menjawab.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#1fbb59] transition-colors"
            >
              <MessageCircle size={16} />
              Tanya via WhatsApp
            </a>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 border border-ink text-ink px-5 py-2.5 text-sm font-medium hover:bg-ink hover:text-white transition-colors"
            >
              <Mail size={16} />
              Form Kontak
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ groups */}
      <section className="section-y bg-offwhite">
        <div className="container-page max-w-4xl mx-auto">
          {faqGroups.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 0.05}>
              <div className="mb-14 last:mb-0">
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-mono text-xs tracking-[0.2em] text-brand">
                    [ 0{gi + 1} ]
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl tracking-wide uppercase leading-tight">
                    {group.group}
                  </h2>
                  <span className="flex-1 h-px bg-hairline" />
                </div>

                <div className="space-y-3">
                  {group.items.map((item, i) => (
                    <FaqDetail
                      key={item.q}
                      item={item}
                      defaultOpen={gi === 0 && i === 0}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="mt-16 p-7 md:p-8 bg-concrete border-l-4 border-brand">
              <h3 className="font-display text-xl md:text-2xl tracking-wide uppercase">
                Pertanyaan Anda belum terjawab?
              </h3>
              <p className="mt-3 text-steel leading-relaxed">
                Setiap proyek punya kebutuhan unik. Kalau Anda butuh
                klarifikasi spesifik untuk situasi proyek Anda, langsung
                hubungi kami. Tim kami biasanya merespons dalam 1×24 jam
                kerja.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#1fbb59] transition-colors"
                >
                  <MessageCircle size={16} />
                  Chat WhatsApp
                </a>
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 bg-ink text-white px-5 py-2.5 text-sm font-medium hover:bg-brand transition-colors"
                >
                  Kirim Pesan Tertulis →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <BigCTA
        heading="Siap mulai diskusi"
        emphasis="proyek Anda?"
        ctaText="Hubungi Tim Kami"
      />
    </>
  );
}

/**
 * Native <details>/<summary> accordion — zero JS, fully accessible,
 * indexable by Google. Styling pakai Tailwind selector group/state.
 */
function FaqDetail({
  item,
  defaultOpen,
}: {
  item: { q: string; a: string };
  defaultOpen?: boolean;
}) {
  return (
    <details
      open={defaultOpen}
      className="group bg-white border border-hairline open:border-brand/60 hover:border-ink/30 transition-colors"
    >
      <summary className="flex items-start justify-between gap-4 cursor-pointer list-none p-5 md:p-6 select-none">
        <h3 className="font-medium text-base md:text-lg text-ink leading-snug pr-4">
          {item.q}
        </h3>
        <span
          aria-hidden
          className="shrink-0 w-8 h-8 grid place-items-center bg-concrete border border-hairline group-open:bg-brand group-open:border-brand group-open:text-white transition-all"
        >
          <ChevronDown
            size={16}
            strokeWidth={2}
            className="group-open:rotate-180 transition-transform duration-300"
          />
        </span>
      </summary>
      <div className="px-5 pb-6 md:px-6 md:pb-7 -mt-1">
        <div className="border-t border-hairline pt-5 text-steel leading-relaxed">
          {item.a}
        </div>
      </div>
    </details>
  );
}
