import Contact from "./_components/Contact";
import FeaturesSection from "./_components/FeaturesSection";
import Footer from "./_components/Footer";
import HeroSection from "./_components/Hero";
import Navigation from "./_components/Navigation";
import Products from "./_components/Products";


export default function ManepWebsite() {
  return (
    <div className="font-serif" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <Navigation/>
      <HeroSection/>
      <FeaturesSection/>
      <Products/>
      <Contact/>
      <Footer/>
    </div>
  );
}