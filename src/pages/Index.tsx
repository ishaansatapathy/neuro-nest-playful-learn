import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StorytellingSection from "@/components/StorySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <StorytellingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
