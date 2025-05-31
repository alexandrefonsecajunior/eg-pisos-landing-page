
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/aba2195d-28ca-441a-9ad9-20d203dffe24.png" 
                  alt="DA ELITE Express"
                  className="h-16 w-auto mb-4"
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Reliable Logistics
                <span className="text-red-500 block">Solutions</span>
                You Can Trust
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Delivering excellence across North America with cutting-edge technology, 
                unmatched reliability, and a commitment to getting your cargo there safely and on time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
              >
                Get Instant Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200"
              >
                Our Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">25+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">50K+</div>
                <div className="text-sm text-gray-400">Deliveries Made</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">99.8%</div>
                <div className="text-sm text-gray-400">On-Time Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop"
                alt="Modern logistics and tracking technology"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <Truck className="h-6 w-6 text-red-500" />
                    <div>
                      <div className="text-sm font-medium">Real-time Tracking</div>
                      <div className="text-xs text-gray-300">Live GPS monitoring for all shipments</div>
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

export default Hero;
