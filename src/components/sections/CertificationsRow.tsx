import {
  ShieldCheck,
  Award,
  Leaf,
  HardHat,
  FileCheck,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import {
  certifications,
  type Certification,
  type CertificationType,
} from "@/data/certifications";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<CertificationType, LucideIcon> = {
  "iso-quality": Award,
  "iso-environment": Leaf,
  "iso-safety": HardHat,
  ak3: ShieldCheck,
  competence: FileCheck,
  business: Briefcase,
};

export function CertificationsRow() {
  return (
    <section className="section-y bg-concrete relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle 700px at 50% 100%, rgba(234,88,12,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container-page text-center">
        <Reveal>
          <SectionHeader label="Kredensial" align="center" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="heading-display mt-8 text-[clamp(36px,5vw,72px)]">
            Tersertifikasi.{" "}
            <span className="text-brand">Terbukti.</span> Dipercaya.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl mx-auto text-steel leading-relaxed">
            Triple ISO (Quality · Environment · OH&S), AK3 Kemnaker, BNSP
            Konstruksi, dan SBU resmi — komitmen kami pada standar dibuktikan
            dengan dokumen yang dapat diverifikasi.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => {
            const Icon = iconMap[c.iconKey];
            return (
              <Reveal key={c.id} delay={0.04 * i}>
                <CertCard cert={c} Icon={Icon} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert, Icon }: { cert: Certification; Icon: LucideIcon }) {
  return (
    <div className="group h-full bg-white border border-hairline p-6 md:p-7 hover:border-brand hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 transition-all duration-300 cursor-default text-left">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-full grid place-items-center border-[1.5px] border-brand bg-brand/5 group-hover:bg-brand transition-colors duration-300">
          <Icon
            size={22}
            strokeWidth={1.5}
            className="text-brand group-hover:text-white transition-colors duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-mono text-[10px] tracking-[0.18em] text-brand uppercase">
            {cert.code}
          </div>
          <h3 className="mt-1.5 font-display text-lg md:text-xl tracking-wider uppercase leading-tight">
            {cert.shortName}
          </h3>
          <p className="mt-1 text-xs text-steel-soft">{cert.fullName}</p>
        </div>
      </div>
    </div>
  );
}
