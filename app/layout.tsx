import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quantum Follis — Next-Gen Digital Wallet",
  description:
    "The most advanced Solana wallet — guardian recovery, multi-sig security, built-in dApp browser, and quantum-secured vault architecture.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Quantum Follis — Next-Gen Digital Wallet",
    description:
      "Guardian NFT recovery, multi-sig vault, built-in dApp browser, quantum-secured keypairs, and session NFT security on Solana.",
    type: "website",
    url: "https://quantumfollis.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Follis",
    description: "Next-gen digital wallet with guardian recovery and quantum security.",
    creator: "@qselenterprise",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ background: "#000" }}>
      <body style={{ background: "#000" }}>{children}</body>
    </html>
  );
}
