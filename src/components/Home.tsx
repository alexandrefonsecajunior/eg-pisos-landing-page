import { Button } from "@/components/ui/button";
import { ArrowRight, Truck } from "lucide-react";

const Home = () => {
  const sendToContactSection = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="mb-6">
                <img
                  src="/logo/aba2195d-28ca-441a-9ad9-20d203dffe24.png"
                  alt="DA ELITE Express"
                  className="h-16 w-auto mb-4"
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Logística com
                <span className="text-red-500 block">Soluções</span>
                em que Você Pode Confiar
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Levamos sua carga com segurança, pontualidade e confiança — do
                Brasil inteiro à sua porta.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={sendToContactSection}
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
              >
                Obter Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">25+</div>
                <div className="text-sm text-gray-400">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">50K+</div>
                <div className="text-sm text-gray-400">Entregas Realizadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">99.8%</div>
                <div className="text-sm text-gray-400">
                  Taxa de Pontualidade
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">20+</div>
                <div className="text-sm text-gray-400">
                  Clientes Satisfeitos
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/referencia.png"
                alt="Tecnologia moderna de logística e rastreamento"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <Truck className="h-6 w-6 text-red-500" />
                    <div>
                      <div className="text-sm font-medium">
                        Referencia no Mercado
                      </div>
                      <div className="text-xs text-gray-300">
                        Comprometidos com as ferramentas de logística mais
                        avançadas para otimizar a sua operação.
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

export default Home;
