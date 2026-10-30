export type GalleryMeta = {
  title: string;
  description?: string;
  location?: string;
};

// Keyed by filename in public/gallery. Photos without an entry still show up,
// titled from their filename.
export const galleryMeta: Record<string, GalleryMeta> = {
  "3892D280-2EFD-4411-89AC-4ED5A926FC0C.jpg": {
    title: "Duduk di puncak",
    location: "Puncak Gn. Slamet via Bambangan",
  },
  "CA2DA7C4-5282-4FEB-B26C-5016337B8754.jpg": {
    title: "Kebun teh",
    location: "Pangalengan, Bandung, Jawa Barat",
  },
};
