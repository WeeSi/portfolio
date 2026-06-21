import { useCallback, useMemo, useState } from "react";
import ImageLightbox, { type LightboxItem } from "../ImageLightbox";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = useMemo<LightboxItem[]>(
    () =>
      images.map((img, i) => ({
        src: `/images/${img}`,
        alt: `${title} — capture ${i + 1}`,
        type: "image" as const,
      })),
    [images, title],
  );

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  if (!images.length) return null;

  return (
    <>
      <div className="cs-gallery">
        <div className="cs-gallery__grid">
          {images.map((img, i) => (
            <figure key={img} className="cs-gallery__item">
              <button
                type="button"
                className="cs-gallery__trigger"
                onClick={() => openLightbox(i)}
                aria-label={`Ouvrir ${title} — capture ${i + 1}`}
              >
                <img
                  src={`/images/${img}`}
                  alt={`${title} — capture ${i + 1}`}
                  loading="lazy"
                />
              </button>
            </figure>
          ))}
        </div>
      </div>

      <ImageLightbox
        items={items}
        index={lightboxIndex}
        onClose={closeLightbox}
        onIndexChange={setLightboxIndex}
        ariaLabel={`Captures — ${title}`}
      />
    </>
  );
}
