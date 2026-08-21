import Link from "next/link";
import type { ReactNode } from "react";

export default function HeaderLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="border-ink/50 text-ink hover:border-ink border-b border-dotted no-underline transition-colors hover:border-solid"
    >
      {children}
    </Link>
  );
}
