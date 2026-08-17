export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="9" className="fill-accent" />
      <path
        d="M9 20.5 16 9.5l7 11h-4.5L16 15l-2.5 6.5H9Z"
        className="fill-accent-foreground"
      />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 font-semibold ${className ?? ""}`}>
      <Logo className="h-7 w-7" />
      sendall
    </span>
  );
}
