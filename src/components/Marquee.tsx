import { motion } from 'framer-motion';

interface MarqueeProps {
    text: string;
    reverse?: boolean;
    speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ text, reverse = false, speed = 20 }) => {
    return (
        <div className="relative flex overflow-x-hidden border-y border-white/5 py-4 bg-cyber-black/50 backdrop-blur-sm z-10">
            <motion.div
                animate={{ x: reverse ? [0, 1000] : [0, -1000] }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-12"
            >
                <span className="text-4xl md:text-6xl font-black italic uppercase text-white/50 tracking-tighter">
                    {Array(10).fill(text).join(' • ')}
                </span>
            </motion.div>
            <motion.div
                animate={{ x: reverse ? [0, 1000] : [0, -1000] }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 left-0 flex whitespace-nowrap gap-12"
                style={{ transform: reverse ? 'translateX(-100%)' : 'translateX(100%)' }}
            >
                <span className="text-4xl md:text-6xl font-black italic uppercase text-white/50 tracking-tighter">
                    {Array(10).fill(text).join(' • ')}
                </span>
            </motion.div>
        </div>
    );
};

export default Marquee;
