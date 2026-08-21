import Link from "next/link";
import Image from "next/image";

const FEATURES = [
  {
    title: "Guardian NFT Recovery",
    desc: "Social recovery powered by gNFTs. Choose trusted guardians who can help you recover your vault if you lose access.",
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
    title: "Session NFT Security",
    desc: "Every session is a compressed NFT on Solana. Verifiable, revocable, and cryptographically secured.",
  },
  {
    title: "Quantum-Secured Keypairs",
    desc: "Post-quantum cryptography for future-proof security. Your wallet is protected against tomorrow's threats.",
  },
  {
    title: "Mobile & Desktop",
    desc: "Available on iOS, Android, and desktop. One vault, all your devices.",
  },
];

const HOW_IT_WORKS = [
  { step: "1", title: "Create Your Vault", desc: "Set up a quantum-secured vault with multi-chain support." },
  { step: "2", title: "Add Guardians", desc: "Choose trusted contacts who hold guardian NFTs for recovery." },
  { step: "3", title: "Use Your Wallet", desc: "Send, receive, swap, and connect to dApps — all from one place." },
  { step: "4", title: "Recover Anytime", desc: "If you lose access, guardians can help you recover with on-chain approval." },
];

export default function Home() {
  return (
    <main className="min-h-screen gradient-hero">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-qsel">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="qf-logo-container qf-logo-nav">
              <span className="qf-logo-glow" aria-hidden />
              <span className="qf-logo-ring" aria-hidden />
              <Image src="/qf-logo.png" alt="Quantum Follis" width={36} height={36} className="qf-logo-img" priority />
            </div>
            <span className="text-2xl font-bold text-qsel-highlight">Quantum</span>
            <span className="text-xl font-light text-white">Follis</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-slate-400 hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#technology" className="text-sm text-slate-400 hover:text-white transition-colors">
              Technology
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://qselenterprise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-2 px-4"
            >
              QSEL Ecosystem
            </a>
            <span className="btn-primary text-xs py-2 px-4 opacity-75 cursor-not-allowed">
              Download (Coming Soon)
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="flex flex-col items-center mb-6">
            <div className="qf-logo-container qf-logo-hero">
              <span className="qf-logo-glow" aria-hidden />
              <span className="qf-logo-ring" aria-hidden />
              <Image src="/qf-logo.png" alt="Quantum Follis" width={160} height={160} className="qf-logo-img" priority />
            </div>
            <div className="px-4 py-1.5 rounded-full border border-qsel text-qsel-highlight text-xs font-medium tracking-wide">
              NEXT-GEN DIGITAL WALLET — SOLANA FIRST
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-qsel-highlight">Quantum Follis</span>
            <br />
            <span className="text-white text-3xl md:text-4xl font-light">
              The Most Advanced Solana Wallet Ever Built
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Non-custodial, quantum-secure, with guardian recovery, multi-sig vault architecture,
            built-in dApp browser, and session NFT security. Your keys, your control — protected by
            post-quantum cryptography.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <span className="btn-primary text-lg py-3.5 px-8 opacity-75 cursor-not-allowed inline-block">
              Download (Coming Soon)
            </span>
            <a
              href="https://qselenterprise.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg py-3.5 px-8"
            >
              Explore QSEL Ecosystem
            </a>
          </div>

          <p className="text-xs text-slate-500 mt-4">
            Part of the QSEL Enterprise ecosystem. No passwords. Quantum-secured cNFT sessions.
          </p>

          <a
            href="https://qselenterprise.com/beta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-4 py-2 rounded-full border border-emerald-500/30 text-emerald-400 text-sm hover:bg-emerald-500/10 transition-colors"
          >
            📲 QSEL Authenticator Android beta is live — join the test →
          </a>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 px-6 border-y border-qsel">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Chains", value: "4", suffix: "" },
              { label: "Recovery", value: "Guardian", suffix: " NFT" },
              { label: "Security", value: "Quantum", suffix: "" },
              { label: "Focus", value: "Solana", suffix: "" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-qsel-highlight">
                  {stat.value}
                  <span className="text-lg text-slate-500">{stat.suffix}</span>
                </p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Built for <span className="text-qsel-highlight">Security</span> &amp; Control
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Features no other wallet offers. Guardian recovery, quantum cryptography, and
            session-based auth — all on Solana.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 border-t border-qsel">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            How <span className="text-qsel-highlight">Quantum Follis</span> Works
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-xl mx-auto">
            Simple setup. Maximum security. Recoverable access.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="glass-card p-6 text-center">
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="py-20 px-6 border-t border-qsel">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Built on <span className="text-qsel-highlight">Solana</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center">
              <p className="text-4xl font-bold text-qsel-highlight mb-2">cNFT</p>
              <p className="text-sm text-slate-400">Compressed NFT Sessions &amp; Guardians</p>
            </div>
            <div className="glass-card p-6 text-center">
              <p className="text-4xl font-bold text-qsel-highlight mb-2">PQC</p>
              <p className="text-sm text-slate-400">Post-Quantum Cryptography</p>
            </div>
            <div className="glass-card p-6 text-center">
              <p className="text-4xl font-bold text-green-400 mb-2">4 Chains</p>
              <p className="text-sm text-slate-400">Solana, ETH, Monad, BTC</p>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-8 max-w-2xl mx-auto">
            Every session, every guardian approval, every recovery event is verifiable on-chain.
            Quantum Follis integrates with the QSEL Authenticator for seamless login across the ecosystem.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-qsel">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for <span className="text-qsel-highlight">Quantum Follis</span>?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            The wallet is coming soon. In the meantime, explore the QSEL ecosystem —
            QselBase, QSEL Network, and the QSEL Authenticator.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-qsel">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="qf-logo-container" style={{ width: 28, height: 28 }}>
                  <Image src="/qf-logo.png" alt="" width={28} height={28} className="qf-logo-img" />
                </div>
                <span className="text-lg font-bold text-qsel-highlight">Quantum</span>
                <span className="text-sm text-white">Follis</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Next-gen digital wallet with guardian recovery and quantum-secured vault architecture on Solana.
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-semibold mb-3 uppercase tracking-wider">Product</p>
              <div className="space-y-2">
                <a href="#features" className="block text-sm text-slate-500 hover:text-white transition-colors">Features</a>
                <a href="#how-it-works" className="block text-sm text-slate-500 hover:text-white transition-colors">How It Works</a>
                <a href="#technology" className="block text-sm text-slate-500 hover:text-white transition-colors">Technology</a>
              </div>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-semibold mb-3 uppercase tracking-wider">QSEL Ecosystem</p>
              <div className="space-y-2">
                <a href="https://qselenterprise.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-slate-500 hover:text-white transition-colors">QSEL Enterprise</a>
                <a href="https://qselnetwork.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-slate-500 hover:text-white transition-colors">QSEL Network</a>
                <a href="https://qselenterprise.com/developers" target="_blank" rel="noopener noreferrer" className="block text-sm text-slate-500 hover:text-white transition-colors">QselBase</a>
              </div>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-semibold mb-3 uppercase tracking-wider">Legal</p>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="block text-sm text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-qsel pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600">
              &copy; {new Date().getFullYear()} Quantum Follis. Part of the QSEL Enterprise ecosystem.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
