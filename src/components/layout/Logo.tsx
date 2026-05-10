import Link from "next/link";

type Props = {
  variant?: "dark" | "light";
  withText?: boolean;
};

/**
 * Logo mark — pinwheel-style geometric square (referensi visual ke logo
 * resmi PT WKS yang berbentuk kincir warna). Dirender sebagai SVG agar
 * tajam di semua resolusi dan tidak membebani LCP.
 */
export function Logo({ variant = "dark", withText = true }: Props) {
  const text = variant === "dark" ? "text-ink" : "text-offwhite";
  return (
    <Link
      href="/"
      aria-label="PT Wira Karya Sinergi — Beranda"
      className="inline-flex items-center gap-2.5 group"
    >
      <span className="relative inline-block w-9 h-9 shrink-0">
        <svg
          viewBox="0 0 40 40"
          className="w-full h-full transition-transform duration-500 group-hover:rotate-90"
          aria-hidden
        >
          <rect x="1" y="1" width="38" height="38" rx="8" fill="white" stroke="#0f172a" strokeWidth="1.5"/>
          {/* Pinwheel petals */}
          <path d="M20 6 L26 14 L20 20 Z" fill="#dc2626"/>
          <path d="M34 20 L26 26 L20 20 Z" fill="#2563eb"/>
          <path d="M20 34 L14 26 L20 20 Z" fill="#16a34a"/>
          <path d="M6 20 L14 14 L20 20 Z" fill="#eab308"/>
          <circle cx="20" cy="20" r="2.2" fill="#0f172a"/>
        </svg>
      </span>
      {withText && (
        <span className={`font-display tracking-wider text-sm md:text-base ${text}`}>
          WIRA KARYA SINERGI
        </span>
      )}
    </Link>
  );
}
