import { BENEFITS } from "@/lib/content";

export function Benefits() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <h2 className="mb-12 text-2xl font-bold">Why sendall</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="flex flex-col gap-2">
              <h3 className="font-semibold">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
