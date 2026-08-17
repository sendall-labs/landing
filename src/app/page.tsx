import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { StatStrip } from "@/components/landing/StatStrip";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CtaBand } from "@/components/landing/CtaBand";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <Hero />
      <StatStrip />
      <FeatureGrid />
      <HowItWorks />
      <CtaBand />
      <Footer />
    </div>
  );
}
