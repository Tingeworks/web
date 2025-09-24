import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"

function Glass() {
    const navigate = useNavigate()

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
            {/* Glass morphism background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-indigo-200/20 backdrop-blur-sm" />

            {/* Glass card */}
            <motion.div
                className="relative z-10 bg-white/20 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/30 max-w-2xl mx-4"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-6xl font-bold text-blue-800 mb-6 font-mono text-center"
                    style={{ fontFamily: 'SUSE Mono, monospace' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Glass
                </motion.h1>

                <motion.p
                    className="text-xl text-blue-700 text-center mb-8 font-mono"
                    style={{ fontFamily: 'SUSE Mono, monospace' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Transparent, elegant, modern
                </motion.p>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <button
                        onClick={() => navigate('/experience')}
                        className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-full px-8 py-3 text-blue-800 font-mono hover:bg-white/40 transition-all duration-300"
                        style={{ fontFamily: 'SUSE Mono, monospace' }}
                    >
                        ← Back to Experience
                    </button>
                </motion.div>
            </motion.div>

            {/* Floating glass elements */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                    style={{
                        width: Math.random() * 100 + 50,
                        height: Math.random() * 100 + 50,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    )
}

export default Glass
