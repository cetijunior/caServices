import React from "react";
import { motion } from "framer-motion";
import { Globe, Database, Code, ArrowRight } from "lucide-react";

const services = [
    {
        title: "Software Development",
        icon: <Code className="w-8 h-8" />,
        description: "Custom software solutions tailored to your business needs with cutting-edge technology."
    },
    {
        title: "Software Upgrade Services",
        icon: <Globe className="w-8 h-8" />,
        description: "Step confidently into the future with Nebula's cutting-edge software upgrade services. Our experienced professionals diligently ensure that your software solutions stay up-to-date, secure, and optimized for peak performance."
    },
    {
        title: "Data Migration Services",
        icon: <Database className="w-8 h-8" />,
        description: "Seamless data migration solutions ensuring zero data loss and minimal downtime."
    }
];

const techStack = [
    { name: "Java", icon: "/path-to-java-icon.svg" },
    { name: "Python", icon: "/path-to-python-icon.svg" },
    { name: "Laravel", icon: "/path-to-laravel-icon.svg" },
    { name: "React Native", icon: "/path-to-react-native-icon.svg" },
    { name: "PHP", icon: "/path-to-php-icon.svg" },
    { name: "Android", icon: "/path-to-android-icon.svg" },
    { name: "JavaScript", icon: "/path-to-js-icon.svg" },
    { name: "Swift", icon: "/path-to-swift-icon.svg" },
    { name: "Node.js", icon: "/path-to-nodejs-icon.svg" },
    { name: "GraphQL", icon: "/path-to-graphql-icon.svg" },
    { name: "Windows", icon: "/path-to-windows-icon.svg" },
    { name: "Vue.js", icon: "/path-to-vuejs-icon.svg" }
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
                                className="group relative p-6 rounded-2xl bg-gray-900/30 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300"
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

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="aspect-square flex flex-col items-center justify-center p-6 rounded-xl bg-gray-900/30 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 group"
                            >
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300"
                                />
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