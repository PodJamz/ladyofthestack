import Link from "next/link";
import { nav, site } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg)]/60 sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-[family-name:var(--font-cormorant)] text-2xl leading-none text-[var(--forest)] group-hover:text-[var(--accent)]">
            Lady of the Stack
          </span>
          <span className="text-xs text-[var(--fg-muted)] hidden sm:inline">{site.handle}</span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 sm:gap-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-2 py-1.5 rounded-md hover:text-[var(--accent)] hover:bg-[var(--bg-elevated)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
