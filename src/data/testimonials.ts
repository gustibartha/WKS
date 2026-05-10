/**
 * Testimoni klien PT Wira Karya Sinergi.
 *
 * ⚠ ENTRI DI BAWAH ADALAH PLACEHOLDER ANONYMIZED. Boleh dipublikasi
 * apa adanya (semua tanpa nama spesifik), atau diganti dengan kutipan
 * resmi dari klien yang sudah memberi izin publikasi.
 *
 * Field `name` dan `company` opsional — kalau kosong, kartu render
 * sebagai "Anonymized client" dengan info sektor saja.
 *
 * Untuk menambah avatar foto, save di /public/images/testimonials/
 * dengan nama sesuai `slug`, lalu set `avatar: "/images/testimonials/<slug>.jpg"`.
 */
export type Testimonial = {
  slug: string;
  quote: string;
  name?: string;        // kosongkan kalau anonim
  role: string;
  company?: string;     // kosongkan kalau anonim
  sector: string;       // wajib — fallback display saat anonim
  avatar?: string;
  highlightWord?: string; // kata kunci yang di-highlight orange
};

export const testimonials: Testimonial[] = [
  {
    slug: "manufaktur-jaut",
    quote:
      "Tim WKS mengeksekusi pekerjaan beton bertulang area hydrant tanpa mengganggu operasional pabrik kami. Koordinasi rapi, dokumentasi progres harian, dan selesai sesuai jadwal yang dijanjikan.",
    role: "Plant Engineer",
    sector: "Manufaktur Industri — Jakarta Utara",
    highlightWord: "tanpa mengganggu operasional",
  },
  {
    slug: "hospitality-jkt",
    quote:
      "Kualitas finishing interior pool lounge kami benar-benar sesuai konsep desain — acoustic panel, pencahayaan LED, sampai banquette custom semua presisi. Klien kami yang datang langsung kasih komentar positif.",
    role: "Owner / Operations Manager",
    sector: "Hospitality & Lifestyle — Jakarta",
    highlightWord: "presisi",
  },
  {
    slug: "petrokimia",
    quote:
      "Kami sudah pakai jasa WKS untuk beberapa pekerjaan instrumentasi dan maintenance motor. Yang konsisten dari mereka: tim teknisi yang paham SOP keselamatan, dokumen lengkap, dan respon yang cepat saat ada urgent issue.",
    role: "Maintenance Supervisor",
    sector: "Petrokimia — Kawasan Industri",
    highlightWord: "konsisten",
  },
];
