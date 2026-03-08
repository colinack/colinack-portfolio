import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    type: "circle" | "square" | "bubble";
    text?: string;
    colorClass: string;
    delay: number;
    duration: number;
}

const colors = ["bg-accent", "bg-primary", "bg-comic-purple", "bg-comic-cyan", "bg-comic-pink"];
const onomatopoeias = ["BAM!", "POW!", "ZAP!", "BOOM!", "WHAM!", "CRASH!", "BANG!", "POP!"];

export const ComicParticles = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const newParticles: Particle[] = Array.from({ length: 25 }).map((_, i) => {
            const types: ("circle" | "square" | "bubble")[] = ["circle", "square", "bubble", "bubble"];
            const type = types[Math.floor(Math.random() * types.length)];
            return {
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: type === "bubble" ? Math.random() * 15 + 25 : Math.random() * 20 + 10,
                type: type,
                text: type === "bubble" ? onomatopoeias[Math.floor(Math.random() * onomatopoeias.length)] : undefined,
                colorClass: colors[Math.floor(Math.random() * colors.length)],
                delay: Math.random() * 5,
                duration: type === "bubble" ? Math.random() * 10 + 15 : Math.random() * 10 + 10,
            };
        });
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className={`absolute ${p.colorClass} comic-border flex items-center justify-center font-display`}
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.type === "bubble" ? "auto" : p.size,
                        height: p.type === "bubble" ? "auto" : p.size,
                        padding: p.type === "bubble" ? "8px 16px" : 0,
                        borderRadius: p.type === "circle" ? "50%" : p.type === "bubble" ? "16px 16px 16px 0" : "0%",
                        borderWidth: "3px",
                        fontSize: p.type === "bubble" ? `${p.size / 2.5}px` : undefined,
                        color: p.colorClass !== "bg-primary" && p.colorClass !== "bg-accent" ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))",
                        lineHeight: 1,
                        boxShadow: "4px 4px 0px hsl(var(--foreground))",
                    }}
                    initial={{ y: 0, opacity: 0, scale: 0 }}
                    animate={{
                        y: [-20, -150],
                        opacity: [0, 0.8, 0.8, 0],
                        scale: [0, 1, 1, 0.8],
                        rotate: p.type === "bubble" ? [-5, 5, -5] : [0, 180, 360],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear",
                    }}
                >
                    {p.text}
                </motion.div>
            ))}
        </div>
    );
};
