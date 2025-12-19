import avatar from "@/assets/avatar.png";
import projectLogo from "@/assets/project-logo.jpg";
import projectMascot from "@/assets/project-mascot.jpg";
import projectIllustration from "@/assets/project-illustration.jpg";
import mascot1 from "@/assets/mascot-1.png";
import mascot2 from "@/assets/mascot-2.png";
import mascot3 from "@/assets/mascot-3.png";
import mascot4 from "@/assets/mascot-4.png";
import { Sparkles, Heart, Star, Palette, PenTool, Layers } from "lucide-react";

const skills = ["Graphic Designer", "Illustrator", "Mascot Design", "Cute / Cartoon Style", "Logo Design"];

const projects = [
  { title: "Logo Design", image: projectLogo, description: "Brand identities & visual marks", color: "bg-cozy-peach" },
  { title: "Mascot Maker", image: projectMascot, description: "Character creation & design", color: "bg-cozy-mint" },
  { title: "Illustration", image: projectIllustration, description: "Digital art & visual stories", color: "bg-cozy-lavender" }
];

const mascots = [
  { name: "Bunny", image: mascot1, personality: "Friendly helper", color: "bg-cozy-peach" },
  { name: "Neko", image: mascot2, personality: "Playful & curious", color: "bg-cozy-lavender" },
  { name: "Dragon", image: mascot3, personality: "Cheerful buddy", color: "bg-cozy-mint" },
  { name: "Bear", image: mascot4, personality: "Cozy explorer", color: "bg-cozy-cream" }
];

const principles = [
  { icon: Sparkles, title: "Cute & Memorable", description: "Adorable characters with strong personalities", color: "bg-cozy-peach" },
  { icon: Heart, title: "Design With Heart", description: "Every creation connects emotionally", color: "bg-cozy-lavender" },
  { icon: Star, title: "Warm & Playful", description: "Friendly designs full of personality", color: "bg-cozy-mint" }
];

const software = [
  { name: "Adobe Illustrator", icon: PenTool, color: "bg-cozy-peach" },
  { name: "Adobe Photoshop", icon: Layers, color: "bg-cozy-sky" },
  { name: "Procreate", icon: Palette, color: "bg-cozy-lavender" }
];

const BentoSection = () => {
  return (
    <section className="relative px-4 md:px-8 lg:px-16 py-12 bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Bento Grid Layout */}
        <div className="bento-grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
          
          {/* Profile Card - Large */}
          <div className="bento-item md:col-span-2 lg:col-span-3 bg-cozy-cream">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-full bg-primary/20 animate-pulse" />
                  <img src={avatar} alt="Ali Zulfikar avatar" className="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-card shadow-lg" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
                  Hi there! 👋
                </h2>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mt-2">
                  I'm Ali Zulfikar
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed font-medium">
                  Graphic designer & illustrator since 2019. Creating cute characters, mascots, and cartoon-style visuals! 🌸
                </p>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="bento-item md:col-span-2 lg:col-span-3 bg-cozy-sunshine">
            <h3 className="font-heading text-3xl font-extrabold text-foreground mb-5 flex items-center gap-2">
              Skills ⭐
            </h3>
            <ul className="space-y-3">
              {skills.map((skill) => (
                <li key={skill} className="skill-item">
                  <span className="skill-dot" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects - 3 cards */}
          {projects.map((project) => (
            <div key={project.title} className="bento-item md:col-span-2 lg:col-span-2 p-0 overflow-hidden group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className={`absolute inset-0 ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium mt-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}

          {/* Mascots - Full Width Row */}
          <div className="bento-item md:col-span-4 lg:col-span-6 bg-cozy-lavender/50">
            <h3 className="font-heading text-3xl font-extrabold text-foreground mb-6 text-center">
              My Mascots 🎨
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mascots.map((mascot) => (
                <div key={mascot.name} className={`${mascot.color} rounded-2xl p-4 text-center transition-all duration-300 hover:scale-105`}>
                  <img src={mascot.image} alt={mascot.name} className="w-full aspect-square object-contain rounded-xl mb-3" />
                  <h4 className="font-heading text-lg font-bold text-foreground">{mascot.name}</h4>
                  <p className="text-sm text-muted-foreground font-medium">{mascot.personality}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Design Philosophy */}
          {principles.map((principle) => (
            <div key={principle.title} className="bento-item md:col-span-2 text-center group">
              <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${principle.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                <principle.icon className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {principle.title}
              </h3>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}

          {/* Software Tools */}
          <div className="bento-item md:col-span-4 lg:col-span-3 bg-cozy-mint/50">
            <h3 className="font-heading text-3xl font-extrabold text-foreground mb-6">
              Tools I Use 🛠️
            </h3>
            <div className="flex flex-wrap gap-4">
              {software.map((tool) => (
                <div key={tool.name} className={`${tool.color} rounded-2xl px-5 py-4 flex items-center gap-3 transition-all duration-300 hover:scale-105`}>
                  <tool.icon className="h-6 w-6 text-foreground" />
                  <span className="font-heading font-bold text-foreground">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="bento-item md:col-span-4 lg:col-span-3 bg-cozy-peach/50">
            <h3 className="font-heading text-3xl font-extrabold text-foreground mb-4">
              Let's Connect! 💌
            </h3>
            <p className="text-muted-foreground font-medium mb-6">
              Have a project in mind? I'd love to hear from you!
            </p>
            <a 
              href="mailto:alizulfikar@email.com" 
              className="btn-primary inline-flex items-center gap-2"
            >
              📧 Send Me an Email
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoSection;
