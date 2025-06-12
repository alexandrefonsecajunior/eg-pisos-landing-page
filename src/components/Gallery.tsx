import { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/use-mobile";
import MobileGallery from "./Gallery/MobileGallery";
import DesktopGallery from "./Gallery/DesktopGallery";
import MobileModal from "./Gallery/MobileModal";
import DesktopModal from "./Gallery/DesktopModal";
import { galleryImages } from "./Gallery/data";
import "swiper/css";
import "swiper/css/effect-cards";

const customStyles = `
  @keyframes slideUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .animate-slideUp {
    animation: slideUp 0.3s ease-out;
  }
`;

if (
  typeof document !== "undefined" &&
  !document.getElementById("gallery-custom-styles")
) {
  const styleElement = document.createElement("style");
  styleElement.id = "gallery-custom-styles";
  styleElement.textContent = customStyles;
  document.head.appendChild(styleElement);
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const openModal = (index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);

    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);

    document.body.style.overflow = "unset";
  };

  const handleImageChange = (index: number) => {
    setSelectedImage(index);
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

        {/* Gallery - Mobile or Desktop */}
        {isMobile ? (
          <MobileGallery images={galleryImages} onImageClick={openModal} />
        ) : (
          <DesktopGallery images={galleryImages} onImageClick={openModal} />
        )}
      </div>

      {/* Modals */}
      {isMobile ? (
        <MobileModal
          isOpen={isModalOpen}
          images={galleryImages}
          selectedImage={selectedImage}
          onClose={closeModal}
          onImageChange={handleImageChange}
        />
      ) : (
        <DesktopModal
          isOpen={isModalOpen}
          images={galleryImages}
          selectedImage={selectedImage}
          onClose={closeModal}
          onImageChange={handleImageChange}
        />
      )}
    </section>
  );
};

export default Gallery;
