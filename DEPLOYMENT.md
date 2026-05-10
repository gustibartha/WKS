# Deployment Guide — PT Wira Karya Sinergi

Panduan deploy website ini ke production. Estimasi waktu: **15–25 menit** dari awal sampai live.

---

## Sebelum mulai

Pastikan sudah punya:
- [ ] Akun **GitHub** (untuk hosting source code repo)
- [ ] Akun **Vercel** (gratis — sign in via GitHub)
- [ ] Domain (opsional di awal — bisa pakai subdomain Vercel `*.vercel.app` dulu)
- [ ] Akun **Web3Forms** (gratis — untuk form kontak)

---

## Step 1 — Push ke GitHub

```bash
cd "D:/WKS"
git init
git add .
git commit -m "Initial release — PT Wira Karya Sinergi website"

# Buat repo baru di github.com (misal: wks-website), lalu:
git remote add origin https://github.com/<username>/wks-website.git
git branch -M main
git push -u origin main
```

> **Tips keamanan:** pastikan `.env.local` **tidak ikut ter-commit** — sudah di-gitignore by default. Hanya `.env.example` yang boleh masuk repo.

---

## Step 2 — Setup Web3Forms (untuk form kontak)

1. Buka **https://web3forms.com**
2. Masukkan email penerima form: `wirakaryasinergi@gmail.com`
3. Cek inbox → klik link aktivasi → dapat **access key** (32 karakter)
4. Salin key tersebut — akan di-paste ke env Vercel

**Test keterkiriman:** kirim email test via dashboard Web3Forms ke pastikan mail tidak masuk spam.

---

## Step 3 — Deploy ke Vercel

### Via Web UI (paling mudah)

1. Buka **https://vercel.com/new**
2. **Import Git Repository** → pilih repo `wks-website`
3. Vercel auto-detect: framework **Next.js**, build command `next build` (default OK)
4. Sebelum klik Deploy, expand **Environment Variables**:

   | Name | Value |
   |---|---|
   | `WEB3FORMS_ACCESS_KEY` | `<key dari step 2>` |
   | `NEXT_PUBLIC_SITE_URL` | `https://wirakaryasinergi.com` *(atau domain Vercel sementara)* |

5. Klik **Deploy** → tunggu 2–3 menit
6. Selesai! Site live di `https://wks-website-xxx.vercel.app`

### Via Vercel CLI (alternatif)

```bash
npm i -g vercel
vercel login
vercel              # deploy preview
vercel --prod       # deploy production
```

---

## Step 4 — Custom Domain (optional)

### Kalau punya domain `wirakaryasinergi.com`:

1. Di Vercel dashboard: **Settings → Domains** → Add `wirakaryasinergi.com`
2. Vercel kasih instruksi DNS — biasanya:
   - `A` record `@` → `76.76.21.21`
   - `CNAME` record `www` → `cname.vercel-dns.com`
3. Update DNS di provider domain (Niagahoster / IDwebhost / Cloudflare / dll)
4. Tunggu propagasi DNS (5 menit – 24 jam, biasanya < 1 jam)
5. Vercel auto-provision SSL/HTTPS — gratis

### Update env var:

Setelah domain live, di Vercel → **Settings → Environment Variables**:
- Edit `NEXT_PUBLIC_SITE_URL` → `https://wirakaryasinergi.com`
- **Redeploy** project (Settings → Deployments → klik tiga titik → Redeploy)

---

## Step 5 — Post-Launch SEO

### Google Search Console (penting untuk indexing)

1. Buka **https://search.google.com/search-console**
2. Add Property → Domain: `wirakaryasinergi.com`
3. Verify via DNS TXT record (paling stable) atau HTML tag (lebih cepat)
4. Setelah verified → **Sitemaps** → submit `https://wirakaryasinergi.com/sitemap.xml`
5. Tunggu 1–7 hari untuk Google index pages utama

### Bing Webmaster Tools (bonus, mudah)

1. **https://www.bing.com/webmasters** → Add site
2. Bisa import dari Google Search Console (one-click)
3. Submit sitemap

### Google Business Profile (kalau belum)

Karena website ini ada `LocalBusiness` JSON-LD yang reference alamat Pluit — pastikan **Google Business Profile** untuk PT WKS juga sudah verified dan match alamat website. Ini boost local search.

---

## Step 6 — Monitoring (gratis)

- **Vercel Analytics** — built-in, enable di Settings → Analytics (free tier)
- **Google Search Console** — track impressions & queries
- **Web3Forms dashboard** — track submission count

---

## Update konten setelah live

### Edit data ringan (kontak, layanan, dll)

```bash
# 1. Pull repo
git pull

# 2. Edit file di src/data/*.ts
# 3. Commit & push
git add src/data/services.ts
git commit -m "Update deskripsi layanan coating"
git push

# Vercel auto-deploy dalam 1-2 menit
```

### Update foto

```bash
# 1. Drop foto ke public/images/<folder>/
# 2. Update reference di src/data/<file>.ts kalau perlu
# 3. Commit & push
git add public/images/
git commit -m "Add foto workshop motor bay"
git push
```

---

## Troubleshooting

### Form kontak gagal kirim
- Cek `WEB3FORMS_ACCESS_KEY` di Vercel env vars — harus persis sama dengan dashboard Web3Forms
- Cek Vercel Functions logs (Settings → Functions) — error message biasanya jelas
- Cek folder spam email penerima

### Build gagal di Vercel
- Cek Vercel deployment logs → biasanya error TypeScript atau missing env var
- Re-test lokal: `npm run build` dulu sebelum push

### Halaman tidak update setelah edit data
- Vercel cache — tunggu 1-2 menit, atau force redeploy
- Browser cache — Ctrl+F5 untuk hard refresh

### Domain tidak resolve
- Cek DNS propagation: https://dnschecker.org
- Tunggu sampai 24 jam (worst case)
- Pastikan A/CNAME record sesuai instruksi Vercel

---

## Backup & Recovery

Source code sudah di GitHub = sudah backup. Ekstra-aman:

- Enable **GitHub branch protection** untuk `main` (Settings → Branches)
- Backup database/CMS — N/A, semua konten static di repo
- Export Vercel env vars secara manual ke `.env.example.private` (jangan commit) sebagai catatan offline

---

## Rough cost (per tahun)

- Vercel Hobby (gratis) — sampai 100GB bandwidth, lebih dari cukup
- Domain `.com` — Rp 150–250rb/tahun
- Web3Forms gratis — 250 submission/bulan (kalau lebih, upgrade $5/bulan)
- **Total: Rp 200rb/tahun** untuk perusahaan dengan traffic moderate

Kalau traffic naik signifikan (> 100GB/bulan atau > 250 form submissions/bulan), pertimbangkan:
- Vercel Pro: $20/bulan (gratis untuk indie, kalau ini company website mau pakai juga OK)
- Web3Forms Plus: $5/bulan
