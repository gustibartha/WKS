"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { navLinks } from "@/data/navigation";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-offwhite/85 backdrop-blur-md border-b border-hairline py-3"
            : "py-5 bg-transparent"
        )}
      >
        <nav className="container-page flex items-center justify-between">
          <Logo />

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-mono-label transition-colors relative py-1",
                    isActive(link.href)
                      ? "text-brand"
                      : "text-ink/80 hover:text-brand"
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-brand" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/kontak"
            className="hidden md:inline-flex items-center gap-2 bg-ink text-offwhite px-4 py-2.5 text-mono-label !text-offwhite hover:bg-brand transition-colors"
          >
            Konsultasi Gratis
          </Link>

          <button
            type="button"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-ink"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-ink/40" onClick={() => setOpen(false)} />
        <div
          className={cn(
            "absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-offwhite shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="pt-24 px-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-2xl font-display py-3 border-b border-hairline transition-colors",
                  isActive(link.href) ? "text-brand" : "text-ink"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontak"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-ink text-offwhite px-6 py-4 font-display text-lg tracking-wider"
            >
              KONSULTASI GRATIS
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
