import type { Metadata } from "next";
import Link from "next/link";
import DocPage from "@/components/DocPage";
import { COMPANY, COMPANY_DETAIL, LEGAL_UPDATED, SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Quantum Follis",
  description: "Terms for using Quantum Follis and QSEL Authenticator, products of QSEL Enterprise LLC.",
};

export default function TermsPage() {
  return (
    <DocPage title="Terms of Service">
      <p><strong>Last updated:</strong> {LEGAL_UPDATED}</p>
      <p>
        These terms are an agreement between you and <strong>{COMPANY}</strong>,{" "}
        {COMPANY_DETAIL}. Quantum Follis and QSEL Authenticator are products of
        the Company. “We” and “us” mean the Company, not any individual.
      </p>
      <p>
        By installing or using the wallet, the authenticator, or the related
        websites, you agree to these terms and to the{" "}
        <Link href="/privacy">Privacy Policy</Link>. If you do not agree, do
        not use the software.
      </p>

      <h2>1. What this software is</h2>
      <p>
        Quantum Follis is non-custodial wallet software. QSEL Authenticator is
        a companion that approves actions for a vault you pair. We provide
        software and on-chain programs. We are not a bank, broker-dealer,
        exchange, money transmitter, custodian, or investment adviser. Nothing
        in the apps is financial, tax, or legal advice.
      </p>
      <p>
        QSELx is a utility token used to pay certain network fees inside the
        product. We do not promise that it will have a market, a price, or
        liquidity.
      </p>

      <h2>2. Your keys and your funds</h2>
      <p>You alone are responsible for:</p>
      <ul>
        <li>The devices that hold your vault, authenticator, and backups.</li>
        <li>Your recovery passphrase, cold-backup PDF, and guardian shards.</li>
        <li>Every transaction you sign, including swaps, sends, Q-Pass connections, and bot trades.</li>
        <li>Sending on the correct network. A devnet asset and a mainnet asset are not the same, and a transaction sent to the wrong address or network cannot be reversed by us.</li>
        <li>Complying with the laws that apply to you, including taxes.</li>
      </ul>
      <p>
        If you lose the secrets required by the recovery method you chose, we
        cannot reconstruct them. A completed recovery or pairing reset changes
        who can sign. You are responsible for who you give a guardian shard or
        a backup.
      </p>

      <h2>3. Fees</h2>
      <p>
        Some actions debit your fee reserve. That reserve is a wallet you
        control inside the vault, not a balance we hold. The token used
        (QSELx, SOL, or either) is chosen by the service configuration at the
        time of the charge and shown in the app. Examples include a paid
        session at login, certain sends, guardian rotation, and a LinkingNFT
        mint after your first one. The first LinkingNFT mint is sponsored for
        network gas. Sponsorship does not make us a custodian.
      </p>
      <p>
        Blockchain fees (Solana rent, priority fees, Bitcoin miner fees, and
        similar) are set by the network. DEX quotes come from the venue you
        use, such as Jupiter. We do not guarantee a quote, a fill, or a price.
      </p>

      <h2>4. Authenticator, sessions, and send limits</h2>
      <p>
        Pairing binds a vault to an authenticator with an on-chain LinkingNFT.
        A session is how the wallet stays unlocked for a limited time. If you
        set a send limit, a send at or over that amount needs an approval on
        the paired authenticator. You must keep that device available. We are
        not liable if you cannot reach it.
      </p>

      <h2>5. Recovery</h2>
      <p>
        Recovery tools (passphrase, guardians, a timed pairing reset, and vault
        recovery on a new device) are optional features you configure. They
        have waiting periods and approval rules enforced by the software and,
        where deployed, by the on-chain program. On devnet those timings may
        differ from mainnet. Recovery is not available on a network where the
        programs and trees are not deployed. Starting a recovery or a reset
        can lock or rotate access. Cancel only through the path the app
        describes.
      </p>

      <h2>6. Family Trader</h2>
      <p>
        Family Trader Mode lets you invite another person to wallets you
        designate. You are responsible for who you invite and what those
        wallets can do. A dependent is not the vault owner. You can turn the
        mode off. Invites can expire.
      </p>

      <h2>7. Trading bots</h2>
      <p>
        If you create a bot, you fund a bot wallet, accept the in-app bot
        disclosure, and choose when it runs. Bots can lose money. They are not
        advice and they are not a promise of profit. Stopping or closing a bot
        is your action. We may suspend the bot service for maintenance or
        abuse.
      </p>

      <h2>8. Q-Pass and third parties</h2>
      <p>
        Q-Pass is a browser inside the wallet. When you connect to a site or
        sign its transaction, you are dealing with that site. We are not a
        party to Jupiter, Squads, or any other dapp, and we do not control
        their contracts. Review what you sign.
      </p>

      <h2>9. Acceptable use</h2>
      <p>You may not:</p>
      <ul>
        <li>Use the software for crime, sanctions evasion, money laundering, or terrorist financing.</li>
        <li>Attack the apps, backend, or on-chain programs, or interfere with another person’s vault.</li>
        <li>Misrepresent a transaction, a recovery, or an approval.</li>
        <li>Use the software if you are under 18 or if the law of your country forbids it.</li>
      </ul>
      <p>
        We may refuse service, revoke a session, or disable a server feature
        if we believe these terms are being broken. That does not give us the
        ability to seize assets held by your keys.
      </p>

      <h2>10. No warranty</h2>
      <p>
        The software and programs are provided “as is” and “as available.”
        We disclaim warranties of merchantability, fitness for a particular
        purpose, title, and non-infringement, and any warranty that the
        software will be uninterrupted, error-free, or secure. Networks,
        RPC providers, and DEXs fail. Upgrades can change behavior.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        To the maximum extent the law allows, {COMPANY} and its members,
        contractors, and agents are not liable for lost profits, lost tokens,
        lost keys, failed recoveries, unauthorized signatures made with your
        devices, or indirect, incidental, special, consequential, or punitive
        damages. Our total liability for a claim arising out of the software
        is limited to the greater of fifty U.S. dollars or the fees you paid
        the Company for the software in the three months before the claim.
        Some places do not allow these limits. In those places, the limits
        apply only as far as the law allows.
      </p>

      <h2>12. Indemnity</h2>
      <p>
        You will defend and indemnify the Company against claims, losses, and
        expenses (including reasonable legal fees) arising from your use of
        the software, your transactions, or your breach of these terms.
      </p>

      <h2>13. Changes and law</h2>
      <p>
        We may update these terms by posting a new version on this page with
        a new date. If you continue to use the software after that date, you
        accept the update. These terms are governed by the laws of the State
        of Arizona, excluding conflict-of-law rules. Courts in Maricopa
        County, Arizona are the exclusive venue, except that either party may
        seek injunctive relief for misuse of intellectual property or abuse of
        the service.
      </p>

      <h2>14. Contact</h2>
      <p>
        Questions about these terms:{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        Product help is on the <Link href="/help">Help Center</Link> and{" "}
        <Link href="/support">support</Link> pages.
      </p>
    </DocPage>
  );
}
