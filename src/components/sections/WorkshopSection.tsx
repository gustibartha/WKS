import {
  Cog,
  Hammer,
  PackageOpen,
  Truck,
  Wrench,
  Users,
  MapPin,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import {
  workshopCapabilities,
  workshopGallery,
  type WorkshopCapability,
} from "@/data/workshop";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

const iconMap: Record<WorkshopCapability["iconKey"], LucideIcon> = {
  motor: Cog,
  fabrication: Hammer,
  storage: PackageOpen,
  logistics: Truck,
  tools: Wrench,
  team: Users,
};

export function WorkshopSection() {
  const ws = company.addresses.workshop;

  return (
    <section
      id="workshop"
      className="section-y bg-concrete relative overflow-hidden scroll-mt-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle 600px at 80% 20%, rgba(234,88,12,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container-page">
        <Reveal>
          <SectionHeader number="04" label="Workshop & Fasilitas" />
        </Reveal>

        <div className="mt-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <Reveal className="lg:col-span-7">
            <h2 className="heading-display text-[clamp(40px,6vw,92px)]">
              WORKSHOP DI{" "}
              <span className="text-brand">JANTUNG</span> KAWASAN INDUSTRI.
            </h2>
            <p className="mt-6 text-base md:text-lg text-steel leading-relaxed max-w-2xl">
              Workshop kami berlokasi di Koja, hanya beberapa menit dari
              Pelabuhan Tanjung Priok dan kawasan industri KBN. Posisi ini
              bukan kebetulan — kami sengaja dekat dengan ekosistem industri
              yang setiap hari kami layani.
            </p>
          </Reveal>

          {/* Address card */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="bg-ink text-offwhite p-7 md:p-8 corner-bracket">
              <div className="text-mono-label !text-amber-400 mb-3">
                [ ALAMAT WORKSHOP ]
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-1 text-brand" />
                <div>
                  <div className="font-display text-xl tracking-wide uppercase">
                    {ws.label}
                  </div>
                  <p className="mt-2 text-offwhite/80 leading-relaxed">
                    {ws.street}
                    <br />
                    {ws.district}
                    <br />
                    {ws.city} {ws.postalCode}
                  </p>
                  <a
                    href={ws.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-brand hover:text-amber-400 transition-colors"
                  >
                    Buka di Google Maps
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Capabilities grid */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <div className="text-mono-label mb-8">
              [ KAPABILITAS DI WORKSHOP ]
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workshopCapabilities.map((cap, i) => {
              const Icon = iconMap[cap.iconKey];
              return (
                <Reveal key={cap.title} delay={i * 0.04}>
                  <div className="group h-full bg-white border border-hairline p-6 md:p-7 hover:border-brand transition-colors">
                    <div className="w-12 h-12 grid place-items-center bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-5 font-display text-lg md:text-xl tracking-wide uppercase leading-tight">
                      {cap.title}
                    </h3>
                    <p className="mt-3 text-sm text-steel leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Photo gallery */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <div className="flex items-end justify-between gap-6 flex-wrap mb-6">
              <div>
                <div className="text-mono-label mb-2">[ GALERI WORKSHOP ]</div>
                <h3 className="font-display text-2xl md:text-3xl tracking-wide uppercase">
                  Lihat fasilitas kerja kami
                </h3>
              </div>
              <p className="text-sm text-steel-soft max-w-xs">
                Foto fasilitas akan diperbarui secara berkala. Kunjungan
                workshop dapat diatur dengan janji temu.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {workshopGallery.map((photo, i) => {
              const Icon = iconMap[photo.iconKey];
              return (
                <Reveal key={photo.slug} delay={i * 0.04}>
                  <div className="group relative aspect-[4/5] overflow-hidden border border-hairline bg-white">
                    {photo.image ? (
                      <SmartImage
                        src={photo.image}
                        alt={photo.caption}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        fallback={<PlaceholderTile Icon={Icon} />}
                      />
                    ) : (
                      <PlaceholderTile Icon={Icon} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent opacity-90 group-hover:from-brand/85 transition-colors duration-500" />
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <div className="font-mono text-[10px] tracking-widest text-amber-300 uppercase">
                        {photo.slug}
                      </div>
                      <h4 className="mt-1 font-display text-sm md:text-base text-white tracking-wide leading-tight">
                        {photo.caption}
                      </h4>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlaceholderTile({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-concrete via-offwhite to-concrete">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <Icon size={56} strokeWidth={1.2} className="text-ink/30" />
      </div>
    </div>
  );
}
