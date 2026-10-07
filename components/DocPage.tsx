import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export default function DocPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen gradient-hero">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-qf border-b border-qsel">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="qf-logo-container qf-logo-nav">
              <Image src="/qf-logo.png" alt="Quantum Follis" width={44} height={44} className="qf-logo-img" />
            </div>
            <span className="text-2xl font-bold text-qsel-highlight">Quantum</span>
            <span className="text-xl font-light text-white">Follis</span>
          </Link>
          <div className="flex items-center gap-5">
            <Link href="/help" className="text-sm text-slate-400 hover:text-white transition-colors">Help</Link>
            <Link href="/support" className="text-sm text-slate-400 hover:text-white transition-colors">Support</Link>
            <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">Home</Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-white mb-6">{title}</h1>
          <div className="legal-copy">{children}</div>
        </div>
      </section>
    </main>
  );
}
