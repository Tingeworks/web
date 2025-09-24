import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"
import { ChevronLeft } from "lucide-react"

const experienceItems = [
    {
        id: 1,
        title: "Glass",
        description: "Transparent, elegant, modern",
        color: "bg-blue-100",
        textColor: "text-blue-800"
    },
    {
        id: 2,
        title: "Flat",
        description: "Clean, minimal, focused",
        color: "bg-green-100",
        textColor: "text-green-800"
    },
    {
        id: 3,
        title: "Gradients",
        description: "Smooth, vibrant, dynamic",
        color: "bg-purple-100",
        textColor: "text-purple-800"
    },
    {
        id: 4,
        title: "Cats",
        description: "Adorable, playful, perfect",
        color: "bg-pink-100",
        textColor: "text-pink-800"
    }
]

function Experience() {
    const navigate = useNavigate()

    const handleItemClick = (title: string) => {
        const route = title.toLowerCase()
        navigate(`/experience/${route}`)
    }

    return (
        <div className="h-screen w-screen overflow-hidden relative">
            {/* Back Button */}
            <motion.button
                onClick={() => navigate('/')}
                className="absolute top-6 left-6 z-50 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
            </motion.button>
            {/* Desktop: 2x2 Grid */}
            <div className="hidden md:grid md:grid-cols-2 md:grid-rows-2 h-full">
                {experienceItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`${item.color} flex flex-col items-center justify-center p-8 cursor-pointer hover:opacity-90 transition-opacity duration-300`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        onClick={() => handleItemClick(item.title)}
                    >
                        <canvas
                            className="w-full h-full absolute inset-0"
                            style={{ background: 'transparent' }}
                        />
                        <div className="relative z-10">
                            <h2 className={`text-4xl font-bold ${item.textColor} mb-4 font-mono`} style={{ fontFamily: 'SUSE Mono, monospace' }}>
                                {item.title}
                            </h2>
                            <p className={`text-lg ${item.textColor} text-center font-mono`} style={{ fontFamily: 'SUSE Mono, monospace' }}>
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mobile: Stacked */}
            <div className="md:hidden flex flex-col h-full">
                {experienceItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`${item.color} flex flex-col items-center justify-center p-6 flex-1 relative cursor-pointer hover:opacity-90 transition-opacity duration-300`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        onClick={() => handleItemClick(item.title)}
                    >
                        <canvas
                            className="w-full h-full absolute inset-0"
                            style={{ background: 'transparent' }}
                        />
                        <div className="relative z-10">
                            <h2 className={`text-3xl font-bold ${item.textColor} mb-3 font-mono`} style={{ fontFamily: 'SUSE Mono, monospace' }}>
                                {item.title}
                            </h2>
                            <p className={`text-base ${item.textColor} text-center font-mono`} style={{ fontFamily: 'SUSE Mono, monospace' }}>
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Experience
