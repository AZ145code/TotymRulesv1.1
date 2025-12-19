import { Sparkles, Heart, Zap } from "lucide-react";

const principles = [
  {
    icon: Sparkles,
    title: "Cute ≠ Weak",
    description: "Adorable characters with strong personalities and memorable impact.",
  },
  {
    icon: Heart,
    title: "Design With Soul",
    description: "Every creation tells a story and connects emotionally with audiences.",
  },
  {
    icon: Zap,
    title: "Bold & Playful",
    description: "Strong shapes and clear expressions that feel alive and dynamic.",
  },
];

const PhilosophySection = () => {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="section-title">
            Design Philosophy
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        {/* Principles Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {principles.map((principle, index) => (
            <div 
              key={principle.title}
              className="card-dark text-center group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 transition-all duration-300 group-hover:from-primary/40 group-hover:to-secondary/40">
                <principle.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {principle.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
