import { cn } from "@/lib/cn";

type Props = {
  number?: string;
  label: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * Spec-sheet style section header dengan nomor bracket dan garis horizontal.
 * Diulang konsisten di setiap section utama untuk menguatkan visual motif.
 */
export function SectionHeader({ number, label, align = "left", className }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-4",
        align === "center" && "justify-center",
        className
      )}
    >
      {number && (
        <span className="font-mono text-xs tracking-[0.18em] text-brand">
          [ {number} ]
        </span>
      )}
      <span className={cn("h-px bg-hairline flex-1", align === "center" && "max-w-24")} />
      <span className="font-mono text-xs tracking-[0.18em] uppercase text-steel-soft">
        {label}
      </span>
      {align === "center" && (
        <span className="h-px bg-hairline flex-1 max-w-24" />
      )}
    </div>
  );
}
