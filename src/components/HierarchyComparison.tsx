import { motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';

const HierarchyComparison = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-cyber-dark/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic">
                        The <span className="text-cyber-purple">Ascension</span> Gap
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto font-medium">Most are stuck in the legacy loop. The Protocol is the exit.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
                    {/* Legacy Human */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 md:p-16 rounded-[40px] border-white/5 opacity-50 grayscale hover:grayscale-0 transition-all group"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                                <X size={24} className="text-red-500" />
                            </div>
                            <h3 className="text-3xl font-black uppercase italic tracking-tighter text-gray-400">Legacy Tier</h3>
                        </div>

                        <ul className="space-y-8">
                            {[
                                "Reactive attention spans",
                                "Low-discipline dopamine loops",
                                "Undefined output targets",
                                "Stagnant skill progression",
                                "Fragmented focus periods"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-gray-500 font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Ascended Protocol */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 md:p-16 rounded-[40px] border-cyber-purple/30 relative overflow-hidden group shadow-[0_0_50px_rgba(168,85,247,0.1)]"
                    >
                        <div className="absolute top-0 right-0 p-6">
                            <ArrowRight size={32} className="text-cyber-purple opacity-20 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                        </div>

                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-full bg-cyber-purple/10 flex items-center justify-center border border-cyber-purple/40 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                                <Check size={24} className="text-cyber-purple" />
                            </div>
                            <h3 className="text-3xl font-black uppercase italic tracking-tighter text-white">Ascended Tier</h3>
                        </div>

                        <ul className="space-y-8">
                            {[
                                "Strategic neural shielding",
                                "Peak-state deep work blocks",
                                "Quantified performance data",
                                "Exponential skill acquisition",
                                "Zero-latency execution"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-white font-bold text-glow">
                                    <Check size={18} className="text-cyber-purple" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-16 p-6 rounded-2xl bg-cyber-purple/5 border border-cyber-purple/20 text-center">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyber-purple">System Optimized</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HierarchyComparison;
