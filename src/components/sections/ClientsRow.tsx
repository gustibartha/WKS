import {
  Factory,
  Fuel,
  UtensilsCrossed,
  Warehouse,
  Bus,
  Hotel,
  Store,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import {
  clients,
  industriesServed,
  type Client,
  type IndustryIcon,
} from "@/data/clients";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const industryIconMap: Record<IndustryIcon, LucideIcon> = {
  oil: Fuel,
  factory: Factory,
  food: UtensilsCrossed,
  warehouse: Warehouse,
  bus: Bus,
  hotel: Hotel,
  shop: Store,
  community: Building2,
};

export function ClientsRow() {
  return (
    <section className="section-y bg-offwhite relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 800px 400px at 50% 0%, rgba(251,191,36,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container-page">
        <Reveal>
          <SectionHeader number="03" label="Dipercaya Oleh" />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 grid lg:grid-cols-[1fr_auto] items-end gap-6">
            <h2 className="heading-display text-[clamp(40px,6vw,92px)]">
              KLIEN <span className="text-brand">&amp;</span> MITRA
            </h2>
            <p className="max-w-md text-base text-steel leading-relaxed">
              Kami berkolaborasi dengan perusahaan dari berbagai sektor —
              dari pabrik kawasan industri hingga operator transportasi
              pariwisata.
            </p>
          </div>
        </Reveal>

        {/* Logo wall */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-hairline">
            {clients.map((c) => (
              <ClientCard key={c.slug} client={c} />
            ))}
          </div>
        </Reveal>

        {/* Industries served — secondary strip */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <div className="text-mono-label mb-6">[ SEKTOR INDUSTRI YANG DILAYANI ]</div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {industriesServed.map((ind, i) => {
              const Icon = industryIconMap[ind.iconKey];
              return (
                <Reveal key={ind.label} delay={i * 0.03}>
                  <div className="group flex flex-col items-center justify-center gap-3 p-4 bg-concrete border border-hairline hover:border-brand transition-colors aspect-square">
                    <Icon
                      size={28}
                      strokeWidth={1.4}
                      className="text-steel group-hover:text-brand transition-colors"
                    />
                    <span className="text-[11px] text-center text-steel font-medium leading-tight">
                      {ind.label}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Disclaimer */}
        <Reveal>
          <p className="mt-12 text-sm text-steel-soft text-center max-w-2xl mx-auto">
            Daftar klien lengkap dan referensi proyek tersedia atas permintaan
            untuk keperluan tender atau due diligence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────── */
/*  Single client card — auto handles logo / monogram / private    */
/* ────────────────────────────────────────────────────────────── */

function ClientCard({ client }: { client: Client }) {
  const isAnonymous = client.private === true;

  return (
    <div className="group relative bg-white border-r border-b border-hairline aspect-[3/2] grid place-items-center p-6 hover:bg-concrete transition-colors">
      {/* Foreground: logo / monogram / anonymous */}
      <div className="relative z-10 w-full h-full grid place-items-center">
        {client.logo && !isAnonymous ? (
          <div className="relative w-full h-full">
            <SmartImage
              src={client.logo}
              alt={`Logo ${client.name}`}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              fallback={
                <Monogram
                  name={client.name}
                  sector={client.sector}
                  anonymous={isAnonymous}
                />
              }
            />
          </div>
        ) : (
          <Monogram name={client.name} sector={client.sector} anonymous={isAnonymous} />
        )}
      </div>

      {/* Sector tag — hidden by default, fade in on hover */}
      <span className="absolute bottom-2 left-3 right-3 text-[10px] text-steel-soft font-mono tracking-widest uppercase text-center opacity-0 group-hover:opacity-100 transition-opacity">
        {isAnonymous ? "Klien Anonim · NDA" : client.sector}
      </span>
    </div>
  );
}

function Monogram({
  name,
  sector,
  anonymous,
}: {
  name: string;
  sector: string;
  anonymous: boolean;
}) {
  if (anonymous) {
    return (
      <div className="text-center">
        <div className="font-display text-3xl md:text-4xl tracking-widest text-steel-soft">
          ✦ ✦ ✦
        </div>
        <div className="mt-1 text-[10px] tracking-widest text-steel-soft font-mono uppercase">
          {sector}
        </div>
      </div>
    );
  }

  // Build initials from words
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);

  return (
    <div className="text-center">
      <div className="font-display text-3xl md:text-4xl tracking-widest text-steel group-hover:text-brand transition-colors">
        {initials}
      </div>
      <div className="mt-1.5 text-[11px] text-ink/70 font-medium leading-tight max-w-[140px] mx-auto">
        {name}
      </div>
    </div>
  );
}
