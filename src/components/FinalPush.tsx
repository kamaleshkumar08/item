import { motion } from 'framer-motion';
import { Rocket, ShieldAlert, Zap, ArrowRight } from 'lucide-react';

const questions = [
    { q: "Is this a subscription?", a: "No. The ₹9 Genesis Access gives you lifetime logic updates and full system access." },
    { q: "Do I need special equipment?", a: "No. The Protocol is a software framework and mental architecture that runs on your current hardware." },
    { q: "Can I cancel my initiation?", a: "Once the logic is deployed to your neural path, there is no undoing the progression." }
];

const FinalPush = () => {
    return (
        <section className="py-32 relative bg-grid">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase italic">
                                Final <br />
                                <span className="text-cyber-purple">Verification</span>
                            </h2>
                            <p className="text-gray-400 text-xl font-medium max-w-lg">Before you initiate, ensure your parameters meet the system requirements for total ascension.</p>
                        </motion.div>

                        <div className="space-y-6">
                            {questions.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass p-6 rounded-2xl border-white/5"
                                >
                                    <h4 className="font-black text-sm uppercase tracking-widest text-cyber-purple mb-2 flex items-center gap-2">
                                        <ShieldAlert size={14} /> {item.q}
                                    </h4>
                                    <p className="text-gray-500 text-sm font-medium">{item.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-12 md:p-20 rounded-[50px] border-cyber-purple/20 bg-cyber-purple/5 text-center relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-cyber-purple/5 blur-[80px] -z-10 group-hover:bg-cyber-purple/10 transition-colors" />

                        <Zap size={64} className="text-cyber-purple mx-auto mb-10 animate-pulse" />

                        <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic leading-none">
                            Last Chance <br />
                            <span className="text-white text-glow">Genesis Node</span>
                        </h3>

                        <p className="text-gray-400 mb-12 font-medium">The public tier price of ₹1,999 will be enforced once the current block reaches capacity.</p>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0,242,255,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full px-12 py-8 bg-white text-black font-black text-2xl rounded-2xl flex items-center justify-center gap-4 group transition-all"
                        >
                            <Rocket size={32} />
                            INITIATE NOW
                            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </motion.button>

                        <div className="mt-8 flex justify-center gap-4">
                            <div className="px-3 py-1 bg-cyber-purple/10 rounded-lg text-cyber-purple text-[10px] font-black uppercase tracking-widest">
                                SSL Secured
                            </div>
                            <div className="px-3 py-1 bg-cyber-purple/10 rounded-lg text-cyber-purple text-[10px] font-black uppercase tracking-widest">
                                Lifetime Access
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FinalPush;
