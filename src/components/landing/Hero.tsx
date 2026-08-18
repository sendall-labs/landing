import { CheckCircle2, Clock3, XCircle } from "lucide-react";
import { HERO } from "@/lib/content";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

const MOCK_ROWS = [
  { address: "GA3D...K7QZ", amount: "1,250 XLM", status: "ok" as const },
  { address: "GBHF...9MXE", amount: "480 USDC", status: "ok" as const },
  { address: "GD2K...P4RT", amount: "90 XLM", status: "pending" as const },
  { address: "GCXM...L1WN", amount: "2,000 XLM", status: "ok" as const },
];

const STATUS_STYLE = {
  ok: { icon: CheckCircle2, className: "text-success" },
  pending: { icon: Clock3, className: "text-warning" },
  failed: { icon: XCircle, className: "text-danger" },
};

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
        <div className="rounded-lg border border-border bg-muted/40 p-4 shadow-lg shadow-black/5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium">recipients.csv</span>
            <span className="rounded-sm bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              Sign batch (4 of 4)
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
                  <Icon className={`h-4 w-4 shrink-0 ${className}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
