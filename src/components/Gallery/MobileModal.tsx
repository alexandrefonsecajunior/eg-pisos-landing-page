import React, { useState, useEffect } from "react";
import {
  X,
  ZoomIn,
  Settings,
  CheckCircle,
  Clock,
  Truck,
  Layers,
} from "lucide-react";
import { ImageData } from "./types";

const slideUpStyles = `
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
`;

if (
  typeof document !== "undefined" &&
  !document.getElementById("mobile-modal-styles")
) {
  const styleElement = document.createElement("style");
  styleElement.id = "mobile-modal-styles";
  styleElement.textContent = slideUpStyles;
  document.head.appendChild(styleElement);
}

interface MobileModalProps {
  isOpen: boolean;
  images: ImageData[];
  selectedImage: number;
  onClose: () => void;
  onImageChange: (index: number) => void;
}

const MobileModal = ({
  isOpen,
  images,
  selectedImage,
  onClose,
  onImageChange,
}: MobileModalProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragCurrentY, setDragCurrentY] = useState(0);
  const [modalTransform, setModalTransform] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setModalTransform(0);
      setIsDragging(false);
    }
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartY(e.touches[0].clientY);
    setDragCurrentY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const currentY = e.touches[0].clientY;
    const deltaY = currentY - dragStartY;

    if (deltaY > 0) {
      setDragCurrentY(currentY);
      setModalTransform(deltaY);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    const deltaY = dragCurrentY - dragStartY;
    const threshold = 100;

    if (deltaY > threshold) {
      onClose();
    } else {
      setModalTransform(0);
    }

    setIsDragging(false);
    setDragStartY(0);
    setDragCurrentY(0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-end">
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className="relative w-full max-h-[90vh] bg-white rounded-t-3xl transition-transform duration-300 overflow-hidden"
        style={{
          transform: `translateY(${modalTransform}px)`,
          opacity:
            modalTransform > 50 ? Math.max(0.3, 1 - modalTransform / 300) : 1,
          animation: modalTransform === 0 ? "slideUp 0.3s ease-out" : "none",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex flex-col max-h-[90vh]">
          <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
            <div className="w-12 h-1 bg-gray-400 rounded-full transition-colors duration-200 hover:bg-gray-500"></div>
          </div>

          <div className="text-center pb-2 flex-shrink-0">
            <p className="text-xs text-gray-400">
              Arraste para baixo para fechar
            </p>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>

          <div className="px-4 pt-2 pb-4 flex-shrink-0">
            <div className="relative aspect-[4/3] bg-black rounded-xl overflow-hidden">
              <img
                src={images[selectedImage]?.src}
                alt={images[selectedImage]?.alt}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = "/images/parking2.jpeg";
                }}
              />

              {selectedImage > 0 && (
                <button
                  onClick={() => onImageChange(selectedImage - 1)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                >
                  ←
                </button>
              )}

              {selectedImage < images.length - 1 && (
                <button
                  onClick={() => onImageChange(selectedImage + 1)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                >
                  →
                </button>
              )}

              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
                {selectedImage + 1} / {images.length}
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 pb-6 min-h-0">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Layers className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-gray-900">
                    {images[selectedImage]?.title}
                  </h2>
                  <p className="text-xs text-gray-500 font-medium">
                    EG Pisos Epóxi
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-sm font-medium">
                {images[selectedImage]?.description}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Settings className="h-4 w-4 text-orange-500" />
                <h3 className="text-base font-bold text-gray-900">APLICAÇÃO</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                {images[selectedImage]?.application}
              </p>
            </div>

            {images[selectedImage]?.finishes && (
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <ZoomIn className="h-4 w-4 text-orange-500" />
                  <h3 className="text-base font-bold text-gray-900">
                    ACABAMENTOS
                  </h3>
                </div>
                <div className="space-y-2">
                  {images[selectedImage]?.finishes.map((finish, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-600 text-sm font-medium">
                        {finish}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="h-4 w-4 text-orange-500" />
                <h3 className="text-base font-bold text-gray-900">VANTAGENS</h3>
              </div>
              <div className="space-y-2">
                {images[selectedImage]?.advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {advantage}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {images[selectedImage]?.thickness && (
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="text-sm font-bold text-gray-900 mb-1">
                    ESPESSURA
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {images[selectedImage]?.thickness}
                  </p>
                </div>

                {images[selectedImage]?.trafficRelease && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-3 w-3 text-orange-500" />
                      <h4 className="text-sm font-bold text-gray-900">
                        LIBERAÇÃO PARA TRÂNSITO
                      </h4>
                    </div>
                    <div className="space-y-1">
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
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Truck className="h-3 w-3 text-orange-500" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileModal;
