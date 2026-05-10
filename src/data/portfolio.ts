/**
 * Data portofolio proyek.
 *
 * Untuk update portofolio:
 * 1. Letakkan foto di /public/images/portfolio/<kategori-slug>/nama-foto.jpg
 * 2. Tambahkan/edit entri di array `portfolio` di bawah
 *
 * `category` HARUS sama dengan slug salah satu service di src/data/services.ts.
 *
 * Saat foto belum tersedia, kosongkan `image` — placeholder SVG akan
 * dirender otomatis berdasarkan kategori.
 */
import type { ServiceIconKey } from "./services";

export type Project = {
  id: string;
  title: string;
  category: string; // slug service
  categoryLabel: string;
  iconKey: ServiceIconKey;
  year: number;
  location?: string;
  description?: string;
  image?: string;
};

export const portfolio: Project[] = [
  // Pengadaan
  {
    id: "p-01",
    title: "Supply Material Sipil — Proyek Gudang KBN",
    category: "pengadaan-barang-dan-jasa",
    categoryLabel: "Pengadaan",
    iconKey: "procurement",
    year: 2024,
    location: "Kawasan Berikat Nusantara, Jakarta Utara",
  },
  {
    id: "p-02",
    title: "Pengadaan Spare Part Mesin Produksi",
    category: "pengadaan-barang-dan-jasa",
    categoryLabel: "Pengadaan",
    iconKey: "procurement",
    year: 2023,
    location: "Cilincing, Jakarta Utara",
  },
  {
    id: "p-03",
    title: "Procurement Material Listrik MV Panel",
    category: "pengadaan-barang-dan-jasa",
    categoryLabel: "Pengadaan",
    iconKey: "procurement",
    year: 2024,
    location: "Tanjung Priok, Jakarta Utara",
  },
  {
    id: "p-04",
    title: "Pengadaan Alat Pelindung Diri (APD)",
    category: "pengadaan-barang-dan-jasa",
    categoryLabel: "Pengadaan",
    iconKey: "procurement",
    year: 2023,
    location: "Multi-site, Jabodetabek",
  },
  {
    id: "p-05",
    title: "Jasa Pekerjaan Kabel di Area Bertegangan Tinggi",
    category: "pengadaan-barang-dan-jasa",
    categoryLabel: "Pengadaan",
    iconKey: "procurement",
    year: 2024,
    location: "Kawasan Industri, Jakarta Utara",
    description:
      "Pelaksanaan jasa instalasi dan penataan kabel di area pabrik bertegangan tinggi dengan prosedur K3 dan LOTO ketat.",
    image: "/images/portfolio/pengadaan-barang-dan-jasa/jasa-kabel-area-tegangan-tinggi.jpg",
  },
  {
    id: "p-06",
    title: "Jasa Instalasi Lampu Industri pada Tiang Tinggi",
    category: "pengadaan-barang-dan-jasa",
    categoryLabel: "Pengadaan",
    iconKey: "procurement",
    year: 2024,
    location: "Fasilitas Petrokimia, Jakarta",
    description:
      "Pemasangan dan penggantian lampu industri Philips pada tiang tinggi dengan SOP working-at-height dan body harness lengkap.",
    image: "/images/portfolio/pengadaan-barang-dan-jasa/jasa-instalasi-lampu-tiang.jpg",
  },
  {
    id: "p-07",
    title: "Jasa Pekerjaan Sistem Tangki Air Industri",
    category: "pengadaan-barang-dan-jasa",
    categoryLabel: "Pengadaan",
    iconKey: "procurement",
    year: 2024,
    location: "Kawasan Industri, Jakarta Utara",
    description:
      "Instalasi pemipaan dan kelistrikan pendukung untuk sistem tangki air industri kapasitas besar (Penguin) di area pabrik.",
    image: "/images/portfolio/pengadaan-barang-dan-jasa/jasa-tangki-air-industri.jpg",
  },
  {
    id: "p-08",
    title: "Jasa Inspeksi & Maintenance Instrumentasi Pabrik",
    category: "pengadaan-barang-dan-jasa",
    categoryLabel: "Pengadaan",
    iconKey: "procurement",
    year: 2024,
    location: "Fasilitas Industri, Jakarta",
    description:
      "Inspeksi dan perawatan instrumentasi serta peralatan kontrol pada area produksi pabrik dengan akses platform multi-level.",
    image: "/images/portfolio/pengadaan-barang-dan-jasa/jasa-instrumentasi-pabrik.jpg",
  },

  // Konstruksi sipil
  {
    id: "k-01",
    title: "Pekerjaan Paving Agregat Gerbang Kawasan Industri",
    category: "konstruksi-bangunan-sipil",
    categoryLabel: "Konstruksi Sipil",
    iconKey: "construction",
    year: 2024,
    location: "Kawasan Industri, Jakarta Utara",
    description:
      "Pelaksanaan pekerjaan base course agregat dan paving area gerbang masuk pabrik dengan koordinasi terhadap aktivitas operasional kawasan yang tetap berjalan.",
    image: "/images/portfolio/konstruksi-bangunan-sipil/gerbang-paving-kawasan-industri.jpg",
  },
  {
    id: "k-02",
    title: "Pondasi & Struktur Workshop Industri",
    category: "konstruksi-bangunan-sipil",
    categoryLabel: "Konstruksi Sipil",
    iconKey: "construction",
    year: 2023,
    location: "Koja, Jakarta Utara",
  },
  {
    id: "k-03",
    title: "Pembangunan Pos Jaga & Pagar Keliling",
    category: "konstruksi-bangunan-sipil",
    categoryLabel: "Konstruksi Sipil",
    iconKey: "construction",
    year: 2024,
    location: "Cilincing, Jakarta Utara",
  },
  {
    id: "k-04",
    title: "Finishing Arsitektural Kantor Operasional",
    category: "konstruksi-bangunan-sipil",
    categoryLabel: "Konstruksi Sipil",
    iconKey: "construction",
    year: 2022,
    location: "Jakarta Utara",
  },
  {
    id: "k-05",
    title: "Renovasi Bangunan Masjid — Dome & Fasad",
    category: "konstruksi-bangunan-sipil",
    categoryLabel: "Konstruksi Sipil",
    iconKey: "construction",
    year: 2024,
    location: "Jakarta",
    description:
      "Pekerjaan renovasi fasad dan finishing eksterior bangunan masjid termasuk pengecatan, perbaikan ornamen kubah, dan penataan area courtyard.",
    image: "/images/portfolio/konstruksi-bangunan-sipil/renovasi-masjid.jpg",
  },
  {
    id: "k-06",
    title: "Pengecoran Beton Area Fire Hydrant Pabrik",
    category: "konstruksi-bangunan-sipil",
    categoryLabel: "Konstruksi Sipil",
    iconKey: "construction",
    year: 2024,
    location: "Kawasan Industri, Jakarta",
    description:
      "Pengecoran beton bertulang untuk dudukan dan area sekitar fire hydrant di kawasan pabrik petrokimia, dilakukan tanpa mengganggu operasional fasilitas.",
    image: "/images/portfolio/konstruksi-bangunan-sipil/pengecoran-beton-area-hydrant.jpg",
  },

  // M&E
  {
    id: "m-01",
    title: "Pekerjaan Instrumentasi & M&E Fasilitas Industri",
    category: "mechanical-electrical",
    categoryLabel: "Mechanical & Electrical",
    iconKey: "mechanical",
    year: 2024,
    location: "Kawasan Industri, Jakarta Utara",
  },
  {
    id: "m-05",
    title: "Pengukuran Arus & Power Quality dengan Clamp Meter HIOKI",
    category: "mechanical-electrical",
    categoryLabel: "Mechanical & Electrical",
    iconKey: "mechanical",
    year: 2024,
    location: "Workshop, Jakarta",
    description:
      "Pengukuran arus dan kualitas daya menggunakan HIOKI 3286-20 Clamp On Power HiTester sebagai bagian dari diagnosa dan commissioning peralatan kelistrikan industri.",
    image: "/images/portfolio/mechanical-electrical/power-measurement-hioki.jpg",
  },
  {
    id: "m-06",
    title: "Thermography Inspection Motor Listrik Industri",
    category: "mechanical-electrical",
    categoryLabel: "Mechanical & Electrical",
    iconKey: "mechanical",
    year: 2025,
    location: "Workshop, Jakarta",
    description:
      "Pemeriksaan kondisi motor listrik menggunakan thermography camera untuk deteksi dini hot-spot pada belitan — bagian dari layanan predictive maintenance fasilitas industri.",
    image: "/images/portfolio/mechanical-electrical/thermography-motor-inspection.jpg",
  },
  {
    id: "m-07",
    title: "Overhaul & Rewinding Motor Listrik",
    category: "mechanical-electrical",
    categoryLabel: "Mechanical & Electrical",
    iconKey: "mechanical",
    year: 2024,
    location: "Workshop, Jakarta",
    description:
      "Pekerjaan overhaul motor listrik industri di workshop kami — mencakup dismantling stator, rotor, fan blade, dan impeller untuk inspeksi, rewinding, serta penggantian komponen yang aus.",
    image: "/images/portfolio/mechanical-electrical/motor-overhaul-rewinding.jpg",
  },
  {
    id: "m-02",
    title: "Sistem Fire Fighting Gudang Logistik",
    category: "mechanical-electrical",
    categoryLabel: "Mechanical & Electrical",
    iconKey: "mechanical",
    year: 2023,
    location: "KBN, Jakarta Utara",
  },
  {
    id: "m-03",
    title: "Plumbing & Drainase Pabrik F&B",
    category: "mechanical-electrical",
    categoryLabel: "Mechanical & Electrical",
    iconKey: "mechanical",
    year: 2024,
    location: "Cilincing, Jakarta Utara",
  },
  {
    id: "m-04",
    title: "Maintenance Kontrak Tahunan M&E",
    category: "mechanical-electrical",
    categoryLabel: "Mechanical & Electrical",
    iconKey: "mechanical",
    year: 2023,
    location: "Jabodetabek",
  },

  // Listrik
  {
    id: "e-01",
    title: "Pembuatan Panel MDP & SDP Pabrik",
    category: "instalasi-listrik",
    categoryLabel: "Instalasi Listrik",
    iconKey: "electrical",
    year: 2024,
    location: "Tanjung Priok, Jakarta Utara",
  },
  {
    id: "e-02",
    title: "Cable Tray & Wiring Gudang 5.000m²",
    category: "instalasi-listrik",
    categoryLabel: "Instalasi Listrik",
    iconKey: "electrical",
    year: 2023,
    location: "KBN, Jakarta Utara",
  },
  {
    id: "e-03",
    title: "Grounding & Penangkal Petir Workshop",
    category: "instalasi-listrik",
    categoryLabel: "Instalasi Listrik",
    iconKey: "electrical",
    year: 2024,
    location: "Koja, Jakarta Utara",
  },
  {
    id: "e-04",
    title: "Pengurusan SLO Instalasi Baru",
    category: "instalasi-listrik",
    categoryLabel: "Instalasi Listrik",
    iconKey: "electrical",
    year: 2023,
    location: "Multi-site, Jakarta",
  },
  {
    id: "e-05",
    title: "Instalasi LED Cove Lighting Plafon Gypsum",
    category: "instalasi-listrik",
    categoryLabel: "Instalasi Listrik",
    iconKey: "electrical",
    year: 2024,
    location: "Jakarta",
    description:
      "Pekerjaan wiring dan pemasangan LED strip cove lighting pada plafon gypsum koridor bangunan — termasuk drilling jalur kabel, terminasi, dan testing pencahayaan.",
    image: "/images/portfolio/instalasi-listrik/led-ceiling-installation.jpg",
  },
  {
    id: "e-06",
    title: "Finishing & Komisioning LED Strip Plafon",
    category: "instalasi-listrik",
    categoryLabel: "Instalasi Listrik",
    iconKey: "electrical",
    year: 2024,
    location: "Jakarta",
    description:
      "Tahap finishing pemasangan LED strip pada plafon dan komisioning jalur pencahayaan — memastikan distribusi cahaya merata dan jalur kabel rapi tanpa mengganggu estetika.",
    image: "/images/portfolio/instalasi-listrik/led-ceiling-finishing.jpg",
  },

  // Transportasi
  {
    id: "t-01",
    title: "Armada Bus Pariwisata Bersinar Trans (Piala Mas)",
    category: "transportasi-mobilisasi-alat",
    categoryLabel: "Transportasi",
    iconKey: "transport",
    year: 2024,
    location: "Jabodetabek",
    description:
      "Bus pariwisata Bersinar Trans (Piala Mas) untuk layanan rombongan korporat, perjalanan dinas, dan kegiatan perusahaan dengan kenyamanan executive-class.",
    image: "/images/portfolio/transportasi-mobilisasi-alat/bersinar-trans-pariwisata.jpg",
  },
  {
    id: "t-02",
    title: "Pengangkutan Modul Prefab Pabrik",
    category: "transportasi-mobilisasi-alat",
    categoryLabel: "Transportasi",
    iconKey: "transport",
    year: 2023,
    location: "Tanjung Priok ke Karawang",
  },
  {
    id: "t-03",
    title: "Logistik Material Bulk Konstruksi",
    category: "transportasi-mobilisasi-alat",
    categoryLabel: "Transportasi",
    iconKey: "transport",
    year: 2024,
    location: "Jabodetabek",
  },
  {
    id: "t-04",
    title: "Mobilisasi Crane untuk Lifting Mesin",
    category: "transportasi-mobilisasi-alat",
    categoryLabel: "Transportasi",
    iconKey: "transport",
    year: 2023,
    location: "Cilincing, Jakarta Utara",
  },
  {
    id: "t-05",
    title: "Truk Angkutan Amir Trans (Isuzu)",
    category: "transportasi-mobilisasi-alat",
    categoryLabel: "Transportasi",
    iconKey: "transport",
    year: 2024,
    location: "Jabodetabek",
    description:
      "Unit truk Isuzu Amir Trans untuk layanan logistik dan pengangkutan barang industri dengan kapasitas medium dan jangkauan rute fleksibel.",
    image: "/images/portfolio/transportasi-mobilisasi-alat/amir-trans-isuzu.jpg",
  },
  {
    id: "t-06",
    title: "Mini Bus Mitsubishi Canter Bersinar Trans",
    category: "transportasi-mobilisasi-alat",
    categoryLabel: "Transportasi",
    iconKey: "transport",
    year: 2024,
    location: "Jabodetabek",
    description:
      "Mitsubishi Canter Bersinar Trans untuk layanan shuttle korporat dan rombongan kecil — lincah di jalur kawasan industri dan area perkotaan padat.",
    image: "/images/portfolio/transportasi-mobilisasi-alat/mitsubishi-canter-bersinar.jpg",
  },

  // Interior
  {
    id: "i-01",
    title: "Pool Lounge — Pencahayaan LED & Glass Partition",
    category: "interior",
    categoryLabel: "Interior",
    iconKey: "interior",
    year: 2024,
    location: "Jakarta",
    description:
      "Penataan ruang billiard/pool lounge dengan pencahayaan LED bar suspended di atas meja, partisi kaca rangka aluminium, dan finishing dinding netral untuk fokus visual pada permainan.",
    image: "/images/portfolio/interior/pool-lounge-billiard.jpg",
  },
  {
    id: "i-02",
    title: "Custom Furniture Meeting Room Pabrik",
    category: "interior",
    categoryLabel: "Interior",
    iconKey: "interior",
    year: 2023,
    location: "Cilincing, Jakarta Utara",
  },
  {
    id: "i-03",
    title: "Partisi & Plafon Showroom",
    category: "interior",
    categoryLabel: "Interior",
    iconKey: "interior",
    year: 2024,
    location: "Jakarta Utara",
  },
  {
    id: "i-04",
    title: "Signage & Pencahayaan Lobby Kantor",
    category: "interior",
    categoryLabel: "Interior",
    iconKey: "interior",
    year: 2023,
    location: "Jakarta",
  },
  {
    id: "i-05",
    title: "Lounge Area — Acoustic Panel & Banquette Custom",
    category: "interior",
    categoryLabel: "Interior",
    iconKey: "interior",
    year: 2024,
    location: "Jakarta",
    description:
      "Area lounge dengan feature wall panel akustik 3D hitam, finishing wood-pattern di sekeliling, banquette warna teal custom, dan floating shelves minimalis untuk aksen.",
    image: "/images/portfolio/interior/lounge-acoustic-panel-teal.jpg",
  },
  {
    id: "i-06",
    title: "Pemasangan Wallpaper Motif Marble (Tahap Aplikasi)",
    category: "interior",
    categoryLabel: "Interior",
    iconKey: "interior",
    year: 2024,
    location: "Jakarta",
    description:
      "Aplikasi wallpaper motif marble pada dinding ruangan dengan pengukuran dan penempelan presisi tinggi agar pola sambungan tetap rapi tanpa terlihat garis.",
    image: "/images/portfolio/interior/wallpaper-marble-installation.jpg",
  },
  {
    id: "i-07",
    title: "Finishing Wallpaper Marble — Ruang Eksekutif",
    category: "interior",
    categoryLabel: "Interior",
    iconKey: "interior",
    year: 2024,
    location: "Jakarta",
    description:
      "Tahap finishing pemasangan wallpaper motif marble pada ruang eksekutif, dilengkapi dengan ventilasi langit-langit, cove lighting, dan partisi kaca dengan masking pelindung.",
    image: "/images/portfolio/interior/wallpaper-marble-finishing.jpg",
  },
  {
    id: "i-08",
    title: "Feature Wall Geometric Panel — Aksen Ruang",
    category: "interior",
    categoryLabel: "Interior",
    iconKey: "interior",
    year: 2024,
    location: "Jakarta",
    description:
      "Pemasangan panel dinding geometric dengan komposisi segitiga warna teal, abu-abu, dan dark grey sebagai feature wall — memberi karakter visual yang kuat pada ruangan.",
    image: "/images/portfolio/interior/geometric-wall-panel.jpg",
  },

  // Coating
  {
    id: "c-01",
    title: "Epoxy Floor Coating & Line Marking Area Parkir",
    category: "coating-lantai",
    categoryLabel: "Coating Lantai",
    iconKey: "coating",
    year: 2024,
    location: "Jakarta",
  },
  {
    id: "c-02",
    title: "PU Coating Cold Storage 1.200m²",
    category: "coating-lantai",
    categoryLabel: "Coating Lantai",
    iconKey: "coating",
    year: 2023,
    location: "Tanjung Priok, Jakarta Utara",
  },
  {
    id: "c-03",
    title: "Mortar Epoxy Area Forklift Gudang",
    category: "coating-lantai",
    categoryLabel: "Coating Lantai",
    iconKey: "coating",
    year: 2024,
    location: "KBN, Jakarta Utara",
  },
  {
    id: "c-04",
    title: "Line Marking & Safety Coating Parkir",
    category: "coating-lantai",
    categoryLabel: "Coating Lantai",
    iconKey: "coating",
    year: 2023,
    location: "Jakarta Utara",
  },
  {
    id: "c-05",
    title: "Aplikasi Epoxy Lantai Pos Satpam",
    category: "coating-lantai",
    categoryLabel: "Coating Lantai",
    iconKey: "coating",
    year: 2024,
    location: "Jakarta",
    description:
      "Aplikasi epoxy self-levelling warna merah pada area pos satpam dengan finishing glossy dan border safety tape kuning-hitam.",
    image: "/images/portfolio/coating-lantai/aplikasi-epoxy-pos-satpam.jpg",
  },
  {
    id: "c-06",
    title: "Pembersihan & Finishing Coating Industri",
    category: "coating-lantai",
    categoryLabel: "Coating Lantai",
    iconKey: "coating",
    year: 2024,
    location: "Jakarta",
    description:
      "Tahap pembersihan dan finishing pasca-aplikasi coating untuk memastikan permukaan rata, bersih, dan bebas residu sebelum tahap line marking.",
    image: "/images/portfolio/coating-lantai/pembersihan-coating-industri.jpg",
  },
  {
    id: "c-07",
    title: "Line Marking & Stencil Lantai Coating",
    category: "coating-lantai",
    categoryLabel: "Coating Lantai",
    iconKey: "coating",
    year: 2024,
    location: "Jakarta",
    description:
      "Pemasangan stencil dan pengecatan marka jalur lalu lintas serta huruf pada permukaan lantai epoxy yang sudah mengering — presisi tinggi dan rapi.",
    image: "/images/portfolio/coating-lantai/line-marking-stencil-lantai.jpg",
  },
];

export const portfolioCategories = (): { slug: string; label: string }[] => {
  const seen = new Map<string, string>();
  for (const p of portfolio) {
    if (!seen.has(p.category)) seen.set(p.category, p.categoryLabel);
  }
  return Array.from(seen, ([slug, label]) => ({ slug, label }));
};
