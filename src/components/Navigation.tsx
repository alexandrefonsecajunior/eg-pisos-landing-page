
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">
                DA ELITE<span className="text-red-500"> Express</span>
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-gray-300 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-300 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#team" className="text-gray-300 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors">
                Team
              </a>
              <a href="#contact" className="text-gray-300 hover:text-red-500 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Get Quote
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-red-500 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
              <a href="#about" className="text-gray-300 hover:text-red-500 block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#services" className="text-gray-300 hover:text-red-500 block px-3 py-2 text-base font-medium">
                Services
              </a>
              <a href="#team" className="text-gray-300 hover:text-red-500 block px-3 py-2 text-base font-medium">
                Team
              </a>
              <a href="#contact" className="text-gray-300 hover:text-red-500 block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <Button className="bg-red-500 hover:bg-red-600 text-white w-full mt-2">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
