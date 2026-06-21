import { useMemo } from "react";
import ImageLightbox, { type LightboxItem } from "./ImageLightbox";
import { PHOTOS } from "#/data/photos";

type GalleryLightboxProps = {
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export default function GalleryLightbox({
  index,
  onClose,
  onIndexChange,
}: GalleryLightboxProps) {
  const items = useMemo<LightboxItem[]>(
    () =>
      PHOTOS.map((photo) => ({
        src:
          photo.type === "video"
            ? `/videos/${photo.img}`
            : `/images/${photo.img}`,
        alt: "",
        type: photo.type,
      })),
    [],
  );

  return (
    <ImageLightbox
      items={items}
      index={index}
      onClose={onClose}
      onIndexChange={onIndexChange}
      ariaLabel="Galerie photo"
    />
  );
}
