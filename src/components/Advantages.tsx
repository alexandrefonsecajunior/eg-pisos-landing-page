
import { Clock, Truck, Zap, Users } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Real-Time Tracking",
    description: "Advanced GPS technology provides live updates on your shipment's location, ensuring complete transparency and peace of mind."
  },
  {
    icon: Clock,
    title: "Guaranteed Deadlines",
    description: "Our 99.8% on-time delivery rate is backed by precision planning and contingency protocols that keep your schedule intact."
  },
  {
    icon: Truck,
    title: "Modern Fleet",
    description: "State-of-the-art vehicles equipped with the latest safety features and fuel-efficient engines for reliable, eco-friendly transport."
  },
  {
    icon: Users,
    title: "Custom Solutions",
    description: "Tailored logistics strategies designed around your specific needs, from specialized cargo to flexible scheduling options."
  }
];

const Advantages = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose 
            <span className="text-orange-500"> SwiftLogistics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference that advanced technology, professional expertise, 
            and unwavering commitment to excellence makes in your supply chain.
          </p>
          <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-orange-100"
            >
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-orange-500 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust SwiftLogistics for their critical shipments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Free Quote
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
