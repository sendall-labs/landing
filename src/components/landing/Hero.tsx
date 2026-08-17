"use client";

import { motion } from "motion/react";
import { CheckCircle2, Clock, XCircle } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

const MOCK_ROWS = [
  { address: "GA3D...K7QZ", amount: "1,250 XLM", status: "validated" as const },
  { address: "GBHF...9MXE", amount: "480 USDC", status: "validated" as const },
  { address: "GD2K...P4RT", amount: "90 XLM", status: "pending" as const },
  { address: "GCXM...L1WN", amount: "2,000 XLM", status: "failed" as const },
];

const STATUS_STYLE = {
  validated: { icon: CheckCircle2, className: "text-success" },
  pending: { icon: Clock, className: "text-warning" },
  failed: { icon: XCircle, className: "text-danger" },
};

export function Hero() {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Bulk Stellar payments, without the backend
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          sendall is a non-custodial web app for sending XLM or Stellar assets
          to hundreds of recipients at once — upload a CSV, sign in your
          wallet, done.
        </p>
        <div>
          <a
            href={`${APP_URL}/batches/new`}
            className="inline-block rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            Start a batch
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="rounded-lg border border-border bg-muted/40 p-4 shadow-sm"
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-medium">recipients.csv</span>
          <span className="rounded-md bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            Sign batch (3 of 4)
          </span>
        </div>
        <div className="flex flex-col divide-y divide-border font-mono text-sm">
          {MOCK_ROWS.map((row) => {
            const { icon: Icon, className } = STATUS_STYLE[row.status];
            return (
              <div
                key={row.address}
                className="flex items-center justify-between gap-3 py-2"
              >
                <span className="text-muted-foreground">{row.address}</span>
                <span>{row.amount}</span>
                <Icon className={`h-4 w-4 shrink-0 ${className}`} />
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
