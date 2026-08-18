import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WalletShowcase } from "@/components/landing/WalletShowcase";
import { Benefits } from "@/components/landing/Benefits";
import { Security } from "@/components/landing/Security";
import { Close } from "@/components/landing/Close";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <Hero />
      <Stats />
      <HowItWorks />
      <WalletShowcase />
      <Benefits />
      <Security />
      <Close />
      <Footer />
    </div>
  );
}
