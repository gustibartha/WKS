/**
 * Sertifikasi resmi PT Wira Karya Sinergi.
 *
 * Data lengkap dengan nomor sertifikat, penerbit, masa berlaku, dan ruang
 * lingkup — agar bisa diverifikasi langsung oleh klien/tender.
 *
 * Save scan/foto ke /public/images/certifications/ dengan nama file
 * yang sesuai field `image` masing-masing.
 */
export type CertificationType =
  | "iso-quality"
  | "iso-environment"
  | "iso-safety"
  | "competence"
  | "business";

export type Certification = {
  id: string;
  code: string;        // tampil di tag "CERT / [code]"
  shortName: string;   // tampil sebagai heading kartu
  fullName: string;    // tampil di bawah heading
  iconKey: CertificationType;
  description: string;
  // Metadata verifiable
  issuer: string;
  certNumber?: string;
  scope?: string;
  holder?: string;
  qualification?: string;
  issuedDate?: string;
  expiryDate?: string;
  validityNote?: string;
  verifyUrl?: string;
  image?: string;
};

export const certifications: Certification[] = [
  {
    id: "iso-9001",
    code: "ISO 9001",
    shortName: "ISO 9001:2015",
    fullName: "Quality Management System",
    iconKey: "iso-quality",
    description:
      "Sistem manajemen mutu yang menjamin proses kerja kami konsisten, terdokumentasi, dan terus diperbaiki — dari perencanaan proyek hingga serah terima.",
    issuer: "Zeppy Certification Limited (United Kingdom)",
    certNumber: "1024Q165925",
    issuedDate: "24 Oktober 2025",
    expiryDate: "23 Oktober 2028",
    validityNote: "Subject to surveillance audit tahunan",
    verifyUrl: "https://www.zeppycert.com",
    image: "/images/certifications/iso-9001.jpg",
  },
  {
    id: "iso-14001",
    code: "ISO 14001",
    shortName: "ISO 14001:2015",
    fullName: "Environmental Management System",
    iconKey: "iso-environment",
    description:
      "Komitmen kami terhadap kelestarian lingkungan diwujudkan dalam sistem yang terstruktur — pengelolaan limbah, efisiensi energi, dan pencegahan pencemaran di setiap proyek.",
    issuer: "Zeppy Certification Limited (United Kingdom)",
    certNumber: "1024E166025",
    issuedDate: "24 Oktober 2025",
    expiryDate: "23 Oktober 2028",
    validityNote: "Subject to surveillance audit tahunan",
    verifyUrl: "https://www.zeppycert.com",
    image: "/images/certifications/iso-14001.jpg",
  },
  {
    id: "iso-45001",
    code: "ISO 45001",
    shortName: "ISO 45001:2018",
    fullName: "Occupational Health & Safety Management",
    iconKey: "iso-safety",
    description:
      "Standar internasional terbaru untuk manajemen K3 — memastikan setiap personel di lapangan terlindungi melalui prosedur, pelatihan, dan budaya keselamatan kerja.",
    issuer: "Zeppy Certification Limited (United Kingdom)",
    certNumber: "1024O166125",
    issuedDate: "24 Oktober 2025",
    expiryDate: "23 Oktober 2028",
    validityNote: "Subject to surveillance audit tahunan",
    verifyUrl: "https://www.zeppycert.com",
    image: "/images/certifications/iso-45001.jpg",
  },
  {
    id: "competence",
    code: "BNSP",
    shortName: "Sertifikat Kompetensi",
    fullName: "Pengawas Struktur Bangunan Gedung — Madya",
    iconKey: "competence",
    description:
      "Sertifikat kompetensi tenaga ahli konstruksi yang diterbitkan oleh Badan Nasional Sertifikasi Profesi (BNSP) — pengakuan resmi atas keahlian pengawasan pekerjaan struktur bangunan tingkat Madya.",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP) — LSP Tenaga Konstruksi Nasional",
    certNumber: "74321.3123.01.5.00034505.2025",
    holder: "Suparno",
    qualification: "Pengawas Pekerjaan Struktur Bangunan Gedung Madya",
    validityNote: "Berlaku 5 tahun sejak diterbitkan",
    image: "/images/certifications/competence.jpg",
  },
  {
    id: "sbu",
    code: "SBU",
    shortName: "Sertifikat Badan Usaha",
    fullName: "Sertifikat Badan Usaha (SBU) Konstruksi",
    iconKey: "business",
    description:
      "Sertifikat resmi badan usaha sebagai penyedia jasa konstruksi, terdaftar pada Lembaga Pengembangan Jasa Konstruksi (LPJK) — syarat wajib untuk mengikuti tender pemerintah dan BUMN.",
    issuer: "Lembaga Pengembangan Jasa Konstruksi (LPJK)",
  },
];
