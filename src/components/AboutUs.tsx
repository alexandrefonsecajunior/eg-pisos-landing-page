
const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Businesses 
                <span className="text-red-500 block">Across North America</span>
              </h2>
              <div className="w-20 h-1 bg-red-500 rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                For over 25 years, DA ELITE Express has been the backbone of supply chains across North America. 
                From coast to coast, we've built our reputation on unwavering reliability, cutting-edge technology, 
                and an absolute commitment to safety that has earned us industry-leading certifications and 
                zero-tolerance safety standards.
              </p>
              
              <p className="text-lg">
                Our extensive network spans all major highways and logistics hubs, enabling us to deliver 
                comprehensive solutions from local deliveries to cross-continental freight. With a modern fleet 
                of over 500 vehicles and a team of certified professionals, we don't just move cargo—we move 
                your business forward with precision, speed, and care.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gray-800 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-red-500 mb-1">500+</div>
                <div className="text-sm text-gray-400">Modern Vehicles</div>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-red-500 mb-1">48</div>
                <div className="text-sm text-gray-400">States Covered</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=500&fit=crop"
              alt="Expansive bridge representing our coverage network"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded-lg shadow-xl">
              <div className="text-sm font-medium text-red-500 mb-1">SAFETY FIRST</div>
              <div className="text-lg font-bold">DOT Certified</div>
              <div className="text-sm text-gray-300">Zero-incident record</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
