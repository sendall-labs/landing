import { Wordmark } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-5">
      <Wordmark className="text-base" />
      <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
        <a href="#how-it-works" className="hover:text-foreground">
          How it works
        </a>
      </nav>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <a
          href={APP_URL}
          className="rounded-sm bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
        >
          Open app
        </a>
      </div>
    </header>
  );
}
