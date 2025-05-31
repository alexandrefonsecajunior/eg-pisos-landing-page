
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import AboutUs from "@/components/AboutUs";
import Advantages from "@/components/Advantages";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <AboutUs />
      <Advantages />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
