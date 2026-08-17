import { STATS } from "@/lib/content";

export function StatStrip() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 text-center">
            <span className="font-mono text-2xl font-semibold text-accent">
              {stat.value}
            </span>
            <span className="text-xs text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
