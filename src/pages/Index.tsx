import HeroSection from "@/components/HeroSection";
import BentoSection from "@/components/BentoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* SEO Meta */}
      <title>Ali Zulfikar | Graphic Designer & Illustrator Portfolio</title>
      
      {/* Hero */}
      <HeroSection />
      
      {/* Bento Box Content */}
      <BentoSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
