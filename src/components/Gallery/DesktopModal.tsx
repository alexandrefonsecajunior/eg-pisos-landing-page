import { X, Settings, CheckCircle, Clock, Truck, Layers } from "lucide-react";
import { ImageData } from "./types";

interface DesktopModalProps {
  isOpen: boolean;
  images: ImageData[];
  selectedImage: number;
  onClose: () => void;
  onImageChange: (index: number) => void;
}

const DesktopModal = ({
  isOpen,
  images,
  selectedImage,
  onClose,
  onImageChange,
}: DesktopModalProps) => {
  const handleContactClick = () => {
    onClose();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="h-full flex">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-12 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/90 transition-all duration-300 text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex-1 flex items-center justify-center p-8 bg-black">
          <div className="relative w-full max-w-2xl">
            <div className="aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <img
                src={images[selectedImage]?.src}
                alt={images[selectedImage]?.alt}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = "/images/parking2.jpeg";
                }}
              />
            </div>

            {selectedImage > 0 && (
              <button
                onClick={() => onImageChange(selectedImage - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-all duration-300 z-10"
              >
                ←
              </button>
            )}

            {selectedImage < images.length - 1 && (
              <button
                onClick={() => onImageChange(selectedImage + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-all duration-300 z-10"
              >
                →
              </button>
            )}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm z-10">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </div>

        <div className="w-96 xl:w-[450px] bg-white overflow-y-auto">
          <div className="p-6">
            <div className="border-b border-gray-200 pb-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">
                    {images[selectedImage]?.title}
                  </h2>
                  <p className="text-sm text-gray-500 font-medium">
                    EG Pisos Epóxi
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed font-medium">
                {images[selectedImage]?.description}
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Settings className="h-5 w-5 text-orange-500" />
                <h3 className="text-lg font-bold text-gray-900">APLICAÇÃO</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                {images[selectedImage]?.application}
              </p>
            </div>

            {images[selectedImage]?.finishes && (
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Settings className="h-5 w-5 text-orange-500" />
                  <h3 className="text-lg font-bold text-gray-900">
                    ACABAMENTOS
                  </h3>
                </div>
                <div className="space-y-2">
                  {images[selectedImage]?.finishes.map((finish, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-600 text-sm font-medium">
                        {finish}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <h3 className="text-lg font-bold text-gray-900">VANTAGENS</h3>
              </div>
              <div className="space-y-3">
                {images[selectedImage]?.advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {advantage}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {images[selectedImage]?.thickness && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">
                    ESPESSURA
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {images[selectedImage]?.thickness}
                  </p>
                </div>

                {images[selectedImage]?.trafficRelease && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <h4 className="text-sm font-bold text-gray-900">
                        LIBERAÇÃO PARA TRÂNSITO
                      </h4>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-600 text-sm">
                        <span className="font-medium">Leve:</span>{" "}
                        {images[selectedImage]?.trafficRelease.light}
                      </p>
                      <p className="text-gray-600 text-sm">
                        <span className="font-medium">Normal:</span>{" "}
                        {images[selectedImage]?.trafficRelease.normal}
                      </p>
                    </div>
                  </div>
                )}

                {images[selectedImage]?.productivity && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Truck className="h-4 w-4 text-orange-500" />
                      <h4 className="text-sm font-bold text-gray-900">
                        PRODUTIVIDADE
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {images[selectedImage]?.productivity}
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handleContactClick}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                SOLICITAR ORÇAMENTO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopModal;
