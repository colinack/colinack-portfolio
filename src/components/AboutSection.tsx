import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-display text-foreground inline-block bg-primary text-primary-foreground px-6 py-2 comic-border-thick comic-shadow rotate-[-1deg]">
              ABOUT ME
            </h2>
          </div>

          {/* Comic panels layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Panel CODER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="md:col-span-7 h-full"
            >
              <div className="comic-border-thick comic-shadow bg-accent text-accent-foreground p-6 md:p-8 relative h-full rotate-[-1deg] hover:rotate-0 hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                <div className="bg-foreground text-background font-display text-lg px-3 py-1 inline-block mb-4 rotate-[1deg]">
                  THE CODER
                </div>
                <p className="font-body text-lg leading-relaxed">
                  During my time at Epitech, I have built a strong foundation in <strong>C and C++</strong>,
                  focusing on low-level system programming and Object-Oriented Programming (OOP).
                  I am also expanding my skill set through self-driven projects in <strong>C# and Unity</strong>.
                </p>
              </div>
            </motion.div>

            {/* Panel GAMER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="md:col-span-5 z-10 h-full"
            >
              <div className="comic-border-thick comic-shadow bg-card p-6 md:p-8 halftone relative h-full rotate-[2deg] hover:rotate-0 hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                <div className="relative z-10">
                  <div className="bg-secondary text-secondary-foreground font-display text-lg px-3 py-1 comic-border inline-block mb-4 rotate-[-2deg]">
                    THE GAMER
                  </div>
                  <p className="font-body text-card-foreground leading-relaxed">
                    Ever since I picked up my first controller, I've been fascinated by
                    how games create <strong>emotional connections</strong> through interactivity.
                    That curiosity drove me to learn how they're built from the ground up.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Panel PASSION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="md:col-span-12 lg:col-span-10 lg:col-start-2 h-full"
            >
              <div className="comic-border-thick comic-shadow bg-comic-purple text-primary-foreground p-6 md:p-10 halftone relative h-full rotate-[-1deg] hover:rotate-[1deg] hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                <div className="relative z-10">
                  <div className="bg-accent text-accent-foreground font-display text-lg px-3 py-1 comic-border inline-block mb-4 rotate-[1deg]">
                    MY PASSION
                  </div>
                  <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
                    <div className="flex-1">
                      <p className="font-body text-lg leading-relaxed">
                        I'm a big fan of music, a passion transmitted to me by my father. I play ukulele and I'm learning guitar. Grunge bands such as Pearl Jam, Soundgarden or Silverchair have a special place in my heart.
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="font-body text-lg leading-relaxed">
                        I also love fantasy universes, whether in books, series or games and yes I love video games. My favorite is Baldur's Gate 3 by far.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
