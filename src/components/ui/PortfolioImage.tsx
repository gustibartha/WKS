import type { Project } from "@/data/portfolio";
import { ServiceIcon } from "./ServiceIcon";
import { SmartImage } from "./SmartImage";
import { cn } from "@/lib/cn";

type Props = {
  project: Project;
  className?: string;
  priority?: boolean;
};

/**
 * Render foto portofolio kalau tersedia, atau placeholder visual berbasis
 * ikon kategori kalau `image` belum di-set. Kalau `image` di-set tapi
 * file tidak ditemukan (404), fallback ke placeholder secara otomatis
 * via SmartImage — jadi tidak ada broken-image icon.
 */
export function PortfolioImage({ project, className, priority }: Props) {
  const Placeholder = (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden",
        "bg-gradient-to-br from-concrete via-offwhite to-concrete"
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--color-brand) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid place-items-center text-ink/30 group-hover:text-brand transition-colors duration-500">
        <ServiceIcon iconKey={project.iconKey} size={64} />
      </div>
      <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-ink/40 uppercase">
        {project.id} · {project.year}
      </div>
    </div>
  );

  if (project.image) {
    return (
      <div className={cn("relative w-full h-full overflow-hidden", className)}>
        <SmartImage
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={priority}
          fallback={Placeholder}
        />
      </div>
    );
  }

  return Placeholder;
}
