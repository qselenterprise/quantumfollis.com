import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
import DocPage from "@/components/DocPage";
import { TUTORIALS } from "@/lib/tutorials";

export const metadata: Metadata = {
  title: "Tutorials — Quantum Follis",
  description:
    "Set up a vault, pair the authenticator, fund a wallet, and see how the fee payer works.",
};

function videoFile(name: string): string | null {
  const file = path.join(process.cwd(), "public", "tutorials", name);
  return fs.existsSync(file) ? `/tutorials/${name}` : null;
}

export default function TutorialsPage() {
  return (
    <DocPage title="Tutorials" wide>
      <p>
        Four walkthroughs for a new vault. Written steps are below each video.
        The same topics are in the <Link href="/help">Help Center</Link> if you
        want the short version.
      </p>
      {TUTORIALS.map((tutorial, index) => {
        const src = videoFile(tutorial.video);
        return (
          <article key={tutorial.slug} id={tutorial.slug} className="tutorial">
            <h2>
              {index + 1}. {tutorial.title}
            </h2>
            <p>{tutorial.summary}</p>
            {src ? (
              <video className="tutorial-video" controls playsInline preload="metadata">
                <source src={src} type="video/mp4" />
              </video>
            ) : (
              <div className="tutorial-video tutorial-video-empty">
                <p>Video coming soon</p>
                <p className="tutorial-video-file">{tutorial.video}</p>
              </div>
            )}
            <ol>
              {tutorial.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p>
              <Link href={`/help/${tutorial.helpSlug}`}>Read the help article</Link>
            </p>
          </article>
        );
      })}
    </DocPage>
  );
}
