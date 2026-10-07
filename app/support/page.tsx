import type { Metadata } from "next";
import Link from "next/link";
import DocPage from "@/components/DocPage";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Support — Quantum Follis",
  description: "How to reach QSEL Enterprise support, and what we will never ask you to send.",
};

const NEVER_ASK = [
  "Your recovery passphrase",
  "A seed phrase or private key",
  "An authenticator export or guardian shard",
  "The 6-digit code from a recovery-contact email",
  "A screenshot of a backup PDF or QR that contains key material",
];

export default function SupportPage() {
  return (
    <DocPage title="Contact Support">
      <p>
        Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Include
        the app (Quantum Follis or QSEL Authenticator), whether you are on
        mainnet or devnet, and what the screen said. A vault id helps if you
        still have it. You do not need to send a wallet secret for us to help.
      </p>

      <h2>We will never ask for</h2>
      <ul>
        {NEVER_ASK.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>
        If someone claiming to be support asks for any of those, stop and
        email {SUPPORT_EMAIL} yourself. Do not continue the other conversation.
      </p>

      <h2>Recovery alerts are a different mailbox</h2>
      <p>
        The email you enter in Set Recovery Contact Info receives security
        alerts about your vault. That address is not this support inbox, and
        writing to it does not open a support ticket. Alerts from us will not
        ask you to reply with a secret.
      </p>

      <h2>What to try first</h2>
      <ul>
        <li><Link href="/help/fund-fee-reserve">Fee reserve and LinkingNFT funding</Link></li>
        <li><Link href="/help/pair-authenticator">Pairing the authenticator</Link></li>
        <li><Link href="/help/lost-authenticator">Lost authenticator</Link></li>
        <li><Link href="/help/recover-vault">Recover a vault on a new phone</Link></li>
      </ul>
      <p>
        The full list is the <Link href="/help">Help Center</Link>. Privacy and
        terms are on their own pages.
      </p>
    </DocPage>
  );
}
