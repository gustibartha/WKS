/**
 * Daftar klien & mitra PT Wira Karya Sinergi.
 *
 * Cara update:
 * 1. Save logo ke /public/images/clients/<slug>.png (PNG transparan,
 *    rasio kira-kira 3:2 atau 2:1, lebar 240–360px sudah cukup).
 * 2. Set `logo: "/images/clients/<slug>.png"` di entri yang sesuai.
 * 3. Tanpa file logo, sistem akan render monogram otomatis berbasis
 *    inisial dari `name` — section tetap terlihat rapi.
 *
 * Kalau klien minta logo TIDAK ditampilkan (NDA), set `private: true`
 * dan kartu akan render sebagai "Klien Anonim — Sektor X".
 */
export type Client = {
  slug: string;
  name: string;
  sector: string;
  logo?: string;
  private?: boolean;
};

export type IndustryIcon =
  | "oil"
  | "factory"
  | "food"
  | "warehouse"
  | "bus"
  | "hotel"
  | "shop"
  | "community";

/**
 * Seed data — entri di bawah ini berbasis sektor (bukan nama perusahaan
 * spesifik) sebagai placeholder yang aman untuk publikasi awal.
 *
 * Saat Anda kirim daftar klien resmi + logo, ganti `name` dan `slug`
 * dengan data sebenarnya.
 */
export const clients: Client[] = [
  {
    slug: "petrokimia-tg-priok",
    name: "Mitra Petrokimia",
    sector: "Petrokimia & Migas",
  },
  {
    slug: "manufaktur-kbn",
    name: "Pabrik Manufaktur",
    sector: "Manufaktur Kawasan Industri",
  },
  {
    slug: "fnb-cilincing",
    name: "Klien F&B",
    sector: "Food & Beverage",
  },
  {
    slug: "logistik-gudang",
    name: "Operator Logistik",
    sector: "Logistik & Gudang",
  },
  {
    slug: "bersinar-trans",
    name: "Bersinar Trans",
    sector: "Transportasi Pariwisata",
  },
  {
    slug: "amir-trans",
    name: "Amir Trans",
    sector: "Logistik & Travel",
  },
  {
    slug: "hospitality-jkt",
    name: "Hospitality Jakarta",
    sector: "Hospitality & Lifestyle",
  },
  {
    slug: "fasilitas-publik",
    name: "Fasilitas Publik",
    sector: "Pemerintah & Komunitas",
  },
];

/**
 * Sektor industri yang sudah dilayani — ditampilkan sebagai "industries
 * served" strip terpisah dari logo grid. Lebih akurat secara faktual
 * meski tanpa nama klien spesifik.
 */
export const industriesServed: { label: string; iconKey: IndustryIcon }[] = [
  { label: "Petrokimia & Migas", iconKey: "oil" },
  { label: "Manufaktur Industri", iconKey: "factory" },
  { label: "Food & Beverage", iconKey: "food" },
  { label: "Logistik & Pergudangan", iconKey: "warehouse" },
  { label: "Transportasi & Travel", iconKey: "bus" },
  { label: "Hospitality & Lifestyle", iconKey: "hotel" },
  { label: "Komersial & Retail", iconKey: "shop" },
  { label: "Fasilitas Publik & Komunitas", iconKey: "community" },
];
