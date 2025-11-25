import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ImageGalleryProps {
  images: string[];
  layout?: 'single' | 'double' | 'triple';
}

export function ImageGallery({ images, layout = 'double' }: ImageGalleryProps) {
  const gridClass = 
    layout === 'single' ? 'grid-cols-1' :
    layout === 'triple' ? 'grid-cols-3' :
    'grid-cols-2';

  return (
    <div className={`grid ${gridClass} gap-4`}>
      {images.map((image, index) => (
        <div key={index} className="aspect-square overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
