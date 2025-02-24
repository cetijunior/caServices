import React, { useEffect, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, ArrowLeft, ArrowUpRight, ExternalLink, Github, Share2 } from "lucide-react";

import Particles from "../components/ui/Particles";
import Waves from "../components/ui/Waves";

const ProjectDetails = () => {
    const { projectName } = useParams();
    const location = useLocation();
    const project = location.state;
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    const navigateToProjects = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling effect
        });

        setTimeout(() => {
            navigate("/projects"); // Navigate after scrolling
        }, 300); // Adjust timeout to match smooth scroll duration
    };

    useEffect(() => {
        // Smooth scroll to top when component mounts
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    if (!project) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white"
            >
                <div className="fixed inset-0">
                    <Particles className="opacity-50" />
                </div>
                <div className="relative z-10 text-center space-y-6 px-4">
                    <motion.h2
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    >
                        404
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400"
                    >
                        This project seems to have vanished into thin air.
                    </motion.p>
                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto group"
                        onClick={() => navigate("/projects")}
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Return to Projects
                    </motion.button>
                </div>
            </motion.div>
        );
    }

    const {
        title,
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
        links = {},
        bgColor = "bg-gradient-to-br from-blue-600 to-black",
        lineColor = "blue-600",
    } = project;

    // Extract color from bgColor for styling elements
    const colorClass = bgColor.includes("from-") ?
        bgColor.split("from-")[1].split(" ")[0] :
        "blue-600";

    const renderMetric = (value, label) => (
        <div className={`text-center p-4 backdrop-blur-lg bg-white/5 rounded-lg border border-white/10 hover:border-${colorClass}/30 transition-all hover:bg-gradient-to-br hover:from-${colorClass}/20 hover:to-transparent`}>
            <div className={`text-3xl font-bold bg-gradient-to-r from-${colorClass} to-white bg-clip-text text-transparent`}>
                {value}
            </div>
            <div className="text-sm text-gray-400 mt-1">{label}</div>
        </div>
    );

    const getContrastColor = () => {
        if (colorClass.includes('red') || colorClass.includes('orange') || colorClass.includes('yellow')) {
            return 'to-amber-200';
        } else if (colorClass.includes('green')) {
            return 'to-emerald-200';
        } else if (colorClass.includes('blue')) {
            return 'to-sky-200';
        } else if (colorClass.includes('purple') || colorClass.includes('pink')) {
            return 'to-fuchsia-200';
        }
        return 'to-white';
    };

    return (
        <div className="min-h-screen bg-black text-white" ref={containerRef}>
            {/* Particles Background for the entire page */}
            <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
                <Particles className="opacity-20" />
            </div>

            {/* Hero Section */}
            <motion.div
                style={{ opacity, scale }}
                className={`relative h-screen ${project.bgColor} transition-colors duration-500 sticky top-0`}
            >
                <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-b from-black/60 to-black"
                >
                    <motion.img
                        src={project.image2}
                        alt={project.title}
                        className="invisible md:visible w-full h-full lg:object-fit object-scale-down opacity-20 animate-pulse"
                    />
                </motion.div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="mx-auto px-6 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            {/* Tags */}
                            <div className="flex flex-wrap gap-3">
                                {project.tags.map((tag, index) => (
                                    <motion.span
                                        key={`${tag}-${index}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`px-4 py-2 rounded-full bg-${colorClass}/20 backdrop-blur-md text-sm font-medium 
                                        hover:bg-${colorClass}/30 transition-colors cursor-default
                                        border border-${colorClass}/20 hover:border-${colorClass}/40`}
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Title */}
                            <h1 className={`text-4xl md:text-8xl pb-4 font-bold tracking-tight bg-gradient-to-r from-${colorClass} ${getContrastColor()} bg-clip-text text-transparent`}>
                                {project.title}
                            </h1>

                            {/* Description */}
                            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                                {project.description}
                            </p>

                            {/* Year and Links */}
                            <div className="flex items-center gap-6 text-gray-400">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    <span>{project.year}</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.img
                            src={project.image2}
                            alt={project.title}
                            className="visible md:hidden w-full h-full lg:object-fit object-scale-down opacity-20 animate-pulse"
                        />
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                        <div className={`w-1 h-16 rounded-full bg-gradient-to-b from-${colorClass} to-transparent`} />
                        <span className="text-sm">Scroll to explore</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Content Section */}
            <div className="relative z-10 bg-black">
                {/* Back to Projects Button */}
                <div className="container mx-auto pt-16 px-6">
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`px-5 py-3 mb-12 rounded-lg bg-${colorClass}/10 hover:bg-${colorClass}/20 text-white flex items-center gap-2 transition-all group`}
                        onClick={navigateToProjects}
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </motion.button>
                </div>

                {/* Overview Section with Image */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`container mx-auto px-6 py-16 relative overflow-hidden`}
                >
                    {/* Background Shape */}
                    <div className={`absolute -right-20 top-0 w-64 h-64 rounded-full bg-${colorClass}/10 blur-3xl pointer-events-none`}></div>
                    <div className={`absolute -left-20 bottom-0 w-96 h-96 rounded-full bg-${colorClass}/5 blur-3xl pointer-events-none`}></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-${colorClass} to-gray-400 bg-clip-text text-transparent`}>
                                Overview
                            </h2>
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    {fullDescription}
                                </p>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className={`relative rounded-xl overflow-hidden shadow-2xl shadow-${colorClass}/20 group`}
                        >
                            <div className={`absolute inset-0 ${project.bgColor} opacity-40`}></div>
                            <img
                                src={project.image2}
                                alt={project.title}
                                className="w-full h-auto relative z-10 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t from-${colorClass}/60 to-transparent opacity-40`}></div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Challenge & Solution Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="container mx-auto px-6 py-16 relative"
                >
                    {/* Background Shape */}
                    <div className={`absolute right-1/4 top-1/3 w-64 h-64 rounded-full bg-${colorClass}/10 blur-3xl pointer-events-none`}></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className={`backdrop-blur-lg bg-white/5 rounded-xl p-8 border border-white/10 hover:border-${colorClass}/30 transition-all hover:bg-gradient-to-br hover:from-${colorClass}/10 hover:to-transparent`}>
                            <h3 className={`text-2xl font-bold mb-6 inline-flex items-center gap-2 bg-gradient-to-r from-${colorClass} to-white bg-clip-text text-transparent`}>
                                <span className={`text-xl bg-${colorClass}/10 p-2 rounded-lg`}>⚠️</span>
                                Challenge
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {challenge}
                            </p>
                        </div>
                        <div className={`backdrop-blur-lg bg-white/5 rounded-xl p-8 border border-white/10 hover:border-${colorClass}/30 transition-all hover:bg-gradient-to-br hover:from-${colorClass}/10 hover:to-transparent`}>
                            <h3 className={`text-2xl font-bold mb-6 inline-flex items-center gap-2 bg-gradient-to-r from-${colorClass} to-white bg-clip-text text-transparent`}>
                                <span className={`text-xl bg-${colorClass}/10 p-2 rounded-lg`}>💡</span>
                                Solution
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {solution}
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Project Image Full Width */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full h-80 md:h-96 my-16 overflow-hidden"
                >
                    <div className={`absolute inset-0 opacity-100`}></div>
                    <img
                        src={project.image2}
                        alt={`${project.title} Interface`}
                        className="absolute inset-0 w-full h-full lg:object-cover lg:object-center object-scale-down opacity-75 "
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className={`text-4xl pb-2 md:text-6xl font-bold text-center px-6 bg-gradient-to-r from-${colorClass} to-white bg-clip-text text-transparent`}
                        >
                            {project.title}
                        </motion.h2>
                    </div>
                </motion.div>

                {/* Features Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`container mx-auto px-6 md:scale-100 scale-90 py-16 relative ${project.bgColor} bg-opacity-5 rounded-3xl my-16 overflow-hidden`}
                >
                    {/* Background Elements */}
                    <div className={`absolute inset-0 ${project.bgColor} opacity-5`}></div>
                    <div className="absolute -right-10 top-10 w-40 h-40 rounded-full bg-white/5 blur-xl"></div>
                    <div className="absolute -left-10 bottom-10 w-60 h-60 rounded-full bg-white/5 blur-xl"></div>

                    <div className="relative z-10">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-12bg-white bg-clip-text text-transparent`}>
                            Key Features
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-${colorClass}/30 transition-all hover:bg-white/10 group`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`bg-${colorClass}/20 p-3 rounded-lg text-${colorClass} group-hover:scale-110 transition-transform`}>
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-white mb-2">
                                                {feature}
                                            </h3>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Tech Stack Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="container mx-auto px-6 py-16 relative"
                >
                    {/* Background Shape */}
                    <div className={`absolute -left-40 top-20 w-96 h-96 rounded-full bg-${colorClass}/5 blur-3xl pointer-events-none`}></div>

                    <h2 className={`text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-${colorClass} to-white bg-clip-text text-transparent`}>
                        Tech Stack
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Frontend */}
                        <div className={`backdrop-blur-lg bg-white/5 rounded-xl p-8 border border-white/10 hover:border-${colorClass}/30 transition-all hover:bg-gradient-to-br hover:from-${colorClass}/10 hover:to-transparent`}>
                            <h3 className={`text-2xl font-bold mb-6 text-${colorClass}`}>Frontend</h3>
                            <ul className="space-y-3">
                                {techStack.frontend.map((tech, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-2 text-gray-300"
                                    >
                                        <span className={`h-1.5 w-1.5 rounded-full bg-${colorClass}`}></span>
                                        {tech}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Backend */}
                        <div className={`backdrop-blur-lg bg-white/5 rounded-xl p-8 border border-white/10 hover:border-${colorClass}/30 transition-all hover:bg-gradient-to-br hover:from-${colorClass}/10 hover:to-transparent`}>
                            <h3 className={`text-2xl font-bold mb-6 text-${colorClass}`}>Backend</h3>
                            <ul className="space-y-3">
                                {techStack.backend.map((tech, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-2 text-gray-300"
                                    >
                                        <span className={`h-1.5 w-1.5 rounded-full bg-${colorClass}`}></span>
                                        {tech}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Infrastructure */}
                        <div className={`backdrop-blur-lg bg-white/5 rounded-xl p-8 border border-white/10 hover:border-${colorClass}/30 transition-all hover:bg-gradient-to-br hover:from-${colorClass}/10 hover:to-transparent`}>
                            <h3 className={`text-2xl font-bold mb-6 text-${colorClass}`}>Infrastructure</h3>
                            <ul className="space-y-3">
                                {techStack.infrastructure.map((tech, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-2 text-gray-300"
                                    >
                                        <span className={`h-1.5 w-1.5 rounded-full bg-${colorClass}`}></span>
                                        {tech}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Project Image with Metrics Overlay */}
                {/* <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full my-16 overflow-hidden"
                >
                    <div className={`absolute inset-0 ${project.bgColor} bg-opacity-50`}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
                    <img
                        src={project.image2}
                        alt={`${project.title} Interface`}
                        className="w-1/2 h-1/2 mx-auto object-scale-down opacity-30 min-h-[300px]"
                    />

                    <div className="absolute inset-0 flex items-center">
                        <div className="container mx-auto px-6 py-16">
                            <h2 className={`text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-${colorClass} to-white bg-clip-text text-transparent`}>
                                Key Metrics
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {Object.entries(metrics).map(([key, value], index) => (
                                    <motion.div
                                        key={key}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {renderMetric(value, key.replace(/([A-Z])/g, ' $1')
                                            .replace(/^./, function (str) { return str.toUpperCase(); })
                                            .replace(/([a-z])(\d)/g, '$1 $2'))}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section> */}



                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Project Links Section */}
                    {(links.live || links.documentation) && (
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="container mx-auto px-6 py-16 relative"
                        >
                            {/* Background Shape */}
                            <div className={`absolute right-0 bottom-0 w-80 h-80 rounded-full bg-${colorClass}/5 blur-3xl pointer-events-none`}></div>

                            <h2 className={`text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-${colorClass} to-white bg-clip-text text-transparent`}>
                                Project Links
                            </h2>
                            <div className="flex flex-wrap gap-6">
                                {links.live && (
                                    <a
                                        href={links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`px-6 py-4 bg-gradient-to-r from-${colorClass} to-black hover:from-${colorClass}/80 hover:to-black/80 text-white rounded-lg transition-all duration-300 flex items-center gap-2 group`}
                                    >
                                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        Visit Live Site
                                    </a>
                                )}
                                {links.documentation && (
                                    <a
                                        href={links.documentation}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`px-6 py-4 bg-white/10 hover:bg-${colorClass}/20 text-white rounded-lg transition-all duration-300 flex items-center gap-2 border border-white/20 group`}
                                    >
                                        <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                        View Documentation
                                    </a>
                                )}
                            </div>
                        </motion.section>
                    )}

                    {/* Project Navigation */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="container mx-auto px-6 py-16"
                    >
                        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-lg bg-gradient-to-r from-black to-${colorClass}/30 rounded-xl p-8 border border-${colorClass}/10`}>
                            <div>
                                <h2 className={`text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-${colorClass} to-white bg-clip-text text-transparent`}>
                                    Ready to explore more?
                                </h2>
                                <p className="text-gray-400">
                                    Check out my other projects to see what I can do.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-4 bg-gradient-to-r from-${colorClass} to-black hover:from-${colorClass}/80 hover:to-black/80 text-white rounded-lg transition-all duration-300 flex items-center gap-2 group`}
                                onClick={navigateToProjects}
                            >
                                View All Projects
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>
                        </div>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;