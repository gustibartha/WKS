# Team Photos

Letakkan foto tim inti di folder ini.

## Naming convention

Nama file harus sama dengan `slug` di `src/data/team.ts`:

- `ardi.jpg`
- `suparno.jpg`
- `andri-eko-mardani.jpg`

## Spesifikasi

- **Format:** JPG (foto)
- **Rasio:** 5:4 (cocok dengan card layout) atau lebih kotak
- **Resolusi:** ≥ 800×640px
- **Crop:** wajah jelas terlihat, dada ke atas, latar netral
- **Ukuran file:** ≤ 200KB per foto (kompres di https://squoosh.app)

## Tanpa foto

Kalau `photo` belum di-set, sistem otomatis render monogram inisial
(mis. "AS" untuk Ardi Suparno) dengan latar blueprint grid — tetap
terlihat profesional.

## Cara update

1. Drop foto ke folder ini
2. Edit `src/data/team.ts`, set `photo: "/images/team/<slug>.jpg"`
3. Commit & push — auto-deploy
