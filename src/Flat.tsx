import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"

function Flat() {
    const navigate = useNavigate()

    return (
        <div className="h-screen w-screen bg-green-50 flex items-center justify-center relative overflow-hidden">
            {/* Flat design elements */}
            <div className="absolute inset-0">
                {/* Geometric shapes */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-green-200 rounded-lg transform rotate-12" />
                <div className="absolute top-40 right-32 w-24 h-24 bg-green-300 rounded-full" />
                <div className="absolute bottom-32 left-32 w-40 h-20 bg-green-200 transform -rotate-6" />
                <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-300 transform rotate-45" />
            </div>

            <motion.div
                className="relative z-10 bg-white rounded-2xl p-12 shadow-lg max-w-2xl mx-4 border-4 border-green-200"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-6xl font-bold text-green-800 mb-6 font-mono text-center"
                    style={{ fontFamily: 'SUSE Mono, monospace' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Flat
                </motion.h1>

                <motion.p
                    className="text-xl text-green-700 text-center mb-8 font-mono"
                    style={{ fontFamily: 'SUSE Mono, monospace' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Clean, minimal, focused
                </motion.p>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <button
                        onClick={() => navigate('/experience')}
                        className="bg-green-200 border-2 border-green-400 rounded-lg px-8 py-3 text-green-800 font-mono hover:bg-green-300 transition-all duration-300"
                        style={{ fontFamily: 'SUSE Mono, monospace' }}
                    >
                        ← Back to Experience
                    </button>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Flat
