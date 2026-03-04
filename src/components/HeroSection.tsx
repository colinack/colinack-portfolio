import { motion } from "framer-motion";
import heroImage from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary halftone">
      {/* Bold background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent rounded-full opacity-60" />
        <div className="absolute bottom-10 -left-10 w-72 h-72 bg-secondary rounded-full opacity-40" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-comic-purple rounded-full opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Comic issue label */}
            <div className="inline-block bg-accent text-accent-foreground comic-border comic-shadow-sm px-4 py-1 font-display text-lg mb-6 rotate-[-2deg]">
              ISSUE #01 — THE ORIGIN STORY
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-primary-foreground leading-none mb-6">
              BUILDING
              <br />
              <span className="text-accent">INTERACTIVE</span>
              <br />
              WORLDS
            </h1>

            <div className="speech-bubble max-w-md mb-8 bg-card">
              <p className="font-body text-card-foreground text-lg">
                Computer Science student & aspiring <strong>Game Developer</strong>. 
                Passionate about crafting immersive gameplay experiences, from 
                engine architecture to player-facing systems.
              </p>
            </div>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-secondary text-secondary-foreground comic-border-thick comic-shadow-lg px-8 py-4 font-display text-2xl tracking-wide hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              ⚡ START THE ADVENTURE
            </motion.a>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="comic-border-thick comic-shadow-lg bg-card p-2 rotate-[2deg] hover:rotate-0 transition-transform duration-500 max-w-md">
              <img
                src={heroImage}
                alt="Game Developer Hero Illustration"
                className="w-full h-auto"
              />
              <div className="bg-accent text-accent-foreground font-display text-center py-2 text-xl comic-border border-b-0 border-l-0 border-r-0 mt-2">
                GAME DEVELOPER IN THE MAKING
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom zigzag divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 fill-background">
          <polygon points="0,80 0,40 100,60 200,20 300,60 400,30 500,60 600,10 700,60 800,30 900,60 1000,20 1100,50 1200,30 1200,80" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
