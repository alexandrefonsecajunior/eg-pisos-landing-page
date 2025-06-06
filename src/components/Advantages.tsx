import {
  Clock,
  Droplets,
  Palette,
  Shield,
  Star,
  Wrench,
  Zap,
  DollarSign,
} from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: Shield,
      title: "ALTA DURABILIDADE",
      description:
        "Revestimentos resistentes ao desgaste diário, mantendo a qualidade e aparência por muitos anos.",
    },
    {
      icon: Palette,
      title: "ACABAMENTO SUPERIOR",
      description:
        "Superfícies lisas, uniformes e com acabamento impecável. Resultado profissional garantido.",
    },
    {
      icon: Droplets,
      title: "RESISTÊNCIA TOTAL",
      description:
        "Proteção eficaz contra produtos químicos, óleos, umidade e substâncias corrosivas.",
    },
    {
      icon: Wrench,
      title: "FÁCIL MANUTENÇÃO",
      description:
        "Limpeza simples e rápida. Superfície que não acumula sujeira e mantém o brilho original.",
    },
    {
      icon: Clock,
      title: "INSTALAÇÃO ÁGIL",
      description:
        "Processos otimizados para menor tempo de obra e rápido retorno às suas atividades.",
    },
    {
      icon: DollarSign,
      title: "CUSTO-BENEFÍCIO",
      description:
        "Investimento inteligente que se paga ao longo do tempo pela durabilidade superior.",
    },
    {
      icon: Star,
      title: "QUALIDADE PREMIUM",
      description:
        "Materiais selecionados e técnicas profissionais para resultados excepcionais.",
    },
  ];

  return (
    <section id="advantages" className="py-16 sm:py-20 lg:py-24 eg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            NOSSAS <span className="eg-text-silver">VANTAGENS</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 silver-gradient mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Descubra por que somos a escolha preferida para
            <span className="eg-text-silver font-semibold">
              {" "}
              revestimentos epóxi de alta qualidade
            </span>{" "}
            em toda região.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="group eg-bg-darker rounded-none p-6 sm:p-8 text-center industrial-shadow hover:scale-105 transition-all duration-300 hover:industrial-shadow-lg"
              >
                <div className="w-16 sm:w-20 h-16 sm:h-20 silver-gradient rounded-none mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 sm:h-10 w-8 sm:w-10 text-black" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:eg-text-silver transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {advantage.description}
                </p>

                {/* Geometric accent line */}
                <div className="w-12 h-px silver-gradient mx-auto mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6">
                POR QUE ESCOLHER A{" "}
                <span className="eg-text-silver">EG PISOS?</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4 sm:mb-6">
                Nossa experiência consolidada e
                <span className="eg-text-silver font-semibold">
                  {" "}
                  compromisso com a excelência
                </span>{" "}
                garantem resultados que superam expectativas, oferecendo
                <span className="text-white font-semibold">
                  {" "}
                  soluções duradouras e esteticamente superiores
                </span>{" "}
                para seu projeto.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-2 h-2 silver-gradient rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                    Materiais Premium
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400">
                    Utilizamos apenas produtos de primeira linha para garantir
                    qualidade superior.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-2 h-2 silver-gradient rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                    Técnicas Profissionais
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400">
                    Aplicação especializada com anos de experiência e
                    conhecimento técnico.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-2 h-2 silver-gradient rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                    Resultado Duradouro
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400">
                    Revestimentos que mantêm qualidade e beleza por muito mais
                    tempo.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black eg-text-silver mb-1 sm:mb-2">
                  15+
                </div>
                <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
                  Anos Experiência
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black eg-text-silver mb-1 sm:mb-2">
                  100%
                </div>
                <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
                  Satisfação
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-none overflow-hidden industrial-shadow-lg">
              <img
                src="/images/parking.jpeg"
                alt="Exemplo de revestimento epóxi 100% sólidos aplicado"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Quality Badge */}
              <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8">
                <div className="eg-bg-darker/95 backdrop-blur-sm rounded-none p-3 sm:p-4 border-l-4 eg-border-silver industrial-shadow">
                  <div className="text-xs sm:text-sm font-bold eg-text-silver uppercase tracking-wider mb-1">
                    TECNOLOGIA 100% SÓLIDOS
                  </div>
                  <div className="text-xs text-gray-800">
                    Sem Diluentes • Máxima Resistência
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

export default Advantages;
