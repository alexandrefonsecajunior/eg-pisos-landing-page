import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const clientLogos = [
  { src: "/logo/merc-livre.png", alt: "Mercado Livre" },
  { src: "/logo/amazon.svg", alt: "Amazon" },
  { src: "/logo/Logo-Magalu-Png.png", alt: "Magalu" },
  { src: "/logos/dafiti.png", alt: "Dafiti" },
  { src: "/logos/shein.png", alt: "Shein" },
  // Adicione mais logos conforme necessário
  { src: "/logos/cliente_exemplo_1.png", alt: "Cliente Exemplo 1" },
  { src: "/logos/cliente_exemplo_2.png", alt: "Cliente Exemplo 2" },
  { src: "/logos/cliente_exemplo_3.png", alt: "Cliente Exemplo 3" },
];

const ClientLogosCarousel = () => {
  return (
    <section id="clients" className="py-12 md:py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10 md:mb-12">
          Empresas que Confiam em Nós
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {clientLogos.map((logo, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-4"
              >
                <div className="p-1">
                  <div className="flex items-center justify-center h-24 bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ClientLogosCarousel;
