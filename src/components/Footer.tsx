const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img
              src="/lovable-uploads/aba2195d-28ca-441a-9ad9-20d203dffe24.png"
              alt="EG Pisos Epóxi"
              className="h-12 w-auto"
            />
            <p className="text-gray-300 leading-relaxed">
              Soluções completas em revestimentos epóxi com mais de 15 anos de
              excelência, compromisso com qualidade, técnicas avançadas e
              satisfação do cliente.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
                <span className="text-sm font-bold">ig</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-gray-100 transition-colors">
                  Pisos Epóxi Residencial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 transition-colors">
                  Pisos Epóxi Industrial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 transition-colors">
                  Pinturas Epóxi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 transition-colors">
                  Revestimentos Decorativos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 transition-colors">
                  Manutenção e Reparo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-100 transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-gray-100 transition-colors"
                >
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 transition-colors">
                  Certificações
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 transition-colors">
                  Novidades
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium text-white">Telefone</p>
                <p>(41) 9 9633-3223</p>
              </div>
              <div>
                <p className="font-medium text-white">Email</p>
                <p>contato@egpisosepoxi.com</p>
              </div>
              <div>
                <p className="font-medium text-white">Atendimento</p>
                <p>Segunda a Sexta, 8h às 18h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 EG Pisos Epóxi. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 text-sm transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 text-sm transition-colors"
            >
              Termos de Serviço
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-gray-100 text-sm transition-colors"
            >
              Garantias
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
