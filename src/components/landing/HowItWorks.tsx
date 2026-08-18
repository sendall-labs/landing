import { STEPS } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <h2 className="mb-12 text-2xl font-bold">How it works</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.step} className="flex flex-col gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent font-mono text-sm font-semibold text-accent-foreground">
                {step.step}
              </div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
