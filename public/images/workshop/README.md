# Workshop Photos

Letakkan foto fasilitas workshop di folder ini.

## Naming convention

Nama file harus sama dengan `slug` di `src/data/workshop.ts → workshopGallery`:

- `motor-bay.jpg` — area overhaul motor listrik
- `fabrication-area.jpg` — area fabrikasi & custom build
- `storage-area.jpg` — material & spare part storage
- `tooling-station.jpg` — tooling station & instrumentasi

## Spesifikasi

- **Format:** JPG
- **Rasio:** 4:5 (portrait) — cocok dengan grid layout galeri
- **Resolusi:** ≥ 1200×1500px
- **Konten:** fasilitas kerja, tools, area kerja — bukan personel/wajah
- **Ukuran file:** ≤ 300KB per foto

## Saran tambahan

Kalau ingin menambah lebih banyak foto, edit `workshopGallery` di
`src/data/workshop.ts` — tambah entri dengan slug + caption + iconKey.

## Tanpa foto

Sistem otomatis render placeholder dengan ikon kapabilitas + caption
di overlay. Section tetap utuh dan rapi tanpa foto asli.
