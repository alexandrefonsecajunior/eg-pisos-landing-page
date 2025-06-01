import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after click
  };

  return (
    <nav className="bg-black shadow-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src="/logo/aba2195d-28ca-441a-9ad9-20d203dffe24.png"
                alt="DA ELITE Express"
                className="h-12 w-auto"
              />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Início
              </a>
              <a
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Sobre
              </a>
              <a
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Serviços
              </a>
              <a
                onClick={() => scrollToSection("team")}
                className="text-gray-300 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Equipe
              </a>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Obter Cotação
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-red-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
              <a
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-red-500 block px-3 py-2 text-base font-medium cursor-pointer"
              >
                Sobre
              </a>
              <a
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-red-500 block px-3 py-2 text-base font-medium cursor-pointer"
              >
                Serviços
              </a>
              <a
                onClick={() => scrollToSection("team")}
                className="text-gray-300 hover:text-red-500 block px-3 py-2 text-base font-medium cursor-pointer"
              >
                Equipe
              </a>
              <a
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-red-500 block px-3 py-2 text-base font-medium cursor-pointer"
              >
                Contato
              </a>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-red-500 hover:bg-red-600 text-white w-full mt-2"
              >
                Obter Orçamento
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
