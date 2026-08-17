import { CheckCircle2, Clock3, XCircle } from "lucide-react";
import { FIELD_NOTE, PINNED } from "@/lib/content";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

const MOCK_ROWS = [
  { address: "GA3D...K7QZ", amount: "1,250 XLM", status: "ok" as const },
  { address: "GBHF...9MXE", amount: "480 USDC", status: "flagged" as const, note: "no trustline" },
  { address: "GD2K...P4RT", amount: "90 XLM", status: "pending" as const },
  { address: "GCXM...L1WN", amount: "2,000 XLM", status: "ok" as const },
];

const STATUS_STYLE = {
  ok: { icon: CheckCircle2, className: "text-success" },
  flagged: { icon: XCircle, className: "text-danger" },
  pending: { icon: Clock3, className: "text-warning" },
};

export function FieldNotes() {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:items-start">
      <div>
        <span className="font-mono text-xs text-muted-foreground">
          {FIELD_NOTE.label}
        </span>

        <p className="mt-4 text-lg leading-relaxed text-foreground/90">
          {FIELD_NOTE.paragraph}
        </p>

        <div className="mt-6 rounded-md border border-border bg-muted/50 px-5 py-4">
          <p className="font-mono text-sm">
            <span className="font-semibold">{PINNED.label}:</span>{" "}
            <span className="text-muted-foreground">{PINNED.description}</span>
          </p>
        </div>

        <p className="mt-8 text-xl font-semibold">{FIELD_NOTE.pivot}</p>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {FIELD_NOTE.alternative}
        </p>

        <div className="mt-8">
          <a
            href={`${APP_URL}/batches/new`}
            className="inline-block rounded-sm bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Start a batch
          </a>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-muted/40 p-4 shadow-sm lg:sticky lg:top-10">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-medium">recipients.csv</span>
          <span className="rounded-sm bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            Sign batch (3 of 4)
          </span>
        </div>
        <div className="flex flex-col divide-y divide-border">
          {MOCK_ROWS.map((row) => {
            const { icon: Icon, className } = STATUS_STYLE[row.status];
            return (
              <div
                key={row.address}
                className="flex items-center justify-between gap-3 py-2.5 font-mono text-sm"
              >
                <span className="text-muted-foreground">{row.address}</span>
                <span className="hidden sm:inline">{row.amount}</span>
                <span className={`flex items-center gap-1.5 ${className}`}>
                  {"note" in row && (
                    <span className="text-xs">{row.note}</span>
                  )}
                  <Icon className="h-4 w-4 shrink-0" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
