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
            {/* Services Section */}
            <section className="bg-black py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-white text-center mb-16"
                    >
                        Our Services
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="group relative p-6  rounded-2xl bg-gray-900/30 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300"
                            >
                                <div className="mb-4 p-3 rounded-lg bg-blue-500/10 w-fit">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {service.description}
                                </p>
                                <motion.div
                                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                                    whileHover={{ x: 5 }}
                                >
                                    Read more <ArrowRight className="ml-2 w-4 h-4" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack Section */}
            <section className="bg-black py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-gray-400 mb-2">OUR TECHNOLOGY STACK</h3>
                        <h2 className="text-3xl font-bold text-white">
                            WHY YOU CHOOSE OUR PLUGIN
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="aspect-square hover:scale-110 flex flex-col items-center justify-center p-6 rounded-xl bg-gray-900/30 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 group"
                            >
                                {tech.icon}
                                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesAndTechStack;
