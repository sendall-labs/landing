import { Wordmark } from "./Logo";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-between border-t border-border px-6 py-6 text-sm text-muted-foreground">
      <Wordmark className="text-sm" />
      <div className="flex items-center gap-4">
        <span>&copy; {new Date().getFullYear()}</span>
        <a href={APP_URL} className="hover:text-foreground hover:underline">
          Open app
        </a>
      </div>
    </footer>
  );
}
