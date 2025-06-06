import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "home", label: "INÍCIO" },
    { id: "about", label: "SOBRE" },
    { id: "advantages", label: "VANTAGENS" },
    { id: "gallery", label: "PORTFÓLIO" },
    { id: "leadership", label: "LIDERANÇA" },
    { id: "contact", label: "CONTATO" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "eg-bg-primary/95 backdrop-blur-md industrial-shadow"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="focus:outline-none"
            >
              <img
                src="/logo/eg-logo-clean.svg"
                alt="EG Pisos Epóxi"
                className="h-8 sm:h-10 lg:h-12 w-auto transition-all duration-300 hover:scale-105"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative px-4 xl:px-6 py-2 text-sm xl:text-base font-bold text-gray-300 hover:text-white transition-all duration-300"
              >
                {item.label}
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 silver-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-black border-2 border-white hover:bg-transparent hover:text-white px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base font-bold rounded-none transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              ORÇAMENTO
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-700">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-base font-bold text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-none transition-all duration-300"
              >
                {item.label}
              </button>
            ))}

            {/* Mobile CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-white text-black border-2 border-white hover:bg-transparent hover:text-white py-3 text-base font-bold rounded-none transition-all duration-300 shadow-lg"
              >
                SOLICITAR ORÇAMENTO
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
