import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Decklists",
  description: "Commander decks, budget upgrades, bracket 2/3 lists, and cEDH builds from Lady of the Stack.",
};

export default function DecklistsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">Decklists</p>
      <h1 className="text-4xl sm:text-5xl text-[var(--forest)]">The builds.</h1>
      <p className="mt-4 text-lg text-[var(--fg-muted)] max-w-2xl">
        Commander decks, budget upgrades, bracket 2 and 3 builds, deck tech of the month. Lists get dropped here as they get played. Follow{" "}
        <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">{site.handle}</a>{" "}
        for the reel version of each.
      </p>

      <div className="mt-10 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-10 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-3">Featured deck</p>
        <h2 className="text-3xl text-[var(--forest)]">Live on Moxfield.</h2>
        <p className="mt-3 text-[var(--fg-muted)] max-w-xl mx-auto">
          Full decklist, mana base, sideboard notes, the works. Cards click through to Scryfall, prices update live, copy the list straight into your client.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={site.moxfield}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-[var(--btn-bg)] px-5 py-2.5 text-sm font-medium text-[var(--btn-fg)] hover:bg-[var(--btn-bg-hover)] hover:text-[var(--btn-fg-hover)]"
          >
            View the deck on Moxfield →
          </a>
          <a
            href={site.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--bg)] px-5 py-2.5 text-sm font-medium hover:border-[var(--accent)]"
          >
            Discuss in the Fellowship
          </a>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          { title: "Commander", body: "Main format. Deck tech every month." },
          { title: "Budget", body: "Strong lists under $100. No jank, no traps." },
          { title: "Brackets 2 and 3", body: "Fun but real. Tuned for actual pods." },
        ].map((c) => (
          <div key={c.title} className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-5">
            <h3 className="text-xl text-[var(--forest)]">{c.title}</h3>
            <p className="text-sm text-[var(--fg-muted)] mt-2">{c.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-[var(--fg-muted)]">
        Got a deck you want reviewed or want to suggest next month&apos;s tech?{" "}
        <Link href="/contact" className="text-[var(--accent)] hover:underline">Send a note</Link>.
      </p>
    </div>
  );
}
