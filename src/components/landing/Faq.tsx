import { FAQ } from "@/lib/content";

export function Faq() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
        <h2 className="mb-8 text-lg font-semibold">Before you send real funds</h2>
        <div className="flex flex-col gap-6">
          {FAQ.map((item) => (
            <div key={item.q}>
              <p className="font-medium">{item.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
