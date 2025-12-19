import heroBg from "@/assets/hero-bg.jpg";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100" 
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        
      </div>


      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-24 md:px-12 lg:px-20">
        {/* Name Badge */}
        <div className="mb-4 animate-fade-in">
          <span className="inline-flex items-center gap-2 text-sm font-heading font-semibold uppercase tracking-[0.2em] text-primary">
            <Heart className="w-4 h-4 fill-primary animate-bounce-soft" />
            Ali Zulfikar
          </span>
        </div>

        {/* Main Title */}
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="hero-title text-foreground">
            PORT
          </h1>
          <h1 className="hero-title text-foreground -mt-2 md:-mt-6 lg:-mt-8">
            FOLIO
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mt-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <p className="font-heading text-lg md:text-xl text-muted-foreground tracking-wide">
            Graphic Designer & Illustrator ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;