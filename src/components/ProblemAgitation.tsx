import { motion } from 'framer-motion';
import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';

const ProblemAgitation = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-black/50 border-y border-cyber-primary/20">
            {/* Background elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyber-primary/50 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyber-primary/50 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-cyber-primary/5 blur-[120px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-primary/50 bg-cyber-primary/10 text-cyber-primary font-bold tracking-widest text-sm mb-8 uppercase"
                    >
                        <AlertTriangle size={16} className="animate-pulse" />
                        Critical System Failure Detected
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black mb-10 tracking-tighter uppercase italic text-white"
                    >
                        You Are Losing <span className="text-cyber-primary text-glow">15 Hours</span> A Week To Cheap Dopamine
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="p-8 rounded-2xl glass border border-red-500/20 bg-red-950/10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50" />
                            <TrendingDown className="text-red-500 mb-4" size={32} />
                            <h3 className="text-xl font-bold text-white mb-2 font-mono uppercase">The Debuff</h3>
                            <p className="text-gray-400 font-medium">Standard to-do lists are failing you. They don't reward the neuro-chemistry of your brain. Every minute spent scrolling is a permanent debuff to your life trajectory.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="p-8 rounded-2xl glass border border-cyber-primary/20 bg-cyber-primary/5 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-cyber-primary/50" />
                            <Clock className="text-cyber-primary mb-4" size={32} />
                            <h3 className="text-xl font-bold text-white mb-2 font-mono uppercase">The Reality Check</h3>
                            <p className="text-gray-400 font-medium">Your competition is already optimizing their focus layers. Without a system engineered for dopamine hacking, you are actively choosing to fall behind in the hierarchy.</p>
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="text-xl text-gray-300 font-medium italic"
                    >
                        "It's not a discipline problem. It's an <span className="text-white font-bold decoration-cyber-primary underline decoration-2 underline-offset-4">architectural failure</span>."
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default ProblemAgitation;
