import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Globe, Database, Code, Ruler, BrainCircuit, Shield, Cloud, ChevronRight,
} from "lucide-react";
import TiltedCard from "../components/ui/TiltedCard";
import Waves from "../components/ui/Waves";
import FlowingMenu from "../components/ui/FlowingMenu";
import Particles from "../components/ui/Particles";
import InfiniteScroll from "../components/ui/InfiniteScroll";
import SpotlightCard from "../components/ui/SpotlightCard";
import FadeContent from "../components/ui/FadeContent";
import RotatingText from "../components/ui/RotatingText";

const Services = () => {

    const [activeService, setActiveService] = useState(null);


    const containerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const features = [
        "Dynamic tilt effect on hover",
        "Customizable rotation amplitude",
        "Responsive design",
        "Optional overlay content"
    ];


    const coreServices = [
        {
            id: 'ai',
            title: "AI & Machine Learning",
            icon: <BrainCircuit size={32} />,
            color: "from-violet-500 to-purple-600",
            description: "Transform your data into actionable intelligence",
            capabilities: [
                "Predictive Analytics",
                "Natural Language Processing",
                "Computer Vision",
                "Automated Decision Systems"
            ]
        },
        {
            id: 'security',
            title: "Enterprise Security",
            icon: <Shield size={32} />,
            color: "from-emerald-500 to-green-600",
            description: "Protect your digital assets with military-grade security",
            capabilities: [
                "Zero Trust Architecture",
                "Threat Detection & Response",
                "Security Auditing",
                "Compliance Management"
            ]
        },
        {
            id: 'cloud',
            title: "Cloud Architecture",
            icon: <Cloud size={32} />,
            color: "from-blue-500 to-cyan-600",
            description: "Scale your infrastructure with confidence",
            capabilities: [
                "Multi-Cloud Strategy",
                "Container Orchestration",
                "Serverless Computing",
                "High Availability Systems"
            ]
        }
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
        { content: "Custom Software Solutions ✅" },
        { content: "Scalable Cloud Systems ✅" },
        { content: "AI & Machine Learning ✅" },
        { content: "Cybersecurity & Data Protection ✅" },
        { content: "E-commerce Solutions ✅" },
        { content: "Blockchain & Web3 Development ✅" },
    ];

    return (
        <div className="bg-black min-h-screen w-full">
            {/* Hero Section */}




            {/* Infinite Scroll Showcase */}
            <section className="py-24 px-6 bg-gradient-to-t from-gray-900 to-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full mx-auto container p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50 shadow-lg"
                        >
                            {/* Header Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.6 } }}
                                className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20"
                            >
                                <span className="text-sm font-medium text-blue-400">
                                    Scrolling Innovation
                                </span>
                            </motion.div>

                            {/* Title */}
                            <motion.h2
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }}
                                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4"
                            >
                                Infinite Scroll Component
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } }}
                                className="max-w-lg text-lg text-gray-400 mb-8 leading-relaxed"
                            >
                                Create engaging content streams with our InfiniteScroll component.
                                Perfect for showcasing continuous content in an elegant way.
                            </motion.p>

                            {/* Features List */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } }}
                                className="space-y-3"
                            >
                                {[
                                    "Smooth automatic scrolling",
                                    "Customizable speed and direction",
                                    "Pause on hover functionality",
                                    "Tilted text effect option"
                                ].map((feature, index) => (
                                    <motion.div
                                        key={feature}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0, transition: { delay: index * 0.1 } }}
                                        className="flex items-center space-x-3"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                        <motion.span
                                            whileHover={{ x: 4 }}
                                            className="text-gray-300 font-medium"
                                        >
                                            {feature}
                                        </motion.span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } }}
                                className="mt-8 pt-8 border-t border-gray-800/50 text-center"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-shadow"
                                >
                                    Explore More
                                </motion.button>
                            </motion.div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1, }}
                        >
                            <div className="lg:h-[34rem] container mx-auto h-full w-full overflow-hidden bg-black shadow-2xl shadow-black rounded-xl">
                                <InfiniteScroll
                                    items={scrollingItems}
                                    isTilted={true}
                                    tiltDirection="left"
                                    autoplay={true}
                                    autoplaySpeed={1}
                                    autoplayDirection="down"
                                    pauseOnHover={true}
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Flowing Menu Showcase */}
            <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full container mx-auto p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50 shadow-lg"
                        >
                            {/* Header Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.6 } }}
                                className="inline-block mb-6 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20"
                            >
                                <span className="text-sm font-medium text-cyan-400">
                                    Dynamic Navigation
                                </span>
                            </motion.div>

                            {/* Title */}
                            <motion.h2
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }}
                                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4"
                            >
                                Flowing Menu Component
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } }}
                                className="max-w-lg text-lg text-gray-400 mb-8 leading-relaxed"
                            >
                                Transform your navigation with our FlowingMenu component.
                                Create fluid, interactive menus that respond to user movement.
                            </motion.p>

                            {/* Features List */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } }}
                                className="space-y-3"
                            >
                                {[
                                    "Smooth flowing animations",
                                    "Image preview capabilities",
                                    "Responsive design",
                                    "Customizable styling"
                                ].map((feature, index) => (
                                    <motion.div
                                        key={feature}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0, transition: { delay: index * 0.1 } }}
                                        className="flex items-center space-x-3"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                        <motion.span
                                            whileHover={{ x: 4 }}
                                            className="text-gray-300 font-medium"
                                        >
                                            {feature}
                                        </motion.span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } }}
                                className="mt-8 pt-8 border-t border-gray-800/50 text-center"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 transition-shadow"
                                >
                                    Explore More
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, }}
                            whileInView={{ opacity: 1, }}
                            className="bg-black p-3 h-1/1 max-h-[40rem] mx-auto container w-full rounded-2xl shadow-2xl shadow-black"
                        >
                            <FlowingMenu
                                items={[
                                    { text: 'Custom Software', image: 'https://picsum.photos/600/400?random=1' },
                                    { text: 'Cloud Solutions', image: 'https://picsum.photos/600/400?random=2' },
                                    { text: 'AI & Data Science', image: 'https://picsum.photos/600/400?random=5' },
                                    { text: 'Cybersecurity', image: 'https://picsum.photos/600/400?random=4' },
                                ]}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* TiltedCard Showcase */}
            <section className="p-8 lg:px-6 bg-gradient-to-t from-gray-900 to-black">

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="w-full mx-auto container lg:mt-0 mt-20  p-8 rounded-2xl bg-gradient-to-br shadow-2xl  from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50"
                        >
                            <motion.div
                                variants={itemVariants}
                                className="inline-block mb-6 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20"
                            >
                                <span className="text-sm font-medium text-purple-400">
                                    Component Showcase
                                </span>
                            </motion.div>

                            <motion.h2
                                variants={itemVariants}
                                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4"
                            >
                                Tilted Card Component
                            </motion.h2>

                            <motion.p
                                variants={itemVariants}
                                className="text-lg text-gray-400 mb-8 leading-relaxed"
                            >
                                Add depth and interactivity to your content with our TiltedCard component.
                                Features smooth animations, hover effects, and customizable overlay content.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="space-y-3"
                            >
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center space-x-3"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                        <motion.span
                                            whileHover={{ x: 4 }}
                                            className="text-gray-300 font-medium"
                                        >
                                            {feature}
                                        </motion.span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="flex items-center justify-center mt-8 pt-8 border-t border-gray-800/50"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-shadow"
                                >
                                    Explore Documentation
                                </motion.button>
                            </motion.div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="w-full mx-auto lg:scale-90 container group lg:mt-0 rounded-2xl bg-gradient-to-br shadow-2xl from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50 relative overflow-hidden"
                        >
                            {/* Glossy Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20 pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-20 pointer-events-none" />

                            <TiltedCard
                                imageSrc="/assets/logos/logo.png"
                                altText="Demo Card"
                                captionText="Interactive Demo"
                                containerHeight="620px"
                                containerWidth="100%"
                                imageHeight="100%"
                                imageWidth="100%"
                                rotateAmplitude={12}
                                scaleOnHover={1.05}
                                displayOverlayContent={true}
                                overlayContent={
                                    <div className="rounded-2xl group-hover:scale-90 group-hover:mt-6 cursor-default group group-hover:shadow-2xl p-6 text-purple-100 bg-gray-900/50 backdrop-blur-2xl shadow-black shadow-lg transition-all duration-300 border border-gray-800/50">
                                        {/* Glossy Overlay for Content */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none rounded-2xl" />
                                        <h3 className="text-2xl font-bold mb-4 relative z-10">Interactive Demo</h3>
                                        <p className="relative z-10">Hover and move your cursor to see the tilt effect in action!</p>
                                    </div>
                                }
                            />
                        </motion.div>
                    </div>
                </div>
            </section>


        </div >
    );
};

export default Services;