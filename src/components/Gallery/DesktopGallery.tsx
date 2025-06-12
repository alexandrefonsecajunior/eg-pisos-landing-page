import { useState, useEffect } from "react";
import { ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageData } from "./types";

interface DesktopGalleryProps {
  images: ImageData[];
  onImageClick: (index: number) => void;
}

const DesktopGallery = ({ images, onImageClick }: DesktopGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push({ ...images[index], originalIndex: index });
    }
    return visibleImages;
  };

  return (
    <div className="relative mb-12 sm:mb-16">
      <div className="relative overflow-hidden">
        <div
          className={`flex gap-4 sm:gap-6 lg:gap-8 transition-transform duration-300 ease-in-out ${
            isTransitioning ? "transform" : ""
          }`}
        >
          {getVisibleImages().map((image, index) => (
            <div
              key={`${image.originalIndex}-${currentIndex}`}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-none industrial-shadow hover:industrial-shadow-lg transition-all duration-300 flex-1 min-w-0"
              onClick={() => onImageClick(image.originalIndex)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  console.log(`Error loading image: ${image.src}`);
                  e.currentTarget.src = "/images/parking2.jpeg";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 silver-gradient rounded-none flex items-center justify-center">
                  <ZoomIn className="h-6 w-6 text-black" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  {image.title}
                </h3>
                <div className="w-8 h-px silver-gradient"></div>
              </div>

              <div className="absolute top-0 right-0 w-6 h-6 silver-gradient opacity-0 group-hover:opacity-80 diagonal-cut transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-all duration-300 z-10 disabled:opacity-50"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={handleNext}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-all duration-300 z-10 disabled:opacity-50"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 300);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-orange-500 w-8"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopGallery;
