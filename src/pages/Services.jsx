import React from "react";
import { motion } from "framer-motion";
import { Globe, Database, Code, Ruler } from "lucide-react";

const services = [
    {
        title: "Software Development",
        icon: <Code className="w-10 h-10 text-blue-400 group-hover:text-blue-500 transition-all duration-300" />,
        description: "Custom software solutions tailored to your business needs with cutting-edge technology.",
    },
    {
        title: "Software Upgrade Services",
        icon: <Globe className="w-10 h-10 text-teal-400 group-hover:text-teal-500 transition-all duration-300" />,
        description: "Upgrade legacy systems with modern technology while ensuring smooth transitions and better performance.",
    },
    {
        title: "Data Migration Services",
        icon: <Database className="w-10 h-10 text-yellow-400 group-hover:text-yellow-500 transition-all duration-300" />,
        description: "Seamless data migration solutions ensuring zero data loss and minimal downtime.",
    },
    {
        title: "Software Architecture",
        icon: <Ruler className="w-10 h-10 text-purple-400 group-hover:text-purple-500 transition-all duration-300" />,
        description: "Designing scalable, modular, and future-proof architectures that power the next generation of applications.",
    },
];

const Services = () => {
    return (
        <section className="relative bg-black py-20 px-6">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-80"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto text-center">
                {/* Section Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-extrabold text-white tracking-wide"
                >
                    Our Services
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-gray-400 mt-3 text-lg"
                >
                    Explore our range of services, from Software Development to Data Migration.
                </motion.p>

                {/* Services Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative flex items-center p-6 bg-gray-900/80 backdrop-blur-md rounded-xl shadow-lg hover:bg-gray-800/90 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="flex-shrink-0 p-4 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-all duration-300">
                                {service.icon}
                            </div>

                            {/* Text Content */}
                            <div className="ml-6">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-all duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 group-hover:text-white transition-all duration-300">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
