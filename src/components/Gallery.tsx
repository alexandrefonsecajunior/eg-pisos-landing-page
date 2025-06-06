import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Zoom, Autoplay } from "swiper/modules";
import { Camera, X, ZoomIn } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoomedImages, setZoomedImages] = useState<Set<number>>(new Set());
  const [imageLoading, setImageLoading] = useState<Set<number>>(new Set());
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

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
      src: "/images/img3.jpg", // Será convertido de HEIC
      alt: "Aplicação de revestimento epóxi",
      title: "Processo de Aplicação",
    },
    {
      src: "/images/img4.PNG", // Já é PNG
      alt: "Resultado final do revestimento",
      title: "Resultado Final",
    },
    {
      src: "/images/img5.jpg", // Será convertido de HEIC
      alt: "Piso epóxi em área externa",
      title: "Área Externa",
    },
    {
      src: "/images/img6.jpg", // Será convertido de HEIC
      alt: "Detalhe do acabamento epóxi",
      title: "Detalhes do Acabamento",
    },
    {
      src: "/images/img7.jpg", // Será convertido de HEIC
      alt: "Ambiente residencial com piso epóxi",
      title: "Ambiente Residencial",
    },
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
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
          <div className="w-20 sm:w-24 h-1 silver-gradient mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Conheça alguns dos nossos projetos realizados e veja a
            <span className="eg-text-silver font-semibold">
              {" "}
              qualidade excepcional
            </span>{" "}
            dos nossos revestimentos epóxi.
          </p>
        </div>

        {/* Gallery Grid */}
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

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-gray-700">
          <div className="text-center">
            <div className="w-12 sm:w-16 h-12 sm:h-16 silver-gradient rounded-none mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Camera className="h-6 sm:h-8 w-6 sm:w-8 text-black" />
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-black eg-text-silver mb-1">
              1000+
            </div>
            <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
              Projetos Realizados
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black eg-text-silver mb-1">
              15+
            </div>
            <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
              Anos Experiência
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black eg-text-silver mb-1">
              100%
            </div>
            <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
              Satisfação
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black eg-text-silver mb-1">
              24H
            </div>
            <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
              Resposta Rápida
            </div>
          </div>
        </div>
      </div>

      {/* Modal/Lightbox */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="relative w-full max-w-5xl h-full max-h-[90vh] flex flex-col">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 w-10 h-10 silver-gradient rounded-none flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Main Image Container */}
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

                      {/* Image Info Overlay */}
                      {!imageLoading.has(index) && !imageErrors.has(index) && (
                        <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-3 sm:p-4 rounded-none">
                          <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                            {image.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-300">
                            {image.alt}
                          </p>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Thumbnails */}
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
