import InlineLink from "@/components/InlineLink";
import type { ReactNode } from "react";

export default function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <InlineLink href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </InlineLink>
  );
}
