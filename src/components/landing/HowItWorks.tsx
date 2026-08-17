import { STEPS } from "@/lib/content";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-5xl px-6 py-16 sm:py-24"
    >
      <h2 className="mb-10 text-center text-2xl font-bold">How it works</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <div key={step.step} className="flex flex-col gap-2">
            <span className="font-mono text-sm text-accent">{step.step}</span>
            <h3 className="font-semibold">{step.title}</h3>
            <p className="text-sm text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
