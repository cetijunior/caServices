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
import Particles from "../components/ui/Particles";
import Waves from "../components/ui/Waves";


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
            className="min-h-screen text-white"
        >

            <div className="absolute z-10 inset-0">
                <Particles />
            </div>

            {/* Hero Section with Dynamic Background */}
            <div className={`relative min-h-screen h-[70vh] ${project.bgColor} transition-colors duration-500`}>
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="absolute flex inset-0 bg-black/40"
                >
                    <img
                        src={project.image2}
                        alt={project.title}
                        className="w-full h-full object-scale-down object-center opacity-20 animate-pulse"
                    />

                </motion.div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-6xl  px-6 w-full">
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



            <div className={`max-w-6xl z-0 ${project.bgColor}  mx-auto px-6 py-20`}>

                <div className="grid md:grid-cols-2 gap-16">

                    {/* Left Column */}
                    <div className="space-y-12">
                        {/* About the Project */}
                        <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.2)] border border-gray-700/30 hover:shadow-[0_0_50px_rgba(0,0,0,0.3)] transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl" />
                            <h2 className="relative text-3xl font-bold text-white mb-6 bg-clip-text">
                                About the Project
                            </h2>
                            <p className="relative text-gray-300 leading-relaxed text-lg">{fullDescription}</p>
                        </div>

                        {/* Challenge */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.2)] border border-gray-700/30 group hover:border-blue-500/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-blue-500/5 transition-all duration-500 rounded-2xl" />
                            <h2 className="relative text-3xl font-bold text-white mb-6 bg-clip-text">
                                Challenge
                            </h2>
                            <p className="relative text-gray-300 leading-relaxed text-lg">{challenge}</p>
                        </div>

                        {/* Solution */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.2)] border border-gray-700/30 group hover:border-green-500/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-500/0 group-hover:from-green-500/10 group-hover:to-green-500/5 transition-all duration-500 rounded-2xl" />
                            <h2 className="relative text-3xl font-bold text-white mb-6 bg-clip-text">
                                Solution
                            </h2>
                            <p className="relative text-gray-300 leading-relaxed text-lg">{solution}</p>
                        </div>

                        {/* Features */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.2)] border border-gray-700/30 group hover:border-purple-500/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-purple-500/5 transition-all duration-500 rounded-2xl" />
                            <h2 className="relative text-3xl font-bold text-white mb-6 bg-clip-text">
                                Features
                            </h2>
                            <ul className="relative space-y-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start space-x-3 group/item">
                                        <span className="mt-1.5 h-2 w-2 rounded-full bg-purple-400 group-hover/item:bg-purple-300 transition-colors" />
                                        <span className="text-gray-300 text-lg group-hover/item:text-white transition-colors">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technologies */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.2)] border border-gray-700/30 group hover:border-yellow-500/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-500/0 group-hover:from-yellow-500/10 group-hover:to-yellow-500/5 transition-all duration-500 rounded-2xl" />
                            <h2 className="relative text-3xl font-bold text-white mb-6 bg-clip-text">
                                Technologies
                            </h2>
                            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-semibold text-blue-400">Frontend</h3>
                                    <ul className="space-y-3">
                                        {techStack.frontend.map((tech, index) => (
                                            <li key={index} className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                                                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                                                <span>{tech}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-semibold text-green-400">Backend</h3>
                                    <ul className="space-y-3">
                                        {techStack.backend.map((tech, index) => (
                                            <li key={index} className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                                                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                                <span>{tech}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-semibold text-purple-400">Infrastructure</h3>
                                    <ul className="space-y-3">
                                        {techStack.infrastructure.map((tech, index) => (
                                            <li key={index} className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                                                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                                                <span>{tech}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>






                    {/* Right Column */}
                    <div className="relative">
                        <div className="sticky top-8 md:top-20 space-y-8">
                            {/* Project Image */}
                            <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-4 shadow-[0_0_40px_rgba(0,0,0,0.2)] group hover:shadow-[0_0_60px_rgba(0,0,0,0.3)] transition-all duration-500 ${project.bgColor}`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                                <img
                                    src={project.image2}
                                    alt={project.title}
                                    className="relative w-full h-auto object-scale-down rounded-xl"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-4">
                                <a
                                    href={project.links?.live || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative overflow-hidden w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 group hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 group-hover:translate-x-full transition-transform duration-500" />
                                    <span className="relative">View Live Project</span>
                                    <ArrowUpRight className="relative w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>

                                <button className="relative overflow-hidden w-full px-6 py-4 bg-gray-800 text-white rounded-xl font-medium flex items-center justify-center gap-2 group hover:bg-gray-700 transition-all duration-300">
                                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/5 group-hover:translate-x-full transition-transform duration-500" />
                                    <ArrowLeft className="relative w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                    <span className="relative">Back to Projects</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Metrics */}
                <div className="relative my-20 overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.2)] border border-gray-700/30 group hover:border-pink-500/20 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-pink-500/0 group-hover:from-pink-500/10 group-hover:to-pink-500/5 transition-all duration-500 rounded-2xl" />
                    <h2 className="relative text-3xl font-bold mb-8 bg-gradient-to-r from-pink-300 to-pink-100 bg-clip-text text-transparent">Metrics</h2>
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(metrics).map(([key, value]) => (
                            <div key={key} className="group/metric bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 border border-gray-700/30 hover:border-gray-600/30">
                                <h3 className="text-2xl font-semibold text-white mb-2 group-hover/metric:text-gray-200 transition-colors">{key}</h3>
                                <p className="text-gray-400 text-lg group-hover/metric:text-gray-300 transition-colors">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div >
    );
};

export default ProjectDetails;