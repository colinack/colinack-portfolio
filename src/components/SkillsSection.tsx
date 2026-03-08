import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Gamepad2, Wrench, Database } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  bgClass: string;
  textClass: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "PROGRAMMING",
    icon: <Code className="w-8 h-8" />,
    skills: ["C", "C++", "C#", "TypeScript", "Lua"],
    bgClass: "bg-primary text-primary-foreground",
    textClass: "bg-primary-foreground text-primary",
  },
  {
    title: "GAME DEV",
    icon: <Gamepad2 className="w-8 h-8" />,
    skills: ["Unity", "Unreal Engine", "Godot", "Game Physics", "AI Systems", "Level Design"],
    bgClass: "bg-secondary text-secondary-foreground",
    textClass: "bg-secondary-foreground text-secondary",
  },
  {
    title: "TOOLS & ENGINES",
    icon: <Wrench className="w-8 h-8" />,
    skills: ["Git & GitHub", "Unity", "Docker", "Figma"],
    bgClass: "bg-accent text-accent-foreground",
    textClass: "bg-accent-foreground text-accent",
  },
  {
    title: "OTHER SKILLS",
    icon: <Database className="w-8 h-8" />,
    skills: ["Data Structures", "Algorithms", "Networking", "Shaders (GLSL)", "REST APIs", "Agile / Scrum"],
    bgClass: "bg-comic-cyan text-accent-foreground",
    textClass: "bg-accent-foreground text-card",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-muted relative halftone" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-display text-foreground inline-block bg-secondary text-secondary-foreground px-6 py-2 comic-border-thick comic-shadow rotate-[1deg]">
            SKILL TREE
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`comic-border-thick comic-shadow ${cat.bgClass} p-6`}
            >
              <div className="flex items-center gap-3 mb-5">
                {cat.icon}
                <h3 className="font-display text-2xl">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`${cat.textClass} comic-border px-3 py-1 font-body text-sm font-semibold`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
