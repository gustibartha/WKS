/**
 * 7 poin misi PT Wira Karya Sinergi.
 * Diurutkan sesuai dokumen perusahaan resmi.
 */
export const vision =
  "Menjadi perusahaan penyedia barang dan jasa sipil, mobilisasi alat, dan konstruksi yang terpercaya, unggul, andal, inovatif, serta berintegritas tinggi guna mendukung pembangunan infrastruktur yang aman, efisien, dan berkelanjutan.";

export type MissionItem = {
  number: string;
  title: string;
  text: string;
  iconKey:
    | "speed"
    | "shield"
    | "hardhat"
    | "handshake"
    | "innovation"
    | "team"
    | "leaf";
};

export const mission: MissionItem[] = [
  {
    number: "01",
    title: "Layanan Cepat & Tepat",
    text: "Memberikan layanan pengadaan barang dan jasa yang cepat, tepat, dan sesuai kebutuhan proyek.",
    iconKey: "speed",
  },
  {
    number: "02",
    title: "Standar Keamanan Tertinggi",
    text: "Menyelenggarakan mobilisasi alat & tools secara efektif dengan standar keamanan dan kualitas tertinggi.",
    iconKey: "shield",
  },
  {
    number: "03",
    title: "Konstruksi Profesional",
    text: "Mewujudkan pelaksanaan konstruksi yang profesional, mengutamakan ketepatan waktu, mutu, dan keselamatan.",
    iconKey: "hardhat",
  },
  {
    number: "04",
    title: "Transparansi & Integritas",
    text: "Mengutamakan transparansi dan integritas dalam setiap proses bisnis serta menjaga kepercayaan mitra.",
    iconKey: "handshake",
  },
  {
    number: "05",
    title: "Inovasi & Teknologi",
    text: "Mengoptimalkan teknologi dan inovasi untuk meningkatkan efisiensi operasional perusahaan.",
    iconKey: "innovation",
  },
  {
    number: "06",
    title: "Tim Kompeten",
    text: "Membangun tim yang kompeten dan berdaya saing melalui pembinaan berkelanjutan dan budaya kerja produktif.",
    iconKey: "team",
  },
  {
    number: "07",
    title: "Berkelanjutan",
    text: "Berkomitmen pada kelestarian lingkungan dan tanggung jawab sosial sebagai bagian dari pembangunan berkelanjutan.",
    iconKey: "leaf",
  },
];
