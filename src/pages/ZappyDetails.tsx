import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import ComicFooter from "@/components/ComicFooter";
import zappyImg1 from "@/assets/zappy_1.png";
import zappyImg2 from "@/assets/zappy-screen.png";

const ZappyDetails = () => {
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
                        className="text-5xl md:text-7xl font-display inline-block bg-primary text-primary-foreground px-8 py-3 comic-border-thick comic-shadow-lg rotate-[2deg]"
                    >
                        ZAPPY
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 flex flex-wrap justify-center gap-3"
                    >
                        {["C", "C++", "SFML", "AI", "Sockets"].map((tech) => (
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
                    {/* Screenshots Demo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-full max-w-5xl comic-border-thick comic-shadow-lg bg-card p-2 md:p-3 rotate-[1deg]"
                    >
                        <div className="flex flex-col gap-4">
                            {/* <div className="relative aspect-video bg-black comic-border overflow-hidden">
                                <img
                                    src={zappyImg1}
                                    alt="Zappy Gameplay Screenshot 1"
                                    className="w-full h-full object-cover"
                                />
                            </div> */}
                            <div className="relative aspect-video bg-black comic-border overflow-hidden">
                                <img
                                    src={zappyImg2}
                                    alt="Zappy Gameplay Screenshot 2"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="bg-accent text-accent-foreground font-display text-center py-2 text-xl comic-border border-b-0 border-l-0 border-r-0 mt-4">
                            screenshots
                        </div>
                        <div className="mt-4 flex w-full">
                            <a
                                href="#"
                                className="w-full flex items-center justify-center gap-2 bg-foreground text-background comic-border-thick py-3 font-display text-xl comic-hover hover:bg-card hover:text-card-foreground transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-6 h-6" />
                                VIEW SOURCE CODE
                            </a>
                        </div>
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
                                Project Overview
                            </h3>
                            <div className="font-body text-card-foreground space-y-4 leading-relaxed">
                                <p>
                                    <strong>Zappy</strong> is a multiplayer network game consisting of a server written in C, autonomous AI clients, and a graphical client written in C++ with SFML.
                                </p>
                                <p>
                                    In this game, multiple AI-driven teams are dropped onto a grid. Their goal is to collect resources to survive and elevate their levels through complex rituals, all while communicating over the network to coordinate strategies. The graphical client observes the simulation in real-time, providing visual feedback of the map and player actions.
                                </p>
                                <p>
                                    I made the client side graphics using SFML: A <strong>2D isometric</strong> map using <strong>perlin noise</strong> to generate the terrain in a more natural way, and all the <strong>animations</strong> and <strong>player interactions</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Box 2: Technical Highlights & Links */}
                        <div className="comic-border-thick comic-shadow bg-muted p-6 h-full flex flex-col justify-start">
                            <h3 className="font-display text-2xl mb-4 text-primary">
                                TECHNICAL HIGHLIGHTS
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 font-body text-muted-foreground mb-0">
                                <li><strong>C Server:</strong> Handles TCP socket connections and multiplexing via select/epoll for real-time state management.</li>
                                <li><strong>Client AI:</strong> Autonomous agents reacting to server broadcast commands to survive and collect stones.</li>
                                <li><strong>SFML Graphical Client:</strong> Visualizes the simulation and parses custom server protocols built in C++.</li>
                                <li><strong>Synchronization:</strong> Complex time-based event queue system to manage actions latency across connected TCP clients.</li>
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

export default ZappyDetails;
