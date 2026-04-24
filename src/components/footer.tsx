import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)] mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--forest)]">
            Lady of the Stack
          </p>
          <p className="text-sm text-[var(--fg-muted)] mt-2 max-w-md">
            MTG content, Commander chaos, and a community that&apos;s chill, new-player friendly, and actually fun.
          </p>
        </div>
        <div className="sm:text-right">
          <ul className="flex flex-wrap gap-4 sm:justify-end text-sm">
            <li><a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href={site.threads} target="_blank" rel="noopener noreferrer">Threads</a></li>
            <li><a href={site.discord} target="_blank" rel="noopener noreferrer">Discord</a></li>
            <li><a href={`mailto:${site.email}`}>Email</a></li>
          </ul>
          <p className="text-xs text-[var(--fg-muted)] mt-4">
            © {new Date().getFullYear()} Lady of the Stack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
