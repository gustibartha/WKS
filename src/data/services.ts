/**
 * 7 layanan utama PT Wira Karya Sinergi.
 * Setiap layanan punya halaman detail di /layanan/[slug].
 *
 * `iconKey` mengacu ke peta ikon di src/components/ui/ServiceIcon.tsx —
 * kalau menambah layanan baru dengan ikon yang belum ada, tambahkan
 * juga di file tersebut.
 */
export type ServiceIconKey =
  | "procurement"
  | "construction"
  | "mechanical"
  | "electrical"
  | "transport"
  | "interior"
  | "coating";

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  iconKey: ServiceIconKey;
  summary: string;
  description: string[];
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "pengadaan-barang-dan-jasa",
    number: "01",
    title: "Pengadaan Barang dan Jasa",
    shortTitle: "Pengadaan",
    iconKey: "procurement",
    summary:
      "Procurement profesional dengan jaringan supplier terpercaya untuk kebutuhan proyek industri, kontraktor, dan korporat.",
    description: [
      "Kami menyediakan layanan pengadaan barang dan jasa secara end-to-end — mulai dari sourcing, negosiasi harga, hingga pengiriman tepat waktu ke lokasi proyek di seluruh Indonesia.",
      "Dengan jaringan supplier yang sudah terverifikasi selama lebih dari satu dekade, kami mampu menjamin ketersediaan material industri, alat berat, suku cadang mesin, perlengkapan kelistrikan, hingga material sipil dengan harga yang kompetitif dan dokumentasi lengkap.",
      "Setiap proses pengadaan dijalankan dengan prinsip transparansi penuh: penawaran tertulis, perbandingan minimal tiga vendor, dan jaminan kualitas via inspeksi pre-delivery. Cocok untuk proyek tender pemerintah, BUMN, maupun swasta yang menuntut audit trail rapi.",
    ],
    highlights: [
      "Jaringan supplier terverifikasi 10+ tahun",
      "Dokumen lengkap (PO, BAST, faktur pajak)",
      "Pengiriman ke seluruh Indonesia",
      "Inspeksi pre-delivery untuk QC",
    ],
  },
  {
    slug: "konstruksi-bangunan-sipil",
    number: "02",
    title: "Konstruksi Bangunan (Sipil)",
    shortTitle: "Konstruksi Sipil",
    iconKey: "construction",
    summary:
      "Pelaksanaan konstruksi sipil dengan standar K3 tertinggi, mutu konsisten, dan komitmen pada ketepatan waktu.",
    description: [
      "Kami menangani pekerjaan konstruksi sipil mulai dari pondasi, struktur beton bertulang, hingga finishing arsitektural untuk pabrik, gudang, ruko, kantor, dan fasilitas industri lainnya.",
      "Tim teknisi dan tukang ahli kami berpengalaman lebih dari sepuluh tahun di kawasan industri Jakarta dan sekitarnya — termasuk Tanjung Priok, Cilincing, dan kawasan KBN. Kami memahami betul kebutuhan teknis dan administratif proyek di lingkungan industrial.",
      "Setiap proyek dijalankan mengacu pada SNI dan standar K3 yang berlaku, dengan dokumentasi progres harian, laporan mingguan, serta safety induction wajib bagi seluruh personel di lapangan.",
    ],
    highlights: [
      "Sesuai standar SNI dan K3",
      "Laporan progres harian & dokumentasi foto",
      "Spesialisasi pabrik & gudang industri",
      "Garansi pasca-pelaksanaan",
    ],
  },
  {
    slug: "mechanical-electrical",
    number: "03",
    title: "Mechanical dan Electrical",
    shortTitle: "Mechanical & Electrical",
    iconKey: "mechanical",
    summary:
      "Solusi M&E terpadu untuk fasilitas industri, gedung perkantoran, dan bangunan komersial.",
    description: [
      "Layanan M&E kami mencakup desain, instalasi, commissioning, dan maintenance untuk sistem HVAC, plumbing, fire fighting, panel kontrol, dan peralatan mekanikal pabrik.",
      "Engineer kami terbiasa membaca shop drawing kompleks, menerjemahkan spesifikasi konsultan ke pelaksanaan lapangan, dan koordinasi multi-disiplin dengan kontraktor sipil maupun arsitektur.",
      "Kami memprioritaskan efisiensi energi dan kemudahan perawatan jangka panjang — bukan sekadar selesai instalasi, tetapi sistem yang andal beroperasi bertahun-tahun ke depan.",
    ],
    highlights: [
      "Desain, instalasi & commissioning",
      "Maintenance kontrak berkala",
      "Koordinasi multi-disiplin",
      "Energy-efficient by design",
    ],
  },
  {
    slug: "instalasi-listrik",
    number: "04",
    title: "Instalasi Listrik",
    shortTitle: "Instalasi Listrik",
    iconKey: "electrical",
    summary:
      "Sistem kelistrikan industri dan komersial — desain, instalasi panel, kabel tray, hingga preventive maintenance.",
    description: [
      "Kami melayani instalasi listrik tegangan rendah (LV) hingga tegangan menengah (MV) untuk pabrik, gudang, kantor, dan fasilitas komersial. Termasuk pekerjaan panel MDP/SDP, kabel tray, grounding system, dan lighting protection.",
      "Setiap pemasangan mengikuti standar PUIL (Persyaratan Umum Instalasi Listrik) terbaru dan regulasi PLN. Kami juga menyediakan layanan SLO (Sertifikat Laik Operasi) untuk instalasi baru.",
      "Tim kami tersertifikasi K3 Listrik dan terbiasa bekerja di area aktif dengan prosedur LOTO (Lock-Out Tag-Out) untuk meminimalkan risiko kecelakaan kerja.",
    ],
    highlights: [
      "Sesuai PUIL & regulasi PLN",
      "Pengurusan SLO instalasi baru",
      "Tim tersertifikasi K3 Listrik",
      "Prosedur LOTO untuk area aktif",
    ],
  },
  {
    slug: "transportasi-mobilisasi-alat",
    number: "05",
    title: "Transportasi & Mobilisasi Alat",
    shortTitle: "Transportasi",
    iconKey: "transport",
    summary:
      "Mobilisasi alat berat, equipment, dan logistik proyek dengan armada lengkap dan rute yang aman.",
    description: [
      "Layanan transportasi kami mendukung pengiriman alat berat (excavator, forklift, crane), peralatan workshop, material bulk, hingga modul prefabrikasi ke lokasi proyek.",
      "Kami memiliki armada flatbed, low-bed trailer, dan truk crane yang siap dimobilisasi 24/7, lengkap dengan asuransi pengangkutan dan dokumen perizinan rute.",
      "Untuk proyek di kawasan padat seperti Jakarta Utara dan kawasan industri Tanjung Priok, kami sudah hafal regulasi rute, jam operasi truk, dan koordinasi dengan dinas perhubungan setempat.",
    ],
    highlights: [
      "Armada flatbed, low-bed, & truk crane",
      "Asuransi pengangkutan",
      "Pengurusan izin rute",
      "Operasional 24/7",
    ],
  },
  {
    slug: "interior",
    number: "06",
    title: "Interior",
    shortTitle: "Interior",
    iconKey: "interior",
    summary:
      "Desain dan pelaksanaan interior untuk kantor, retail, hospitality, dan ruang industri.",
    description: [
      "Kami merancang dan membangun ruang yang fungsional sekaligus mencerminkan identitas brand klien — dari kantor korporat, ruang meeting, showroom, café, hingga kantor proyek di lapangan.",
      "Pekerjaan interior mencakup partisi gypsum, plafon akustik, lantai vinyl/karpet, custom furniture, signage, dan pencahayaan dekoratif. Semua dengan finishing rapi dan timeline yang dijaga ketat.",
      "Untuk ruang industri seperti meeting room di pabrik atau kantor proyek site, kami memahami batasan budget dan kebutuhan durabilitas — material dipilih agar tahan lama dengan biaya yang masuk akal.",
    ],
    highlights: [
      "Desain custom sesuai brand",
      "Workshop sendiri untuk furniture",
      "Material durable untuk ruang industri",
      "Timeline disiplin dengan progress mingguan",
    ],
  },
  {
    slug: "coating-lantai",
    number: "07",
    title: "Coating Lantai",
    shortTitle: "Coating Lantai",
    iconKey: "coating",
    summary:
      "Epoxy dan PU coating untuk pabrik, gudang, dan area industri dengan finishing presisi serta daya tahan tinggi.",
    description: [
      "Kami menyediakan layanan coating lantai industri menggunakan material epoxy self-levelling, epoxy mortar, dan polyurethane (PU) — dipilih sesuai kebutuhan beban, paparan kimia, dan estetika ruang.",
      "Aplikator kami sudah berpengalaman menangani pabrik makanan-minuman (food-grade coating), gudang logistik, area parkir, hingga showroom otomotif dengan luasan ribuan meter persegi.",
      "Setiap pekerjaan didahului dengan persiapan permukaan menggunakan shot-blasting atau diamond grinding untuk memastikan daya rekat optimal — bukan sekadar dilapis di atas lantai eksisting.",
    ],
    highlights: [
      "Epoxy, mortar epoxy, & PU coating",
      "Surface prep dengan shot-blasting",
      "Food-grade option untuk F&B",
      "Garansi anti-pengelupasan",
    ],
  },
];

export const findService = (slug: string) =>
  services.find((s) => s.slug === slug);
