import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/interactive/ContactForm";
import { company } from "@/data/company";
import { buildWhatsAppUrl, defaultGreeting } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi PT Wira Karya Sinergi untuk konsultasi pengadaan, konstruksi, dan mobilisasi alat. Kantor di Tanjung Priok Jakarta Utara. Telepon, WhatsApp, atau email.",
  alternates: { canonical: "/kontak" },
};

export default function KontakPage() {
  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 bg-offwhite border-b border-hairline overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-blueprint" aria-hidden />
        <div className="container-page">
          <SectionHeader number="06" label="Mari Berdiskusi" />
          <h1 className="heading-display mt-8 text-[clamp(48px,9vw,140px)]">
            HUBUNGI
            <br />
            <span className="text-brand">KAMI.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-steel leading-relaxed">
            Diskusikan kebutuhan proyek Anda — kami merespons dalam 1×24 jam
            kerja. Untuk respon lebih cepat, langsung hubungi via WhatsApp.
          </p>
          <div className="mt-6">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm text-brand hover:underline"
            >
              Sebelum kontak, cek dulu pertanyaan yang sering diajukan →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y bg-offwhite">
        <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <div className="bg-white border border-hairline corner-bracket p-6 md:p-10">
              <div className="text-mono-label text-brand mb-2">[ FORM KONTAK ]</div>
              <h2 className="font-display text-3xl md:text-4xl tracking-wide uppercase">
                Kirim pesan tertulis
              </h2>
              <p className="mt-3 text-steel">
                Untuk inquiry yang butuh dokumentasi atau lampiran, formulir ini
                paling rapi. Kami akan balas via email yang Anda isi.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          {/* Contact info */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="space-y-6">
              {/* Quick chat box */}
              <div className="bg-ink text-white p-7 md:p-8">
                <div className="text-mono-label !text-amber-400">[ RESPON CEPAT ]</div>
                <h3 className="mt-3 font-display text-2xl md:text-3xl tracking-wide uppercase">
                  Chat WhatsApp
                </h3>
                <p className="mt-3 text-sm text-offwhite/75 leading-relaxed">
                  Cara tercepat dapat respon. Pilih nomor sesuai kebutuhan:
                </p>

                <div className="mt-6 space-y-3">
                  {company.contacts.map((c) => (
                    <a
                      key={c.name}
                      href={buildWhatsAppUrl(c.whatsappNumber, defaultGreeting)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 p-4 border border-white/15 hover:border-amber-400 hover:bg-white/5 transition-colors"
                    >
                      <div>
                        <div className="font-display text-lg tracking-wide uppercase text-amber-400">
                          {c.name}
                        </div>
                        <div className="text-xs text-offwhite/60 mt-0.5">
                          {c.role}
                        </div>
                        <div className="mt-1 text-sm text-white">{c.phone}</div>
                      </div>
                      <div className="shrink-0 w-11 h-11 grid place-items-center bg-[#25D366] text-white rounded-full group-hover:scale-110 transition-transform">
                        <MessageCircle size={18} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Addresses — HQ + Workshop */}
              {(["headquarter", "workshop"] as const).map((key) => {
                const addr = company.addresses[key];
                return (
                  <div key={key} className="bg-white border border-hairline p-7">
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 w-10 h-10 grid place-items-center bg-brand/10 text-brand">
                        <MapPin size={18} />
                      </span>
                      <div>
                        <div className="text-mono-label">[ {addr.label.toUpperCase()} ]</div>
                        <p className="mt-2 text-ink leading-relaxed">
                          {addr.street}
                          <br />
                          {addr.district}
                          <br />
                          {addr.city} {addr.postalCode}
                        </p>
                        <a
                          href={addr.mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex text-sm text-brand hover:underline"
                        >
                          Buka di Google Maps →
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoCard
                  icon={<Mail size={18} />}
                  label="Email"
                  value={company.email}
                  href={`mailto:${company.email}`}
                />
                <InfoCard
                  icon={<Phone size={18} />}
                  label="Telepon Utama"
                  value={company.contacts[0].phone}
                  href={`tel:${company.contacts[0].phone.replace(/\s/g, "")}`}
                />
              </div>

              <div className="bg-white border border-hairline p-7">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-10 h-10 grid place-items-center bg-brand/10 text-brand">
                    <Clock size={18} />
                  </span>
                  <div>
                    <div className="text-mono-label">[ JAM OPERASIONAL ]</div>
                    <ul className="mt-2 space-y-1 text-sm text-ink leading-relaxed">
                      <li>{company.hours.weekdays}</li>
                      <li>{company.hours.saturday}</li>
                      <li className="text-steel-soft">{company.hours.sunday}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Maps — HQ + Workshop */}
      <section className="bg-concrete">
        <div className="container-page py-8">
          <div className="text-mono-label mb-3">[ LOKASI ]</div>
          <p className="text-sm text-steel max-w-2xl">
            Kantor pusat di Pluit (administrasi & legal), workshop operasional
            di Koja (akses langsung ke kawasan industri Tanjung Priok).
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-hairline">
          {(["headquarter", "workshop"] as const).map((key) => {
            const addr = company.addresses[key];
            return (
              <div key={key} className="relative bg-white">
                <div className="absolute top-4 left-4 z-10 bg-ink text-white px-3 py-2 text-xs font-mono tracking-widest uppercase">
                  {addr.label}
                </div>
                <iframe
                  src={addr.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "grayscale(0.4) contrast(1.05)",
                    minHeight: "400px",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Lokasi ${addr.label} ${company.legalName}`}
                  className="block w-full h-[400px] md:h-[480px]"
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group bg-white border border-hairline p-5 hover:border-brand transition-colors"
    >
      <div className="flex items-center gap-3">
        <span className="shrink-0 w-9 h-9 grid place-items-center bg-brand/10 text-brand">
          {icon}
        </span>
        <div className="min-w-0">
          <div className="text-mono-label">{label}</div>
          <div className="mt-0.5 text-sm text-ink truncate group-hover:text-brand transition-colors">
            {value}
          </div>
        </div>
      </div>
    </a>
  );
}
