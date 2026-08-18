import Image from "next/image";
import { HERO } from "@/lib/content";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {HERO.headline}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          {HERO.subhead}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`${APP_URL}/batches/new`}
            className="inline-block rounded-sm bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Start a batch
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-foreground hover:underline"
          >
            See how it works
          </a>
        </div>
      </div>

      <div className="relative">
        <div
          aria-hidden
          className="absolute -inset-6 -z-10 rounded-2xl bg-accent/10 blur-2xl"
        />
        <div className="overflow-hidden rounded-lg border border-border shadow-lg shadow-black/5">
          <Image
            src="/batch-review-demo.png"
            alt="A real sendall batch on Stellar Testnet: two recipients ready to send, one flagged because the new account doesn't meet the 1 XLM reserve"
            width={680}
            height={252}
            className="w-full"
            priority
          />
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Real batch, Stellar Testnet, unedited.
        </p>
      </div>
    </section>
  );
}
