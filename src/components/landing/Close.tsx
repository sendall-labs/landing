import { CLOSE } from "@/lib/content";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export function Close() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <p className="text-xl font-semibold">{CLOSE.line}</p>
        <p className="mt-2 text-sm text-muted-foreground">{CLOSE.sub}</p>
        <a
          href={APP_URL}
          className="mt-6 inline-block rounded-sm border border-border bg-muted/50 px-4 py-2 font-mono text-sm text-accent hover:bg-muted"
        >
          $ app.sendall.xyz
        </a>
      </div>
    </section>
  );
}
