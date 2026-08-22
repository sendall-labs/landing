import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/logo.png"
      alt=""
      width={32}
      height={32}
      className={className}
      priority
    />
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
