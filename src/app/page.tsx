import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              Welcome to the realm
            </p>
            <h1 className="text-5xl sm:text-6xl leading-[1.05] font-[family-name:var(--font-cormorant)] text-[var(--forest)]">
              Lady of the Stack
            </h1>
            <p className="mt-5 text-lg text-[var(--fg-muted)] max-w-lg">
              MTG content. Commander chaos. Fantasy. Community for the people who actually play the game.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-[var(--forest)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] hover:bg-[var(--accent)]"
              >
                Follow on Instagram
              </a>
              <a
                href={site.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-2.5 text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Join the Discord
              </a>
              <Link
                href="/about"
                className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium text-[var(--forest)] hover:text-[var(--accent)]"
              >
                Read about me →
              </Link>
            </div>
          </div>
          <div className="relative aspect-square w-full max-w-md mx-auto md:ml-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent-soft)] via-[var(--accent)] to-[var(--forest)] opacity-20 blur-3xl" />
            <div className="relative rounded-full overflow-hidden ring-4 ring-[var(--accent-soft)]/40 shadow-2xl">
              <Image
                src="/hero.jpg"
                alt="Lady of the Stack, MTG creator, flower crown and elf ears"
                width={800}
                height={800}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-6xl px-6 py-14 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Commander first",
              body: "Bracket 2/3, cEDH, budget upgrades, deck tech of the month. Lists for real tables, not just theory.",
              href: "/decklists",
              cta: "See the decks",
            },
            {
              title: "The Fellowship",
              body: "A Discord for people who love Magic. Chill, new-player friendly, loud at the right moments.",
              href: "/fellowship",
              cta: "Join the server",
            },
            {
              title: "Collabs and content",
              body: "Partnerships, reviews, sponsorships. Reach out if you are building something the community would love.",
              href: "/contact",
              cta: "Get in touch",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6 flex flex-col">
              <h3 className="text-2xl text-[var(--forest)]">{card.title}</h3>
              <p className="text-sm text-[var(--fg-muted)] mt-2 flex-1">{card.body}</p>
              <Link href={card.href} className="mt-4 text-sm text-[var(--accent)] hover:underline">
                {card.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">Latest</p>
        <h2 className="text-3xl text-[var(--forest)]">Instagram gets the attention. This is where the empire lives.</h2>
        <p className="mt-4 text-[var(--fg-muted)]">
          Follow <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">{site.handle}</a> for reels and deck drops. Join{" "}
          <a href={site.discord} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">the Fellowship on Discord</a> for the real conversations.
        </p>
      </section>
    </>
  );
}
