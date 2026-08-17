import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { LEDGER, type LedgerStatus } from "@/lib/content";

const STATUS_ICON: Record<LedgerStatus, typeof XCircle> = {
  danger: XCircle,
  warning: AlertTriangle,
  info: CheckCircle2,
};

const STATUS_CLASS: Record<LedgerStatus, string> = {
  danger: "text-danger bg-danger/10 border-danger/30",
  warning: "text-warning bg-warning/10 border-warning/30",
  info: "text-accent bg-accent/10 border-accent/30",
};

export function Ledger() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-14 sm:py-20">
        <h2 className="mb-10 text-lg font-semibold">
          What actually goes wrong, and what stops it
        </h2>

        <div className="flex flex-col divide-y divide-border">
          {LEDGER.map((row) => {
            const Icon = STATUS_ICON[row.status];
            return (
              <div
                key={row.evidence}
                className="grid gap-4 py-6 sm:grid-cols-[1fr_1fr_auto] sm:items-center"
              >
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
                </div>
                <div
                  className={`flex items-center gap-2 rounded-md border px-3 py-2 font-mono text-xs ${STATUS_CLASS[row.status]}`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {row.evidence}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
