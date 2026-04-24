import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Partnerships, product reviews, sponsorship inquiries. Get in touch with Lady of the Stack.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3">Contact</p>
      <h1 className="text-4xl sm:text-5xl text-[var(--forest)]">Let&apos;s talk.</h1>
      <p className="mt-4 text-lg text-[var(--fg-muted)]">
        Collabs, product reviews, sponsorship inquiries, community features. If it fits the vibe, I want to hear about it.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${site.email}?subject=Collab%20inquiry`}
          className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 hover:border-[var(--accent)]"
        >
          <h3 className="text-2xl text-[var(--forest)]">Email</h3>
          <p className="mt-2 text-sm text-[var(--fg-muted)]">Best for partnerships and business.</p>
          <p className="mt-3 text-[var(--accent)]">{site.email}</p>
        </a>

        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 hover:border-[var(--accent)]"
        >
          <h3 className="text-2xl text-[var(--forest)]">Instagram DMs</h3>
          <p className="mt-2 text-sm text-[var(--fg-muted)]">Fastest way to say hi.</p>
          <p className="mt-3 text-[var(--accent)]">{site.handle}</p>
        </a>

        <a
          href={site.threads}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 hover:border-[var(--accent)]"
        >
          <h3 className="text-2xl text-[var(--forest)]">Threads</h3>
          <p className="mt-2 text-sm text-[var(--fg-muted)]">Public chat and quick replies.</p>
          <p className="mt-3 text-[var(--accent)]">{site.handle}</p>
        </a>

        <a
          href={site.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 hover:border-[var(--accent)]"
        >
          <h3 className="text-2xl text-[var(--forest)]">Discord</h3>
          <p className="mt-2 text-sm text-[var(--fg-muted)]">Community questions and hangouts.</p>
          <p className="mt-3 text-[var(--accent)]">Join the Fellowship</p>
        </a>
      </div>

      <div className="mt-10 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-5 text-sm text-[var(--fg-muted)]">
        For brand partnerships, include: product, audience fit, timeline, and budget range. Keeps it moving.
      </div>
    </div>
  );
}
