import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import ComicFooter from "@/components/ComicFooter";
import rtypeVideo from "@/assets/rtype-video.mp4";

const RTypeDetails = () => {
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
                        className="text-5xl md:text-7xl font-display inline-block bg-secondary text-secondary-foreground px-8 py-3 comic-border-thick comic-shadow-lg rotate-[-2deg]"
                    >
                        RTYPE
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 flex flex-wrap justify-center gap-3"
                    >
                        {["C++", "SFML", "Custom Engine", "Asio Networking"].map((tech) => (
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
                            <video
                                src={rtypeVideo}
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                            />
                        </div>
                        <div className="bg-accent text-accent-foreground font-display text-center py-2 text-xl comic-border border-b-0 border-l-0 border-r-0 mt-2">
                            GAMEPLAY PREVIEW
                        </div>
                    </motion.div>

                    {/* Project Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        <div className="speech-bubble bg-card">
                            <h2 className="font-display text-2xl mb-4 text-foreground underline decoration-wavy decoration-accent underline-offset-4">
                                PROJECT OVERVIEW
                            </h2>
                            <div className="font-body text-card-foreground space-y-4 leading-relaxed">
                                <p>
                                    A complete multiplayer recreation of the classic arcade shooter
                                    <strong> R-Type</strong>. Built entirely in C++ from scratch, this project showcases my ability to design complex game architectures and handle real-time networking.
                                </p>
                                <p>
                                    The engine implements a strict <strong>Entity Component System (ECS)</strong> to cleanly manage gameplay logic, rendering, and physics for hundreds of simultaneous entities.
                                </p>
                                <h3 className="font-display text-xl text-primary mt-6 mb-2">Technical Highlights:</h3>
                                <ul className="list-disc pl-5 space-y-2 opacity-90">
                                    <li><strong>Custom ECS:</strong> Sparse set implementation for fast component iteration.</li>
                                    <li><strong>Networking:</strong> Custom UDP/TCP protocol using Asio. Client-side prediction and server reconciliation for smooth gameplay.</li>
                                    <li><strong>SFML Rendering:</strong> Optimized sprite batching and animated entity states.</li>
                                    <li><strong>Cross-Platform:</strong> Build environment configured with CMake for Linux and Windows.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="#"
                                className="flex items-center justify-center gap-2 bg-foreground text-background comic-border-thick comic-shadow px-6 py-4 font-display text-xl comic-hover hover:bg-muted-foreground transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-5 h-5" />
                                VIEW SOURCE CODE
                            </a>
                        </div>
                    </motion.div>
                </div>
            </main>

            <ComicFooter />
        </div>
    );
};

export default RTypeDetails;
