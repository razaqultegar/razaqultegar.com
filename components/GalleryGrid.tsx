"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { GalleryItem } from "@/lib/gallery";

function NavButton({
  label,
  onClick,
  className = "",
  children,
}: {
  label: string;
  onClick: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`hover:text-paper px-2 text-xl transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const item = active === null ? null : items[active];

  const step = (delta: number) =>
    setActive((i) =>
      i === null ? i : (i + delta + items.length) % items.length,
    );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active === null) dialog.close();
    else if (!dialog.open) dialog.showModal();
  }, [active]);

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3">
        {items.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(index)}
            className="group relative mb-4 block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-lg text-left"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.title}
              loading="lazy"
              className="w-full transition duration-300 group-hover:scale-[1.03]"
            />
            <span className="text-paper absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-3 pt-8 pb-2 text-sm opacity-0 transition group-hover:opacity-100">
              {photo.title}
              {photo.location && (
                <span className="text-paper/70 block text-xs">
                  {photo.location}
                </span>
              )}
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        // Native <dialog> closes itself on Esc; keep React state in sync.
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActive(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") step(-1);
          if (event.key === "ArrowRight") step(1);
        }}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/85"
      >
        <NavButton
          label="Tutup"
          onClick={() => setActive(null)}
          className="text-paper/80 fixed top-4 right-4 text-3xl"
        >
          ×
        </NavButton>

        {item && active !== null && (
          <div className="flex max-w-[92vw] flex-col items-center gap-3">
            <figure className="relative overflow-hidden rounded-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.title}
                className="block max-h-[85vh] max-w-full object-contain"
              />
              <figcaption className="text-paper/85 absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/45 to-transparent px-5 pt-20 pb-4">
                <p className="text-paper text-lg leading-snug">{item.title}</p>
                {item.location && (
                  <p className="text-paper/65 text-xs tracking-wide uppercase">
                    {item.location}
                  </p>
                )}
                {item.description && (
                  <p className="mt-2 max-w-xl text-sm leading-relaxed">
                    {item.description}
                  </p>
                )}
              </figcaption>
            </figure>
            {items.length > 1 && (
              <div className="text-paper/80 flex items-center gap-4 text-sm">
                <NavButton label="Foto sebelumnya" onClick={() => step(-1)}>
                  ←
                </NavButton>
                <span className="text-paper/60">
                  {active + 1}/{items.length}
                </span>
                <NavButton label="Foto berikutnya" onClick={() => step(1)}>
                  →
                </NavButton>
              </div>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
