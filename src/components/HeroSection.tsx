import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-20 md:px-12 lg:px-20">
        {/* Name Badge */}
        <div className="mb-4 animate-fade-in">
          <span className="badge-cartoon bg-primary text-primary-foreground uppercase tracking-[0.15em]">
            ⚡ Ali Zulfikar
          </span>
        </div>

        {/* Main Title */}
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="hero-title text-foreground drop-shadow-lg">
            PORT
          </h1>
          <h1 className="hero-title text-foreground -mt-2 md:-mt-6 lg:-mt-10 drop-shadow-lg">
            FOLIO
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mt-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-xl md:text-2xl font-heading font-bold tracking-wide text-primary">
            Graphic Designer & Illustrator 🎨
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
