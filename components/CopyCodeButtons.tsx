"use client";

import { useEffect } from "react";

// Journal HTML is rendered from markdown as a static string, so the copy
// buttons are wired up with one delegated listener instead of React handlers.
export default function CopyCodeButtons() {
  useEffect(() => {
    async function handleClick(event: MouseEvent) {
      const button = (event.target as HTMLElement).closest(".code-copy");
      const code = button?.parentElement?.querySelector("pre code");
      if (!button || !code) return;

      await navigator.clipboard.writeText(code.textContent ?? "");
      button.classList.add("is-copied");
      button.setAttribute("aria-label", "Tersalin");
      setTimeout(() => {
        button.classList.remove("is-copied");
        button.setAttribute("aria-label", button.getAttribute("title") ?? "");
      }, 2000);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
