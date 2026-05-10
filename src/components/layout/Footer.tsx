import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink text-offwhite mt-auto">
      {/* Top accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-brand via-amber-400 to-brand" />

      <div className="container-page py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-5">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm text-offwhite/70 leading-relaxed">
              {company.tagDescription}{" "}
              Membangun masa depan dengan integritas, presisi, dan keahlian sejak {company.foundedYear}.
            </p>

            <div className="mt-7 space-y-3 text-sm">
              <div className="flex items-start gap-3 text-offwhite/85">
                <MapPin size={16} className="shrink-0 mt-0.5 text-brand" />
                <div className="space-y-1">
                  <div>
                    <span className="text-offwhite/50 text-xs">Kantor Pusat:</span>{" "}
                    {company.addresses.headquarter.full}
                  </div>
                  <div>
                    <span className="text-offwhite/50 text-xs">Workshop:</span>{" "}
                    {company.addresses.workshop.full}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-offwhite/85">
                <Mail size={16} className="shrink-0 text-brand" />
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-brand transition-colors"
                >
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-mono-label !text-amber-400 mb-4">Kontak</h4>
            <ul className="space-y-4 text-sm">
              {company.contacts.map((c) => (
                <li key={c.name} className="flex items-start gap-3">
                  <Phone size={14} className="shrink-0 mt-1 text-brand" />
                  <div>
                    <a
                      href={`tel:${c.phone.replace(/\s/g, "")}`}
                      className="text-offwhite hover:text-brand transition-colors block"
                    >
                      {c.phone}
                    </a>
                    <span className="text-offwhite/50 text-xs">
                      {c.name} · {c.role}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-mono-label !text-amber-400 mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/layanan/${s.slug}`}
                    className="text-offwhite/85 hover:text-brand transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/layanan"
                  className="text-brand hover:text-amber-400 transition-colors"
                >
                  Lihat semua →
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-mono-label !text-amber-400 mb-4">Jelajahi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tentang" className="text-offwhite/85 hover:text-brand transition-colors">Tentang</Link></li>
              <li><Link href="/portofolio" className="text-offwhite/85 hover:text-brand transition-colors">Portofolio</Link></li>
              <li><Link href="/sertifikasi" className="text-offwhite/85 hover:text-brand transition-colors">Sertifikasi</Link></li>
              <li><Link href="/kontak" className="text-offwhite/85 hover:text-brand transition-colors">Kontak</Link></li>
            </ul>
          </div>
        </div>

        {/* Big watermark */}
        <div
          aria-hidden
          className="select-none mt-16 md:mt-20 font-display text-center leading-[0.85]"
          style={{
            fontSize: "clamp(72px, 14vw, 220px)",
            letterSpacing: "-0.04em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.08)",
          }}
        >
          WIRA KARYA SINERGI
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-mono-label !text-offwhite/50">
          <span>© {year} {company.legalName}. Hak Cipta Dilindungi.</span>
          <span>Dibangun dengan presisi · Jakarta, ID</span>
        </div>
      </div>
    </footer>
  );
}
