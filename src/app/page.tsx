const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

const FEATURES = [
  {
    title: "Address & trustline validation",
    description:
      "Every recipient is checked against Stellar RPC before you sign anything — invalid addresses, missing trustlines, and underfunded accounts are flagged upfront.",
  },
  {
    title: "Automatic transaction batching",
    description:
      "Stellar caps a transaction at 100 operations. MultiSend chunks large recipient lists into multiple transactions and sequences them for you.",
  },
  {
    title: "Non-custodial by design",
    description:
      "Connect any Stellar Wallets Kit-supported wallet — Freighter, xBull, Lobstr, Albedo, Rabet. Your keys never leave your wallet.",
  },
  {
    title: "Status tracking & retry",
    description:
      "Watch each payment's status live. If a transaction fails, retry only the failed recipients — successful payments are never touched.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center justify-between px-6 py-5">
        <span className="text-lg font-semibold">MultiSend</span>
        <a
          href={APP_URL}
          className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900"
        >
          Open app
        </a>
      </header>

      <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Bulk Stellar payments, without the backend
        </h1>
        <p className="max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
          MultiSend is a non-custodial web app for individuals and small teams to send
          XLM or Stellar assets to many recipients at once — no scripts, no dedicated
          infrastructure.
        </p>
        <a
          href={APP_URL}
          className="rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-700 dark:bg-white dark:text-neutral-900"
        >
          Start a batch
        </a>
      </section>

      <section className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2">
        {FEATURES.map((f) => (
          <div key={f.title} className="flex flex-col gap-2">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{f.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
