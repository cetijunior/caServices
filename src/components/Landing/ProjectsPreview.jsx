import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

const projects = [
    {
        title: "Fintech App",
        image: "/assets/logos/1.png",
        year: "2022",
        category: "Financial Technology",
        description: "Revolutionary banking solution"
    },
    {
        title: "SMIP App",
        image: "/assets/logos/2.png",
        year: "2022",
        category: "IoT Platform",
        description: "Smart city management system"
    },
    {
        title: "E-commerce",
        image: "/assets/logos/3.png",
        year: "2022",
        category: "Online Retail",
        description: "Next-gen shopping experience"
    },
];

const ProjectsPreview = () => {
    const projectRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            projectRefs.current.forEach((ref, index) => {
                if (ref) {
                    const yOffset = window.scrollY * 0.02; // Moves max 10px
                    ref.style.transform = `translateY(${yOffset}px)`;
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <section className="bg-gradient-to-r from-black to-gray-950 py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-100 to-blue-900 bg-clip-text text-transparent mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Transforming ideas into digital excellence through innovative solutions and cutting-edge technology
                        </p>
                    </motion.div>
                </div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-800/50"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">

                                <motion.img
                                    ref={(el) => (projectRefs.current[index] = el)}

                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="relative p-6">
                                {/* Category & Year */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm text-blue-400 font-medium">
                                        {project.category}
                                    </span>
                                    <div className="flex items-center gap-1 text-gray-400">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-sm">{project.year}</span>
                                    </div>
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {project.description}
                                </p>

                                {/* View Project Button */}
                                <div className="flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                                    <span>View Project</span>
                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-blue-500/0 rounded-2xl group-hover:border-blue-500/50 transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPreview;