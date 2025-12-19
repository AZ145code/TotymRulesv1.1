import heroBg from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100" style={{
      backgroundImage: `url(${heroBg})`
    }}>
        
      </div>


      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-24 md:px-12 lg:px-20">
        {/* Name Badge */}
        <div className="mb-4 animate-fade-in px-[16px]">
          <span className="inline-flex items-center gap-2 text-sm font-heading font-semibold uppercase tracking-[0.2em] text-primary">
            
            Ali Zulfikar
          </span>
        </div>

        {/* Main Title */}
        <div className="animate-slide-up" style={{
        animationDelay: "0.2s"
      }}>
          <h1 className="hero-title text-foreground font-mono font-extrabold">
            PORT
          </h1>
          <h1 className="hero-title text-foreground -mt-2 md:-mt-6 lg:-mt-8 font-mono font-extrabold">
            FOLIO
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mt-6 animate-slide-up" style={{
        animationDelay: "0.4s"
      }}>
          <p className="text-lg md:text-xl tracking-wide px-[16px] py-0 font-mono text-secondary">Graphic Designer & Illustrator </p>
        </div>
      </div>
    </section>;
};
export default HeroSection;