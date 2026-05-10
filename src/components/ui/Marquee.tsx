type Props = { items: string[] };

export function Marquee({ items }: Props) {
  // Duplicate untuk loop seamless
  const all = [...items, ...items];
  return (
    <div className="bg-brand text-white overflow-hidden border-y border-brand-hover/40 shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)]">
      <div className="flex gap-12 py-5 marquee-track whitespace-nowrap">
        {all.map((it, i) => (
          <span
            key={i}
            className="font-display text-lg md:text-xl tracking-[0.2em] uppercase flex items-center gap-12"
          >
            {it}
            <span aria-hidden className="text-amber-300">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
