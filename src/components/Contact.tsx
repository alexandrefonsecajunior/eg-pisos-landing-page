import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/+5541996333223?text=Olá, gostaria de obter uma cotação para serviços de transporte.",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Fale Conosco Agora Mesmo!
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Pronto para otimizar sua logística? Clique abaixo para iniciar uma
          conversa via WhatsApp ou, se preferir, utilize nossos outros canais de
          contato.
        </p>

        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white px-10 py-6 text-xl font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl mb-12 transform hover:scale-105"
        >
          <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
          Contate-nos via WhatsApp
        </Button>

        <div className="grid md:grid-cols-2 gap-8 mt-10 pt-10 border-t border-gray-700/50">
          <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-lg hover:shadow-red-500/20 transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-3 text-red-500">
              Ligue Direto
            </h4>
            <p className="text-gray-300 text-lg mb-1">
              Fale com nossos especialistas:
            </p>
            <p className="text-white font-bold text-2xl">(41) 9 9633-3223</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-lg hover:shadow-red-500/20 transition-shadow duration-300">
            <h4 className="text-xl font-semibold mb-3 text-red-500">
              Suporte por Email
            </h4>
            <p className="text-gray-300 text-lg mb-1">Envie sua solicitação:</p>
            <p className="text-white font-bold text-2xl">
              pwxtransportes@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-800/50 rounded-2xl p-8 md:p-12 text-white border border-gray-700/50">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Por Que Escolher a Da Elite Express?
          </h3>
          <ul className="space-y-3 text-gray-300 text-lg list-disc list-inside max-w-xl mx-auto text-left">
            <li>Cotações rápidas e transparentes, sem compromisso.</li>
            <li>Atendimento personalizado e dedicado às suas necessidades.</li>
            <li>Garantia de resposta e acompanhamento ágil.</li>
            <li>Preços competitivos e as melhores soluções logísticas.</li>
            <li>Compromisso com a segurança e a pontualidade da sua carga.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
