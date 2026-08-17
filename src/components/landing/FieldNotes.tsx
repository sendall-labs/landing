import { FIELD_NOTE, PINNED } from "@/lib/content";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export function FieldNotes() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
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
    </section>
  );
}
