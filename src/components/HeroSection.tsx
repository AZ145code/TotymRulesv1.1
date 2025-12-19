import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-20 md:px-12 lg:px-20">
        {/* Name Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500 text-slate-900 font-bold text-sm uppercase tracking-widest">
            ⚡ Ali Zulfikar
          </span>
        </div>

        {/* Main Title */}
        <div>
          <h1 className="text-7xl md:text-[10rem] lg:text-[14rem] font-bold text-white leading-none tracking-tight">
            PORT
          </h1>
          <h1 className="text-7xl md:text-[10rem] lg:text-[14rem] font-bold text-white leading-none tracking-tight -mt-2 md:-mt-6 lg:-mt-10">
            FOLIO
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mt-6">
          <p className="text-xl md:text-2xl font-bold text-teal-400 tracking-wide">
            Graphic Designer & Illustrator 🎨
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
