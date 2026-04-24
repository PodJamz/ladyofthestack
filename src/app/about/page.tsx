import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Kirsty, the Lady of the Stack. MTG content creator, Commander player, community builder.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">About me</p>
      <h1 className="text-4xl sm:text-5xl text-[var(--forest)]">Hey, I&apos;m Kirsty.</h1>

      <div className="relative aspect-[4/5] sm:aspect-[16/9] w-full rounded-xl overflow-hidden my-8 border border-[var(--border)]">
        <Image
          src="/hero.jpg"
          alt="Kirsty, the Lady of the Stack"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 768px"
        />
      </div>

      <div className="space-y-5 text-lg leading-relaxed text-[var(--fg)]">
        <p>
          Part Commander player, part fantasy creator, all in on Magic: The Gathering. I make MTG content: Commander decks, Friday Night Magic reels, deck techs, honest takes on the game, and the occasional flower crown and elf ears because if you are going to play Magic you might as well <em>look</em> magical about it.
        </p>
        <p>
          I&apos;ve been playing for years and the part I love most is the community. The chaos at the table, the late-night deck-building, the groan when someone resolves a game-ender. Whether you&apos;ve been stacking triggers for a decade or you&apos;re still figuring out what a saga does, you&apos;re welcome here.
        </p>
        <p>
          This site is my home base. Decklists, community, content, and a way to stay connected. Instagram gets the attention. This is where the empire lives.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-[var(--btn-bg)] px-5 py-2.5 text-sm font-medium text-[var(--btn-fg)] hover:bg-[var(--btn-bg-hover)] hover:text-[var(--btn-fg-hover)]"
        >
          Follow on Instagram
        </a>
        <a
          href={site.threads}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-2.5 text-sm font-medium hover:border-[var(--accent)]"
        >
          Follow on Threads
        </a>
        <a
          href={site.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-2.5 text-sm font-medium hover:border-[var(--accent)]"
        >
          Join the Fellowship
        </a>
      </div>
    </article>
  );
}
