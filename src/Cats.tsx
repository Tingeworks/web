import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"

function Cats() {
    const navigate = useNavigate()

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center relative overflow-hidden">
            {/* Cat-themed background elements */}
            <div className="absolute inset-0">
                {/* Cat paw prints */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-pink-300 text-4xl"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.3, 0.8, 0.3],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        🐾
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border-4 border-pink-300 max-w-2xl mx-4"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className="text-8xl mb-4">🐱</div>
                </motion.div>

                <motion.h1
                    className="text-6xl font-bold text-pink-800 mb-6 font-mono text-center"
                    style={{ fontFamily: 'SUSE Mono, monospace' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Cats
                </motion.h1>

                <motion.p
                    className="text-xl text-pink-700 text-center mb-8 font-mono"
                    style={{ fontFamily: 'SUSE Mono, monospace' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Adorable, playful, perfect
                </motion.p>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <button
                        onClick={() => navigate('/experience')}
                        className="bg-pink-200 border-2 border-pink-400 rounded-full px-8 py-3 text-pink-800 font-mono hover:bg-pink-300 transition-all duration-300"
                        style={{ fontFamily: 'SUSE Mono, monospace' }}
                    >
                        ← Back to Experience
                    </button>
                </motion.div>
            </motion.div>

            {/* Floating cat emojis */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-4xl"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 360, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {['🐱', '😸', '😺', '😻', '🙀', '😿'][i % 6]}
                </motion.div>
            ))}
        </div>
    )
}

export default Cats
