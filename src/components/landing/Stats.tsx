import { Coins, Layers, Users, Wallet } from "lucide-react";
import { STATS } from "@/lib/content";

const ICONS = [Users, Layers, Coins, Wallet];

export function Stats() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-6 py-12 sm:grid-cols-4 sm:py-16">
        {STATS.map((stat, i) => {
          const Icon = ICONS[i];
          return (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 rounded-md border border-border bg-background px-4 py-6 text-center"
            >
              <Icon className="h-4 w-4 text-accent" />
              <span className="font-mono text-xl font-semibold sm:text-2xl">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
