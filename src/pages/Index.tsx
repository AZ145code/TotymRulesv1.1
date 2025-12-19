import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import MascotShowcase from "@/components/MascotShowcase";
import PhilosophySection from "@/components/PhilosophySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* SEO Meta */}
      <title>Ali Zulfikar | Graphic Designer & Illustrator Portfolio</title>
      
      {/* Hero */}
      <HeroSection />
      
      {/* About / Profile */}
      <AboutSection />
      
      {/* Featured Projects */}
      <ProjectsSection />
      
      {/* Mascot Showcase */}
      <MascotShowcase />
      
      {/* Design Philosophy */}
      <PhilosophySection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
