import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Fellowship",
  description: "Join the Lady of the Stack Discord. MTG community, Commander chat, new-player friendly, giveaways.",
};

export default function FellowshipPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">Discord</p>
      <h1 className="text-4xl sm:text-5xl text-[var(--forest)]">The Fellowship.</h1>
      <p className="mt-4 text-lg text-[var(--fg-muted)]">
        A Discord server for MTG players who love the game and the people around the table. Chill, real, new-player friendly, loud at the right moments.
      </p>

      <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8">
        <h2 className="text-2xl text-[var(--forest)]">What&apos;s inside</h2>
        <ul className="mt-4 space-y-2 text-[var(--fg)]">
          <li className="flex gap-3"><span className="text-[var(--accent)]">✦</span> Commander chat and deck feedback</li>
          <li className="flex gap-3"><span className="text-[var(--accent)]">✦</span> A new-player friendly channel, judgment-free</li>
          <li className="flex gap-3"><span className="text-[var(--accent)]">✦</span> Game night voice chats and quick polls</li>
          <li className="flex gap-3"><span className="text-[var(--accent)]">✦</span> Giveaways, deck tech drops, and event schedule</li>
          <li className="flex gap-3"><span className="text-[var(--accent)]">✦</span> First look at the videos and lists before they go public</li>
        </ul>

        <a
          href={site.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center rounded-md bg-[var(--btn-bg)] px-6 py-3 text-base font-medium text-[var(--btn-fg)] hover:bg-[var(--btn-bg-hover)] hover:text-[var(--btn-fg-hover)]"
        >
          Join the Fellowship on Discord
        </a>
      </div>

      <p className="mt-8 text-sm text-[var(--fg-muted)]">
        If the invite expires, ping <a href={`mailto:${site.email}`} className="text-[var(--accent)] hover:underline">{site.email}</a> and I&apos;ll send a fresh one.
      </p>
    </div>
  );
}
