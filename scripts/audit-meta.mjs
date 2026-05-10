/**
 * Quick meta-tag audit — fetch each page and extract title + description.
 * Run: node scripts/audit-meta.mjs
 */
const PAGES = [
  "/",
  "/tentang",
  "/layanan",
  "/layanan/pengadaan-barang-dan-jasa",
  "/layanan/konstruksi-bangunan-sipil",
  "/layanan/coating-lantai",
  "/portofolio",
  "/sertifikasi",
  "/faq",
  "/kontak",
];

const BASE = "http://localhost:3001";

const extract = (html, regex) => {
  const m = html.match(regex);
  return m ? m[1].trim() : "MISSING";
};

console.log(`\n${"PATH".padEnd(45)} TITLE / DESC\n${"-".repeat(120)}`);
for (const path of PAGES) {
  try {
    const res = await fetch(`${BASE}${path}`);
    const html = await res.text();
    const title = extract(html, /<title[^>]*>([^<]+)<\/title>/i);
    const desc = extract(
      html,
      /<meta[^>]+name="description"[^>]+content="([^"]+)"/i
    );
    const og = extract(
      html,
      /<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i
    );
    const canonical = extract(
      html,
      /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i
    );
    console.log(`\n${path}`);
    console.log(`  TITLE  : ${title.slice(0, 90)}`);
    console.log(`  DESC   : ${desc.slice(0, 110)}`);
    console.log(`  OG     : ${og.slice(0, 90)}`);
    console.log(`  CANON  : ${canonical}`);
  } catch (e) {
    console.log(`${path}  ERROR: ${e.message}`);
  }
}
