import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms of Service — Quantum Follis",
  description: "Terms of service for Quantum Follis wallet.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen gradient-hero">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-qsel">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="qf-logo-container qf-logo-nav">
              <span className="qf-logo-glow" aria-hidden />
              <span className="qf-logo-ring" aria-hidden />
              <Image src="/qf-logo.png" alt="Quantum Follis" width={36} height={36} className="qf-logo-img" />
            </div>
            <span className="text-2xl font-bold text-qsel-highlight">Quantum</span>
            <span className="text-xl font-light text-white">Follis</span>
          </Link>
          <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-slate-400 text-sm mb-8">
            Last updated: {new Date().toLocaleDateString("en-US")}
          </p>
          <div className="prose prose-invert max-w-none text-slate-400 text-sm leading-relaxed space-y-4">
            <p>
              By using Quantum Follis, you agree to use the wallet responsibly and in
              compliance with applicable laws. Quantum Follis is a non-custodial wallet —
              you are solely responsible for the security of your keys and recovery phrases.
            </p>
            <p>
              Quantum Follis is provided as part of the QSEL Enterprise ecosystem.
              For full terms of service, please refer to the in-app documentation or
              contact QSEL Enterprise.
            </p>
            <p>
              For enterprise terms, visit{" "}
              <a href="https://qselenterprise.com/terms" target="_blank" rel="noopener noreferrer" className="text-qsel-highlight hover:underline">
                qselenterprise.com/terms
              </a>.
            </p>
          </div>
          <Link href="/" className="btn-secondary text-sm py-2.5 px-6 mt-8 inline-block">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
