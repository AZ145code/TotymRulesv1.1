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

      {/* Decorative Shapes */}
      <div className="absolute top-20 right-10 md:right-20 w-24 h-24 md:w-40 md:h-40 rounded-full bg-cozy-peach opacity-60 animate-float" />
      <div className="absolute bottom-40 left-10 md:left-20 w-16 h-16 md:w-28 md:h-28 rounded-full bg-cozy-lavender opacity-50 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 left-1/4 w-12 h-12 md:w-20 md:h-20 rounded-full bg-cozy-mint opacity-40 animate-float" style={{ animationDelay: "2s" }} />

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