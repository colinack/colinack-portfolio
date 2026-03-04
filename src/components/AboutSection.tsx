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
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Panel 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="comic-border-thick comic-shadow bg-card p-6 halftone relative"
            >
              <div className="relative z-10">
                <div className="bg-secondary text-secondary-foreground font-display text-lg px-3 py-1 comic-border inline-block mb-4">
                  THE GAMER
                </div>
                <p className="font-body text-card-foreground leading-relaxed">
                  Ever since I picked up my first controller, I've been fascinated by 
                  how games create <strong>emotional connections</strong> through interactivity. 
                  That curiosity drove me to learn how they're built from the ground up.
                </p>
              </div>
            </motion.div>

            {/* Panel 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="comic-border-thick comic-shadow bg-accent text-accent-foreground p-6 relative"
            >
              <div className="bg-foreground text-background font-display text-lg px-3 py-1 inline-block mb-4">
                THE CODER
              </div>
              <p className="font-body leading-relaxed">
                Studying <strong>Computer Science</strong> has sharpened my 
                problem-solving mindset. I thrive on writing elegant, performant 
                code — whether it's gameplay systems, rendering pipelines, 
                or networking logic.
              </p>
            </motion.div>

            {/* Panel 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="comic-border-thick comic-shadow bg-comic-purple text-primary-foreground p-6 halftone relative"
            >
              <div className="relative z-10">
                <div className="bg-accent text-accent-foreground font-display text-lg px-3 py-1 comic-border inline-block mb-4">
                  THE BUILDER
                </div>
                <p className="font-body leading-relaxed">
                  I'm driven by the desire to <strong>create worlds</strong> people 
                  can explore. From game jams to personal projects, every line of code 
                  brings me closer to my goal: working in the game industry.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
