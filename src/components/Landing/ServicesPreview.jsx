import React from "react";
import { motion } from "framer-motion";
import {
    Code,
    Globe,
    Database,
    ArrowRight,
    Coffee,
    Cpu,
    CodeSquare,
    Smartphone,
    Server,
    Cloud,
    Terminal,
    Box,
    Globe2,
    Apple,
} from "lucide-react";
import SplitText from "../SplitText"; // Animated text split
import SpotlightCard from "../SpotlightCard"; // Interactive cards
import RotatingText from "../ROtatingText";
import Waves from "../Waves";

const services = [
    {
        title: "Software Development",
        icon: <Code className="w-8 h-8 text-blue-400" />,
        description: "Custom software solutions tailored to your business needs with cutting-edge technology."
    },
    {
        title: "Software Upgrade Services",
        icon: <Globe className="w-8 h-8 text-green-400" />,
        description: "Upgrade services to ensure your software is always up-to-date and running efficiently."
    },
    {
        title: "Data Migration Services",
        icon: <Database className="w-8 h-8 text-purple-400" />,
        description: "Seamless data migration ensuring zero data loss and minimal downtime."
    }
];

const techStack = [
    { name: "Java", icon: <Coffee className="w-12 h-12 text-yellow-400" /> },
    { name: "Python", icon: <Cpu className="w-12 h-12 text-green-400" /> },
    { name: "Laravel", icon: <CodeSquare className="w-12 h-12 text-red-400" /> },
    { name: "React Native", icon: <Smartphone className="w-12 h-12 text-blue-400" /> },
    { name: "PHP", icon: <Server className="w-12 h-12 text-indigo-400" /> },
    { name: "Android", icon: <Cloud className="w-12 h-12 text-green-500" /> },
    { name: "JavaScript", icon: <Terminal className="w-12 h-12 text-yellow-400" /> },
    { name: "Swift", icon: <Apple className="w-12 h-12 text-white" /> },
    { name: "Node.js", icon: <Box className="w-12 h-12 text-green-400" /> },
    { name: "GraphQL", icon: <Globe2 className="w-12 h-12 text-pink-400" /> },
];

const ServicesAndTechStack = () => {
    return (
        <>
            {/* 🚀 Services Section */}
            <section className="relative bg-black py-24 px-4 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-bold text-white text-center mb-16"
                    >
                        <div className="flex items-center justify-center ">
                            Our Premium
                            <span className="ml-4 text-blue-400">
                                <RotatingText
                                    texts={['Services', 'Skills', 'Talents', 'Capabilities']}
                                    mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                                    staggerFrom={"last"}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={2000}
                                /></span>
                        </div>


                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        {services.map((service, index) => (
                            <SpotlightCard key={index} className="p-8 bg-gray-900/50 rounded-2xl backdrop-blur-md group transition-all duration-300 hover:bg-gray-800/50">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="flex flex-col items-start"
                                >

                                    <Waves
                                        lineColor="#ffffff30"
                                        className="-z-10"
                                    />

                                    <div className="mb-6 p-4 rounded-xl bg-blue-500/10">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-all">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6">
                                        {service.description}
                                    </p>
                                    <motion.div
                                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                                        whileHover={{ x: 5 }}
                                    >
                                        Read more <ArrowRight className="ml-2 w-4 h-4" />
                                    </motion.div>
                                </motion.div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🌟 Technology Stack Section */}
            <section className="relative bg-black py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-gray-400 mb-2 uppercase tracking-widest text-sm">
                            OUR TECHNOLOGY STACK
                        </h3>
                        <SplitText className="text-4xl font-bold text-white">
                            Why Choose <span className="text-blue-400">Our Expertise?</span>
                        </SplitText>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -15, scale: 1.1, }}
                                transition={{ duration: 0.1 }}
                                className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                <div className="mb-4 p-3 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                    {tech.icon}
                                </div>
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-lg font-medium text-gray-300 group-hover:text-white transition-all"
                                >
                                    <span className="group-hover:text-cyan-500">
                                        {tech.name}
                                    </span>
                                </motion.span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesAndTechStack;
