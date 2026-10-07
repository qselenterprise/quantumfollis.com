import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DocPage from "@/components/DocPage";
import { HELP_ARTICLES, getHelpArticle } from "@/lib/helpArticles";

export function generateStaticParams() {
  return HELP_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getHelpArticle(slug);
  if (!article) return { title: "Help — Quantum Follis" };
  return {
    title: `${article.title} — Quantum Follis`,
    description: article.summary,
  };
}

export default async function HelpArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getHelpArticle(slug);
  if (!article) notFound();

  return (
    <DocPage title={article.title}>
      <p><Link href="/help">← Help Center</Link></p>
      <p>{article.summary}</p>
      {article.sections.map((section, index) => (
        <div key={index}>
          {section.heading ? <h2>{section.heading}</h2> : null}
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
      <p>
        Still stuck? <Link href="/support">Contact support</Link>. We will never
        ask for your recovery passphrase, seed, private key, authenticator
        export, or the 6-digit email code.
      </p>
    </DocPage>
  );
}
