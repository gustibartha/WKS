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
    role: "Business Development",
    shortBio:
      "Penanggung jawab pengembangan bisnis dan komunikasi klien — titik kontak utama untuk inquiry baru, koordinasi tender, dan penawaran proyek.",
  },
  {
    slug: "suparno",
    name: "Suparno",
    role: "Operations Manager",
    shortBio:
      "Mengoordinasikan eksekusi proyek di lapangan dengan pengalaman lebih dari satu dekade di bidang konstruksi dan instalasi industrial.",
    certifications: [
      "Sertifikat Kompetensi BNSP — Pengawas Struktur Bangunan Gedung Madya",
    ],
  },
  {
    slug: "andri-eko-mardani",
    name: "Andri Eko Mardani",
    role: "K3 Expert",
    shortBio:
      "Memastikan setiap pekerjaan di lapangan mengikuti norma K3 yang berlaku — dari pre-job safety meeting hingga audit pasca-pelaksanaan.",
    certifications: [
      "Sertifikat AK3 Kemnaker RI — Pembinaan Pengawasan Norma K3",
    ],
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
    number: "3",
    label: "Sertifikasi Keahlian Tim",
    detail:
      "AK3 Kemnaker, Kompetensi BNSP, dan sertifikasi internal lainnya yang diperbarui rutin.",
  },
];
