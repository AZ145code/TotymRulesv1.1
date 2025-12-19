import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-20 md:px-12 lg:px-20">
        {/* Name Badge */}
        <div className="mb-4 animate-fade-in">
          <span className="inline-flex items-center gap-2 text-sm font-heading font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            Ali Zulfikar
          </span>
        </div>

        {/* Main Title */}
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="hero-title text-foreground">
            PORT
          </h1>
          <h1 className="hero-title text-foreground -mt-4 md:-mt-8 lg:-mt-12">
            FOLIO
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mt-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <p className="font-heading text-lg md:text-xl text-muted-foreground tracking-widest uppercase">
            Graphic Design & Illustrator
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
            <div className="h-12 w-[2px] bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-8 top-8 md:right-12 md:top-12">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-primary animate-pulse-glow" />
          <div className="h-3 w-3 rounded-full bg-secondary animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
