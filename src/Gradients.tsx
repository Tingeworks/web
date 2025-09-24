import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"

function Gradients() {
    const navigate = useNavigate()

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center relative overflow-hidden">
            {/* Animated gradient background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500"
                animate={{
                    background: [
                        "linear-gradient(45deg, #8B5CF6, #EC4899, #F59E0B)",
                        "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)",
                        "linear-gradient(45deg, #EC4899, #F59E0B, #10B981)",
                        "linear-gradient(45deg, #8B5CF6, #EC4899, #F59E0B)",
                    ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="relative z-10 bg-white/20 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/30 max-w-2xl mx-4"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-6xl font-bold text-white mb-6 font-mono text-center drop-shadow-lg"
                    style={{ fontFamily: 'SUSE Mono, monospace' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Gradients
                </motion.h1>

                <motion.p
                    className="text-xl text-white/90 text-center mb-8 font-mono drop-shadow-md"
                    style={{ fontFamily: 'SUSE Mono, monospace' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Smooth, vibrant, dynamic
                </motion.p>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <button
                        onClick={() => navigate('/experience')}
                        className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-full px-8 py-3 text-white font-mono hover:bg-white/40 transition-all duration-300"
                        style={{ fontFamily: 'SUSE Mono, monospace' }}
                    >
                        ← Back to Experience
                    </button>
                </motion.div>
            </motion.div>

            {/* Floating gradient orbs */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-gradient-to-r from-pink-400 to-purple-500 opacity-60"
                    style={{
                        width: Math.random() * 150 + 50,
                        height: Math.random() * 150 + 50,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        x: [0, Math.random() * 100 - 50, 0],
                        y: [0, Math.random() * 100 - 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    )
}

export default Gradients
