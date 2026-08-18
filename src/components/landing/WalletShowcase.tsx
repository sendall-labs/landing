import { WALLETS } from "@/lib/content";

export function WalletShowcase() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="mb-10 flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Works with your wallet</h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            Connect any of these. sendall never asks for a key, it only
            requests a signature.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {WALLETS.map((wallet) => (
            <div
              key={wallet.name}
              className="flex flex-col items-center gap-3 rounded-md border border-border bg-muted/30 px-4 py-6 text-center transition-colors hover:bg-muted/60"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-lg font-mono text-lg font-semibold text-white"
                style={{ backgroundColor: wallet.color }}
              >
                {wallet.initial}
              </div>
              <span className="text-sm font-medium">{wallet.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
