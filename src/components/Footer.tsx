const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/aba2195d-28ca-441a-9ad9-20d203dffe24.png" 
              alt="DA ELITE Express"
              className="h-12 w-auto"
            />
            <p className="text-gray-300 leading-relaxed">
              Reliable logistics solutions across North America with 25+ years of excellence 
              and a commitment to safety, technology, and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-red-500 transition-colors">Long-Haul Transport</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Local Delivery</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Expedited Shipping</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Warehousing</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Supply Chain Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-red-500 transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Safety Standards</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">News & Updates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium text-white">Phone</p>
                <p>1-800-SWIFT-01</p>
              </div>
              <div>
                <p className="font-medium text-white">Email</p>
                <p>quotes@daeliteexpress.com</p>
              </div>
              <div>
                <p className="font-medium text-white">Hours</p>
                <p>24/7 Customer Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 DA ELITE Express. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-red-500 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-red-500 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-red-500 text-sm transition-colors">DOT Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
