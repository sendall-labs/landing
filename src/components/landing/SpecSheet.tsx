import { SPEC } from "@/lib/content";

const WALLETS = ["Freighter", "xBull", "Albedo", "Lobstr", "Rabet", "Hot Wallet"];

export function SpecSheet() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-14 sm:py-20">
        <h2 className="mb-8 text-lg font-semibold">The specifics</h2>

        <div className="mb-8 flex flex-wrap gap-2">
          {WALLETS.map((wallet) => (
            <span
              key={wallet}
              className="rounded-full border border-border bg-muted/50 px-3 py-1 font-mono text-xs"
            >
              {wallet}
            </span>
          ))}
        </div>

        <dl className="grid grid-cols-1 gap-x-8 gap-y-5 font-mono text-sm sm:grid-cols-[160px_1fr]">
          {SPEC.filter((item) => item.label !== "Wallets").map((item) => (
            <div key={item.label} className="contents">
              <dt className="text-muted-foreground">{item.label}</dt>
              <dd className="text-foreground/90">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
