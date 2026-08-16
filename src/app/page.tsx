const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

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
    </div>
  );
}
