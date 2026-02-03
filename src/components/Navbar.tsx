import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    const borderGlow = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255, 255, 255, 0.05)", "rgba(57, 255, 20, 0.4)"]
    );

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-center p-6 outline-none pointer-events-none">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                style={{ borderColor: borderGlow }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`glass px-8 py-3 rounded-full flex items-center gap-8 pointer-events-auto transition-all duration-500 ${isScrolled ? 'shadow-[0_0_30px_rgba(57,255,20,0.2)]' : ''}`}
            >
                <a href="#" className="text-white font-bold text-xl tracking-tighter group">
                    ASCENSION<span className="text-cyber-primary group-hover:text-cyber-secondary transition-colors duration-300 font-light">PROTOCOL</span>
                </a>
                <div className="hidden md:flex items-center gap-6">
                    <a href="#features" className="text-sm font-medium text-gray-400 hover:text-cyber-primary transition-colors">Features</a>
                    <a href="#offer" className="text-sm font-medium text-gray-400 hover:text-cyber-secondary transition-colors">Pricing</a>
                    <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About</a>
                </div>
                <button className="relative group overflow-hidden bg-white text-black px-6 py-2 rounded-full text-sm font-black transition-all active:scale-95">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">Join Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
            </motion.div>
        </nav>
    );
};

export default Navbar;
