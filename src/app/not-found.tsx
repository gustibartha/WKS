import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80svh] grid place-items-center px-5 py-32 bg-offwhite relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-blueprint" aria-hidden />
      <div className="text-center relative z-10">
        <div
          aria-hidden
          className="font-display leading-none select-none"
          style={{
            fontSize: "clamp(120px, 24vw, 320px)",
            color: "transparent",
            WebkitTextStroke: "2px var(--color-ink)",
            letterSpacing: "-0.02em",
          }}
        >
          404
        </div>
        <span className="font-mono text-xs tracking-[0.2em] text-brand uppercase">
          [ HALAMAN TIDAK DITEMUKAN ]
        </span>
        <h1 className="heading-display mt-5 text-3xl md:text-5xl">
          Sepertinya kami salah jalur.
        </h1>
        <p className="mt-5 text-steel max-w-md mx-auto leading-relaxed">
          URL yang Anda buka tidak tersedia, mungkin sudah dipindahkan atau
          memang tidak pernah ada. Mari kembali ke jalur utama.
        </p>
        <Link
          href="/"
          className="group mt-9 inline-flex items-center gap-3 bg-ink text-offwhite px-7 py-4 font-display tracking-[0.2em] text-sm uppercase hover:bg-brand transition-colors"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Kembali ke Beranda
        </Link>
      </div>
    </section>
  );
}
