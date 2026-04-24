"use client";
import { useEffect, useState } from "react";

type Mode = "light" | "dark";

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("light");
  const [adhd, setAdhd] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Mode) || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const storedAdhd = localStorage.getItem("adhd") === "1";
    setMode(stored);
    setAdhd(storedAdhd);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    document.documentElement.classList.toggle("adhd-mode", adhd);
    localStorage.setItem("theme", mode);
    localStorage.setItem("adhd", adhd ? "1" : "0");
  }, [mode, adhd]);

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        type="button"
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2.5 py-1.5 hover:border-[var(--accent)]"
        aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      >
        {mode === "dark" ? "☾ Dark" : "☀ Light"}
      </button>
      <button
        type="button"
        onClick={() => setAdhd(!adhd)}
        className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2.5 py-1.5 hover:border-[var(--accent)]"
        aria-pressed={adhd}
        aria-label="Toggle ADHD-friendly reading mode"
      >
        {adhd ? "ADHD on" : "ADHD off"}
      </button>
    </div>
  );
}
