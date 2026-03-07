import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Lock, Unlock } from 'lucide-react';

const ScrollDaemon = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    // Track scroll globally
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            // Limit to max 100%
            setScrollProgress(Math.min(Number(scroll) * 100, 100));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine Daemon Level based on progress
    let level = 1;
    let label = "Initiating...";

    if (scrollProgress >= 90) {
        level = 4;
        label = "MAX POTENTIAL REACHED";
    } else if (scrollProgress >= 60) {
        level = 3;
        label = "Evolving...";
    } else if (scrollProgress >= 30) {
        level = 2;
        label = "Processing Input...";
    }

    // Level-specific styles
    const getLevelClass = () => {
        switch (level) {
            case 4: return "text-cyber-primary shadow-cyber-primary/50 border-cyber-primary scale-110"; // Max level
            case 3: return "text-cyber-light-purple shadow-cyber-primary/20 border-cyber-primary/50";
            case 2: return "text-white shadow-white/5 border-white/20";
            case 1:
            default: return "text-gray-600 shadow-none border-gray-800"; // Low level
        }
    };

    const getCoreAnimation = () => {
        if (level === 4) return "animate-spin-fast";
        if (level === 3) return "animate-spin-slow";
        return "";
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-center pointer-events-none">

            {/* Tooltip for Max Level */}
            {level === 4 && (
                <motion.a
                    href="#offer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-4 px-4 py-2 bg-cyber-primary/10 border border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-black transition-colors duration-300 font-bold text-xs uppercase tracking-widest rounded-lg flex items-center gap-2 pointer-events-auto cursor-pointer"
                >
                    <Unlock size={14} />
                    Save Your Daemon
                </motion.a>
            )}

            {/* The Daemon Icon */}
            <motion.div
                className={`w-20 h-20 rounded-full glass border-2 flex items-center justify-center transition-all duration-700 ease-out relative ${getLevelClass()}`}
                style={{
                    boxShadow: level > 1 ? `0 0 ${level * 15}px currentColor` : 'none'
                }}
            >
                {/* Aura rings for high levels */}
                {level >= 3 && (
                    <div className="absolute inset-0 rounded-full border border-current animate-ping opacity-20" style={{ animationDuration: level === 4 ? '1s' : '2s' }} />
                )}
                {level === 4 && (
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-current blur-2xl opacity-30" />
                )}

                <Hexagon size={40} className={`transition-all duration-500 ${getCoreAnimation()}`} fill={level >= 3 ? "currentColor" : "none"} fillOpacity={0.2} strokeWidth={level === 4 ? 3 : 1} />

                {level < 4 && (
                    <Lock size={12} className="absolute bottom-2 text-gray-500" />
                )}
            </motion.div>

            {/* Stats Panel */}
            <div className="mt-3 bg-black/80 border border-white/10 rounded-lg px-4 py-2 flex flex-col items-center min-w-[140px] pointer-events-auto shadow-2xl backdrop-blur-md">
                <div className="text-[10px] text-gray-500 font-mono mb-1 uppercase tracking-widest">{label}</div>
                <div className="flex items-center gap-3 w-full justify-between">
                    <span className="text-xs font-black text-white">LVL {level}</span>
                    <span className={`text-xs font-bold font-mono ${level === 4 ? "text-cyber-primary animate-pulse" : "text-gray-400"}`}>
                        XP: {scrollProgress.toFixed(0)}%
                    </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                    <div
                        className={`h-full transition-all duration-300 ${level === 4 ? "bg-cyber-primary shadow-[0_0_10px_#39ff14]" : "bg-white/40"}`}
                        style={{ width: `${scrollProgress}%` }}
                    />
                </div>
            </div>

        </div>
    );
};

export default ScrollDaemon;
