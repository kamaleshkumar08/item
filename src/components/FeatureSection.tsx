import { motion } from 'framer-motion';
import { Ghost, Sword, Trophy, Users, Calendar, Timer } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const features = [
    {
        icon: <Timer />,
        title: "Focus Sanctum",
        color: "text-cyber-primary",
        glow: "shadow-cyber-primary/20",
        accent: "bg-cyber-primary/20",
        description: "Deploy a high-stakes focus environment. Every hour of deep work quantifies your progress, feeding the growth of your personal Daemon avatar."
    },
    {
        icon: <Sword />,
        title: "Quest Board",
        color: "text-cyber-secondary",
        glow: "shadow-cyber-secondary/20",
        accent: "bg-cyber-secondary/20",
        description: "Standardized missions across physical, cognitive, and creative domains. Earn XP through tangible daily progress and domain mastery."
    },
    {
        icon: <Ghost />,
        title: "Live Boss Raids",
        color: "text-cyber-primary",
        glow: "shadow-cyber-primary/20",
        accent: "bg-cyber-primary/20",
        description: "Scale your output alongside 1,000+ protocol users. Sync your focus blocks to collective defeat abstract manifestations of procrastination."
    },
    {
        icon: <Users />,
        title: "Global Hierarchy",
        color: "text-white",
        glow: "shadow-white/20",
        accent: "bg-white/20",
        description: "Ascend the ranks based on net execution density. Direct competition with fellow subjects in weekly discipline-driven leaderboards."
    },
    {
        icon: <Calendar />,
        title: "Tactical Campaigns",
        color: "text-cyber-primary",
        glow: "shadow-cyber-primary/20",
        accent: "bg-cyber-primary/20",
        description: "Unlock specialized 30-day arcs. From Dopamine Detoxes to 100-Hour Focus Sprints, choose your path of transformation."
    },
    {
        icon: <Trophy />,
        title: "Neural Economy",
        color: "text-cyber-secondary",
        glow: "shadow-cyber-secondary/20",
        accent: "bg-cyber-secondary/20",
        description: "Exchange your earned performance metrics for exclusive system upgrades, cosmetic daemon tiers, and early access protocols."
    }
];

const FeatureSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animate('.feature-card', {
                        translateY: [100, 0],
                        opacity: [0, 1],
                        scale: [0.9, 1],
                        delay: stagger(150),
                        easing: 'easeOutElastic(1, .8)',
                        duration: 1500
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">THE CORE SYSTEMS</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">A comprehensive architecture for total self-mastery.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                rotateX: 10,
                                rotateY: -10,
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                            style={{ transformStyle: "preserve-3d" }}
                            className={`glass p-10 rounded-[30px] transition-all group relative overflow-hidden cursor-default feature-card opacity-0 hover:${feature.glow.replace('shadow', 'border')}`}
                        >
                            <div className={`absolute -right-4 -top-4 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:${feature.accent} transition-colors duration-500`} />

                            <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:${feature.accent} transition-all border border-white/5 ${feature.color}`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter group-hover:text-white transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
                                {feature.description}
                            </p>

                            {/* Decorative line */}
                            <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${feature.color.replace('text', 'bg')}`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
