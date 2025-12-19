import avatar from "@/assets/avatar.png";

const skills = [
  "Graphic Designer",
  "Illustrator",
  "Mascot Design",
  "Cute / Cartoon Style",
  "Logo Design",
];

const AboutSection = () => {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-5">
          {/* Profile Card - Takes 3 columns */}
          <div className="card-bento md:col-span-3 flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-lg" />
                <img 
                  src={avatar} 
                  alt="Ali Zulfikar Avatar" 
                  className="relative h-32 w-32 md:h-40 md:w-40 rounded-2xl object-cover border-4 border-card-foreground"
                />
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h2 className="font-display text-4xl md:text-5xl text-card-foreground">
                HI !
              </h2>
              <p className="mt-1 font-heading text-lg text-card-foreground/80">
                My Name Is
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-card-foreground">
                Ali Zulfikar
              </h3>
              <p className="mt-4 max-w-md text-sm text-card-foreground/70 leading-relaxed">
                Graphic designer & illustrator since 2019. I specialize in creating cute characters, 
                mascots, and cartoon-style visuals. I love mixing illustration, branding, and 
                game-like interfaces to create memorable designs.
              </p>
            </div>
          </div>

          {/* Skill Card - Takes 2 columns */}
          <div className="card-bento md:col-span-2 flex flex-col justify-center">
            <h3 className="font-display text-3xl md:text-4xl text-secondary mb-6 text-center glow-blue">
              SKILL
            </h3>
            <ul className="space-y-3">
              {skills.map((skill, index) => (
                <li 
                  key={skill} 
                  className="skill-item justify-center md:justify-start"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="skill-dot" />
                  <span className="font-heading font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
