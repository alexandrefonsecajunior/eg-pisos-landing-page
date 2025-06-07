import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Thumbs,
  Zoom,
  Autoplay,
  EffectCards,
} from "swiper/modules";
import { Camera, X, ZoomIn } from "lucide-react";
import { useIsMobile } from "../hooks/use-mobile";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import "swiper/css/effect-cards";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoomedImages, setZoomedImages] = useState<Set<number>>(new Set());
  const [imageLoading, setImageLoading] = useState<Set<number>>(new Set());
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();

  // Configuração das imagens - usar JPG/PNG após conversão
  const images = [
    {
      src: "/images/img1.jpg", // Será convertido de HEIC
      alt: "Revestimento epóxi em piso industrial",
      title: "Piso Industrial",
    },
    {
      src: "/images/img2.jpg", // Será convertido de HEIC
      alt: "Acabamento epóxi em ambiente comercial",
      title: "Ambiente Comercial",
    },
    {
      src: "/images/img4.PNG", // Já é PNG
      alt: "Resultado final do revestimento",
      title: "Resultado Final",
    },
    {
      src: "/images/img5.jpg", // Será convertido de HEIC
      alt: "Piso epóxi em estacionamento",
      title: "Estacionamento",
    },
    {
      src: "/images/img6.jpg", // Será convertido de HEIC
      alt: "Detalhe do acabamento epóxi",
      title: "Detalhes do Acabamento",
    },
    {
      src: "/images/img7.jpg", // Será convertido de HEIC
      alt: "Ambiente Industrial com piso epóxi",
      title: "Ambiente Industrial",
    },
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
    setCurrentSlide(index);
    setIsModalOpen(true);
    // Resetar estados quando abrir modal
    setZoomedImages(new Set());
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setZoomedImages(new Set()); // Reset zoom quando fechar o modal
  };

  const toggleZoom = (index: number) => {
    const newZoomedImages = new Set(zoomedImages);
    if (newZoomedImages.has(index)) {
      newZoomedImages.delete(index);
    } else {
      newZoomedImages.add(index);
    }
    setZoomedImages(newZoomedImages);
  };

  const handleImageLoad = (index: number) => {
    const newLoading = new Set(imageLoading);
    newLoading.delete(index);
    setImageLoading(newLoading);
  };

  const handleImageError = (index: number) => {
    const newErrors = new Set(imageErrors);
    const newLoading = new Set(imageLoading);
    newErrors.add(index);
    newLoading.delete(index);
    setImageErrors(newErrors);
    setImageLoading(newLoading);
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 eg-bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            NOSSO <span className="eg-text-silver">PORTFÓLIO</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Conheça alguns dos nossos projetos realizados e veja a
            <span className="text-orange-400 font-semibold">
              {" "}
              qualidade excepcional
            </span>{" "}
            dos nossos revestimentos epóxi.
          </p>
        </div>

        {/* Gallery - Mobile Fancy Cards or Desktop Grid */}
        {isMobile ? (
          /* Mobile Fancy Card Slider */
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
                  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 to-black industrial-shadow-lg">
                    {/* Card Background with Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-transparent to-black/80"></div>

                    {/* Main Image */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        console.log(`Error loading image: ${image.src}`);
                        e.currentTarget.src = "/images/parking2.jpeg";
                      }}
                    />

                    {/* Geometric Pattern Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                    {/* Industrial Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 silver-gradient diagonal-cut opacity-60"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 silver-gradient diagonal-cut opacity-40"></div>
                    <div className="absolute bottom-0 right-0 w-10 h-10 silver-gradient diagonal-cut opacity-80"></div>

                    {/* Content Container */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      {/* Title with Industrial Style */}
                      <div className="mb-4">
                        <h3 className="text-xl font-black text-white mb-2 tracking-wide">
                          {image.title}
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-3"></div>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {image.alt}
                        </p>
                      </div>

                      {/* Card Number */}
                      <div className="flex justify-end">
                        <div className="text-xs text-gray-500 font-mono">
                          {String(index + 1).padStart(2, "0")}/
                          {String(images.length).padStart(2, "0")}
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Mobile Gallery Instructions */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                <span className="inline-block w-1 h-1 bg-gray-500 rounded-full animate-pulse"></span>
                Deslize para navegar
                <span className="inline-block w-1 h-1 bg-gray-500 rounded-full animate-pulse"></span>
              </p>
            </div>
          </div>
        ) : (
          /* Desktop Grid */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-none industrial-shadow hover:industrial-shadow-lg transition-all duration-300"
                onClick={() => openModal(index)}
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

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 silver-gradient rounded-none flex items-center justify-center">
                    <ZoomIn className="h-6 w-6 text-black" />
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                    {image.title}
                  </h3>
                  <div className="w-8 h-px silver-gradient"></div>
                </div>

                {/* Geometric Corner Accent */}
                <div className="absolute top-0 right-0 w-6 h-6 silver-gradient opacity-0 group-hover:opacity-80 diagonal-cut transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal/Lightbox - Apenas Desktop */}
      {isModalOpen && !isMobile && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 lg:p-8">
          <div className="relative w-full max-w-5xl h-full max-h-[90vh] flex flex-col">
            {/* Close Button Desktop */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-50 w-10 h-10 silver-gradient rounded-none flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Main Image Container Desktop */}
            <div className="flex-1 mb-4 overflow-hidden rounded-none bg-black/20">
              <Swiper
                modules={[Navigation, Thumbs]}
                navigation
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                initialSlide={selectedImage}
                className="h-full"
                spaceBetween={0}
                watchSlidesProgress
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index} className="h-full">
                    <div className="relative h-full flex items-center justify-center p-4">
                      {/* Loading State */}
                      {imageLoading.has(index) && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>
                        </div>
                      )}

                      {/* Error State */}
                      {imageErrors.has(index) && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white text-center">
                            <div className="text-4xl mb-2">⚠️</div>
                            <div>Erro ao carregar imagem</div>
                          </div>
                        </div>
                      )}

                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
                          zoomedImages.has(index)
                            ? "scale-150 lg:scale-[1.8] cursor-zoom-out"
                            : "scale-100 cursor-zoom-in"
                        } ${
                          imageLoading.has(index) || imageErrors.has(index)
                            ? "opacity-0"
                            : "opacity-100"
                        }`}
                        onClick={() => toggleZoom(index)}
                        onLoad={() => handleImageLoad(index)}
                        onError={() => handleImageError(index)}
                        style={{
                          transformOrigin: "center",
                        }}
                      />

                      {/* Zoom Close Button - X branco quando zoom ativo */}
                      {zoomedImages.has(index) && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleZoom(index);
                          }}
                          className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/90 transition-all duration-300 group"
                          title="Fechar zoom"
                        >
                          <X className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-200" />
                        </button>
                      )}

                      {/* Zoom Instructions */}
                      {zoomedImages.has(index) && (
                        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-full">
                          <p className="text-xs text-white font-medium">
                            Clique para sair do zoom
                          </p>
                        </div>
                      )}

                      {/* Image Info Overlay */}
                      {!imageLoading.has(index) && !imageErrors.has(index) && (
                        <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-4 rounded-none">
                          <h3 className="text-lg font-bold text-white mb-1">
                            {image.title}
                          </h3>
                          <p className="text-sm text-gray-300">{image.alt}</p>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="flex-shrink-0 mt-4">
              <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                slidesPerView={3}
                spaceBetween={12}
                breakpoints={{
                  480: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                  },
                  640: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 24,
                  },
                  1280: {
                    slidesPerView: 7,
                    spaceBetween: 28,
                  },
                }}
                className="gallery-thumbs !px-4"
                watchSlidesProgress
                freeMode
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index} className="!w-auto">
                    <div className="relative aspect-square overflow-hidden rounded-none bg-gray-800">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover cursor-pointer opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105"
                        style={{
                          minWidth: "60px",
                          maxWidth: "80px",
                        }}
                        onError={(e) => {
                          e.currentTarget.src = "/images/parking2.jpeg";
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
