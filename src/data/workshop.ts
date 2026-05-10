/**
 * Data fasilitas workshop PT Wira Karya Sinergi.
 *
 * Workshop berlokasi di Jl. Kramat Jaya No. 22 T, Tugu Utara, Koja —
 * akses langsung ke kawasan industri Tanjung Priok dan KBN.
 *
 * Untuk foto fasilitas, drop ke /public/images/workshop/<slug>.jpg
 * dan update field `image` di array `workshopGallery`.
 */
export type WorkshopCapability = {
  iconKey: "motor" | "fabrication" | "storage" | "logistics" | "tools" | "team";
  title: string;
  description: string;
};

export const workshopCapabilities: WorkshopCapability[] = [
  {
    iconKey: "motor",
    title: "Overhaul & Rewinding Motor",
    description:
      "Workshop kami diperlengkapi tools untuk dismantling, inspeksi, dan rewinding motor listrik industri — dari skala kecil hingga menengah.",
  },
  {
    iconKey: "fabrication",
    title: "Fabrikasi & Custom Furniture",
    description:
      "Fasilitas fabrikasi untuk pekerjaan custom — dari panel partisi, custom furniture interior, hingga modul prefab untuk lokasi proyek.",
  },
  {
    iconKey: "storage",
    title: "Storage Material & Spare Part",
    description:
      "Area penyimpanan material proyek dan stok spare part procurement, dengan sistem inventory rapi untuk kebutuhan klien rutin.",
  },
  {
    iconKey: "logistics",
    title: "Hub Logistik Proyek",
    description:
      "Sebagai titik kumpul mobilisasi alat dan tim — strategis untuk distribusi ke proyek di kawasan Tanjung Priok, Cilincing, hingga KBN.",
  },
  {
    iconKey: "tools",
    title: "Tooling Profesional",
    description:
      "Peralatan ukur dan diagnostik profesional — clamp meter, thermography camera, instrumentasi lainnya — untuk presisi pekerjaan kelistrikan.",
  },
  {
    iconKey: "team",
    title: "Basecamp Tim Operasional",
    description:
      "Ruang briefing harian, area persiapan APD, dan basecamp tim sebelum mobilisasi ke proyek — memastikan koordinasi tetap rapi.",
  },
];

/**
 * Galeri foto workshop — saat foto belum tersedia, kartu render
 * placeholder dengan ikon dan label kapabilitas.
 *
 * Saat foto siap, save ke /public/images/workshop/<slug>.jpg dan
 * set field `image`.
 */
export type WorkshopPhoto = {
  slug: string;
  caption: string;
  iconKey: WorkshopCapability["iconKey"];
  image?: string;
};

export const workshopGallery: WorkshopPhoto[] = [
  {
    slug: "motor-bay",
    caption: "Area overhaul motor listrik",
    iconKey: "motor",
  },
  {
    slug: "fabrication-area",
    caption: "Area fabrikasi & custom build",
    iconKey: "fabrication",
  },
  {
    slug: "storage-area",
    caption: "Material & spare part storage",
    iconKey: "storage",
  },
  {
    slug: "tooling-station",
    caption: "Tooling station & instrumentasi",
    iconKey: "tools",
  },
];
