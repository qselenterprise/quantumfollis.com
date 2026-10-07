export type HelpSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type HelpArticle = {
  slug: string;
  title: string;
  summary: string;
  sections: HelpSection[];
};

export const HELP_ARTICLES: HelpArticle[] = [
  {
    slug: 'vault-wallet-authenticator',
    title: 'Vault, wallets, and the authenticator',
    summary: 'What each piece is, and which device holds the keys.',
    sections: [
      {
        paragraphs: [
          'A vault is the container created in Quantum Follis. It holds several wallets (fee reserve, trading wallets, and others you add). The vault keys stay on the phone that created it.',
          'A wallet is an address on one chain. Sending, receiving, and swapping use that wallet. The fee reserve is the wallet that pays Quantum Follis fees. It is not a balance we hold.',
          'QSEL Authenticator is a separate app. You pair it to the vault with a LinkingNFT. It approves logins, large sends, and recovery. Its keys stay on the authenticator device. The wallet cannot sign with those keys, and the authenticator cannot spend your coins by itself.',
        ],
      },
    ],
  },
  {
    slug: 'fund-fee-reserve',
    title: 'Fund the fee reserve',
    summary: 'Which address to fund, and why SOL and QSELx are not interchangeable.',
    sections: [
      {
        paragraphs: [
          'After you create a vault, the checklist asks you to fund the fee reserve. Open that step and copy the address it shows. Send the token the app is charging in right now.',
          'Production fees are charged in QSELx from that reserve. SOL sitting in the same address does not satisfy a QSELx charge. If the app is in a SOL fee mode, the reverse is true: QSELx will not cover a SOL debit.',
          'The first LinkingNFT mint is paid for by the company gas wallet, but the mint still checks that your reserve is funded, because the next login session is a paid debit. If the mint says the reserve is not funded, the reserve address does not hold enough of the fee token. The company wallet is not the address you fund.',
        ],
      },
    ],
  },
  {
    slug: 'pair-authenticator',
    title: 'Pair the authenticator and mint the LinkingNFT',
    summary: 'Download, create a key, scan, then mint.',
    sections: [
      {
        bullets: [
          'Install QSEL Authenticator and create its keypair on that device.',
          'In the wallet, start Authenticator Setup and scan the pairing QR from the authenticator.',
          'Mint the LinkingNFT. The first mint is sponsored. Later mints debit the fee reserve.',
          'When the checklist shows Paired and LinkingNFT, the two apps are bound on-chain.',
        ],
        paragraphs: [
          'Keep the authenticator phone available. Session login and sends at or above your send limit ask it to approve.',
        ],
      },
    ],
  },
  {
    slug: 'secondary-login',
    title: 'Secondary login',
    summary: 'A second way into the vault on this device.',
    sections: [
      {
        paragraphs: [
          'Secondary login is an extra unlock method stored on the device, separate from the authenticator session. Set it from the post-onboarding checklist or from Settings under Security when that row is offered.',
          'It does not replace the authenticator for pairing, attestations, or recovery. If you skip it, you still use the vault with the primary unlock, and the checklist item stays open.',
        ],
      },
    ],
  },
  {
    slug: 'recovery-passphrase',
    title: 'Recovery passphrase and the cold backup PDF',
    summary: 'The passphrase never leaves the device. The PDF is yours to store.',
    sections: [
      {
        paragraphs: [
          'Set Recovery Passphrase derives a key on the phone and wraps a recovery factor. Only the wrapped envelope is uploaded. We cannot read the passphrase. Write it down before you leave the screen. There is no “forgot passphrase” reset.',
          'Generate Cold Backup PDF writes a document you save or print. Treat it like a seed phrase. Anyone who has the PDF and the rest of the recovery material can attempt recovery. We do not receive the PDF.',
          'A USB or hardware cold backup, when you complete that checklist item, is another copy you control. Store it offline.',
        ],
      },
    ],
  },
  {
    slug: 'recovery-contact',
    title: 'Recovery contact is not support',
    summary: 'The email on the checklist receives security alerts, not help tickets.',
    sections: [
      {
        paragraphs: [
          'Set Recovery Contact Info asks for an email and a verification code. That address is stored so we can warn you if a pairing reset or recovery is started. It is not the Quantum Follis support mailbox.',
          'Support is qselenterprise@protonmail.com. Do not put your passphrase, seed, or private key in either mailbox. Support will never ask for them, and a real security alert will never ask you to send them either.',
        ],
      },
    ],
  },
  {
    slug: 'guardians',
    title: 'Guardians (2 of 3)',
    summary: 'Three authenticator devices, two of which must approve a recovery.',
    sections: [
      {
        paragraphs: [
          'Guardian setup creates three shards. One stays on your authenticator. The other two are handed to two other authenticator devices through a link or QR. Those people import the shard. They do not get your vault keys.',
          'A vault recovery needs two of the three. The shard on a lost phone does not count. Do not give two shards to the same person if you want the second approval to be independent.',
          'Rotating guardians is a paid action and replaces the set. Do not start a full vault recovery and a pairing reset on the same vault at the same time.',
        ],
      },
    ],
  },
  {
    slug: 'lost-authenticator',
    title: 'Lost authenticator',
    summary: 'Reset pairing with the passphrase, guardians, and a wait.',
    sections: [
      {
        paragraphs: [
          'If the authenticator phone is gone but the wallet phone is not, use the lost-authenticator pairing reset. You will need the recovery passphrase and approvals from your guardians. There is a waiting period before the new authenticator can finish pairing. On the current app that wait is 48 hours even when a devnet program is faster.',
          'Cancel only if you still have the old authenticator and the app still offers cancel. After the wait, pair the new authenticator and mint a new LinkingNFT.',
        ],
      },
    ],
  },
  {
    slug: 'recover-vault',
    title: 'Recover a vault on a new phone',
    summary: 'Devnet recovery for this release. Mainnet recovery is not deployed.',
    sections: [
      {
        paragraphs: [
          'Vault recovery is for when the wallet phone itself is lost. Install Quantum Follis on a new phone, start recovery, and collect two guardian approvals plus your recovery material. The same 48 hour wait applies in the app.',
          'This release runs recovery on devnet. Mainnet guardian and pairing trees are not deployed, so do not expect a mainnet vault to recover until that work is finished and announced. A self shard that lived only on the lost phone cannot be one of the two approvals.',
        ],
      },
    ],
  },
  {
    slug: 'send-receive-swap',
    title: 'Send, receive, swap, and the send limit',
    summary: 'Everyday transfers, and when the authenticator must approve.',
    sections: [
      {
        paragraphs: [
          'Receive shows the address for the chain you picked. Send the matching asset on that network. A token sent on the wrong network is not recoverable by us.',
          'Swap routes through the venue configured for that chain (Jupiter on Solana). You review the quote in the confirmation sheet before you sign. Quotes move. A failed swap does not mean funds moved.',
          'Settings → Send limit sets an amount. A send at or above it asks the paired authenticator to approve before the transaction is broadcast. Below the limit, the wallet can send during an active session.',
        ],
      },
    ],
  },
  {
    slug: 'family-trader',
    title: 'Family Trader',
    summary: 'Invite a dependent onto wallets you choose.',
    sections: [
      {
        paragraphs: [
          'Turn on Family Trader Mode in Settings. Create an invite and send it to the other person. They install the wallet and accept. They use the wallets you assigned. They do not receive your vault keys or your authenticator.',
          'Invites expire. You can turn the mode off. You remain responsible for activity in the wallets you shared.',
        ],
      },
    ],
  },
  {
    slug: 'bots',
    title: 'Trading bots',
    summary: 'A bot spends from a bot wallet you fund, after you accept the disclosure.',
    sections: [
      {
        paragraphs: [
          'Creating a bot makes a separate key and asks you to fund it and to accept the in-app bot disclosure. That disclosure is part of using bots. It is not replaced by these website terms.',
          'Bots can lose the funds you assign. They are not advice and not a promise of profit. Stop or close a bot from its screen when you want it to stop. Leave the wallet funded only with what you are willing to trade.',
        ],
      },
    ],
  },
  {
    slug: 'q-pass',
    title: 'Q-Pass',
    summary: 'A browser in the wallet. You are dealing with the site you open.',
    sections: [
      {
        paragraphs: [
          'Q-Pass loads websites and can connect your wallet when a site asks. Read the transaction before you approve it. We do not operate those sites and we cannot reverse a signature.',
          'Devnet and mainnet connections are different. A site on the wrong cluster will not see the funds you expect.',
        ],
      },
    ],
  },
  {
    slug: 'networks',
    title: 'Devnet and mainnet',
    summary: 'Test assets and real assets do not mix.',
    sections: [
      {
        paragraphs: [
          'The network switch in the wallet changes which cluster your Solana actions use. Devnet QSELx and mainnet QSELx are different mints. Faucet SOL is not mainnet SOL.',
          'Recovery in this release is a devnet feature. Do not treat a successful devnet recovery as proof that a mainnet vault can be recovered.',
        ],
      },
    ],
  },
  {
    slug: 'delete-vault',
    title: 'Delete vault',
    summary: 'Removes the vault from this device only.',
    sections: [
      {
        paragraphs: [
          'Settings → Delete Vault wipes the local vault on that phone. It does not delete public transactions, and it does not by itself delete the server records used for pairing, fees, and recovery alerts.',
          'To ask for those server records to be deleted, email qselenterprise@protonmail.com from the recovery contact if you have one, and include the vault id if you still have it. On-chain history cannot be deleted. If you might need the vault again, finish a backup before you delete it.',
        ],
      },
    ],
  },
];

export function getHelpArticle(slug: string): HelpArticle | undefined {
  return HELP_ARTICLES.find((article) => article.slug === slug);
}
