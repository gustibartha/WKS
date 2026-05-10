/**
 * Sumber tunggal informasi perusahaan.
 * Edit file ini untuk update data kontak/alamat di seluruh situs.
 */
export type Address = {
  label: string;
  street: string;
  district: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  full: string;
  mapEmbed: string;
  mapsLink: string;
  geo: { lat: number; lng: number };
};

export const company = {
  legalName: "PT Wira Karya Sinergi",
  shortName: "Wira Karya Sinergi",
  tagline: "Building Beyond Boundaries",
  tagDescription:
    "Mitra terpercaya pengadaan barang & jasa, mobilisasi alat, dan konstruksi sejak 2014.",
  foundedYear: 2014,

  /**
   * PT WKS punya dua lokasi resmi:
   * - headquarter: alamat hukum/registered (sesuai sertifikat ISO & badan usaha)
   * - workshop: lokasi operasional + bengkel kerja
   */
  addresses: {
    headquarter: {
      label: "Kantor Pusat",
      street: "Jalan Pluit Karang Ayu Blok A/5",
      district: "Kelurahan Pluit, Kec. Penjaringan",
      city: "Jakarta Utara",
      region: "DKI Jakarta",
      postalCode: "14450",
      country: "ID",
      full: "Jalan Pluit Karang Ayu Blok A/5, Pluit, Penjaringan, Jakarta Utara 14450",
      mapEmbed:
        "https://maps.google.com/maps?q=Jalan+Pluit+Karang+Ayu+Blok+A,+Penjaringan,+Jakarta+Utara&t=&z=16&ie=UTF8&iwloc=&output=embed",
      mapsLink:
        "https://maps.google.com/?q=Jalan+Pluit+Karang+Ayu+Blok+A/5,+Penjaringan,+Jakarta+Utara+14450",
      geo: { lat: -6.1265, lng: 106.7917 },
    } satisfies Address,

    workshop: {
      label: "Workshop & Operasional",
      street: "Jl. Kramat Jaya No. 22 T",
      district: "Tugu Utara, Koja",
      city: "Jakarta Utara",
      region: "DKI Jakarta",
      postalCode: "14260",
      country: "ID",
      full: "Jl. Kramat Jaya No. 22 T, Tugu Utara, Koja, Jakarta Utara 14260",
      mapEmbed:
        "https://maps.google.com/maps?q=Jl.+Kramat+Jaya+Koja+Jakarta+Utara&t=&z=15&ie=UTF8&iwloc=&output=embed",
      mapsLink:
        "https://maps.google.com/?q=Jl.+Kramat+Jaya+No.+22+T,+Tugu+Utara,+Koja,+Jakarta+Utara",
      geo: { lat: -6.1138, lng: 106.9019 },
    } satisfies Address,
  },

  email: "wirakaryasinergi@gmail.com",

  contacts: [
    {
      name: "Ardi",
      phone: "+62 813 8504 0467",
      whatsappNumber: "6281385040467",
      role: "Business Development",
    },
    {
      name: "Suparno",
      phone: "+62 821 1445 9919",
      whatsappNumber: "6282114459919",
      role: "Operations",
    },
  ],

  // Tombol WA mengambang default → Ardi
  primaryWhatsApp: "6281385040467",

  hours: {
    weekdays: "Senin – Jumat, 08.00 – 17.00 WIB",
    saturday: "Sabtu, 08.00 – 13.00 WIB",
    sunday: "Minggu & Hari Libur Nasional: Tutup",
  },

  social: {
    instagram: "",
    linkedin: "",
  },
} as const;

export type Company = typeof company;
