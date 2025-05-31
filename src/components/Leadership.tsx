
const leaders = [
  {
    name: "Sarah Mitchell",
    title: "CEO & Founder",
    bio: "25+ years transforming logistics with innovative solutions and industry-leading safety standards.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    title: "VP of Operations",
    bio: "Expert in supply chain optimization with a track record of 99.8% on-time delivery excellence.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Jennifer Chen",
    title: "Technology Director",
    bio: "Pioneering real-time tracking systems and digital logistics solutions across North America.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  }
];

const Leadership = () => {
  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our 
            <span className="text-red-500"> Leadership Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry veterans with decades of combined experience driving innovation 
            and excellence in logistics and transportation.
          </p>
          <div className="w-20 h-1 bg-red-500 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="group text-center bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative mb-6">
                <img 
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover ring-4 ring-gray-700 group-hover:ring-red-500 transition-all duration-300"
                />
                <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">
                {leader.name}
              </h3>
              <div className="text-red-500 font-semibold mb-4">
                {leader.title}
              </div>
              <p className="text-gray-300 leading-relaxed">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Built on Experience, Driven by Innovation
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our leadership team brings together decades of industry expertise with a forward-thinking 
              approach to logistics technology and customer service excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
