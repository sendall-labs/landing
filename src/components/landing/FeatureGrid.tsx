"use client";

import { motion } from "motion/react";
import { FEATURES } from "@/lib/content";

export function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h2 className="mb-10 text-center text-2xl font-bold">
        Built for real bulk payments
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            className="flex flex-col gap-2 rounded-lg border border-border p-5"
          >
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
