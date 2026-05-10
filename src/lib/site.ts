/**
 * Resolve site URL dari env dengan defensive normalization:
 * - tambahkan https:// kalau hilang
 * - hapus trailing slash
 * - fallback ke production URL kalau env kosong
 *
 * Dipakai oleh metadataBase, sitemap, robots, dan JSON-LD.
 */
const FALLBACK = "https://wirakaryasinergi.com";

export const SITE_URL: string = (() => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return FALLBACK;
  const withProtocol =
    raw.startsWith("http://") || raw.startsWith("https://")
      ? raw
      : `https://${raw}`;
  return withProtocol.replace(/\/+$/, "");
})();
