import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import ComicFooter from "@/components/ComicFooter";

const PlatformerDetails = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background halftone pt-12">
            <main className="flex-1 container mx-auto px-6 py-12 -mt-4">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-8"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-card comic-border px-4 py-2 font-display text-lg comic-hover hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        BACK TO HOME
                    </Link>
                </motion.div>

                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display inline-block bg-comic-cyan text-primary-foreground px-8 py-3 comic-border-thick comic-shadow-lg rotate-[-2deg]"
                    >
                        2D PLATFORMER
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 flex flex-wrap justify-center gap-3"
                    >
                        {["Unity", "C#", "Game Jam", "2D Physics"].map((tech) => (
                            <span
                                key={tech}
                                className="bg-muted text-muted-foreground comic-border px-4 py-2 font-body text-sm font-semibold uppercase tracking-wide"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>

                <div className="flex flex-col gap-12 items-center">
                    {/* Video Demo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-full max-w-5xl comic-border-thick comic-shadow-lg bg-card p-2 md:p-3 rotate-[1deg]"
                    >
                        <div className="relative aspect-video bg-black comic-border overflow-hidden">
                            <iframe
                                src="https://player.vimeo.com/video/1172273913?autoplay=1&loop=1&muted=1"
                                className="w-full h-full object-cover absolute top-0 left-0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                style={{ border: 'none' }}
                            />
                        </div>
                        <div className="bg-accent text-accent-foreground font-display text-center py-2 text-xl comic-border border-b-0 border-l-0 border-r-0 mt-2">
                            video demo
                        </div>
                        {/* <div className="mt-4 flex w-full">
                            <a
                                href="#"
                                className="w-full flex items-center justify-center gap-2 bg-foreground text-background comic-border-thick py-3 font-display text-xl comic-hover hover:bg-card hover:text-card-foreground transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-6 h-6" />
                                VIEW SOURCE CODE
                            </a>
                        </div> */}
                    </motion.div>

                    {/* Project Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-start"
                    >
                        {/* Box 1: Project Overview */}
                        <div className="comic-border-thick comic-shadow bg-muted p-6 h-full flex flex-col justify-start">
                            <h3 className="font-display text-2xl mb-4 text-secondary">
                                Project Details
                            </h3>
                            <div className="font-body text-card-foreground space-y-4 leading-relaxed">
                                <p>
                                    A rapid-prototype <strong>2D Platformer</strong> developed using Unity over the course of a fast-paced 48-hour Winter Game Jam.
                                </p>
                                <p>
                                    The Goal of this Jam was to create Christmas themed game with a <strong>fun and addictive gameplay loop</strong>. To do this, I implemented a character controller with a variety of moves including double jump, dash, and wall jump, all of them using smooth animations and particles, making the game feel <strong> very satisfying to play</strong>.
                                </p>
                                <p>
                                    In this game, the player controls <strong>Santa Claus</strong> who has to reach home before sunset. Players must <strong>   navigate deadly traps</strong> and <strong>leverage environmental mechanics</strong>, such as pushing crates, to overcome challenges and complete their mission.
                                </p>
                            </div>
                        </div>

                        {/* Box 2: Technical Highlights & Links */}
                        <div className="comic-border-thick comic-shadow bg-muted p-6 h-full flex flex-col justify-start">
                            <h3 className="font-display text-2xl mb-4 text-primary">
                                TECHNICAL HIGHLIGHTS
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 font-body text-muted-foreground mb-0">
                                <li><strong>Character Controller:</strong> Custom C# physics controller for tight, responsive jumping and movement mechanics.</li>
                                <li><strong>Level Design:</strong> Utilized Unity Tilemaps and custom colliders to create a playable map quickly.</li>
                                <li><strong>Lighting:</strong> Custom lighting and shadow system, such as the Sun, for a dynamic and atmospheric look.</li>
                                <li><strong>State Management:</strong> Clean animation states tied directly to player inputs and environmental forces.</li>
                                <li><strong>Particles:</strong> Custom snow particle system.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </main>
            <div className="h-32" />
            <ComicFooter />
        </div>
    );
};

export default PlatformerDetails;
