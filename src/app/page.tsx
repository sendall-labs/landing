import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Benefits } from "@/components/landing/Benefits";
import { Security } from "@/components/landing/Security";
import { Close } from "@/components/landing/Close";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Security />
      <Close />
      <Footer />
    </div>
  );
}
