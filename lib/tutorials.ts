export type Tutorial = {
  slug: string;
  title: string;
  summary: string;
  /** File name under public/tutorials/. The page shows the player when this file exists. */
  video: string;
  steps: string[];
  helpSlug: string;
};

export const TUTORIALS: Tutorial[] = [
  {
    slug: 'setup-vault',
    title: 'Set up a vault',
    summary: 'Create the vault on your phone. The keys stay on that device.',
    video: 'setup-vault.mp4',
    helpSlug: 'vault-wallet-authenticator',
    steps: [
      'Install Quantum Follis (Google Play, Apple App Store) and open it. Choose Trader Mode.',
      'Select "Create Vault" and input a name for your vault. You will be prompted to set a Fee Payer keypair, and a Trader keypair. You have the ability to set more than one Trader Wallet.',
      'After creating your Trader keypair, you will be prompted to verify your created keypairs, select complete setup, and your vault will be created. The vault keys are created on this phone and do not leave it.',
      'The vault is the container. Inside it you get a fee reserve and trading wallets. A wallet is an address on one chain. Sending, receiving, and swapping use a trading wallet.',
      'After the vault exists, you will be prompted to complete a post onboarding checklist: fund the fee reserve, pair the authenticator, and secondary security setup. You can leave the checklist and come back to an open item.',
    ],
  },
  {
    slug: 'pair-authenticator',
    title: 'Pair the authenticator',
    summary: 'Bind QSEL Authenticator to the vault with a LinkingNFT.',
    video: 'pair-authenticator.mp4',
    helpSlug: 'pair-authenticator',
    steps: [
      'Install QSEL Authenticator (Google Play, Apple App Store). Generate a keypair inside your Vault Dashboard. The wallet cannot spend with them, and the authenticator cannot spend your coins by itself.',
      'Fund the fee reserve first. The first LinkingNFT mint is sponsored, but the mint still checks that the reserve holds the fee token, because the next login session is a paid debit.',
      'In Quantum Follis, start Authenticator Setup and scan the pairing QR shown on the authenticator.',
      'Mint the LinkingNFT. When the checklist shows Paired and LinkingNFT, the two apps are bound on-chain. Later logins and sends at or above your send limit ask the authenticator to approve.',
    ],
  },
  {
    slug: 'fund-wallet',
    title: 'Fund a wallet',
    summary: 'Send coins to a trading wallet address. This is not the fee reserve.',
    video: 'fund-wallet.mp4',
    helpSlug: 'send-receive-swap',
    steps: [
      'Open the wallet, pick the chain, and choose the trading wallet you want to fund.',
      'Tap Receive. The screen shows that wallet’s address and a QR code. Copy the address or let the sender scan the code.',
      'Send the matching asset on that network only. Solana USDC sent on another network does not arrive, and we cannot reverse it.',
      'The balance shows on that trading wallet after the network confirms. Trading, swaps, and sends use this balance. Fees do not. Fees come out of the fee reserve.',
    ],
  },
  {
    slug: 'fee-payer',
    title: 'What the fee payer does',
    summary: 'Your fee reserve pays Quantum Follis fees in USDC. It is your wallet.',
    video: 'fee-payer.mp4',
    helpSlug: 'fund-fee-reserve',
    steps: [
      'Every vault has its own fee payer, shown in the app as the fee reserve. You hold the key. Quantum Follis does not custody it, and funding it does not send your coins to a company wallet.',
      'The app charges operation fees from that reserve in USDC: logins and sessions, sends, and later LinkingNFT mints. The screen names the token and the amount before you confirm.',
      'Open the fund-fee-reserve step and copy the address it shows. Send USDC on Solana to that address, from an exchange, another wallet, or a trading wallet in this vault. SOL in the same address does not pay a USDC fee.',
      'You do not put SOL in the fee payer for gas. The network fee on those sponsored transactions is paid separately. The reserve only needs enough USDC for the fees the app is about to charge.',
    ],
  },
];
