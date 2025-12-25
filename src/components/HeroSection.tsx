import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden justify-center" style={{ backgroundColor: '#EDE3D3' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay */}
      

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-20 md:px-12 lg:px-20">
        {/* Name Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-widest" style={{ color: '#ffffff' }}>
            Ali Zulfikar
          </span>
        </div>

        {/* Main Title */}
        <div>
          <h1 className="text-7xl md:text-[10rem] lg:text-[9rem] font-bold leading-none tracking-wider" style={{ color: '#ffffffff' }}>
            PORT
          </h1>
          <h1 className="text-7xl md:text-[10rem] lg:text-[9rem] font-bold leading-none tracking-wider -mt-2 md:-mt-6 lg:-mt-10" style={{ color: '#31dfe6ff' }}>
            FOLIO
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mt-6">
          <p className="text-xl md:text-2xl font-bold tracking-wider" style={{ color: '#ffffffff' }}>
            Graphic Designer & Illustrator
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
