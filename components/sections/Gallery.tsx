import Section from "@/components/sections/Section";
import { galleryItems } from "@/data/gallery";

const placeholderHeights = [
  "h-48",
  "h-64",
  "h-56",
  "h-72",
  "h-40",
  "h-60",
  "h-48",
  "h-64",
];

export default function Gallery() {
  return (
    <Section id="galeri" title="Galeri">
      <p>
        Grid foto (bisa dari kerjaan, momen kantor, event, atau apapun).
        Placeholder dulu, bakal diganti manual nanti.
      </p>
      <div className="columns-2 gap-4 sm:columns-3">
        {galleryItems.map((item, index) =>
          item.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={item.alt}
              src={item.src}
              alt={item.alt}
              className="mb-4 w-full break-inside-avoid rounded-lg"
            />
          ) : (
            <div
              key={item.alt}
              className={`mb-4 flex ${placeholderHeights[index % placeholderHeights.length]} border-ink/30 break-inside-avoid items-center justify-center rounded-lg border border-dashed text-sm`}
            >
              {item.alt}
            </div>
          ),
        )}
      </div>
    </Section>
  );
}
