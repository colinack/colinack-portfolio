import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import rtypeImg from "@/assets/rtype-screen.png";
import zappyImg from "@/assets/zappy-screen.png";
import platformerImg from "@/assets/2Dplateformer-screen.png";
import horrorImg from "@/assets/horror-game-screen.png";
import otsImg from "@/assets/ots-screen.png";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageColor: string;
  imageUrl?: string;
  detailsUrl: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "RTYPE",
    description:
      "A multiplayer remake of the classic R-Type built in C++ using an Entity Component System (ECS) architecture. The project implements a client-server model with TCP and UDP networking.",
    techStack: ["C++", "SFML", "Custom Engine", "ASIO Networking"],
    imageColor: "bg-secondary",
    imageUrl: rtypeImg,
    detailsUrl: "/projects/rtype",
    githubUrl: "https://github.com/colinack/RType",
  },
  {
    title: "ZAPPY",
    description:
      "Development of a multiplayer network game with a C server, an autonomous AI, and a C++ graphical client. AI-controlled players explore a map, collect resources, and cooperate to level up in a real-time simulation.",
    techStack: ["C", "C++", "SFML", "AI"],
    imageColor: "bg-primary",
    imageUrl: zappyImg,
    detailsUrl: "/projects/zappy",
    githubUrl: "https://github.com/colinack/Zappy",
  },
  {
    title: "Horror Game (Prototype)",
    description:
      "A Prototype of a 3D horror game built in Unity for an itch.io Game Jam. ",
    techStack: ["Unity", "C#"],
    imageColor: "bg-comic-purple",
    imageUrl: horrorImg,
    detailsUrl: "/projects/horror",
  },
  {
    title: "2D Plateformer (Prototype)",
    description:
      "A 2D plateformer built in Unity during a 2 days winter Game Jam.",
    techStack: ["Unity", "C#"],
    imageColor: "bg-comic-cyan",
    imageUrl: platformerImg,
    detailsUrl: "/projects/platformer",
  },
  {
    title: "Oath of the Slain (In Progress)",
    description:
      "My graduation project currently in development. It's a tactical PvP game where players engage in strategic battles tournament-style, with a gameplay twist.",
    techStack: ["Unity", "C#", "TCP", "PVP", "PostgreSQL"],
    imageColor: "bg-destructive",
    imageUrl: otsImg,
    detailsUrl: "/projects/ots", // Add the URL once the detail page is created
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 bg-secondary/10 relative overflow-hidden border-y-4 border-foreground" ref={ref}>
      {/* Subtle comic speedlines background effect */}
      <div className="absolute inset-0 opacity-[0.02] bg-[repeating-linear-gradient(0deg,transparent,transparent_10px,var(--foreground)_10px,var(--foreground)_11px)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <div className="text-center mb-6">
          <h2 className="text-5xl sm:text-6xl font-display inline-block bg-accent text-accent-foreground px-6 py-2 comic-border-thick comic-shadow rotate-[-1deg]">
            THE MAIN STORYLINE
          </h2>
        </div>
        <p className="text-center font-body text-muted-foreground text-lg mb-16 max-w-xl mx-auto">
          Each project is a chapter in my game development journey.
        </p>
        {/* <p className="text-center font-body text-muted-foreground text-lg mb-16 max-w-xl mx-auto">
          <strong>Click on the project to explore more.</strong>
        </p> */}

        {/* Projects grid — comic strip style */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -1 : 1 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="comic-border-thick comic-shadow-lg bg-card group comic-card-hover"
            >
              {/* Image placeholder area */}
              <div className={`${project.imageColor} h-48 relative halftone overflow-hidden`}>
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="font-display text-3xl text-primary-foreground bg-foreground/60 px-4 py-2">
                      📸 SCREENSHOT
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl text-foreground mb-4 text-center underline decoration-[3px] underline-offset-4">
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
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground comic-border px-4 py-3 font-display text-lg comic-hover hover:bg-secondary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    VIEW DETAILS
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center justify-center gap-2 bg-foreground text-background comic-border px-4 py-3 font-display text-lg comic-hover hover:bg-muted-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      CODE
                    </a>
                  )}
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
