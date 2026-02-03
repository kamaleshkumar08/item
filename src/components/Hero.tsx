import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Zap, Shield } from 'lucide-react';
import StaggeredGrid from './StaggeredGrid';

const Hero = () => {
    // Character staggering variants for Framer Motion
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 50,
        },
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 overflow-hidden bg-grid">
            {/* AnimeJS Staggered Grid Background */}
            <div className="absolute inset-0 z-0">
                <StaggeredGrid />
            </div>

            {/* Dynamic Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyber-primary blend-overlay opacity-10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 left-3/4 w-[500px] h-[500px] bg-cyber-secondary blend-overlay opacity-10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyber-primary blend-overlay opacity-5 rounded-full blur-[100px] pointer-events-none" />

            {/* Decorative Title (Background) */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 0.03, x: 0 }}
                transition={{ duration: 2 }}
                className="absolute top-1/2 -left-20 -translate-y-1/2 text-[20rem] font-black tracking-tighter select-none pointer-events-none whitespace-nowrap hidden lg:block"
            >
                EVOLUTION
            </motion.div>

            {/* Floating 3D-like Objects */}
            <motion.div
                animate={{
                    y: [0, -40, 0],
                    rotateX: [0, 45, 0],
                    rotateY: [0, 45, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] right-[15%] w-32 h-32 glass rounded-3xl border-cyber-purple/30 flex items-center justify-center rotate-45 hidden lg:flex"
            >
                <Zap size={48} className="text-cyber-primary opacity-40" />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 60, 0],
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[20%] left-[10%] w-48 h-48 border border-white/5 rounded-full blur-[1px] hidden lg:block"
            />

            {/* Main Content */}
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyber-primary/40 bg-cyber-primary/10 text-cyber-primary text-sm font-black mb-10 tracking-widest uppercase"
                >
                    <div className="w-2 h-2 rounded-full bg-cyber-primary animate-ping" />
                    <Sparkles size={16} /> Protocol v2.5 Active
                </motion.div>

                <div className="overflow-hidden mb-8">
                    <motion.h1
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic relative group max-w-6xl mx-auto flex flex-wrap justify-center gap-4 md:gap-8"
                    >
                        {"ENGINEER YOUR EVOLUTION".split(" ").map((word, index) => (
                            <span key={index} className="inline-block whitespace-nowrap">
                                {word.split("").map((char, index) => (
                                    <motion.span variants={child} key={index} className="inline-block">
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-14 font-medium leading-relaxed"
                >
                    Master deep work protocols, execute daily neuro-quests, and <span className="text-white italic text-glow">evolve your digital daemon.</span> This is the definitive system upgrade for high-performance human consciousness.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <a
                            href="#offer"
                            className="group relative px-12 py-7 bg-white text-black font-black text-xl rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
                            <span className="relative z-10 group-hover:text-black transition-colors duration-300">UNLOCK PROTOCOL</span>
                            <ChevronRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-500 group-hover:text-black" />
                        </a>
                        <button className="group px-12 py-7 glass font-black text-xl rounded-2xl hover:bg-white/5 transition-all border border-white/10 flex items-center gap-3 relative overflow-hidden">
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyber-secondary via-cyber-primary to-cyber-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative z-10">VIEW SPECS</span>
                            <Shield size={20} className="relative z-10 text-gray-500 group-hover:text-cyber-primary transition-colors" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Hero Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase">Initialize Scroll</span>
                <div className="w-px h-16 bg-gradient-to-b from-cyber-primary to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
