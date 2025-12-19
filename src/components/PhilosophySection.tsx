import { Sparkles, Heart, Star } from "lucide-react";
const principles = [{
  icon: Sparkles,
  title: "Cute & Memorable",
  description: "Adorable characters with strong personalities that leave lasting impressions.",
  color: "bg-cozy-peach"
}, {
  icon: Heart,
  title: "Design With Heart",
  description: "Every creation tells a story and connects emotionally with audiences.",
  color: "bg-cozy-lavender"
}, {
  icon: Star,
  title: "Warm & Playful",
  description: "Friendly designs that feel cozy, inviting, and full of personality.",
  color: "bg-cozy-mint"
}];
const PhilosophySection = () => {
  return <section className="relative px-6 md:px-12 lg:px-20 py-0">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-12 text-center">
          
          
        </div>

        {/* Principles Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((principle, index) => <div key={principle.title} className="card-cozy text-center group" style={{
          animationDelay: `${index * 0.15}s`
        }}>
              {/* Icon */}
              <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${principle.color} transition-transform duration-300 group-hover:scale-110`}>
                <principle.icon className="h-8 w-8 text-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {principle.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default PhilosophySection;