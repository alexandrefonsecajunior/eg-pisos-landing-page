import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5541998676269"; // SUBSTITUA pelo número real da EG Pisos
  const whatsappMessage =
    "Olá! Gostaria de solicitar um orçamento para revestimento epóxi.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 eg-bg-primary overflow-hidden"
    >
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full diagonal-cut opacity-10 bg-gradient-to-br from-gray-400 to-gray-300"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 diagonal-cut-reverse opacity-5 bg-gradient-to-tr from-gray-500 to-gray-400"></div>

        {/* Geometric Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-30"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-20"></div>

        {/* Geometric Shapes - Hidden on mobile */}
        <div className="hidden md:block absolute top-24 left-12 w-16 h-16 border-2 border-gray-400 rotate-45 opacity-20"></div>
        <div className="hidden md:block absolute bottom-40 right-16 w-12 h-12 border-2 border-gray-500 rotate-12 opacity-15"></div>
        <div className="hidden md:block absolute top-2/3 left-1/4 w-14 h-14 border-2 border-gray-400 rotate-45 opacity-10"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            ENTRE EM <span className="eg-text-silver">CONTATO</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 silver-gradient mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Pronto para transformar seu ambiente com{" "}
            <span className="eg-text-silver font-semibold">
              revestimentos de alta qualidade
            </span>
            ? Entre em contato conosco pelo WhatsApp!
          </p>
        </div>

        {/* Contact Info and Map */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6">
                INFORMAÇÕES DE <span className="eg-text-silver">CONTATO</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                Múltiplas formas de entrar em contato conosco. Escolha a que for
                mais conveniente para você.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div
                className="whatsapp-bg border-l-6 whatsapp-border rounded-lg p-6 sm:p-8 cursor-pointer hover:scale-105 transition-all duration-300 whatsapp-glow relative overflow-hidden"
                onClick={handleWhatsAppClick}
              >
                {/* Background pattern */}

                <div className="relative z-10 flex items-start space-x-4">
                  <div className="w-16 sm:w-18 h-16 sm:h-18 whatsapp-gradient rounded-full flex items-center justify-center flex-shrink-0 whatsapp-pulse">
                    <MessageCircle className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-lg sm:text-xl font-black text-white">
                        WhatsApp
                      </h4>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-base sm:text-lg whatsapp-text font-bold mb-1">
                      (41) 99867-6269
                    </p>
                    <p className="text-sm text-green-200 font-semibold">
                      Clique aqui e fale agora conosco!
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Resposta garantida • Atendimento personalizado
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 border-l-6 border-blue-500 rounded-lg p-6 sm:p-8 hover:scale-105 transition-all duration-300">
                <div className="relative z-10 flex items-start space-x-4">
                  <div className="w-16 sm:w-18 h-16 sm:h-18 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-black text-white mb-2">
                      Telefone
                    </h4>
                    <p className="text-base sm:text-lg text-blue-400 font-bold mb-1">
                      (41) 99867-6269
                    </p>
                    <p className="text-sm text-blue-200 font-semibold">
                      Ligue diretamente para nossa equipe
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Horário comercial • Atendimento especializado
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 border-l-6 border-purple-500 rounded-lg p-6 sm:p-8 hover:scale-105 transition-all duration-300">
                <div className="relative z-10 flex items-start space-x-4">
                  <div className="w-16 sm:w-18 h-16 sm:h-18 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-black text-white mb-2">
                      E-mail
                    </h4>
                    <p className="text-base sm:text-lg text-purple-400 font-bold mb-1">
                      contato@egpisos.com.br
                    </p>
                    <p className="text-sm text-purple-200 font-semibold">
                      Envie sua mensagem ou solicitação
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Resposta em até 24h • Documentação completa
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 border-l-6 border-orange-500 rounded-lg p-6 sm:p-8 hover:scale-105 transition-all duration-300">
                <div className="relative z-10 flex items-start space-x-4">
                  <div className="w-16 sm:w-18 h-16 sm:h-18 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-8 sm:h-10 w-8 sm:w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-black text-white mb-2">
                      Horários de Atendimento
                    </h4>
                    <p className="text-base sm:text-lg text-orange-400 font-bold mb-1">
                      Segunda a Sexta: 8h às 18h
                    </p>
                    <p className="text-sm text-orange-200 font-semibold">
                      Sábado: 8h às 14h
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Atendimento presencial e remoto • Visitas agendadas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6">
                NOSSA <span className="eg-text-silver">LOCALIZAÇÃO</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                Atendemos toda a Grande São Paulo e região metropolitana.
                Confira nossa localização no mapa.
              </p>
            </div>

            {/* Location Info */}
            <div className="flex items-start space-x-4 p-4 sm:p-6 eg-bg-darker rounded-none border-l-4 eg-border-silver industrial-shadow mb-6">
              <div className="w-12 sm:w-14 h-12 sm:h-14 silver-gradient rounded-none flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 sm:h-6 w-5 sm:w-6 text-black" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                  Área de Atendimento
                </h4>
                <p className="text-sm sm:text-base text-gray-400">
                  São Paulo - SP e Grande São Paulo
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Aplicação profissional em toda região metropolitana
                </p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="relative rounded-none overflow-hidden industrial-shadow-lg h-64 sm:h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.097!2d-46.633309!3d-23.550520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzcnNTkuOSJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
                title="Localização EG Pisos"
              ></iframe>

              {/* Map Overlay */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm p-3 rounded-none">
                <p className="text-white text-sm font-bold">
                  📍 EG Pisos Epóxi
                </p>
                <p className="text-gray-300 text-xs">São Paulo - SP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8">
              <span className="eg-text-silver font-semibold">
                Mais de 15 anos de experiência
              </span>{" "}
              em revestimentos de alta qualidade. Transforme seu projeto com
              nossa expertise e atendimento personalizado.
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="whatsapp-gradient hover:opacity-90 text-white font-bold py-4 px-8 text-lg rounded-full transition-all duration-300 transform hover:scale-105 whatsapp-glow"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              FALAR COM ESPECIALISTA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
