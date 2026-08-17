import { ArrowRight } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="flex flex-col items-center gap-6 rounded-lg border border-border bg-muted/40 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Ready to send a batch?</h2>
        <p className="max-w-md text-sm text-muted-foreground">
          Connect your wallet, upload a CSV, and sendall handles validation,
          chunking, and retries.
        </p>
        <a
          href={APP_URL}
          className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
        >
          Open app
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
