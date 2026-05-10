/**
 * Bangun URL wa.me dengan pesan ter-prefill.
 * @param phone - Nomor WhatsApp dalam format internasional tanpa "+" (contoh: "6281385040467")
 * @param message - Teks pesan otomatis (akan di-encode)
 */
export const buildWhatsAppUrl = (phone: string, message?: string) => {
  const cleaned = phone.replace(/[^\d]/g, "");
  const base = `https://wa.me/${cleaned}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

export const defaultGreeting =
  "Halo PT Wira Karya Sinergi, saya tertarik dengan layanan Anda. Bisa bantu informasi lebih lanjut?";

export const buildServiceInquiry = (serviceTitle: string) =>
  `Halo PT Wira Karya Sinergi, saya ingin bertanya tentang layanan *${serviceTitle}*. Mohon info lebih lanjut. Terima kasih.`;
