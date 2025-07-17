import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BreedsSection from "@/components/BreedsSection";
import CareSection from "@/components/CareSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <BreedsSection />
      <CareSection />
      <Footer />
    </div>
  );
};

export default Index;
