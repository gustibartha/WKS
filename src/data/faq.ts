/**
 * FAQ — pertanyaan yang paling sering muncul dari calon klien.
 *
 * Edit langsung untuk update. Item baru otomatis masuk ke halaman /faq
 * dan ke FAQPage JSON-LD untuk SEO Google.
 */
export type FaqGroup = {
  group: string;
  items: FaqItem[];
};

export type FaqItem = {
  q: string;
  a: string;
};

export const faqGroups: FaqGroup[] = [
  {
    group: "Umum & Cakupan Layanan",
    items: [
      {
        q: "Apakah PT Wira Karya Sinergi melayani proyek di luar Jakarta?",
        a: "Ya. Walaupun kantor pusat kami di Pluit dan workshop di Koja, Jakarta Utara, kami rutin melayani proyek di seluruh wilayah Jabodetabek dan provinsi sekitarnya — Banten, Jawa Barat, hingga Jawa Tengah. Untuk proyek di luar Pulau Jawa, kami evaluasi case-by-case berdasarkan skala dan kompleksitas pekerjaan.",
      },
      {
        q: "Berapa skala proyek minimum yang diterima?",
        a: "Tidak ada minimum kaku. Kami pernah mengerjakan pengadaan barang skala kecil (di bawah Rp 50 juta) hingga konstruksi pabrik dengan nilai miliaran. Yang penting adalah kejelasan ruang lingkup pekerjaan agar penawaran kami akurat dan realistis.",
      },
      {
        q: "Sektor industri apa saja yang sudah pernah dilayani?",
        a: "Petrokimia & migas, manufaktur food & beverage, logistik dan pergudangan, transportasi pariwisata, hospitality, fasilitas publik, hingga komersial dan retail. Lokasi proyek sebagian besar di kawasan industri Jakarta Utara seperti Tanjung Priok, Cilincing, KBN, dan sekitarnya.",
      },
    ],
  },
  {
    group: "Proses Kerja Sama",
    items: [
      {
        q: "Bagaimana proses dari inquiry sampai mulai proyek?",
        a: "Empat tahap: (1) inquiry awal via WhatsApp/email/form kontak, (2) site survey atau pertemuan teknis untuk pemahaman kebutuhan, (3) kami kirim penawaran tertulis lengkap dengan timeline, BoQ, dan termin pembayaran, (4) setelah disetujui — penandatanganan kontrak/PO dan mobilisasi tim. Untuk pekerjaan kecil, tahap 2 dan 3 bisa digabung.",
      },
      {
        q: "Apakah penawaran berbayar atau gratis?",
        a: "Penawaran (quotation) gratis dan tanpa komitmen. Untuk site survey di lokasi yang membutuhkan biaya transportasi signifikan (misalnya luar Jabodetabek), kami diskusikan terlebih dahulu — biasanya biaya survey bisa diperhitungkan sebagai bagian dari kontrak kalau proyek jadi.",
      },
      {
        q: "Apakah bisa mengikuti tender pemerintah atau BUMN?",
        a: "Ya. Kami terdaftar sebagai badan usaha resmi dengan SBU Konstruksi yang masih berlaku, plus sertifikasi ISO 9001/14001/45001 yang sering disyaratkan dalam tender. Dokumen lengkap — termasuk pengalaman kerja, struktur organisasi, dan referensi proyek — bisa kami siapkan untuk kebutuhan tender.",
      },
    ],
  },
  {
    group: "Operasional & Eksekusi",
    items: [
      {
        q: "Bagaimana sistem kerja di lokasi yang masih beroperasi?",
        a: "Kami terbiasa kerja di pabrik dan fasilitas yang tidak boleh shutdown. Pendekatan kami: pre-job safety meeting wajib, prosedur LOTO untuk pekerjaan kelistrikan, koordinasi dengan tim safety klien, dan jadwal kerja fleksibel (termasuk shift malam atau weekend) agar operasional klien tetap berjalan normal.",
      },
      {
        q: "Apakah tim memiliki sertifikasi yang relevan?",
        a: "Ya. Personel teknis kami memegang Sertifikat Kompetensi BNSP sesuai bidangnya (mis. Pengawas Pekerjaan Struktur Bangunan Gedung Madya untuk Operations Manager kami). Sebagai perusahaan, kami juga tersertifikasi ISO 9001, 14001, dan 45001 yang mencakup sistem manajemen K3 secara menyeluruh. Untuk pekerjaan kelistrikan dan working-at-height, kami menyiapkan APD, prosedur LOTO, serta safety induction wajib bagi seluruh personel di lapangan.",
      },
      {
        q: "Apakah ada garansi pekerjaan?",
        a: "Ya. Standar kami: garansi 3–12 bulan tergantung jenis pekerjaan (misalnya coating lantai 6 bulan terhadap pengelupasan, instalasi listrik 12 bulan terhadap workmanship). Detail garansi tertulis di kontrak dan tidak ada biaya tambahan dalam masa garansi untuk perbaikan akibat kesalahan pengerjaan.",
      },
    ],
  },
  {
    group: "Komersial & Pembayaran",
    items: [
      {
        q: "Bagaimana skema pembayaran proyek?",
        a: "Skema standar: termin progresif. Contoh untuk proyek konstruksi — DP 30% di awal, 40% saat progres 50%, 25% saat progres 90%, dan 5% retensi setelah serah terima atau habis masa pemeliharaan. Untuk pengadaan barang biasanya DP 50% saat PO, pelunasan saat barang diterima. Skema bisa disesuaikan dengan kebijakan finance klien.",
      },
      {
        q: "Apakah harga sudah termasuk PPN dan dokumen pajak lengkap?",
        a: "Ya. Sebagai perusahaan yang sudah PKP (Pengusaha Kena Pajak), seluruh penawaran kami sertakan PPN dan kami terbitkan faktur pajak resmi. Dokumen pendukung lain seperti BAST, kuitansi bermaterai, dan invoice fisik juga lengkap untuk kebutuhan accounting dan audit klien.",
      },
    ],
  },
];
