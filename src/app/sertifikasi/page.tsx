import type { Metadata } from "next";
import {
  ShieldCheck,
  Award,
  Leaf,
  HardHat,
  FileCheck,
  Briefcase,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { BigCTA } from "@/components/sections/BigCTA";
import {
  certifications,
  type Certification,
  type CertificationType,
} from "@/data/certifications";

export const metadata: Metadata = {
  title: "Sertifikasi",
  description:
    "Sertifikasi resmi PT Wira Karya Sinergi: ISO 9001 (Quality), ISO 14001 (Environmental), ISO 45001 (Occupational H&S), Ahli K3 Kemnaker, Sertifikat Kompetensi BNSP, dan Sertifikat Badan Usaha (SBU).",
  alternates: { canonical: "/sertifikasi" },
};

const iconMap: Record<CertificationType, LucideIcon> = {
  "iso-quality": Award,
  "iso-environment": Leaf,
  "iso-safety": HardHat,
  ak3: ShieldCheck,
  competence: FileCheck,
  business: Briefcase,
};

export default function SertifikasiPage() {
  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-offwhite border-b border-hairline overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-blueprint" aria-hidden />
        <div className="container-page">
          <SectionHeader number="05" label="Kredensial Resmi" />
          <h1 className="heading-display mt-8 text-[clamp(48px,8vw,120px)]">
            BUKTI YANG
            <br />
            <span className="text-brand">DAPAT DIVERIFIKASI.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-steel leading-relaxed">
            Setiap sertifikat di bawah ini terdaftar pada lembaga penerbit
            resmi dan dapat diverifikasi melalui nomor sertifikat yang
            tercantum. Komitmen kami pada kualitas, lingkungan, K3, dan
            kompetensi tidak hanya terucap — tetapi terdokumentasi.
          </p>

          {/* Quick stats strip */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
            <StatCard num="3" label="Standar ISO Aktif" />
            <StatCard num="2024" label="AK3 Kemnaker" />
            <StatCard num="5 thn" label="BNSP Kompetensi" />
            <StatCard num="2028" label="Berlaku s/d ISO" />
          </div>
        </div>
      </section>

      <section className="section-y bg-concrete">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {certifications.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.04}>
                <CertificateCard cert={c} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 p-6 md:p-8 bg-white border-l-4 border-amber-500">
              <p className="text-sm md:text-base text-steel leading-relaxed">
                <strong className="text-ink font-medium">Verifikasi:</strong>{" "}
                Salinan resmi seluruh sertifikat tersedia atas permintaan untuk
                keperluan tender, due diligence, atau audit klien. Untuk
                sertifikat ISO, verifikasi langsung dapat dilakukan melalui
                situs penerbit dengan nomor sertifikat yang tercantum.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <BigCTA
        heading="Butuh dokumen resmi"
        emphasis="untuk tender Anda?"
        ctaText="Minta Dokumen"
      />
    </>
  );
}

function StatCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="bg-white border border-hairline p-4">
      <div className="font-display text-3xl text-brand leading-none">{num}</div>
      <div className="mt-2 text-mono-label">{label}</div>
    </div>
  );
}

function CertificateCard({ cert }: { cert: Certification }) {
  const Icon = iconMap[cert.iconKey];
  const hasMeta =
    cert.certNumber ||
    cert.holder ||
    cert.qualification ||
    cert.issuedDate ||
    cert.expiryDate;

  return (
    <article className="bg-white border border-hairline hover:border-brand transition-colors h-full flex flex-col">
      {/* Header */}
      <div className="p-7 md:p-8 border-b border-hairline">
        <div className="flex items-start gap-5">
          <div className="shrink-0 w-14 h-14 grid place-items-center bg-brand text-white">
            <Icon size={26} strokeWidth={1.5} />
          </div>
          <div className="flex-1 min-w-0">
            <span className="font-mono text-xs tracking-[0.18em] text-brand">
              CERT / {cert.code}
            </span>
            <h2 className="mt-2 font-display text-2xl md:text-[26px] tracking-wide uppercase leading-tight">
              {cert.shortName}
            </h2>
            <p className="mt-1 text-mono-label">{cert.fullName}</p>
          </div>
        </div>
        <p className="mt-5 text-sm md:text-base text-steel leading-relaxed">
          {cert.description}
        </p>
      </div>

      {/* Verifiable metadata */}
      {hasMeta && (
        <div className="px-7 md:px-8 py-5 bg-concrete/40 border-b border-hairline">
          <div className="text-mono-label mb-3">[ DETAIL SERTIFIKAT ]</div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <MetaRow label="Penerbit" value={cert.issuer} />
            {cert.certNumber && (
              <MetaRow label="No. Sertifikat" value={cert.certNumber} mono />
            )}
            {cert.holder && (
              <MetaRow label="Atas Nama" value={cert.holder} />
            )}
            {cert.qualification && (
              <MetaRow
                label="Kualifikasi"
                value={cert.qualification}
                fullSpan
              />
            )}
            {cert.issuedDate && (
              <MetaRow label="Diterbitkan" value={cert.issuedDate} />
            )}
            {cert.expiryDate && (
              <MetaRow label="Berlaku s/d" value={cert.expiryDate} />
            )}
            {cert.validityNote && !cert.expiryDate && (
              <MetaRow
                label="Masa Berlaku"
                value={cert.validityNote}
                fullSpan
              />
            )}
          </dl>
          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-brand hover:underline"
            >
              Verifikasi di situs penerbit
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      )}

      {/* Image preview */}
      <div className="aspect-[3/4] bg-concrete relative mt-auto overflow-hidden">
        <CertificateVisual cert={cert} />
      </div>
    </article>
  );
}

function MetaRow({
  label,
  value,
  mono,
  fullSpan,
}: {
  label: string;
  value: string;
  mono?: boolean;
  fullSpan?: boolean;
}) {
  return (
    <div className={fullSpan ? "sm:col-span-2" : ""}>
      <dt className="text-xs text-steel-soft">{label}</dt>
      <dd
        className={`mt-0.5 text-ink ${
          mono ? "font-mono text-xs tracking-wider" : "text-sm"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

function CertificateVisual({ cert }: { cert: Certification }) {
  const Placeholder = (
    <div className="absolute inset-0 grid place-items-center">
      <div className="text-center">
        <div className="font-display text-6xl md:text-7xl text-brand/15 leading-none">
          {cert.code}
        </div>
        <div className="mt-3 text-mono-label">Foto sertifikat akan diupload</div>
      </div>
    </div>
  );

  if (cert.image) {
    return (
      <SmartImage
        src={cert.image}
        alt={`Sertifikat ${cert.shortName}`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-contain p-6"
        fallback={Placeholder}
      />
    );
  }
  return Placeholder;
}
