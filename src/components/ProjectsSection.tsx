import projectLogo from "@/assets/project-logo.jpg";
import projectMascot from "@/assets/project-mascot.jpg";
import projectIllustration from "@/assets/project-illustration.jpg";

const projects = [
  {
    title: "LOGO DESIGN",
    image: projectLogo,
    description: "Brand identities & visual marks",
  },
  {
    title: "MASCOT MAKER",
    image: projectMascot,
    description: "Character creation & design",
  },
  {
    title: "ILLUSTRATOR",
    image: projectIllustration,
    description: "Digital art & visual stories",
  },
];

const ProjectsSection = () => {
  return (
    <section className="relative px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="section-title">
            Featured Project
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="card-project group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wide">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
