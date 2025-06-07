import { Award } from "lucide-react";

const leaders = [
  {
    name: "Eduardo Silva",
    title: "Fundador e Diretor Técnico",
    bio: "Com mais de 15 anos de experiência em revestimentos epóxi, é responsável pela supervisão técnica de todos os projetos. Sua expertise garante a aplicação de técnicas avançadas e controle rigoroso de qualidade em cada trabalho executado.",
    image: "/images/waltinho.png",
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-16 sm:py-20 lg:py-24 eg-bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            NOSSA <span className="eg-text-silver">LIDERANÇA</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 silver-gradient mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Conheça quem está por trás da{" "}
            <span className="eg-text-silver font-semibold">excelência</span> e
            <span className="text-white font-semibold"> inovação</span> da EG
            Pisos Epóxi.
          </p>
        </div>

        {/* Centered Single Card */}
        <div className="flex justify-center">
          <div className="max-w-md sm:max-w-lg lg:max-w-xl w-full">
            <div className="group eg-bg-primary rounded-none p-6 sm:p-8 lg:p-10 text-center card-glow hover:scale-105 transition-all duration-300 relative overflow-hidden">
              {/* Geometric Background Elements */}
              <div className="absolute inset-0">
                {/* Geometric Lines - Hidden on mobile */}
                <div className="hidden sm:block absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-30"></div>
                <div className="hidden sm:block absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-20"></div>

                {/* Corner Accents - Smaller on mobile */}
                <div className="absolute top-0 right-0 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 silver-gradient opacity-20 diagonal-cut"></div>
                <div className="absolute bottom-0 left-0 w-6 sm:w-10 lg:w-12 h-6 sm:h-10 lg:h-12 bg-gray-500 opacity-15 diagonal-cut-reverse"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Professional Photo */}
                <div className="w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 mx-auto mb-4 sm:mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden rounded-none">
                  <img
                    src="/images/waltinho.png"
                    alt="Walter Salles - Fundador & CEO"
                    className="w-full h-full object-cover border-2 border-gray-600 group-hover:border-gray-400 transition-colors duration-300"
                  />
                  {/* Image overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2 sm:mb-3 lg:mb-4 group-hover:eg-text-silver transition-colors duration-300">
                  WALTER SALLES
                </h3>

                <div className="text-sm sm:text-base lg:text-lg font-bold eg-text-light-gray uppercase tracking-wider mb-4 sm:mb-6 lg:mb-8">
                  FUNDADOR & CEO
                </div>

                <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 sm:mb-8 lg:mb-10 group-hover:text-gray-300 transition-colors duration-300">
                  Com mais de{" "}
                  <span className="eg-text-silver font-semibold">
                    15 anos de experiência
                  </span>{" "}
                  no mercado de revestimentos epóxi, Walter Salles fundou a EG
                  Pisos com a missão de transformar ambientes através de{" "}
                  <span className="text-white font-semibold">qualidade</span> e{" "}
                  <span className="eg-text-light-gray font-semibold">
                    inovação
                  </span>
                  .
                </p>

                {/* Achievement Stats */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-10">
                  <div className="group-hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black eg-text-silver mb-1 sm:mb-2">
                      15+
                    </div>
                    <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
                      Anos Experiência
                    </div>
                  </div>
                  <div className="group-hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black eg-text-silver mb-1 sm:mb-2">
                      1000+
                    </div>
                    <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
                      Projetos Liderados
                    </div>
                  </div>
                </div>

                {/* Professional Highlights */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                    <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 silver-gradient rounded-none flex items-center justify-center flex-shrink-0">
                      <Award className="h-4 sm:h-5 lg:h-6 w-4 sm:w-5 lg:w-6 text-black" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm sm:text-base font-bold text-white mb-1">
                        Especialista Certificado
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        Certificações em revestimentos industriais
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                    <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 rounded-none flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <img
                        src="/images/waltinho.png"
                        alt="Liderança"
                        className="w-full h-full object-cover border border-gray-600"
                      />
                    </div>
                    <div className="text-left">
                      <div className="text-sm sm:text-base font-bold text-white mb-1">
                        Visão Empresarial
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        Liderança focada em excelência
                      </div>
                    </div>
                  </div>
                </div>

                {/* Geometric accent line */}
                <div className="w-16 sm:w-20 lg:w-24 h-px silver-gradient mx-auto mt-6 sm:mt-8 lg:mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6 sm:mb-8 lg:mb-12">
            NOSSOS <span className="eg-text-silver">VALORES</span>
          </h3>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-3 h-3 silver-gradient rounded-full mx-auto"></div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                EXCELÊNCIA
              </h4>
              <p className="text-sm sm:text-base text-gray-400">
                Buscar sempre a perfeição em cada projeto executado.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="w-3 h-3 silver-gradient rounded-full mx-auto"></div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                INOVAÇÃO
              </h4>
              <p className="text-sm sm:text-base text-gray-400">
                Utilizar as melhores tecnologias e técnicas do mercado.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="w-3 h-3 silver-gradient rounded-full mx-auto"></div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                COMPROMISSO
              </h4>
              <p className="text-sm sm:text-base text-gray-400">
                Dedicação total à satisfação e sucesso dos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
