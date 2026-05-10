"use client";

import Image, { type ImageProps } from "next/image";
import { useState, type ReactNode } from "react";

type Props = Omit<ImageProps, "onError"> & {
  /** Diserve saat src tidak bisa di-load (404 / corrupt / dll). */
  fallback: ReactNode;
};

/**
 * next/image dengan fallback otomatis kalau file gambar belum ada.
 * Berguna saat klien sedang melengkapi aset gambar — section tetap
 * tampil rapi tanpa broken-image icon.
 */
export function SmartImage({ fallback, alt, ...props }: Props) {
  const [error, setError] = useState(false);
  if (error) return <>{fallback}</>;
  return <Image alt={alt} {...props} onError={() => setError(true)} />;
}
