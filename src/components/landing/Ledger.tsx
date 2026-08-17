import { LEDGER, type LedgerStatus } from "@/lib/content";

const STATUS_CLASS: Record<LedgerStatus, string> = {
  danger: "text-danger",
  warning: "text-warning",
  info: "text-accent",
};

export function Ledger() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
        <h2 className="mb-10 text-lg font-semibold">
          What actually goes wrong, and what stops it
        </h2>

        <div className="flex flex-col divide-y divide-border">
          {LEDGER.map((row) => (
            <div key={row.evidence} className="grid gap-4 py-6 sm:grid-cols-2">
              <div>
                <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  Failure
                </span>
                <p className="mt-1 text-sm text-foreground/90">{row.failure}</p>
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  Fix
                </span>
                <p className="mt-1 text-sm text-foreground/90">{row.fix}</p>
                <p
                  className={`mt-3 inline-block rounded-sm border border-border bg-muted/50 px-2 py-1 font-mono text-xs ${STATUS_CLASS[row.status]}`}
                >
                  {row.evidence}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
