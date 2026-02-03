import { motion } from 'framer-motion';
import { Activity, Zap, Shield, Target, Flame } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const stats = [
    { label: "Focus Power", value: 85, color: "var(--color-cyber-primary)", icon: <Target size={16} /> },
    { label: "Discipline", value: 92, color: "var(--color-cyber-secondary)", icon: <Shield size={16} /> },
    { label: "Consistency", value: 78, color: "var(--color-cyber-white)", icon: <Flame size={16} /> },
    { label: "Physical XP", value: 64, color: "var(--color-cyber-primary)", icon: <Zap size={16} /> },
];

const SystemVisualizer = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate progress bars
                    animate('.stat-bar', {
                        width: (el: any) => el.getAttribute('data-value') + '%',
                        delay: stagger(100),
                        duration: 2000,
                        easing: 'easeOutElastic(1, .5)'
                    });

                    // Animate text values
                    animate('.stat-value', {
                        opacity: [0, 1],
                        translateY: [10, 0],
                        delay: stagger(100),
                        duration: 800,
                        easing: 'easeOutExpo'
                    });

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 relative bg-cyber-black/50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-[0.9]">
                            NEURAL <br />
                            <span className="text-cyber-primary text-glow">METRICS</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-medium max-w-lg">
                            Your progress is quantified across multiple dimensions. Monitor your discipline decay and optimize your neural output.
                        </p>

                        <div className="space-y-6 max-w-md">
                            {stats.map((stat, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-gray-300">
                                            {stat.icon} {stat.label}
                                        </div>
                                        <span className="text-xs font-black text-white"><span className="stat-value">{stat.value}</span>%</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                                        <div
                                            data-value={stat.value}
                                            style={{ backgroundColor: stat.color, width: '0%' }}
                                            className="h-full shadow-[0_0_10px_rgba(255,255,255,0.2)] stat-bar"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square flex items-center justify-center"
                    >
                        {/* The "Daemon" placeholder visual */}
                        <div className="absolute inset-0 bg-cyber-primary/5 rounded-full blur-[120px] animate-pulse" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-[1px] border-white/5 rounded-full border-dashed"
                        />

                        <div className="relative w-64 h-64 glass rounded-[40px] flex items-center justify-center rotate-45 border-cyber-primary/20">
                            <div className="relative -rotate-45 flex flex-col items-center">
                                <Activity size={80} className="text-cyber-primary animate-pulse mb-4" />
                                <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase italic">Daemon Status: Active</span>
                                <span className="text-[8px] font-bold text-cyber-primary/60 mt-2 uppercase">Lvl 42 Awakened</span>
                            </div>
                        </div>

                        {/* Orbiting points */}
                        {[
                            { deg: 0, color: "bg-cyber-blue" },
                            { deg: 90, color: "bg-cyber-silver" },
                            { deg: 180, color: "bg-cyber-white" },
                            { deg: 270, color: "bg-cyber-blue" }
                        ].map((orbit, i) => (
                            <motion.div
                                key={i}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                                className="absolute w-full h-full"
                                style={{ transform: `rotate(${orbit.deg}deg)` }}
                            >
                                <div className={`w-2 h-2 rounded-full ${orbit.color} absolute top-0 left-1/2 -translate-x-1/2 blur-[2px]`} />
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SystemVisualizer;
