# PT Wira Karya Sinergi — Company Profile Website

Website company profile untuk **PT Wira Karya Sinergi** — perusahaan penyedia
barang & jasa, mobilisasi alat, dan konstruksi yang berdiri sejak 2014 di
Tanjung Priok, Jakarta Utara.

Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **Framer Motion**,
**lucide-react**. SSG-friendly, SEO-optimised, mobile-first.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Copy env template & isi key Web3Forms
cp .env.example .env.local
#   → buka .env.local, isi WEB3FORMS_ACCESS_KEY (lihat bagian "Form kontak")

# 3. Jalankan dev server
npm run dev
#   → buka http://localhost:3000
```

## Available scripts

| Script | Fungsi |
|---|---|
| `npm run dev` | Dev server dengan Turbopack di `localhost:3000` |
| `npm run build` | Production build statis |
| `npm start` | Jalankan hasil build (untuk preview production) |
| `npm run lint` | ESLint check |

---

## Struktur folder

```
.
├── public/
│   ├── images/
│   │   ├── portfolio/                    # foto karya per-kategori
│   │   │   └── README.md                 # panduan upload foto
│   │   ├── certifications/               # scan/foto sertifikat
│   │   └── og-default.svg                # gambar Open Graph
│   └── robots.txt
├── src/
│   ├── app/                              # Next.js App Router
│   │   ├── layout.tsx                    # root layout, metadata, JSON-LD
│   │   ├── page.tsx                      # Beranda
│   │   ├── tentang/page.tsx
│   │   ├── layanan/
│   │   │   ├── page.tsx                  # daftar 7 layanan
│   │   │   └── [slug]/page.tsx           # detail per layanan
│   │   ├── portofolio/page.tsx
│   │   ├── sertifikasi/page.tsx
│   │   ├── kontak/
│   │   │   ├── page.tsx
│   │   │   └── actions.ts                # server action submit form
│   │   ├── globals.css                   # Tailwind v4 + theme tokens
│   │   ├── icon.svg                      # favicon
│   │   ├── not-found.tsx                 # halaman 404
│   │   ├── robots.ts                     # /robots.txt dinamis
│   │   └── sitemap.ts                    # /sitemap.xml dinamis
│   ├── components/
│   │   ├── layout/                       # Navbar, Footer, WhatsAppFloat, Logo
│   │   ├── sections/                     # Hero, AboutPreview, ServicesGrid, ...
│   │   ├── ui/                           # Button, SectionHeader, Reveal, Marquee, ...
│   │   └── interactive/                  # client components: PortfolioFilter, ContactForm
│   ├── data/                             # ★ KONTEN — edit di sini, bukan di komponen
│   │   ├── company.ts                    # nama, alamat, telepon, email
│   │   ├── services.ts                   # 7 layanan + deskripsi
│   │   ├── mission.ts                    # visi & 7 misi
│   │   ├── certifications.ts             # 4 sertifikat
│   │   ├── portfolio.ts                  # daftar proyek
│   │   └── navigation.ts                 # link navbar
│   └── lib/                              # utilities
│       ├── cn.ts                         # className helper
│       └── whatsapp.ts                   # builder URL wa.me
├── .env.example
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Cara update konten (untuk non-developer)

Semua konten user-facing terkonsentrasi di **`src/data/*.ts`**.
Tidak perlu menyentuh komponen atau halaman.

### Ganti nomor telepon / alamat / email
Edit `src/data/company.ts` — perubahan akan otomatis tersinkronisasi
di footer, halaman kontak, JSON-LD, dan tombol WhatsApp.

### Tambah/edit layanan
Edit `src/data/services.ts`. Setiap layanan baru otomatis dapat
halaman detail di `/layanan/<slug>`. Pilih `iconKey` dari yang sudah
tersedia, atau tambahkan ikon baru di
`src/components/ui/ServiceIcon.tsx`.

### Tambah proyek ke portofolio
1. Drop foto ke `public/images/portfolio/<kategori-slug>/`
2. Tambahkan entri di `src/data/portfolio.ts`:
   ```ts
   {
     id: "k-05",
     title: "Nama Proyek",
     category: "konstruksi-bangunan-sipil", // harus sama dengan slug service
     categoryLabel: "Konstruksi Sipil",
     iconKey: "construction",
     year: 2025,
     location: "Jakarta Utara",
     image: "/images/portfolio/konstruksi-bangunan-sipil/foto-proyek.jpg",
   }
   ```
3. Commit & push — auto-deploy.

Detail lebih lanjut di [`public/images/portfolio/README.md`](./public/images/portfolio/README.md).

### Update visi / misi / sertifikasi
Edit `src/data/mission.ts` atau `src/data/certifications.ts`.

---

## Form kontak — Web3Forms

Form kontak men-submit ke **Web3Forms** (gratis, 250 submission/bulan,
no signup ribet — cukup masukkan email penerima).

### Setup

1. Buka https://web3forms.com
2. Masukkan email penerima (mis. `wirakaryasinergi@gmail.com`)
3. Cek inbox → klik link aktivasi → dapat **access key**
4. Salin key ke `.env.local`:
   ```
   WEB3FORMS_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   ```
5. Restart dev server (`npm run dev`)

> **Catatan dev mode:** kalau key belum di-set, form tidak benar-benar
> mengirim email — pesan dummy akan di-log ke server console saja, dan
> UI akan tampil sukses agar QA tetap lancar.

### Anti-spam

Form sudah include honeypot field tersembunyi. Untuk proteksi tambahan,
aktifkan reCAPTCHA via dashboard Web3Forms (gratis).

---

## Tombol WhatsApp

Tombol mengambang di kanan-bawah secara default mengarah ke nomor
**Ardi** (`+62 813 8504 0467`). Untuk ganti default, edit
`primaryWhatsApp` di `src/data/company.ts`.

Halaman kontak menampilkan **dua tombol terpisah** untuk Ardi & Suparno.

---

## Deployment

Detail lengkap dengan step-by-step ada di:

- 📘 **[DEPLOYMENT.md](./DEPLOYMENT.md)** — panduan deploy ke Vercel/Cloudflare/Netlify, setup domain, dan post-launch SEO
- ✅ **[LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md)** — checklist final sebelum go-live (wajib / sebaiknya / nice-to-have)

### Quick deploy ke Vercel

```bash
# 1. Push ke GitHub
git init && git add . && git commit -m "Initial release"
git remote add origin <github-repo-url> && git push -u origin main

# 2. Di Vercel.com:
#    - Import repo
#    - Set environment variables: WEB3FORMS_ACCESS_KEY + NEXT_PUBLIC_SITE_URL
#    - Deploy → live di 2-3 menit
```

---

## Branding & desain

| Token | Nilai | Use |
|---|---|---|
| `--color-ink` | `#0f172a` | Heading, dark sections |
| `--color-steel` | `#475569` | Body text |
| `--color-brand` | `#ea580c` (orange-600) | CTA, accent |
| `--color-amber-500` | `#f59e0b` | Secondary highlight |
| Heading | **Bebas Neue** | h1, h2, display |
| Body | **Inter** | UI, paragraph |
| Mono | **JetBrains Mono** | Section labels, kode |

Semua token berada di `src/app/globals.css` di blok `@theme`.

---

## Aksesibilitas

- ✅ Semantic HTML5 (`<header>`, `<main>`, `<footer>`, `<article>`)
- ✅ Alt text wajib pada semua `<Image>`
- ✅ Focus ring brand-coloured untuk keyboard navigation
- ✅ ARIA labels pada tombol icon-only
- ✅ `prefers-reduced-motion` di-respect oleh framer-motion reveal
- ✅ Kontras WCAG AA pada kombinasi warna utama

---

## Performance

- ✅ Static generation untuk semua halaman (kecuali server action)
- ✅ Font self-hosted via `next/font` (no FOUT, no external request)
- ✅ Image optimization via `next/image` → AVIF/WebP otomatis
- ✅ Tailwind v4 — only used utilities di-emit ke CSS
- ✅ JS minimal — interactive islands hanya di Navbar, ContactForm, PortfolioFilter

Target Lighthouse: **≥ 90** untuk Performance, Accessibility, Best
Practices, dan SEO.

---

## Yang masih perlu Anda isi sendiri

- [ ] Foto asli proyek (lihat `public/images/portfolio/README.md`)
- [ ] Scan/foto 4 sertifikat → drop ke `public/images/certifications/`
      (file: `iso.png`, `ak3.png`, `competence.png`, `business-entity.png`)
- [ ] **`WEB3FORMS_ACCESS_KEY`** untuk form kontak (dapat di web3forms.com)
- [ ] **`NEXT_PUBLIC_SITE_URL`** dengan domain final
- [ ] (Opsional) Konversi `og-default.svg` → JPG/PNG 1200×630 untuk
      kompatibilitas Twitter card maksimal — tools: Squoosh, Figma export
- [ ] (Opsional) Update koordinat embed map di `company.ts` dengan
      pin point yang lebih akurat

---

## Versi English (rencana ke depan)

Struktur sudah siap untuk i18n via Next.js built-in.
Kalau diperlukan, tambahkan locale routing dengan `[lang]` segment dan
duplikasi `src/data/*.ts` ke `src/data/en/*.ts`.

---

## Lisensi

© 2026 PT Wira Karya Sinergi. Hak Cipta Dilindungi.
