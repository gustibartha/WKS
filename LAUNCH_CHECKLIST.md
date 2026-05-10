# Pre-Launch Checklist — PT Wira Karya Sinergi

Checklist final sebelum site go-live ke domain production.

---

## 🔴 WAJIB sebelum publish (hard block)

### Konten kritis — tidak boleh fiktif
- [ ] **`src/data/team.ts` capacity numbers** — 20+ teknisi, 10+ tahun, 3 sertifikasi keahlian: konfirmasi angka real atau update
- [ ] **`src/data/faq.ts` jawaban komersial** — review jawaban garansi (3-12 bulan), termin pembayaran (30/40/25/5%), status PKP — pastikan akurat secara hukum & komersial
- [ ] **`src/data/workshop.ts` capabilities** — 6 capability cards: konfirmasi semua benar (motor overhaul, fabrikasi, storage, hub logistik, tooling, basecamp). Hapus yang tidak ada.
- [ ] **`src/data/services.ts` deskripsi layanan** — review 7 layanan, terutama klaim spesifik (mis. "10+ tahun pengalaman", "tersertifikasi K3"), pastikan tidak overclaim

### Environment variables di production
- [ ] **`WEB3FORMS_ACCESS_KEY`** sudah di-set di Vercel — ini wajib agar form kontak benar mengirim email
- [ ] **`NEXT_PUBLIC_SITE_URL`** sudah di-set ke domain final (mis. `https://wirakaryasinergi.com`)

### Test form kontak end-to-end
- [ ] Submit form di production → email masuk ke `wirakaryasinergi@gmail.com`
- [ ] Email tidak masuk folder Spam/Junk
- [ ] Reply-to address berfungsi (auto-fill alamat email pengirim)

### Test tombol WhatsApp
- [ ] Floating button kanan-bawah → buka `wa.me/6281385040467` (Ardi) dengan pesan ter-prefill
- [ ] Tombol di halaman /kontak → 2 opsi (Ardi + Suparno) bekerja
- [ ] Tombol "Tanya via WhatsApp" di halaman detail layanan → membawa `service: <nama layanan>` di pesan

---

## 🟡 SEBAIKNYA sebelum publish (soft block)

### Konten yang masih placeholder
- [ ] **Foto tim** (Ardi, Suparno, Andri) — saat ini render monogram inisial. Boleh launch tanpa foto, tapi lebih bagus ada.
- [ ] **Foto workshop** (4 foto fasilitas) — saat ini placeholder ikon. Konfirmasi kalau mau launch tanpa foto fisik.
- [ ] **Logo klien** — saat ini 8 monogram. Kalau ada logo klien yang sudah dapat izin publish, drop ke `public/images/clients/`.
- [ ] **Foto SBU** — sertifikat ke-6 saat ini placeholder "akan diupload"

### Sertifikat ISO — verifikasi link
- [ ] Buka `https://www.zeppycert.com` — pastikan bisa diakses (URL di sertifikat)
- [ ] Test verifikasi nomor sertifikat di situs Zeppy untuk satu cert (mis. ISO 9001 `1024Q165925`) — pastikan benar terverifikasi

### Address & kontak
- [ ] **Map embed Pluit** — confirm pin lokasi benar (currently approximate)
- [ ] **Map embed Koja** — confirm pin lokasi benar
- [ ] Test telepon Ardi (+62 813 8504 0467) → call masuk
- [ ] Test telepon Suparno (+62 821 1445 9919) → call masuk
- [ ] Email `wirakaryasinergi@gmail.com` aktif dan dipantau

---

## 🟢 NICE-TO-HAVE (post-launch fine)

### Media kit
- [ ] Convert `public/images/og-default.svg` → JPG/PNG 1200×630 untuk kompatibilitas Twitter card maksimal
- [ ] Tambah favicon variants (apple-touch-icon, android icons) — optional tapi lebih polished

### Konten tambahan
- [ ] Real testimonial dari klien (saat ini anonymized)
- [ ] Real client logos (saat ini monogram)
- [ ] Tambahan portfolio photos (saat ini 23 foto live, 25 placeholder)

### SEO post-launch (lihat DEPLOYMENT.md)
- [ ] Submit sitemap di Google Search Console
- [ ] Submit di Bing Webmaster
- [ ] Verify Google Business Profile match website address
- [ ] Setup Vercel Analytics

### Performance baseline
- [ ] Run Lighthouse di production URL → target ≥ 90 untuk semua kategori
- [ ] Test mobile (DevTools device emulation atau real device)
- [ ] Test slow network (DevTools Network → Slow 3G)

---

## QA Tests (run before deploy)

Lakukan test berikut di staging/preview deploy:

### Functional
- [ ] **Home page** loads dalam < 3 detik (cold load)
- [ ] **Service detail pages** — semua 7 slug berfungsi (`/layanan/[slug]`)
- [ ] **Portfolio filter** — klik tiap kategori, grid update animated
- [ ] **FAQ accordion** — expand/collapse smooth
- [ ] **Contact form validation** — submit kosong, submit invalid email — error muncul
- [ ] **404 page** — URL tidak valid → halaman 404 custom muncul

### Cross-browser
- [ ] Chrome / Edge — desktop & mobile mode
- [ ] Firefox — desktop
- [ ] Safari — desktop & iPhone (kalau bisa)

### Cross-device
- [ ] Mobile (iPhone / Android) — tap targets cukup besar, no horizontal scroll
- [ ] Tablet (iPad) — layout grid fluid
- [ ] Desktop 1920×1080 — section tidak terlalu lebar

### Print (kalau perlu)
- [ ] Print preview halaman utama — apakah readable kalau di-print? *(optional untuk B2B website)*

---

## Status sebelum launch — current state

✅ **Sudah selesai:**
- 19 routes (semua static-prerendered)
- 7 layanan dengan halaman detail dinamis
- 48 portfolio entries (23 dengan foto asli)
- 6 sertifikasi (5 dengan scan)
- 3 testimonial anonymized
- 8 placeholder klien + 8 industries served
- 3 leader cards + capacity stats
- Workshop section dengan 6 capability cards
- 10 FAQ dalam 4 grup + FAQPage JSON-LD
- Form kontak dengan Web3Forms server action + validasi + honeypot
- Floating WhatsApp button
- Dual-address (HQ Pluit + Workshop Koja) dengan dual map embed
- SEO: metadata per page, sitemap, robots, JSON-LD (Organization + LocalBusiness + FAQPage), OG templating
- A11y: alt text di semua image, ARIA labels, semantic HTML, focus rings, prefers-reduced-motion
- 404 page custom

⏳ **Pending (boleh post-launch):**
- Foto tim (3)
- Foto workshop (4)
- Logo klien (8)
- Foto SBU sertifikat (1)
- Real client testimonials
- OG image PNG version

---

**Sign-off:**

Sebelum deploy ke production, minimal item 🔴 sudah di-check semua. Item 🟡 dan 🟢 boleh post-launch dengan iterative updates.

> Tanggal launch direncanakan: ___________________
> Approval dari: ___________________
