import projectLogo from "@/assets/project-logo.jpg";
import projectMascot from "@/assets/project-mascot.jpg";
import projectIllustration from "@/assets/project-illustration.jpg";
const projects = [{
  title: "Logo Design",
  image: projectLogo,
  description: "Brand identities & visual marks",
  color: "bg-cozy-peach"
}, {
  title: "Mascot Maker",
  image: projectMascot,
  description: "Character creation & design",
  color: "bg-cozy-mint"
}, {
  title: "Illustration",
  image: projectIllustration,
  description: "Digital art & visual stories",
  color: "bg-cozy-lavender"
}];
const ProjectsSection = () => {
  return <section className="relative px-6 md:px-12 lg:px-20 py-0">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-12 text-center">
          
          
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => <div key={project.title} className="card-project group" style={{
          animationDelay: `${index * 0.15}s`
        }}>
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {/* Overlay */}
                <div className={`absolute inset-0 ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              </div>
              
              {/* Title */}
              <div className="p-5">
                <h3 className="font-heading text-xl font-bold text-card-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProjectsSection;