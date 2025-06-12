import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import { ZoomIn } from "lucide-react";
import { ImageData } from "./types";

interface MobileGalleryProps {
  images: ImageData[];
  onImageClick: (index: number) => void;
}

const MobileGallery = ({ images, onImageClick }: MobileGalleryProps) => {
  return (
    <div className="mb-12 relative">
      <Swiper
        modules={[EffectCards, Autoplay]}
        effect="cards"
        grabCursor={true}
        cardsEffect={{
          slideShadows: true,
          rotate: true,
          perSlideOffset: 8,
          perSlideRotate: 2,
        }}
        className="w-72 h-[500px] sm:w-80 sm:h-96 mx-auto card-glow"
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-black industrial-shadow-lg cursor-pointer"
              onClick={() => onImageClick(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-transparent to-black/80"></div>

              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center"
                loading="lazy"
                onError={(e) => {
                  console.log(`Error loading image: ${image.src}`);
                  e.currentTarget.src = "/images/parking2.jpeg";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

              <div className="absolute top-0 left-0 w-8 h-8 silver-gradient diagonal-cut opacity-60"></div>
              <div className="absolute top-0 right-0 w-6 h-6 silver-gradient diagonal-cut opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 silver-gradient diagonal-cut opacity-80"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-black text-white mb-2 tracking-wide">
                    {image.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-3"></div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {image.alt}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-xs text-orange-400 font-medium">
                    <ZoomIn className="h-3 w-3" />
                    <span>Toque para detalhes</span>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">
                    {String(index + 1).padStart(2, "0")}/
                    {String(images.length).padStart(2, "0")}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
          <span className="inline-block w-1 h-1 bg-gray-500 rounded-full animate-pulse"></span>
          Deslize para navegar
          <span className="inline-block w-1 h-1 bg-gray-500 rounded-full animate-pulse"></span>
        </p>
      </div>
    </div>
  );
};

export default MobileGallery;
