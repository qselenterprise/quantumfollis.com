import type { Metadata } from "next";
import Link from "next/link";
import DocPage from "@/components/DocPage";
import { COMPANY, COMPANY_DETAIL, LEGAL_UPDATED, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Quantum Follis",
  description: "How QSEL Enterprise LLC handles information in Quantum Follis and QSEL Authenticator.",
};

export default function PrivacyPage() {
  return (
    <DocPage title="Privacy Policy">
      <p><strong>Last updated:</strong> {LEGAL_UPDATED}</p>
      <p>
        This policy is issued by <strong>{COMPANY}</strong>, {COMPANY_DETAIL}.
        Quantum Follis and QSEL Authenticator are products of that company.
        “We” means {COMPANY}.
      </p>
      <p>
        This policy covers the Quantum Follis wallet, the QSEL Authenticator
        app used to approve actions for a vault, and the services those apps
        call (our backend, on-chain programs, and the networks you choose).
      </p>

      <h2>1. What we do not hold</h2>
      <p>
        Quantum Follis is non-custodial. Private keys, recovery passphrases,
        authenticator secrets, and cold-backup contents are created and stored
        on your devices. We do not receive them, cannot spend your funds, and
        cannot restore a vault if you lose every copy of those secrets.
      </p>
      <ul>
        <li>We do not ask for your recovery passphrase, seed, or private key in support email. Do not send them.</li>
        <li>A recovery-factor record on our servers is an encrypted envelope. We cannot read the passphrase from it.</li>
        <li>We do not sell personal information and we do not run a third-party advertising or analytics SDK in the wallet.</li>
      </ul>

      <h2>2. Information on your device</h2>
      <p>The apps keep the following locally so the wallet can function:</p>
      <ul>
        <li>Vault keys and wallet keys, in the device secure store.</li>
        <li>Authenticator key material, on the authenticator device only.</li>
        <li>A local flag that a recovery passphrase was set, and that a recovery email was verified. The passphrase itself is not stored.</li>
        <li>Session state, network mode (mainnet or devnet/testnet), and which chains you have enabled.</li>
        <li>Balances and recent activity fetched for display. That cache stays on the device.</li>
      </ul>
      <p>
        Deleting the vault in Settings removes the local vault from that
        device. It does not erase public blockchain history.
      </p>

      <h2>3. Information on our servers</h2>
      <p>
        Some features need a record that is not a private key. We store that
        so pairing, fees, recovery, and alerts can work.
      </p>
      <ul>
        <li><strong>Vault record.</strong> A vault id and the public keys and roles of wallets you create (fee reserve, trading wallets, and similar). No private keys.</li>
        <li><strong>Pairing.</strong> After a LinkingNFT mint, a cache of the vault public key, authenticator public key, and expiry. The authoritative record is on Solana.</li>
        <li><strong>Recovery contact.</strong> If you complete Set Recovery Contact Info, the verified email (and a push token if the device has one) used to warn you about a reset. This address is not our support inbox.</li>
        <li><strong>Recovery factor.</strong> A wrapped secret, a recovery id, and the salt and parameters needed to unwrap it on a device that knows the passphrase. We never see the passphrase.</li>
        <li><strong>Guardian handoff.</strong> An encrypted claim blob so another authenticator can import a guardian shard. The decryption key travels in the link or QR, not to us in usable form.</li>
        <li><strong>Fees.</strong> Records of reserve charges (sessions, sends, later LinkingNFT mints, and similar) so an operation is not billed twice.</li>
        <li><strong>Logs.</strong> Standard server logs (time, route, error) for operations and abuse prevention. We do not build a marketing profile from them.</li>
      </ul>

      <h2>4. Information on a blockchain</h2>
      <p>
        Sends, swaps, LinkingNFT mints, session NFTs, guardian NFTs, and
        recovery transactions are public. Anyone can read addresses, amounts,
        and program data on Solana, Bitcoin, Ethereum, and the other networks
        you use. We do not control that. Choosing devnet or a test network
        does not make a mainnet transaction private, and the reverse is also
        true.
      </p>

      <h2>5. QSEL Authenticator</h2>
      <p>
        The authenticator approves logins, transaction attestations, and
        recovery. Its keys stay on that device. We learn that a pairing exists
        and whether an approval was submitted. We do not receive the
        authenticator private key.
      </p>

      <h2>6. Other services</h2>
      <p>When you use a feature, the following parties see what they need to perform it:</p>
      <ul>
        <li><strong>Solana RPC providers</strong> (including Helius when configured) see the requests your app makes to read balances and submit transactions.</li>
        <li><strong>Jupiter and other DEXs or dapps</strong> you open in Q-Pass or a swap see the wallet you connect and the transaction you sign.</li>
        <li><strong>Email delivery</strong> sees the recovery-contact address when we send a verification code or a security alert.</li>
        <li><strong>Apple and Google</strong> see whatever their app stores and device services normally collect when you install an app.</li>
      </ul>
      <p>Their policies govern what they do with that data.</p>

      <h2>7. Family Trader</h2>
      <p>
        If you turn on Family Trader Mode and invite someone, we store the
        invite and the dependent’s link to your vault so they can use the
        wallets you assigned. They do not receive your vault keys.
      </p>

      <h2>8. How long we keep it</h2>
      <p>
        On-chain data remains for as long as the network does. Server records
        for a vault stay while the vault is in use and as needed to prevent
        fraud, finish a fee, or meet law. You may email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and ask us to
        delete server-side vault, contact, and pairing-cache records. Public
        chain history cannot be deleted. Local data is removed with Delete
        Vault or by uninstalling the app.
      </p>

      <h2>9. Children</h2>
      <p>
        Quantum Follis is not for anyone under 18. We do not knowingly collect
        information from children.
      </p>

      <h2>10. Security and your choices</h2>
      <p>
        You choose whether to set a recovery passphrase, recovery email,
        guardians, secondary login, and a send limit. Skipping those features
        means we have less about you, and you have fewer ways back in if you
        lose a device.
      </p>

      <h2>11. Changes</h2>
      <p>
        If we change this policy, we will update the date on this page. The
        app links here. Continued use after the new date means you accept the
        update.
      </p>

      <h2>12. Contact</h2>
      <p>
        Privacy questions: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        See also the <Link href="/support">support page</Link> for what we
        will never ask you to send.
      </p>
    </DocPage>
  );
}
