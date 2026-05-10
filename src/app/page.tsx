import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ClientsRow } from "@/components/sections/ClientsRow";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { TestimonialsRow } from "@/components/sections/TestimonialsRow";
import { CertificationsRow } from "@/components/sections/CertificationsRow";
import { BigCTA } from "@/components/sections/BigCTA";
import { Marquee } from "@/components/ui/Marquee";

const tickerItems = [
  "PROCUREMENT",
  "CIVIL CONSTRUCTION",
  "ELECTRICAL INSTALLATION",
  "MECHANICAL ENGINEERING",
  "INTERIOR DESIGN",
  "FLOOR COATING",
  "TRANSPORTATION",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee items={tickerItems} />
      <AboutPreview />
      <ServicesGrid />
      <ClientsRow />
      <PortfolioPreview />
      <TestimonialsRow />
      <CertificationsRow />
      <BigCTA />
    </>
  );
}
