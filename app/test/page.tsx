import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import TesterSignupForm from "./TesterSignupForm";

export const metadata = {
  title: "Android Test — Quantum Follis",
  description:
    "Request access to the Quantum Follis closed test on Android through Google Play.",
};

const STEPS = [
  {
    step: "1",
    title: "Request a spot",
    desc: "Use the Google account email signed in to the Play Store on your Android phone.",
  },
  {
    step: "2",
    title: "Get your invite",
    desc: "We add you to the tester list and email the Google Play invite to that address.",
  },
  {
    step: "3",
    title: "Install from Google Play",
    desc: "Open the invite on your phone, opt in, and install Quantum Follis.",
  },
];

export default function TestPage() {
  return (
    <main className="min-h-screen bg-qf">
      <SiteNav variant="home" />

      <section className="pt-28 md:pt-36 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-qsel text-qsel-highlight text-xs font-medium mb-6 tracking-wide">
            ANDROID CLOSED TEST
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
            Test Quantum Follis
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
            Android first, through Google Play. Tell us the Google account on your
            phone and we&apos;ll send the invite.
          </p>
          <TesterSignupForm source="quantumfollis.com/test" />
          <p className="text-sm text-slate-500 mt-8">
            <Link href="/" className="text-qsel-highlight hover:text-white">
              Back to Quantum Follis
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-qsel">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-medium text-center text-white mb-10">
            How testing works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div key={s.step} className="glass-card p-6 text-center">
                <div className="text-qsel-highlight text-2xl font-medium mb-2">{s.step}</div>
                <h3 className="text-white font-medium mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
