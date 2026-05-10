import { Award, Users } from "lucide-react";
import { SmartImage } from "@/components/ui/SmartImage";
import { teamLeaders, teamCapacity, type TeamMember } from "@/data/team";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function TeamSection() {
  return (
    <section id="tim" className="section-y bg-offwhite scroll-mt-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader number="03" label="Tim Inti" />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 grid lg:grid-cols-[1fr_auto] items-end gap-6">
            <h2 className="heading-display text-[clamp(40px,6vw,92px)] max-w-3xl">
              ORANG-ORANG DI BALIK{" "}
              <span className="text-brand">SETIAP PROYEK.</span>
            </h2>
            <p className="max-w-md text-base text-steel leading-relaxed">
              Kombinasi kepemimpinan berpengalaman dan tim teknis yang solid —
              fokus utama kami adalah eksekusi yang konsisten di lapangan.
            </p>
          </div>
        </Reveal>

        {/* Leaders grid */}
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {teamLeaders.map((member, i) => (
            <Reveal key={member.slug} delay={i * 0.06}>
              <LeaderCard member={member} />
            </Reveal>
          ))}
        </div>

        {/* Capacity stats */}
        <div className="mt-14 md:mt-20 pt-12 border-t border-hairline">
          <Reveal>
            <div className="text-mono-label mb-8 flex items-center gap-3">
              <Users size={14} />
              [ KAPASITAS TIM OPERASIONAL ]
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-8 md:gap-12">
            {teamCapacity.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05}>
                <div>
                  <div className="font-display text-6xl md:text-7xl text-brand leading-none">
                    {c.number}
                  </div>
                  <div className="mt-3 font-display text-base tracking-widest uppercase text-ink">
                    {c.label}
                  </div>
                  <p className="mt-3 text-sm text-steel leading-relaxed max-w-xs">
                    {c.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LeaderCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <article className="group h-full bg-white border border-hairline corner-bracket overflow-hidden hover:border-brand transition-colors flex flex-col">
      {/* Photo / monogram block */}
      <div className="relative aspect-[5/4] bg-gradient-to-br from-concrete via-offwhite to-concrete border-b border-hairline overflow-hidden">
        {(() => {
          const placeholder = (
            <>
              <div
                aria-hidden
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <div className="font-display text-7xl md:text-8xl text-brand/20 group-hover:text-brand/40 transition-colors duration-500 tracking-widest">
                  {initials}
                </div>
              </div>
            </>
          );
          return member.photo ? (
            <SmartImage
              src={member.photo}
              alt={`Foto ${member.name}`}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              fallback={placeholder}
            />
          ) : (
            placeholder
          );
        })()}
        {/* Role tag */}
        <div className="absolute top-3 left-3 bg-ink text-white px-2.5 py-1.5 font-mono text-[10px] tracking-widest uppercase">
          {member.role}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-7 flex-1 flex flex-col">
        <h3 className="font-display text-2xl md:text-[26px] tracking-wide uppercase leading-tight">
          {member.name}
        </h3>
        <p className="mt-3 text-sm text-steel leading-relaxed">
          {member.shortBio}
        </p>

        {member.certifications && member.certifications.length > 0 && (
          <div className="mt-5 pt-5 border-t border-hairline space-y-2">
            {member.certifications.map((cert) => (
              <div key={cert} className="flex items-start gap-2 text-xs text-ink">
                <Award size={14} className="shrink-0 mt-0.5 text-brand" />
                <span className="leading-snug">{cert}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
