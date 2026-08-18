import { CLOSE } from "@/lib/content";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export function Close() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-16 text-center sm:py-24">
        <h2 className="text-2xl font-bold">{CLOSE.line}</h2>
        <p className="max-w-md text-sm text-muted-foreground">{CLOSE.sub}</p>
        <a
          href={APP_URL}
          className="mt-2 inline-block rounded-sm bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
        >
          Open app
        </a>
      </div>
    </section>
  );
}
