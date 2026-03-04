import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageColor: string;
  detailsUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "DUNGEON CRAWLER RPG",
    description:
      "A procedurally generated dungeon crawler with real-time combat, loot systems, and permadeath mechanics. Built with a custom ECS architecture.",
    techStack: ["C++", "OpenGL", "Custom Engine"],
    imageColor: "bg-secondary",
    detailsUrl: "#",
    githubUrl: "#",
  },
  {
    title: "PIXEL PLATFORMER",
    description:
      "A fast-paced 2D platformer with tight controls, wall-jumping, and speed-run leaderboards. Features a custom physics engine and particle system.",
    techStack: ["Unity", "C#", "Photoshop"],
    imageColor: "bg-primary",
    detailsUrl: "#",
    githubUrl: "#",
  },
  {
    title: "MULTIPLAYER ARENA",
    description:
      "A competitive top-down arena shooter with real-time netcode, client-side prediction, and lag compensation. Supports 4-player online matches.",
    techStack: ["Unreal Engine", "C++", "Networking"],
    imageColor: "bg-comic-purple",
    detailsUrl: "#",
    githubUrl: "#",
  },
  {
    title: "PUZZLE ADVENTURE",
    description:
      "A narrative-driven puzzle game with environmental storytelling, a custom dialogue system, and branching paths. Created during a 48h game jam.",
    techStack: ["Godot", "GDScript", "Aseprite"],
    imageColor: "bg-comic-cyan",
    detailsUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 bg-background relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-6">
          <h2 className="text-5xl sm:text-6xl font-display inline-block bg-accent text-accent-foreground px-6 py-2 comic-border-thick comic-shadow rotate-[-1deg]">
            THE MAIN STORYLINE
          </h2>
        </div>
        <p className="text-center font-body text-muted-foreground text-lg mb-16 max-w-xl mx-auto">
          Each project is a chapter in my game development journey. Click to explore.
        </p>

        {/* Projects grid — comic strip style */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -1 : 1 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="comic-border-thick comic-shadow-lg bg-card group hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-200"
            >
              {/* Image placeholder area */}
              <div className={`${project.imageColor} h-48 relative halftone overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <span className="font-display text-3xl text-primary-foreground bg-foreground/60 px-4 py-2">
                    📸 SCREENSHOT
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl text-foreground mb-3 comic-border border-t-0 border-l-0 border-r-0 pb-2">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted text-muted-foreground comic-border px-3 py-1 font-body text-xs font-semibold uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.detailsUrl}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground comic-border px-4 py-3 font-display text-lg hover:bg-secondary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    VIEW DETAILS
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center gap-2 bg-foreground text-background comic-border px-4 py-3 font-display text-lg hover:bg-muted-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    CODE
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
