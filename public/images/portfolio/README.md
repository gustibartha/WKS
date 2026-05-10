# Portfolio Images

Letakkan foto proyek di sub-folder kategori, lalu update `image` di
`src/data/portfolio.ts` agar mengarah ke path-nya. Kalau `image`
dikosongkan, sistem akan render placeholder otomatis.

## Struktur folder

```
public/images/portfolio/
├── pengadaan-barang-dan-jasa/
├── konstruksi-bangunan-sipil/
├── mechanical-electrical/
├── instalasi-listrik/
├── transportasi-mobilisasi-alat/
├── interior/
└── coating-lantai/
```

## Spesifikasi rekomendasi

- Format: **JPG** (foto) atau **PNG** (kalau ada transparansi)
- Resolusi: **1600×1200** atau lebih besar (Next.js akan generate
  ukuran responsif otomatis)
- Aspect ratio: **4:3** (paling cocok dengan grid)
- Ukuran file: di-compress ke ≤ 400KB sebelum diupload
  (gunakan https://squoosh.app atau https://tinypng.com)

## Cara update

1. Drop foto ke folder kategori yang sesuai.
2. Edit `src/data/portfolio.ts`, set `image: "/images/portfolio/<kategori>/<nama-file>.jpg"`
3. Untuk proyek baru, tambahkan entri baru di array.
4. Commit & push — Vercel/Cloudflare akan auto-deploy.
