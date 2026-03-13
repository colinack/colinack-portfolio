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
                        className="text-5xl md:text-7xl font-display inline-block bg-destructive text-primary-foreground px-8 py-3 comic-border-thick comic-shadow-lg rotate-[-2deg]"
                    >
                        Oath of the Slain
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 flex flex-wrap justify-center gap-3"
                    >
                        {["Unity", "C#", "TCP", "PVP", "PostgreSQL"].map((tech) => (
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
                                    Oath of the Slain: War of Ascension is a <strong>tactical PvP tournament game</strong> developed as a 4-person flagship project (EIP). It merges the strategic depth of Turn-Based combat with the dynamic unpredictability of Roguelite mechanics.
                                </p>
                                <p>
                                    Set in the <strong>Norse afterlife</strong>, players lead fallen warriors through a "run-based" tournament to earn their place in Valhalla. The core experience focuses on a fast-paced loop: Drafting a unique loadout, engaging in intense tactical matches, and Evolving through random divine blessings that ensure no two sessions are ever the same.
                                </p>
                                <p>
                                    The goal was to create a <strong>competitive experience</strong> where synergy and adaptability are more important than permanent grinding, with matches designed to be short, brutal, and <strong>highly replayable</strong>.
                                </p>
                                <p>
                                    The <strong>core twist</strong> of the game is a <strong>timeline-based combat system</strong>. Instead of executing actions immediately, players plan their moves, abilities, and attacks on a 5-second timeline during a planning phase. When the round starts, all players’ actions are <strong>executed simultaneously in real time</strong> according to their chosen timestamps.
                                </p>
                            </div>
                        </div>

                        {/* Box 2: Technical Highlights & Links */}
                        <div className="comic-border-thick comic-shadow bg-muted p-6 h-full flex flex-col justify-start">
                            <h3 className="font-display text-2xl mb-4 text-primary">
                                TECHNICAL HIGHLIGHTS
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 font-body text-muted-foreground mb-0">
                                <li><strong>Timeline Combat System:</strong> Custom timeline-based combat where players schedule actions within a 5-second window. The server resolves all interactions simultaneously, enabling prediction-based tactical gameplay.</li>
                                <li><strong>Server Authoritative Simulation:</strong> Dedicated C# server responsible for resolving movement, collisions, abilities, and combat events. Clients only replay the validated simulation to ensure synchronization and prevent cheating.</li>
                                <li><strong>Custom Networking Protocol:</strong> TCP-based networking layer with structured messages using Protocol Buffers for efficient serialization and strict client–server contracts.</li>
                                <li><strong>Event-Based Combat Replay:</strong> The server sends a timeline of resolved combat events which clients replay locally, allowing deterministic visual playback while keeping the simulation authoritative.</li>
                                <li><strong>Scalable Multiplayer Architecture:</strong> Matchmaking and tournament system supporting team-based PvP (4 teams of 3 players) with modular GameRoom, TeamManager, and TournamentManager systems.</li>
                                <li><strong>Unity Isometric Prototype:</strong> 3D isometric environment built in Unity to prototype tactical movement, targeting, and timeline-based combat interactions.</li>
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
