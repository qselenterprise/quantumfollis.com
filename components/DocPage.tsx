import type { ReactNode } from "react";
import SiteNav from "./SiteNav";

export default function DocPage({
  title,
  children,
  wide = false,
}: {
  title: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <main className="min-h-screen gradient-hero">
      <SiteNav variant="doc" />

      <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6">
        <div className={`container mx-auto ${wide ? "max-w-4xl" : "max-w-3xl"}`}>
          <h1 className="text-2xl md:text-3xl font-medium text-white mb-6 break-words">{title}</h1>
          <div className="legal-copy">{children}</div>
        </div>
      </section>
    </main>
  );
}
