import fs from "fs";
import path from "path";
import { galleryMeta, type GalleryMeta } from "@/data/gallery";

const galleryDirectory = path.join(process.cwd(), "public/gallery");
const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"];

export type GalleryItem = GalleryMeta & { src: string };

function titleFromFilename(file: string): string {
  return path
    .parse(file)
    .name.replace(/^\d+[-_]/, "")
    .replace(/[-_]+/g, " ");
}

// Sorted by filename, so prefixing files with numbers (01-, 02-, ...)
// controls the order.
export function getGalleryItems(): GalleryItem[] {
  if (!fs.existsSync(galleryDirectory)) return [];
  return fs
    .readdirSync(galleryDirectory)
    .filter((file) =>
      imageExtensions.includes(path.extname(file).toLowerCase()),
    )
    .sort()
    .map((file) => ({
      ...(galleryMeta[file] ?? { title: titleFromFilename(file) }),
      src: `/gallery/${file}`,
    }));
}
