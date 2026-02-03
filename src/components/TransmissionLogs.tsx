import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const logs = [
    {
        user: "Protocol_Alpha",
        rank: "Lvl 89 Awakened",
        text: "The Focus Sanctum changed everything. I stopped 'working' and started executing. My output tripled in the first 30-day arc.",
        date: "TRANS_LOG_0124"
    },
    {
        user: "Subject_Zero",
        rank: "Lvl 72 Disciplined",
        text: "I was addicted to distraction. The Protocol gave me the neural shielding I needed. The ₹9 entrance fee is a joke for this value.",
        date: "TRANS_LOG_4482"
    },
    {
        user: "Neural_Architect",
        rank: "Lvl 95 Elite",
        text: "Real-world gamification. Finally, an app that focuses on execution rather than just tracking. The Rival System keeps me honest.",
        date: "TRANS_LOG_9931"
    }
];

const TransmissionLogs = () => {
    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic">
                        Transmission <span className="text-cyber-purple">Logs</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto font-medium">Direct feedback from verified Protocol subjects.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {logs.map((log, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 md:p-12 rounded-[40px] flex flex-col justify-between group hover:border-cyber-purple/30 transition-all"
                        >
                            <div className="mb-10">
                                <Quote size={40} className="text-cyber-purple/20 mb-6 group-hover:text-cyber-purple/40 transition-colors" />
                                <p className="text-xl font-medium leading-relaxed italic text-gray-200">
                                    "{log.text}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                                <div className="w-12 h-12 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 flex items-center justify-center text-cyber-purple font-black text-xs">
                                    {log.user[0]}
                                </div>
                                <div>
                                    <h4 className="font-black text-sm uppercase tracking-widest">{log.user}</h4>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-bold text-cyber-purple">{log.rank}</span>
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={8} className="fill-cyber-purple text-cyber-purple" />)}
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto text-[8px] font-mono text-gray-600 tracking-tighter">
                                    {log.date}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TransmissionLogs;
