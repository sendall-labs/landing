import { Wordmark } from "./Logo";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
const WALLETS = "Freighter, xBull, Albedo, Lobstr, Rabet, Hot Wallet";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border px-6 py-8 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-3xl flex-col gap-3">
        <Wordmark className="text-sm text-foreground" />
        <p>
          Non-custodial bulk payments on Stellar. sendall never holds your
          keys, it only builds unsigned transactions.
        </p>
        <p className="font-mono text-xs">Wallets: {WALLETS}</p>
        <div className="mt-2 flex items-center gap-4">
          <a href={APP_URL} className="hover:text-foreground hover:underline">
            Open app
          </a>
          <span>Testnet &amp; Mainnet</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
