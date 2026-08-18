import { Wordmark } from "./Logo";
import { SPEC_NOTE } from "@/lib/content";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border px-6 py-8 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-3">
        <Wordmark className="text-sm text-foreground" />
        <p>{SPEC_NOTE}</p>
        <div className="mt-2 flex items-center gap-4">
          <a href={APP_URL} className="hover:text-foreground hover:underline">
            Open app
          </a>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
