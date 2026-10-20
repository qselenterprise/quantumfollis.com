import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";

const FEATURES = [
  {
    title: "Guardian Recovery",
    desc: "Social recovery powered by blockchain verified credentials. Choose trusted guardians who can help you recover your vault if you lose access.",
  },
  {
    title: "Multi-Sig Vault Architecture",
    desc: "Enterprise-grade multi-signature security. Your keys never leave your device — quantum-secured key derivation.",
  },
  {
    title: "Built-in dApp Browser",
    desc: "Seamless DEX integration with Jupiter, Raydium, Orca. Swap, stake, and trade without leaving the app.",
  },
  {
    title: "Session Blockchain Security",
    desc: "Every session is a blockchain record. Verifiable, revocable, and cryptographically secured.",
  },
  {
    title: "Quantum-Secured Keypairs",
    desc: "Post-quantum cryptography for future-proof security. Your wallet is protected against tomorrow's threats.",
  },
  {
    title: "Mobile",
    desc: "Available on iOS and Android. One vault, all your devices.",
  },
];

const HOW_IT_WORKS = [
  { step: "1", title: "Create Your Vault", desc: "Set up a quantum-secured vault with multi-chain support." },
  { step: "2", title: "Add Guardians", desc: "Choose trusted contacts who hold Guardians for recovery." },
  { step: "3", title: "Use Your Wallet", desc: "Send, receive, swap, and connect to dApps — all from one place." },
  { step: "4", title: "Recover Anytime", desc: "If you lose access, guardians can help you recover with on-chain approval." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-qf">
      {/* Navigation */}
      <SiteNav variant="home" />

      {/* Hero */}
      <section className="pt-24 md:pt-36 pb-16 md:pb-20 px-4 md:px-6">
        
        <div className="container mx-auto max-w-5xl text-center">
          <Link
              href="/test"
              className="btn-primary inline-block mt-6 px-8 py-3 text-sm md:text-base"
            >
              Join the Android test
          </Link>
            <div className="flex items-center justify-center">
              <Image src="/qf-logo-wordmark.png" alt="Quantum Follis" width={600} height={200} className="quantum-follis-icon-transparent-img" priority />
            </div>
          <p className="px-4 py-1.5 text-qsel-highlight text-md font-light tracking-wide">
            NEXT-GEN DIGITAL WALLET — SOLANA FIRST
          </p>

          <div className="flex flex-col items-center mb-6">
            <Image
              src="/landing-phone.jpg"
              alt="Quantum Follis landing screen on a phone"
              width={1280}
              height={720}
              priority
              className="landing-phone"
            />
          </div>

          <p className="text-white text-xl md:text-2xl font-light leading-snug mb-6">
            The Most Advanced Solana Wallet Ever Built
          </p>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Non-custodial, quantum-secure, with guardian recovery, multi-sig vault architecture,
            built-in dApp browser, and session security utilizing blockchain technology. Your keys, your control — protected by
            post-quantum cryptography.
          </p>

          {/*<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <span className="btn-primary text-lg py-3.5 px-8 opacity-100 cursor-not-allowed inline-block">
              Download (Coming Soon)
            </span>
            <a
              href="https://qselenterprise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg py-3.5 px-8 opacity-100 cursor-not-allowed inline-block"
            >
              Explore QSEL Ecosystem
            </a>
          </div>*/}

          <p className="text-s text-slate-white mt-4">
            Part of the QSEL Enterprise ecosystem. No passwords. Quantum-secured sessions.
          </p>

        </div>
      </section>

      {/* Stats Bar 
      <section className="py-8 px-6 border-y border-qsel">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Chains", value: "3", suffix: "" },
              { label: "Recovery", value: "Guardians", suffix: "" },
              { label: "Security", value: "Quantum", suffix: "" },
              { label: "Focus", value: "Solana", suffix: "" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-medium text-white">
                  {stat.value}
                  <span className="text-lg text-slate-200">{stat.suffix}</span>
                </p>
                <p className="text-xl text-qsel-highlight mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Features */}
      <section id="features" className="py-10 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-light text-center text-white mb-4">
            Built for Security &amp; Control
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Features no other wallet offers. Guardian recovery, quantum cryptography, and
            session-based auth — all on Solana.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="glass-card p-6">
                <h3 className="text-lg font-light text-white mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-10 px-6 border-t border-qsel">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-light text-center text-white mb-4">
            How Quantum Follis Works
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-xl mx-auto">
            Simple setup. Maximum security. Recoverable access.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="glass-card p-6 text-center">
                <h3 className="text-base font-light text-qsel-highlight mb-2">{item.title}</h3>
                <p className="text-white text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="py-10 px-6 border-t border-qsel">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-light text-center text-white mb-12">
            Built on Solana
          </h2>
          {/*<div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 text-center">
              <p className="text-4xl font-bold text-qsel-highlight mb-2">cNFT</p>
              <p className="text-sm text-slate-400">Compressed NFT Sessions &amp; Guardians</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-4xl font-bold text-qsel-highlight mb-2">PQC</p>
              <p className="text-sm text-slate-400">Post-Quantum Cryptography</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-4xl font-bold text-green-400 mb-2">4 Chains</p>
              <p className="text-sm text-slate-400">Solana, ETH, Monad, BTC</p>
            </div>
          </div>*/}
          <p className="text-center text-white text-xl mt-8 max-w-2xl mx-auto">
            Every session, every guardian approval, every recovery event is verifiable on-chain.
            Quantum Follis integrates with the QSEL Authenticator for seamless login across the ecosystem.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-6 border-t border-qsel">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-light text-white mb-4">
            Ready for Quantum Follis?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            The wallet is coming soon. In the meantime, explore the QSEL ecosystem —
            QselBase, QSEL Network, and the QSEL Authenticator.
          </p>
          {/*<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://qselenterprise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg py-3.5 px-8"
            >
              Visit QSEL Enterprise
            </a>
            <a
              href="https://qselenterprise.com/developers"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg py-3.5 px-8"
            >
              Build with QselBase
            </a>
          </div>*/}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-qsel">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                  <Image src="/qf-logo-wordmark.png" alt="Quantum Follis" width={200} height={40} className="qf-logo-img" />
              </div>
              <p className="text-xs text-white leading-relaxed">
                Next-gen digital wallet with guardian recovery and quantum-secured vault architecture on Solana.
              </p>
            </div>

            <div>
              <p className="text-xs text-qsel-highlight font-light mb-3 uppercase tracking-wider">Product</p>
              <div className="space-y-2">
                <a href="#features" className="block text-xs sm:text-xs text-white font-light hover:text-white transition-colors">Features</a>
                <a href="#how-it-works" className="block text-xs sm:text-xs text-white font-light hover:text-white transition-colors">How It Works</a>
                <a href="#technology" className="block text-xs sm:text-xs text-white font-light hover:text-white transition-colors">Technology</a>
              </div>
            </div>

            <div>
              <p className="text-xs text-qsel-highlight font-light mb-3 uppercase tracking-wider">QSEL Ecosystem</p>
              <div className="space-y-2">
                <a href="https://qselenterprise.com" target="_blank" rel="noopener noreferrer" className="block text-xs sm:text-xs text-white hover:text-white transition-colors">QSEL Enterprise</a>
                <a href="https://qselnetwork.com" target="_blank" rel="noopener noreferrer" className="block text-xs sm:text-xs text-white hover:text-white transition-colors">QSEL Network</a>
                <a href="https://qselenterprise.com/developers" target="_blank" rel="noopener noreferrer" className="block text-xs sm:text-xs text-white hover:text-white transition-colors">QselBase</a>
              </div>
            </div>

            <div>
              <p className="text-xs text-qsel-highlight font-light mb-3 uppercase tracking-wider">Legal</p>
              <div className="space-y-2">
                <Link href="/tutorials" className="block text-xs sm:text-xs text-white hover:text-white transition-colors">Tutorials</Link>
                <Link href="/help" className="block text-xs sm:text-xs text-white hover:text-white transition-colors">Help Center</Link>
                <Link href="/support" className="block text-xs sm:text-xs text-white hover:text-white transition-colors">Contact Support</Link>
                <Link href="/privacy" className="block text-xs sm:text-xs text-white hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="block text-xs sm:text-xs text-white hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-qsel pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white">
              &copy; {new Date().getFullYear()} Quantum Follis. Part of the QSEL Enterprise ecosystem.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
