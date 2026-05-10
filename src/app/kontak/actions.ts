"use server";

/**
 * Server Action — submit form kontak ke Web3Forms.
 * Web3Forms: https://web3forms.com — gratis, 250 submission/bulan, no signup ribet.
 *
 * Kalau WEB3FORMS_ACCESS_KEY belum di-set, action akan return fallback
 * sukses agar UI dev tidak rusak — pesan log dicetak ke server console.
 */

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
};

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePhone = (phone: string) =>
  /^[\d\s+\-()]{8,20}$/.test(phone);

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("website") ?? "").trim();

  // Spam check — honeypot
  if (honeypot) {
    return { status: "success", message: "Pesan terkirim. Tim kami akan segera menghubungi Anda." };
  }

  const errors: ContactFormState["errors"] = {};
  if (!name || name.length < 2) errors.name = "Mohon isi nama lengkap.";
  if (!email || !validateEmail(email)) errors.email = "Format email tidak valid.";
  if (!phone || !validatePhone(phone)) errors.phone = "Nomor telepon tidak valid.";
  if (!message || message.length < 10) errors.message = "Pesan minimal 10 karakter.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Mohon periksa kembali isian formulir.",
      errors,
    };
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    // Dev mode — log dan return success
    console.warn("[contact] WEB3FORMS_ACCESS_KEY belum di-set. Submission TIDAK terkirim.");
    console.info("[contact] Pesan dummy:", { name, email, phone, service, message });
    return {
      status: "success",
      message:
        "Pesan diterima (mode pengembangan). Untuk produksi, set WEB3FORMS_ACCESS_KEY pada environment variables.",
    };
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        from_name: "Form Kontak Website WKS",
        subject: `Pesan Baru dari ${name} — ${service || "Konsultasi Umum"}`,
        name,
        email,
        phone,
        service: service || "Tidak disebutkan",
        message,
        replyto: email,
      }),
    });

    const json = (await res.json()) as { success: boolean; message?: string };
    if (!res.ok || !json.success) {
      return {
        status: "error",
        message:
          json.message ??
          "Gagal mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp.",
      };
    }

    return {
      status: "success",
      message:
        "Terima kasih! Pesan Anda telah terkirim. Tim kami akan menghubungi dalam 1×24 jam kerja.",
    };
  } catch (err) {
    console.error("[contact] Web3Forms error:", err);
    return {
      status: "error",
      message: "Terjadi gangguan koneksi. Silakan coba lagi atau chat WhatsApp.",
    };
  }
}
