"use client";

import { useEffect, useState } from "react";
import { company } from "@/data/company";

function WhatsAppIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="white"
      aria-hidden
    >
      <path d="M16 .395C7.387.395.39 7.392.39 16.005c0 2.838.766 5.498 2.092 7.79L.5 31.605l8.025-2.099a15.546 15.546 0 0 0 7.475 1.91h.008c8.61 0 15.602-6.998 15.602-15.61C31.61 7.394 24.61.395 16 .395zm0 28.546h-.005a12.917 12.917 0 0 1-6.595-1.806l-.473-.281-4.91 1.288 1.31-4.79-.308-.49a12.901 12.901 0 0 1-1.973-6.857c0-7.137 5.81-12.946 12.953-12.946 3.46 0 6.71 1.348 9.151 3.795a12.847 12.847 0 0 1 3.792 9.158c0 7.138-5.81 12.93-12.942 12.93zm7.1-9.692c-.388-.196-2.301-1.137-2.658-1.265-.358-.13-.618-.196-.876.195-.26.39-1.005 1.265-1.232 1.526-.227.26-.454.293-.844.097-.39-.196-1.645-.606-3.134-1.933-1.157-1.034-1.94-2.31-2.166-2.7-.227-.39-.024-.6.171-.795.176-.175.39-.456.585-.683.196-.227.26-.39.39-.65.13-.26.064-.488-.032-.683-.097-.196-.876-2.114-1.2-2.894-.317-.762-.638-.66-.876-.672-.227-.013-.487-.015-.747-.015a1.42 1.42 0 0 0-1.04.488c-.357.39-1.36 1.331-1.36 3.247 0 1.917 1.392 3.768 1.587 4.028.196.26 2.747 4.196 6.658 5.882.93.401 1.658.642 2.222.823.934.297 1.785.255 2.456.155.749-.112 2.302-.94 2.626-1.85.325-.91.325-1.69.227-1.853-.097-.163-.357-.26-.747-.456z"/>
    </svg>
  );
}
import { buildWhatsAppUrl, defaultGreeting } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    // appear after small scroll, debounced
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // tooltip pulse — show label first 4s
  useEffect(() => {
    const t = setTimeout(() => setShowLabel(true), 1200);
    const t2 = setTimeout(() => setShowLabel(false), 5500);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  const url = buildWhatsAppUrl(company.primaryWhatsApp, defaultGreeting);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className={`fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 flex items-center gap-3 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <span
        className={`hidden md:inline-block bg-ink text-offwhite text-xs font-medium px-3 py-2 rounded-md shadow-lg transition-all duration-300 ${
          showLabel ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        Chat sekarang →
      </span>
      <span className="relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 hover:scale-105 transition-transform">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <WhatsAppIcon size={28} />
      </span>
    </a>
  );
}
