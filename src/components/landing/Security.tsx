import { ShieldCheck } from "lucide-react";
import { SECURITY, WALLETS } from "@/lib/content";

export function Security() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="flex flex-col items-start gap-4">
          <ShieldCheck className="h-8 w-8 text-accent" />
          <h2 className="text-2xl font-bold">{SECURITY.title}</h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            {SECURITY.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {WALLETS.map((wallet) => (
              <span
                key={wallet}
                className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs"
              >
                {wallet}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
