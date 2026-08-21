export type GalleryItem = {
  alt: string;
  src?: string;
};

export const galleryItems: GalleryItem[] = Array.from(
  { length: 8 },
  (_, i) => ({
    alt: `Foto ${i + 1}`,
  }),
);
