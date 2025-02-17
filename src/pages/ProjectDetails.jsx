import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Calendar,
    Tag,
    ArrowLeft,
    ArrowUpRight,
} from "lucide-react";

import { projects } from "../data/projectsData";


const ProjectDetails = () => {
    const { projectName } = useParams();
    const location = useLocation();
    const project = location.state;
    const navigate = useNavigate();




    if (!project) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen flex flex-col items-center justify-center bg-black text-white"
            >
                <div className="text-center space-y-6">
                    <h2 className="text-4xl font-bold">Project Not Found</h2>
                    <p className="text-gray-400">The project you're looking for doesn't exist or has been moved.</p>
                    <button
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto group"
                        onClick={() => navigate("/")}
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Return to Projects
                    </button>
                </div>
            </motion.div>
        );
    }

    // Default values for missing properties
    const {
        fullDescription = "No description available.",
        challenge = "No challenge details available.",
        solution = "No solution details available.",
        features = [],
        techStack = {
            frontend: [],
            backend: [],
            infrastructure: [],
        },
        metrics = {},
    } = project;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen bg-black text-white"
        >
            {/* Hero Section with Dynamic Background */}
            <div className={`relative h-[70vh] ${project.bgColor} transition-colors duration-500`}>
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-black/40"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center opacity-40"
                    />
                </motion.div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-6xl mx-auto px-6 w-full">
                        <motion.div
                            variants={itemVariants}
                            className="space-y-6"
                        >
                            {/* Tags */}
                            <div className="flex flex-wrap gap-3">
                                {project.tags.map((tag, index) => (
                                    <motion.span
                                        key={tag}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Title */}
                            <motion.h1
                                variants={itemVariants}
                                className="text-6xl md:text-7xl font-bold tracking-tight"
                            >
                                {project.title}
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                variants={itemVariants}
                                className="text-xl md:text-2xl text-gray-300 max-w-2xl"
                            >
                                {project.description}
                            </motion.p>

                            {/* Year */}
                            <motion.div
                                variants={itemVariants}
                                className="flex items-center gap-2 text-gray-400"
                            >
                                <Calendar className="w-5 h-5" />
                                <span>{project.year}</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Project Details Section */}
            <div className="max-w-6xl mx-auto px-6 py-24">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-16"
                >
                    {/* Left Column */}
                    <motion.div variants={itemVariants} className="space-y-12">
                        {/* About the Project */}
                        <motion.div variants={itemVariants} className="glassmorphism-card">
                            <h2 className="section-title">About the Project</h2>
                            <p className="section-text">{fullDescription}</p>
                        </motion.div>

                        {/* Challenge */}
                        <motion.div variants={itemVariants} className="glassmorphism-card">
                            <h2 className="section-title">Challenge</h2>
                            <p className="section-text">{challenge}</p>
                        </motion.div>

                        {/* Solution */}
                        <motion.div variants={itemVariants} className="glassmorphism-card">
                            <h2 className="section-title">Solution</h2>
                            <p className="section-text">{solution}</p>
                        </motion.div>

                        {/* Features */}
                        <motion.div variants={itemVariants} className="glassmorphism-card">
                            <h2 className="section-title">Features</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {features.map((feature, index) => (
                                    <motion.li key={index} whileHover={{ scale: 1.05 }}>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Technologies */}
                        <motion.div variants={itemVariants} className="glassmorphism-card">
                            <h2 className="section-title">Technologies</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-400 mb-3">Frontend</h3>
                                    <ul className="section-text">
                                        {techStack.frontend.map((tech, index) => (
                                            <motion.li key={index} whileHover={{ scale: 1.05 }}>
                                                {tech}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-green-400 mb-3">Backend</h3>
                                    <ul className="section-text">
                                        {techStack.backend.map((tech, index) => (
                                            <motion.li key={index} whileHover={{ scale: 1.05 }}>
                                                {tech}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-purple-400 mb-3">Infrastructure</h3>
                                    <ul className="section-text">
                                        {techStack.infrastructure.map((tech, index) => (
                                            <motion.li key={index} whileHover={{ scale: 1.05 }}>
                                                {tech}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Metrics */}
                        <motion.div variants={itemVariants} className="glassmorphism-card">
                            <h2 className="section-title">Metrics</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {Object.entries(metrics).map(([key, value]) => (
                                    <motion.div
                                        key={key}
                                        className="metric-card"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <h3 className="text-xl font-semibold text-white">{key}</h3>
                                        <p className="text-gray-300">{value}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        variants={itemVariants}
                        className="relative"
                    >
                        <div className="sticky top-8 space-y-8">
                            {/* Project Image */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "tween" }}
                                className={`rounded-2xl overflow-hidden ${project.bgColor} p-2`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-4">
                                <a
                                    href={project.links?.live || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full px-6 py-4 bg-white text-black rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors group"
                                >
                                    View Live Project
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>

                                <button
                                    onClick={() => navigate("/projects")}
                                    className="w-full px-6 py-4 bg-gray-800 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors group"
                                >
                                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                    Back to Projects
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div >
        </motion.div >
    );
};

export default ProjectDetails;