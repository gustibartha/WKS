/**
 * Tim inti & kapasitas tenaga kerja PT Wira Karya Sinergi.
 *
 * Untuk privacy, hanya tampilkan personel yang sudah disebut di publik
 * dokumen (sertifikasi, kontak resmi). Personel teknis lain dihitung
 * dalam `capacity` tanpa naming individual.
 *
 * Foto opsional — letakkan di /public/images/team/<slug>.jpg.
 */
export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  shortBio: string;
  certifications?: string[];
  photo?: string;
};

export const teamLeaders: TeamMember[] = [
  {
    slug: "ardi",
    name: "Ardi",
    role: "Direktur",
    shortBio:
      "Pemimpin perusahaan yang memegang arah strategis bisnis, kemitraan tingkat tinggi dengan klien, serta keputusan operasional kunci di setiap proyek WKS.",
    photo: "/images/team/ardi.webp",
  },
  {
    slug: "suparno",
    name: "Suparno",
    role: "Marketing & Koordinator Lapangan",
    shortBio:
      "Penghubung antara kebutuhan klien dan eksekusi di lapangan — menangani komunikasi proyek dari penawaran hingga koordinasi pekerjaan harian dengan tim teknisi.",
    certifications: [
      "Sertifikat Kompetensi BNSP — Pengawas Struktur Bangunan Gedung Madya",
    ],
    photo: "/images/team/suparno.webp",
  },
  {
    slug: "salsa",
    name: "Salsa",
    role: "Administration, Tax & HR",
    shortBio:
      "Menangani administrasi keuangan, kepatuhan perpajakan, dan pengelolaan SDM perusahaan — memastikan dokumen kontrak, faktur pajak, dan support proses tender berjalan rapi dan tepat waktu.",
    photo: "/images/team/salsa.webp",
  },
];

export type TeamCapacity = {
  number: string;
  label: string;
  detail: string;
};

export const teamCapacity: TeamCapacity[] = [
  {
    number: "20+",
    label: "Tenaga Teknisi & Tukang",
    detail:
      "Pekerja terampil di bidang sipil, kelistrikan, mekanikal, dan finishing — kombinasi tenaga tetap dan jaringan mitra terpercaya.",
  },
  {
    number: "10+",
    label: "Tahun Pengalaman Tim",
    detail:
      "Akumulasi pengalaman tim profesional di proyek industri Jakarta dan sekitarnya.",
  },
  {
    number: "3 ISO",
    label: "Standar Manajemen Aktif",
    detail:
      "Triple ISO 9001 (Quality), 14001 (Environment), dan 45001 (Occupational H&S) yang diakreditasi internasional via UAF/IAF.",
  },
];
