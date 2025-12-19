import mascot1 from "@/assets/mascot-1.png";
import mascot2 from "@/assets/mascot-2.png";
import mascot3 from "@/assets/mascot-3.png";
import mascot4 from "@/assets/mascot-4.png";

const mascots = [
  {
    name: "Bunny",
    image: mascot1,
    personality: "Friendly helper",
    color: "bg-cozy-peach",
  },
  {
    name: "Neko",
    image: mascot2,
    personality: "Playful & curious",
    color: "bg-cozy-lavender",
  },
  {
    name: "Dragon",
    image: mascot3,
    personality: "Cheerful buddy",
    color: "bg-cozy-mint",
  },
  {
    name: "Bear",
    image: mascot4,
    personality: "Cozy explorer",
    color: "bg-cozy-cream",
  },
];

const MascotShowcase = () => {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-20 overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-cozy-peach opacity-30" />
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-cozy-mint opacity-30" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="section-title">
            Mascot Friends 🐾
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Cute characters ready to bring your brand to life
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
              <div className={`relative aspect-square rounded-2xl overflow-hidden ${mascot.color}`}>
                <img 
                  src={mascot.image} 
                  alt={mascot.name}
                  className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Info */}
              <div className="mt-4 text-center">
                <h3 className="font-heading text-lg font-bold text-foreground">
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