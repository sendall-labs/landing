import { Coins, Layers, ScanSearch, ShieldCheck } from "lucide-react";
import { BENEFITS } from "@/lib/content";

const ICONS = [ScanSearch, Layers, ShieldCheck, Coins];

export function Benefits() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <h2 className="mb-12 text-2xl font-bold">Why sendall</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {BENEFITS.map((benefit, i) => {
            const Icon = ICONS[i];
            return (
              <div key={benefit.title} className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
