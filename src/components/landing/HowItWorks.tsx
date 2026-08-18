import { CheckSquare, PackageCheck, Search, UploadCloud } from "lucide-react";
import { STEPS } from "@/lib/content";

const ICONS = [UploadCloud, CheckSquare, Search, PackageCheck];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <h2 className="mb-12 text-2xl font-bold">How it works</h2>
        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute top-5 left-0 right-0 hidden h-px bg-border lg:block"
          />
          {STEPS.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <div key={step.step} className="relative flex flex-col gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-background text-accent">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  Step {step.step}
                </span>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
