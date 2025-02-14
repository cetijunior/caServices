import React from "react";
import { motion } from "framer-motion";
import { Globe, Database, Code, Ruler } from "lucide-react";
import TiltedCard from "../components/TiltedCard";
import Dock from "../components/Dock";
import Waves from "../components/Waves";
import FlowingMenu from "../components/FlowingMenu";
import Particles from "../components/Particles";
import InfiniteScroll from "../components/InfiniteScroll";

const Services = () => {
    const dockItems = [
        { icon: <Code size={18} />, label: "Development", onClick: () => console.log("Software Development!") },
        { icon: <Globe size={18} />, label: "Upgrade", onClick: () => console.log("Upgrade Services!") },
        { icon: <Database size={18} />, label: "Migration", onClick: () => console.log("Data Migration!") },
        { icon: <Ruler size={18} />, label: "Architecture", onClick: () => console.log("Software Architecture!") },
    ];

    const services = [
        {
            title: "Software Development",
            icon: <Code className="w-10 h-10 text-blue-400" />,
            description: "We craft high-performance, scalable software tailored to your business.",
            image: "/api/placeholder/600/400"
        },
        {
            title: "Software Upgrade Services",
            icon: <Globe className="w-10 h-10 text-teal-400" />,
            description: "Upgrade your legacy systems with modern, secure, and efficient solutions.",
            image: "/api/placeholder/600/400"
        },
        {
            title: "Data Migration Services",
            icon: <Database className="w-10 h-10 text-yellow-400" />,
            description: "Seamlessly migrate your data with zero downtime and maximum security.",
            image: "/api/placeholder/600/400"
        },
        {
            title: "Software Architecture",
            icon: <Ruler className="w-10 h-10 text-purple-400" />,
            description: "Build a future-proof system with robust, modular, and scalable architecture.",
            image: "/api/placeholder/600/400"
        },
    ];

    const scrollingItems = [
        { content: "Custom Software Solutions" },
        { content: "Scalable Cloud Systems" },
        { content: "AI & Machine Learning" },
        { content: "Cybersecurity & Data Protection" },
        { content: "E-commerce Solutions" },
        { content: "Blockchain & Web3 Development" },
    ];

    return (
        <div className="bg-black min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
                {/* Particles Background */}
                <div className="absolute z-10 inset-0">
                    <Particles
                        particleColors={['#ffffff', '#ffffff']}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        className="w-full h-[100%]"
                    />
                </div>

                {/* Text Content */}
                <div className="relative cursor-default text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-7xl font-extrabold text-white tracking-wide mb-6"
                    >
                        Interactive Component Showcase
                    </motion.h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Explore our collection of stunning, interactive components that power modern web experiences.
                    </p>
                </div>
            </section>


            {/* TiltedCard Showcase */}
            <section className="py-24 px-6 bg-gradient-to-br from-[#00111c] to-violet-300/20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl font-bold text-white">Tilted Card Component</h2>
                            <p className="text-gray-400 text-lg">
                                Add depth and interactivity to your content with our TiltedCard component.
                                Features smooth animations, hover effects, and customizable overlay content.
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li>• Dynamic tilt effect on hover</li>
                                <li>• Customizable rotation amplitude</li>
                                <li>• Responsive design</li>
                                <li>• Optional overlay content</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="items-center bg-black rounded-2xl shadow-2xl shadow-black justify-center w-full mx-auto self-center"
                        >
                            <TiltedCard
                                imageSrc="/assets/logos/logo.png"
                                altText="Demo Card"
                                captionText="Interactive Demo"
                                containerHeight="610px"
                                containerWidth="100%"
                                imageHeight="100%"
                                imageWidth="100%"
                                rotateAmplitude={12}
                                scaleOnHover={1.05}
                                displayOverlayContent={true}
                                overlayContent={
                                    <div className="p-6 bg-black shadow-2xl shadow-black text-white">
                                        <h3 className="text-2xl font-bold mb-4">Interactive Demo</h3>
                                        <p>Hover and move your cursor to see the tilt effect in action!</p>
                                    </div>
                                }
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Infinite Scroll Showcase */}
            <section className="py-24 px-6 bg-gradient-to-tr from-[#00111c] to-violet-300/20">
                <div className="max-w-8xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <div className="h-96 w-full overflow-hidden bg-black shadow-2xl shadow-black rounded-xl">
                                <InfiniteScroll
                                    items={scrollingItems}
                                    isTilted={true}
                                    tiltDirection="left"
                                    autoplay={true}
                                    autoplaySpeed={0.1}
                                    autoplayDirection="down"
                                    pauseOnHover={true}
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl font-bold text-white">Infinite Scroll Component</h2>
                            <p className="text-gray-400 text-lg">
                                Create engaging content streams with our InfiniteScroll component.
                                Perfect for showcasing continuous content in an elegant way.
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li>• Smooth automatic scrolling</li>
                                <li>• Customizable speed and direction</li>
                                <li>• Pause on hover functionality</li>
                                <li>• Tilted text effect option</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Flowing Menu Showcase */}
            <section className="py-24 px-6 bg-gradient-to-br from-[#00111c] to-violet-300/20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl font-bold text-white">Flowing Menu Component</h2>
                            <p className="text-gray-400 text-lg">
                                Transform your navigation with our FlowingMenu component.
                                Create fluid, interactive menus that respond to user movement.
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li>• Smooth flowing animations</li>
                                <li>• Image preview capabilities</li>
                                <li>• Responsive design</li>
                                <li>• Customizable styling</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <FlowingMenu
                                items={[
                                    { link: '#', text: 'Custom Software', image: '/api/placeholder/600/400' },
                                    { link: '#', text: 'Cloud Solutions', image: '/api/placeholder/600/400' },
                                    { link: '#', text: 'AI & Data Science', image: '/api/placeholder/600/400' },
                                    { link: '#', text: 'Cybersecurity', image: '/api/placeholder/600/400' },
                                ]}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <Waves
                    lineColor="#ffffff40"
                    backgroundColor="rgba(0, 0, 0, 0.95)"
                    waveSpeedX={0.03}
                    waveSpeedY={0.02}
                    waveAmpX={35}
                    waveAmpY={25}
                    friction={0.95}
                    tension={0.025}
                    maxCursorMove={80}
                    xGap={24}
                    yGap={40}
                    className="absolute inset-0"
                />
                <div className="relative z-10 text-center px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-white mb-8"
                    >
                        Ready to Build Something Amazing?
                    </motion.h2>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors duration-300"
                    >
                        Get Started Today
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default Services;