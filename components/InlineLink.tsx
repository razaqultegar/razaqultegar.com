import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export default function InlineLink({
  href,
  children,
  ...rest
}: {
  href: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      className="text-rust hover:text-rust-dark underline visited:text-gray-500"
      {...rest}
    >
      {children}
    </Link>
  );
}
