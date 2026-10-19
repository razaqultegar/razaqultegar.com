import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-6">
      <h2 className="mt-10 mb-1 text-2xl font-normal">{title}</h2>
      <div className="space-y-4 text-lg leading-6.5">{children}</div>
    </section>
  );
}
