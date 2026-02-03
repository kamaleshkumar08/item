import { motion } from 'framer-motion';
import { Rocket, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
// @ts-ignore
import { animate, stagger, createTimeline } from 'animejs';

const Offer = () => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const tl = createTimeline({
                        defaults: {
                            ease: 'easeOutExpo',
                            duration: 1200
                        }
                    });

                    tl.add('.offer-item', {
                        translateY: [50, 0],
                        opacity: [0, 1],
                        delay: stagger(100)
                    })
                        .add('.price-digit', {
                            scale: [0, 1],
                            rotate: [15, 0],
                            delay: stagger(100),
                            ease: 'easeOutElastic(1, .6)'
                        }, '-=800');

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (cardRef.current) observer.observe(cardRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section id="offer" className="py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div ref={cardRef} className="max-w-5xl mx-auto glass rounded-[50px] p-8 md:p-20 text-center relative border-white/10 overflow-hidden">
                    {/* Accent decoration */}
                    {/* Accent decoration */}
                    {/* Accent decoration */}
                    {/* Accent decoration */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyber-primary opacity-5 blur-[100px] rounded-full" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyber-secondary opacity-5 blur-[100px] rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-cyber-primary/5 via-transparent to-cyber-secondary/5 pointer-events-none" />

                    <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.95] tracking-tighter offer-item opacity-0">
                        BREAK THE <br />
                        <span className="text-cyber-primary italic">CYCLES.</span>
                    </h2>

                    <p className="text-gray-400 text-xl mb-16 max-w-2xl mx-auto font-medium offer-item opacity-0">
                        Join 4,200+ high-performers who have already initiated the Protocol. This is not a course. This is an upgrade.
                    </p>

                    <div className="flex flex-col items-center gap-12">
                        <motion.div
                            whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                            className="relative group transition-transform duration-500"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-primary rounded-[40px] blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
                            <div className="relative glass-gradient bg-cyber-black/40 border border-white/10 px-16 py-12 rounded-[40px] flex flex-col items-center overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-secondary/10 blur-3xl" />
                                <span className="text-gray-500 line-through text-2xl font-black mb-4 tracking-tight offer-item opacity-0">₹1,999.00</span>
                                <div className="flex items-start offer-item opacity-0">
                                    <span className="text-4xl font-black mt-4 text-cyber-secondary mr-2 price-digit">₹</span>
                                    <span className="text-[12rem] font-black tracking-tighter text-white leading-none drop-shadow-[0_0_30px_rgba(240,240,240,0.3)] price-digit">9</span>
                                </div>
                                <motion.div
                                    animate={{
                                        opacity: [1, 0.5, 1],
                                        scale: [1, 1.05, 1],
                                        boxShadow: ["0 0 20px rgba(57,255,20,0.2)", "0 0 40px rgba(57,255,20,0.5)", "0 0 20px rgba(57,255,20,0.2)"]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="bg-cyber-primary text-black px-6 py-2 rounded-xl text-lg font-black mt-6 uppercase tracking-widest italic"
                                >
                                    Priority Signal: 99% OFF
                                </motion.div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left w-full max-w-3xl border-t border-white/5 pt-12">
                            {[
                                { text: "Proprietary Protocols", desc: "Unlock No-Distraction Trials." },
                                { text: "Guidance Systems", desc: "Expert framework for execution." },
                                { text: "Early Access", desc: "Test new arcs before public roll." }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 text-white font-black uppercase text-sm">
                                        <CheckCircle2 size={16} className="text-cyber-neon" />
                                        {item.text}
                                    </div>
                                    <p className="text-gray-500 text-xs font-medium pl-6">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <motion.a
                            href="upi://pay?pa=6383525774@ptaxis&pn=Kamaleshkumar%20Rameshkumar&am=9"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 80px rgba(57, 255, 20, 0.4), 0 0 120px rgba(240, 240, 240, 0.2)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-full md:w-auto px-20 py-8 group overflow-hidden bg-white text-black font-black text-3xl rounded-[25px] flex items-center justify-center gap-4 transition-all offer-item opacity-0 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
                            <Rocket size={32} className="relative z-10 group-hover:text-black transition-colors" />
                            <span className="relative z-10 group-hover:text-black transition-colors">INITIATE ASCENSION</span>
                        </motion.a>
                        <div className="space-y-4 mt-4">
                            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">Secure Checkout • Encrypted Protocol • No questions asked</p>
                            <p className="text-cyber-primary text-xs font-medium bg-cyber-primary/10 border border-cyber-primary/20 px-4 py-2 rounded-lg inline-block">
                                After the payment, the link to the Ascension Protocol will be sent to you within 10 minutes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Offer;
