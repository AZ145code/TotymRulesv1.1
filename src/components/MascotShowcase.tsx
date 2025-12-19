import mascot1 from "@/assets/mascot-1.png";
import mascot2 from "@/assets/mascot-2.png";
import mascot3 from "@/assets/mascot-3.png";
import mascot4 from "@/assets/mascot-4.png";

const mascots = [
  {
    name: "CYBER BUNNY",
    image: mascot1,
    personality: "Tech-savvy guardian",
    color: "from-primary/20 to-secondary/20",
  },
  {
    name: "NINJA NEKO",
    image: mascot2,
    personality: "Stealthy & playful",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    name: "LUCKY DRAGON",
    image: mascot3,
    personality: "Cheerful fire-breather",
    color: "from-green-500/20 to-yellow-500/20",
  },
  {
    name: "COSMO BEAR",
    image: mascot4,
    personality: "Space explorer",
    color: "from-blue-500/20 to-purple-500/20",
  },
];

const MascotShowcase = () => {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-secondary blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="section-title">
            Mascot Collection
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            A selection of character designs ready to bring your brand to life
          </p>
        </div>

        {/* Mascot Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mascots.map((mascot, index) => (
            <div 
              key={mascot.name}
              className="mascot-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className={`relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br ${mascot.color}`}>
                <img 
                  src={mascot.image} 
                  alt={mascot.name}
                  className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Info */}
              <div className="mt-4 text-center">
                <h3 className="font-display text-xl text-foreground tracking-wide">
                  {mascot.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {mascot.personality}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MascotShowcase;
