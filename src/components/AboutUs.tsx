import { Award, Shield, Users, Zap, Trophy, Target } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 eg-bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            SOBRE A <span className="eg-text-silver">EG PISOS</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 silver-gradient mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Especialistas em{" "}
            <span className="eg-text-silver font-semibold">
              revestimentos epóxi de alta performance
            </span>
            , combinando{" "}
            <span className="text-white font-semibold">
              experiência consolidada
            </span>{" "}
            e{" "}
            <span className="eg-text-light-gray font-semibold">
              inovação tecnológica
            </span>{" "}
            em cada projeto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6">
                NOSSA <span className="eg-text-silver">MISSÃO</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4 sm:mb-6">
                Transformar ambientes através de
                <span className="eg-text-silver font-semibold">
                  {" "}
                  revestimentos epóxi de alta qualidade
                </span>
                , oferecendo soluções duradouras que agregam valor e
                <span className="text-white font-semibold">
                  {" "}
                  beleza aos espaços
                </span>{" "}
                dos nossos clientes.
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                Nosso compromisso é entregar projetos que combinam{" "}
                <span className="eg-text-silver font-semibold">
                  funcionalidade
                </span>
                , <span className="text-white font-semibold">estética</span> e{" "}
                <span className="eg-text-light-gray font-semibold">
                  longevidade
                </span>
                .
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-2 h-2 silver-gradient rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                    Experiência Consolidada
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400">
                    Mais de 15 anos no mercado aperfeiçoando técnicas e
                    processos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-2 h-2 silver-gradient rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                    Atendimento Personalizado
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400">
                    Cada cliente recebe atenção exclusiva e soluções sob medida.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-2 h-2 silver-gradient rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                    Resultados Garantidos
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400">
                    Compromisso com a excelência em cada etapa do projeto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-none overflow-hidden card-glow">
              <img
                src="/images/yellow-ground.jpeg"
                alt="Aplicação profissional de revestimento epóxi"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Geometric Corner Accents - Smaller on mobile */}
              <div className="absolute top-0 right-0 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 silver-gradient opacity-80 diagonal-cut"></div>
              <div className="absolute bottom-0 left-0 w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12 bg-gray-400 opacity-60 diagonal-cut-reverse"></div>

              {/* Stats Overlay */}
              <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8">
                <div className="eg-bg-darker/95 rounded-none p-4 sm:p-6 border-l-4 eg-border-silver">
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
                    <div>
                      <div className="text-xl sm:text-2xl lg:text-3xl font-black eg-text-silver">
                        15+
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">
                        Anos
                      </div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl lg:text-3xl font-black eg-text-silver">
                        100%
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">
                        Qualidade
                      </div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl lg:text-3xl font-black eg-text-silver">
                        3X
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">
                        Mais Durável
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
