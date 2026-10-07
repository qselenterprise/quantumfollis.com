import type { Metadata } from "next";
import Link from "next/link";
import DocPage from "@/components/DocPage";
import { HELP_ARTICLES } from "@/lib/helpArticles";

export const metadata: Metadata = {
  title: "Help Center — Quantum Follis",
  description: "How to set up, fund, pair, and recover a Quantum Follis vault.",
};

export default function HelpIndexPage() {
  return (
    <DocPage title="Help Center">
      <p>
        These articles match the current Quantum Follis and QSEL Authenticator
        flows. For an account problem, use <Link href="/support">Contact Support</Link>.
        Do not email your passphrase, seed, or private key.
      </p>
      <ul className="help-index">
        {HELP_ARTICLES.map((article) => (
          <li key={article.slug}>
            <Link href={`/help/${article.slug}`}>{article.title}</Link>
            <p>{article.summary}</p>
          </li>
        ))}
      </ul>
    </DocPage>
  );
}
