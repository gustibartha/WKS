"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { portfolio, portfolioCategories, type Project } from "@/data/portfolio";
import { PortfolioImage } from "@/components/ui/PortfolioImage";
import { cn } from "@/lib/cn";

const ALL = "__all__";

export function PortfolioFilter() {
  const categories = useMemo(() => portfolioCategories(), []);
  const [active, setActive] = useState<string>(ALL);
  const reduced = useReducedMotion();

  const filtered: Project[] = useMemo(
    () =>
      active === ALL
        ? portfolio
        : portfolio.filter((p) => p.category === active),
    [active]
  );

  const tabs = [{ slug: ALL, label: "Semua Karya" }, ...categories];

  return (
    <>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 border-b border-hairline pb-1">
        {tabs.map((t) => {
          const isActive = t.slug === active;
          const count =
            t.slug === ALL
              ? portfolio.length
              : portfolio.filter((p) => p.category === t.slug).length;
          return (
            <button
              key={t.slug}
              type="button"
              onClick={() => setActive(t.slug)}
              className={cn(
                "px-4 py-2.5 text-sm transition-all relative whitespace-nowrap",
                isActive
                  ? "text-brand"
                  : "text-steel hover:text-ink"
              )}
            >
              <span className="font-medium">{t.label}</span>
              <span className="ml-2 text-xs opacity-60">({count})</span>
              {isActive && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-brand"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.id}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: reduced ? 0 : i * 0.03,
              }}
              className="group relative overflow-hidden border border-hairline bg-white"
            >
              <div className="aspect-[4/3] relative">
                <PortfolioImage project={p} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 text-[10px] font-mono tracking-widest text-ink uppercase">
                  {p.year}
                </div>
              </div>

              <div className="p-5 md:p-6">
                <span className="font-mono text-[10px] tracking-[0.18em] text-brand uppercase">
                  {p.categoryLabel}
                </span>
                <h3 className="mt-2 font-display text-lg md:text-xl tracking-wide uppercase text-ink leading-tight">
                  {p.title}
                </h3>
                {p.location && (
                  <p className="mt-2 text-sm text-steel">{p.location}</p>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 py-20 text-center text-steel">
          Belum ada proyek di kategori ini.
        </div>
      )}
    </>
  );
}
