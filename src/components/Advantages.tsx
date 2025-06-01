import { Clock, Truck, Zap, Users } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Rastreamento em Tempo Real",
    description:
      "Tecnologia GPS avançada fornece atualizações ao vivo sobre a localização da sua remessa, garantindo total transparência e tranquilidade.",
  },
  {
    icon: Clock,
    title: "Prazos Garantidos",
    description:
      "Nossa taxa de entrega pontual de 99,8% é respaldada por um planejamento de precisão e protocolos de contingência que mantêm seu cronograma intacto.",
  },
  {
    icon: Truck,
    title: "Frota Moderna",
    description:
      "Veículos de última geração equipados com os mais recentes recursos de segurança e motores eficientes em termos de combustível para um transporte confiável e ecológico.",
  },
  {
    icon: Users,
    title: "Soluções Personalizadas",
    description:
      "Estratégias logísticas personalizadas, desenhadas em torno das suas necessidades específicas, desde cargas especializadas até opções de agendamento flexíveis.",
  },
];

const sendToContactSection = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Advantages = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por que escolher a
            <span className="text-red-500"> DA ELITE Express</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experimente a diferença que a tecnologia avançada, a experiência
            profissional e o compromisso inabalável com a excelência fazem na
            sua cadeia de suprimentos.
          </p>
          <div className="w-20 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-900 rounded-2xl hover:bg-gray-800 hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-red-500/20"
            >
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-red-500 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para Sentir a Diferença?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Junte-se a milhares de clientes satisfeitos que confiam na DA ELITE
            Express para suas remessas críticas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={sendToContactSection}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Obter Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
