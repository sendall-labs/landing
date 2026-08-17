import { Header } from "@/components/landing/Header";
import { FieldNotes } from "@/components/landing/FieldNotes";
import { Ledger } from "@/components/landing/Ledger";
import { SpecSheet } from "@/components/landing/SpecSheet";
import { Faq } from "@/components/landing/Faq";
import { Close } from "@/components/landing/Close";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <FieldNotes />
      <Ledger />
      <SpecSheet />
      <Faq />
      <Close />
      <Footer />
    </div>
  );
}
