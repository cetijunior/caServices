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

    const renderMetric = (value, label) => (
        <div className="text-center p-4 backdrop-blur-lg bg-white/5 rounded-lg border border-white/10">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {value}
            </div>
            <div className="text-sm text-gray-400 mt-1">{label}</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-black text-white" ref={containerRef}>
            {/* Particles Background */}

            {/* <div className="absolute inset-0 z-0 pointer-events-none">
                <Waves
                    lineColor="#ffffff40"
                    backgroundColor="rgba(0, 0, 0, 0.95)"
                />
            </div> */}

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
                    <img
                        src={project.image2}
                        alt={project.title}
                        className="w-full h-full lg:object-fit object-scale-down  opacity-20 animate-pulse"
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
                                        key={tag}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium 
                             hover:bg-white/20 transition-colors cursor-default
                             border border-white/20 hover:border-white/40"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Title */}
                            <h1 className={`text-4xl md:text-8xl pb-4 font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent`}>
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
                        <div className="w-1 h-16 rounded-full bg-gradient-to-b from-white to-transparent" />
                        <span className="text-sm">Scroll to explore</span>
                    </div>
                </motion.div>
            </motion.div>




            {/* Project Details Section */}
            <div className="relative bg-transparent">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Waves
                        lineColor="#ffffff40"
                        backgroundColor="rgba(0, 0, 0, 0.95)"
                    />
                </div>
                <div className="max-w-6xl mx-auto px-6 py-24">


                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="grid md:grid-cols-2 gap-16"
                    >
                        {/* Left Column */}
                        <div className="space-y-12">
                            {[
                                { title: "About the Project", content: fullDescription },
                                { title: "Challenge", content: challenge },
                                { title: "Solution", content: solution }
                            ].map((section, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    className={`group backdrop-blur-lg ${project.bgColor} p-8 rounded-xl border border-white/10 
                           hover:border-white/20 transition-all duration-300
                           hover:bg-white/10`}
                                >
                                    <h2 className="text-2xl font-bold text-white bg-clip-text">
                                        {section.title}
                                    </h2>
                                    <p className="text-gray-300 mt-4 leading-relaxed group-hover:text-white transition-colors">
                                        {section.content}
                                    </p>
                                </motion.div>
                            ))}

                            {/* Features */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className={`backdrop-blur-lg  ${project.bgColor} p-8 rounded-xl border border-white/10 hover:border-white/20
                         hover:bg-white/10 transition-all duration-300`}
                            >
                                <h2 className="text-2xl font-bold text-white bg-clip-text">
                                    Features
                                </h2>
                                <ul className="grid gap-4 mt-6">
                                    {features.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-center cursor-default gap-3 group"
                                            whileHover={{ x: 10 }}
                                        >
                                            <div className={`mt-1 w-2 h-2 rounded-full ${project.bgColor}/100`} />
                                            <span className="text-gray-300 group-hover:text-white transition-colors">
                                                {feature}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Technologies */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className={`flex flex-col  lg:items-center  backdrop-blur-lg ${project.bgColor} p-8 rounded-xl border border-white/10`}>
                                <h2 className="text-2xl font-bold text-white bg-clip-text">
                                    Technologies
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                                    {Object.entries(techStack).map(([category, techs]) => (
                                        <div key={category} className="flex flex-col items-start lg:-ml-10">
                                            <h3 className="text-lg uppercase font-semibold text-white mb-3">
                                                {category}
                                            </h3>
                                            <ul className="space-y-2 cursor-default">
                                                {techs.map((tech, index) => (
                                                    <motion.li
                                                        key={index}
                                                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                                                        whileHover={{ x: 10 }}
                                                    >
                                                        <div className={`w-1 h-1 rounded-full ${project.bgColor}/100`} />
                                                        {tech}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>





                        {/* Right Column */}
                        <div className="relative">
                            <div className={`sticky rounded-2xl shadow-2xl shadow-white/20 ${project.bgColor} md:top-20 space-y-6`}>
                                {/* Project Image */}
                                <motion.div
                                    className="rounded-2xl flex flex-col-reverse overflow-hidden border border-white/10 hover:border-white/20 
                           transition-all duration-300 group relative"
                                >
                                    <img
                                        src={project.image2}
                                        alt={project.title}
                                        className="w-full mb-4 p-2 mx-auto container group-hover:scale-105  transition-all duration-300"
                                    />



                                    {/* Action Buttons */}
                                    <div className="flex flex-col items-center transition-all duration-300 gap-4 lg:px-10 p-4 bg-transparent ">
                                        <motion.a
                                            href={project.links?.live || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-full px-6 py-4  border-2 border-white/10
                             text-white rounded-lg font-medium flex items-center justify-center gap-2 
                             hover:from-blue-400 hover:to-purple-400 transition-all duration-300 group
                             relative overflow-hidden`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Waves
                                                lineColor="#ffffff40"
                                                backgroundColor="rgba(0, 0, 0, 0.95)"
                                            />
                                            <span className="relative font-bold text-2xl z-10">View Live Project</span>
                                            <ArrowUpRight
                                                className="w-4 h-4 text-white z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                                            />
                                            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                                        </motion.a>

                                        <motion.button
                                            onClick={() => navigate("/projects")}
                                            className="w-full px-6 py-4 bg-white/5 backdrop-blur-md text-white rounded-lg 
                                 font-medium flex items-center justify-center gap-2 
                                 hover:bg-white/10 transition-all duration-300 group
                                 border border-white/10 hover:border-white/20"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                            <span>Back to Projects</span>
                                        </motion.button>

                                        {/* Share Button */}
                                        <motion.button
                                            onClick={() => {
                                                navigator.clipboard.writeText(window.location.href);
                                                // You might want to add a toast notification here
                                            }}
                                            className="w-full px-6 py-4 bg-white/5 backdrop-blur-md text-white rounded-lg 
                                 font-medium flex items-center justify-center gap-2 
                                 hover:bg-white/10 transition-all duration-300 group
                                 border border-white/10 hover:border-white/20"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Share2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                            <span>Share Project</span>
                                        </motion.button>
                                    </div>
                                </motion.div>



                                {/* Additional Resources */}
                                {/* {project.links?.resources && (
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                        className="backdrop-blur-lg bg-white/5 p-6 rounded-xl border border-white/10"
                                    >
                                        <h3 className="text-lg font-semibold text-blue-400 mb-4">Additional Resources</h3>
                                        <div className="space-y-3">
                                            {project.links.resources.map((resource, index) => (
                                                <motion.a
                                                    key={index}
                                                    href={resource.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-gray-300 hover:text-white 
                                             transition-colors group"
                                                    whileHover={{ x: 10 }}
                                                >
                                                    <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                                                    <span>{resource.title}</span>
                                                </motion.a>
                                            ))}
                                        </div>
                                    </motion.div>
                                )} */}
                            </div>
                        </div>

                    </motion.div>
                </div>
                {/* Metrics Grid */}
                {Object.keys(metrics).length > 0 && (
                    <div className="container p-4 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 pb-24">
                        {Object.entries(metrics).map(([key, value]) => renderMetric(value, key))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetails;