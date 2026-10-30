import GalleryGrid from "@/components/GalleryGrid";
import Section from "@/components/sections/Section";
import { getGalleryItems } from "@/lib/gallery";

export default function Gallery() {
  const items = getGalleryItems();

  return (
    <Section id="galeri" title="Galeri">
      <p>
        Potongan momen yang sempat ketangkep kamera hp, dari suasana kerja,
        event, sampai hal-hal kecil yang kebetulan lewat di depan mata.
      </p>
      {items.length > 0 ? (
        <GalleryGrid items={items} />
      ) : (
        <p className="text-ink/60 text-sm italic">Fotonya lagi dipilih dulu.</p>
      )}
    </Section>
  );
}
