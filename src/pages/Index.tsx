import Home from "@/components/Home";
import Navigation from "@/components/Navigation";
import ClientLogosCarousel from "@/components/ClientLogosCarousel";
import AboutUs from "@/components/AboutUs";
import Advantages from "@/components/Advantages";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Home />
      {/* <ClientLogosCarousel /> */}
      <AboutUs />
      <Advantages />
      <Leadership />
      <Contact />
    </div>
  );
};

export default Index;
