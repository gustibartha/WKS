import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { company } from "@/data/company";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.legalName} — Pengadaan, Konstruksi, & Mobilisasi Alat`,
    template: `%s | ${company.legalName}`,
  },
  description:
    "PT Wira Karya Sinergi — perusahaan penyedia barang & jasa, mobilisasi alat, dan konstruksi sejak 2014. Berbasis di Tanjung Priok, Jakarta Utara, melayani pengadaan, konstruksi sipil, M&E, instalasi listrik, transportasi, interior, dan coating lantai.",
  keywords: [
    "pengadaan barang dan jasa",
    "kontraktor Jakarta Utara",
    "konstruksi sipil",
    "instalasi listrik industri",
    "mobilisasi alat berat",
    "epoxy coating lantai",
    "interior kantor industri",
    "PT Wira Karya Sinergi",
    "kontraktor Tanjung Priok",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: company.legalName,
    title: {
      default: `${company.legalName} — ${company.tagline}`,
      template: `%s | ${company.legalName}`,
    },
    description: company.tagDescription,
    images: [
      {
        url: "/images/og-default.svg",
        width: 1200,
        height: 630,
        alt: company.legalName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: company.legalName,
      template: `%s | ${company.legalName}`,
    },
    description: company.tagDescription,
    images: ["/images/og-default.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  category: "Construction",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // JSON-LD structured data — LocalBusiness + Organization
  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: company.legalName,
        alternateName: company.shortName,
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.png`,
        foundingDate: String(company.foundedYear),
        email: company.email,
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: company.legalName,
        image: `${SITE_URL}/images/og-default.svg`,
        url: SITE_URL,
        email: company.email,
        telephone: company.contacts[0].phone,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: company.addresses.headquarter.street,
          addressLocality: company.addresses.headquarter.city,
          addressRegion: company.addresses.headquarter.region,
          postalCode: company.addresses.headquarter.postalCode,
          addressCountry: company.addresses.headquarter.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: company.addresses.headquarter.geo.lat,
          longitude: company.addresses.headquarter.geo.lng,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "08:00",
            closes: "13:00",
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="id"
      className={`${inter.variable} ${bebas.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Script
          id="ld-json-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
