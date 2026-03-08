import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  period: string;
  title: string;
  org: string;
  description: string;
  type: "education" | "experience";
}

const timelineData: TimelineItem[] = [
  {
    period: "2023 — Present",
    title: "M.SC. Computer Science",
    org: "Epitech Marseille",
    description:
      "Studying core C and C++ fundamentals including algorithms, data structures, computer graphics, and software engineering. Specializing in game-related electives.",
    type: "education",
  },
  {
    period: "September 2024 - January 2025",
    title: "DevOps Intern",
    org: "Française des Jeux",
    description:
      "Mastered CI/CD Platform tools within the FDJ ecosystem. Designed and developed a custom Status Page. Deployed applications to FDJ’s internal infrastructure using Kubernetes. Analyzed and configured technical solutions tailored to team-specific needs.",
    type: "experience",
  },
  {
    period: "2023",
    title: "Game Jam Winner — 48h Challenge",
    org: "Global Game Jam",
    description:
      "Designed and developed a complete puzzle game in 48 hours. Won 'Best Gameplay' award among 50+ entries.",
    type: "experience",
  },

];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-muted relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-display inline-block bg-comic-purple text-primary-foreground px-6 py-2 comic-border-thick comic-shadow rotate-[1deg]">
            THE TIMELINE
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-foreground md:transform md:-translate-x-0.5" />

          {timelineData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative flex mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-accent comic-border rounded-full transform -translate-x-1.5 md:-translate-x-2 mt-6 z-10" />

              {/* Card */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <div
                  className={`comic-border-thick comic-shadow p-5 comic-card-hover ${item.type === "education"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-card-foreground"
                    }`}
                >
                  <span className="font-display text-sm bg-accent text-accent-foreground px-2 py-0.5 comic-border inline-block mb-2">
                    {item.period}
                  </span>
                  <h3 className="font-display text-xl mb-1">{item.title}</h3>
                  <p className="font-body text-sm opacity-80 mb-2">{item.org}</p>
                  <p className="font-body text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
