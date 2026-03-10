import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import ComicFooter from "@/components/ComicFooter";

const HorrorDetails = () => {
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
                        className="text-5xl md:text-7xl font-display inline-block bg-comic-purple text-primary-foreground px-8 py-3 comic-border-thick comic-shadow-lg rotate-[2deg]"
                    >
                        HORROR PROTOTYPE
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 flex flex-wrap justify-center gap-3"
                    >
                        {["Unity", "C#", "3D", "Game Jam"].map((tech) => (
                            <span
                                key={tech}
                                className="bg-muted text-muted-foreground comic-border px-4 py-2 font-body text-sm font-semibold uppercase tracking-wide"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Video Demo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="comic-border-thick comic-shadow-lg bg-card p-2 md:p-3 rotate-[1deg]"
                    >
                        <div className="relative aspect-video bg-black comic-border overflow-hidden">
                            <iframe
                                src="https://player.vimeo.com/video/1172268164?autoplay=1&loop=1&muted=1"
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
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        <div className="flex flex-col gap-6">
                            {/* Box 1: Project Overview */}
                            <div className="comic-border-thick comic-shadow bg-muted p-6">
                                <h3 className="font-display text-2xl mb-4 text-secondary">
                                    Project Overview
                                </h3>
                                <div className="font-body text-card-foreground space-y-4 leading-relaxed">
                                    <p>
                                        A rapid-prototype <strong>3D Horror Game</strong> developed using Unity over the course of an itch.io Game Jam.
                                    </p>
                                    <p>
                                        The primary goal of this jam was to build a tense and immersive atmosphere using lighting, sound design, and first-person mechanics.
                                    </p>
                                </div>
                            </div>

                            {/* Box 2: Technical Highlights & Links */}
                            <div className="comic-border-thick comic-shadow bg-muted p-6">
                                <h3 className="font-display text-2xl mb-4 text-primary">
                                    TECHNICAL HIGHLIGHTS
                                </h3>
                                <ul className="list-disc pl-5 space-y-2 font-body text-muted-foreground mb-0">
                                    <li><strong>Atmosphere:</strong> Integrated dynamic lighting and post-processing effects to build tension.</li>
                                    <li><strong>First-Person Controller:</strong> Custom C# controller tailored for exploring indoor environments.</li>
                                    <li><strong>Rapid Prototyping:</strong> Iterative development workflow optimized for a short Game Jam timeline.</li>
                                    <li><strong>Interaction System:</strong> Built a flexible raycast-based interaction system for inspecting objects and solving puzzles.</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
            <div className="h-32" />
            <ComicFooter />
        </div>
    );
};

export default HorrorDetails;
