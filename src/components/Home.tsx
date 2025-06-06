import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Truck } from "lucide-react";

const Home = () => {
  const sendToContactSection = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sendToGallerySection = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative eg-bg-primary text-white overflow-hidden min-h-screen"
    >
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full diagonal-cut opacity-10 bg-gradient-to-br from-gray-400 to-gray-300"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 diagonal-cut-reverse opacity-5 bg-gradient-to-tr from-gray-500 to-gray-400"></div>

        {/* Geometric Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-30"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-20"></div>

        {/* Geometric Shapes - Hidden on mobile */}
        <div className="hidden md:block absolute top-20 right-20 w-16 h-16 border-2 border-gray-400 rotate-45 opacity-20"></div>
        <div className="hidden md:block absolute bottom-40 left-10 w-12 h-12 border-2 border-gray-500 rotate-12 opacity-15"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6">
              <div className="mb-4 lg:mb-8">
                <img
                  src="/logo/eg-logo-clean.svg"
                  alt="EG Pisos Epóxi"
                  className="h-16 sm:h-20 lg:h-24 w-auto mb-4 lg:mb-6"
                />
              </div>

              {/* Main Title with Geometric Accent */}
              <div className="relative">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  REVESTIMENTOS
                  <span className="block eg-text-silver font-black">EPÓXI</span>
                  <span className="block text-gray-300 font-light">
                    100% SÓLIDOS
                  </span>
                </h1>

                {/* Geometric accent line - Hidden on mobile */}
                <div className="hidden sm:block absolute -left-4 top-8 w-1 h-20 lg:h-32 silver-gradient transform -skew-y-12"></div>
              </div>

              <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-lg font-light">
                Transforme seus ambientes com{" "}
                <span className="eg-text-silver font-semibold">
                  revestimentos de alta performance
                </span>
                , oferecendo{" "}
                <span className="eg-text-light-gray font-semibold">
                  beleza excepcional
                </span>{" "}
                e{" "}
                <span className="text-white font-semibold">
                  durabilidade incomparável
                </span>{" "}
                para seu projeto.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-2 lg:pt-4">
              <Button
                onClick={sendToContactSection}
                size="lg"
                className="bg-white text-black border-2 border-white hover:bg-transparent hover:text-white px-6 sm:px-8 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-bold rounded-none transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/20"
              >
                SOLICITAR ORÇAMENTO
                <ArrowRight className="ml-2 lg:ml-3 h-5 lg:h-6 w-5 lg:w-6" />
              </Button>

              <Button
                onClick={sendToGallerySection}
                variant="outline"
                size="lg"
                className="border-2 border-gray-400 text-gray-300 hover:border-white hover:text-white px-6 sm:px-8 lg:px-10 py-4 lg:py-6 text-base lg:text-lg font-bold rounded-none bg-transparent transition-all duration-300 hover:scale-105"
              >
                VER PORTFÓLIO
              </Button>
            </div>

            {/* Stats Section with Industrial Design */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-8 pt-8 lg:pt-12 border-t border-gray-700">
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black eg-text-silver group-hover:text-white transition-colors duration-300">
                  100%
                </div>
                <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
                  Satisfação
                </div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black eg-text-silver group-hover:text-white transition-colors duration-300">
                  15+
                </div>
                <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
                  Anos Experiência
                </div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black eg-text-silver group-hover:text-white transition-colors duration-300">
                  1000+
                </div>
                <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
                  Projetos Concluídos
                </div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black eg-text-silver group-hover:text-white transition-colors duration-300">
                  24H
                </div>
                <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
                  Tempo Resposta
                </div>
              </div>
            </div>
          </div>

          {/* Image Section with Industrial Frame */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-none overflow-hidden industrial-shadow-lg">
              <img
                src="/images/parking2.jpeg"
                alt="Piso epóxi 100% sólidos de alta qualidade"
                className="w-full h-64 sm:h-80 lg:h-[600px] object-cover"
              />

              {/* Image Overlay with Geometric Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Industrial Info Card */}
              <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8">
                <div className="eg-bg-darker/95 backdrop-blur-sm rounded-none p-4 lg:p-6 border-l-4 eg-border-silver industrial-shadow">
                  <div className="flex items-center space-x-3 lg:space-x-4">
                    <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 silver-gradient rounded-none flex items-center justify-center flex-shrink-0">
                      <Layers className="h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 text-black" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-bold eg-text-silver uppercase tracking-wider mb-1">
                        QUALIDADE PROFISSIONAL
                      </div>
                      <div className="text-xs text-gray-300 leading-relaxed">
                        Mais de 15 anos de experiência criando ambientes únicos
                        com acabamento superior.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geometric Corner Accents - Smaller on mobile */}
              <div className="absolute top-0 right-0 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 silver-gradient opacity-80 diagonal-cut"></div>
              <div className="absolute bottom-0 left-0 w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12 bg-gray-400 opacity-60 diagonal-cut-reverse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
