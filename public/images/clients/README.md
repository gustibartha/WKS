# Client Logos

Letakkan logo klien & mitra di folder ini.

## Spesifikasi

- **Format:** PNG transparan (atau SVG kalau tersedia)
- **Rasio:** kira-kira 3:2 atau 2:1 (logo horizontal)
- **Lebar:** 240–360px sudah cukup
- **Ukuran file:** ≤ 60KB per logo (kompres di https://tinypng.com)

## Naming convention

Nama file harus sama dengan `slug` di `src/data/clients.ts`. Contoh:

- `petrokimia-tg-priok.png`
- `bersinar-trans.png`
- `amir-trans.png`

## Cara update

1. Drop logo ke folder ini dengan nama sesuai slug
2. Edit `src/data/clients.ts`:
   - Ganti `name` placeholder dengan nama perusahaan resmi
   - Set `logo: "/images/clients/<slug>.png"`
   - Update `sector` sesuai bidang klien
3. Untuk klien yang minta logo TIDAK ditampilkan (NDA), set
   `private: true` — kartu akan render sebagai placeholder anonim
   "Klien Anonim — Sektor X"

## Tanpa logo

Kalau `logo` tidak di-set, sistem otomatis render monogram berbasis
inisial dari `name`. Section tetap terlihat rapi dan profesional —
cocok untuk fase awal sebelum semua logo dikumpulkan.
