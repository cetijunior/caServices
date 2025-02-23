import React from "react";
import { projects } from "../data/projectsData";
import TiltedCard from "../components/ui/TiltedCard";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "../components/ui/Particles";
import Waves from "../components/ui/Waves";


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

// Variants for each project card
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
};


const Projects = () => {
    const navigate = useNavigate();

    const handleNavigate = (project) => {
        navigate(`/projects/${encodeURIComponent(project.title)}`, { state: project });
        // Delay scrolling slightly to ensure smooth transition
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 100);
    };

    return (
        <div className="lg:px-32 min-h-screen mx-auto w-full lg:pb-14 text-white">

            {/* Hero Section */}
            <div className="relative py-10 lg:pb-10 pb-20 pt-16 overflow-hidden">
                <div className="max-w-7xl lg:pb-16 mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        Our Projects
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Transforming ideas into digital excellence through innovative design and technology
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <section className="lg:pt-0 pt-10 mx-auto lg:px-10 px-4 pr-6">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <AnimatePresence>

                        {projects.map((project, id) => (
                            <motion.div
                                key={project.title}
                                variants={cardVariants}
                                transition={{ duration: 0.5 }}
                                className="w-full scale-95  max-w-md flex justify-center md:-my-12 -my-20">
                                <TiltedCard
                                    //Img
                                    altText={project.title}
                                    captionText={project.title}
                                    containerHeight="600px"
                                    containerWidth="100%"
                                    imageHeight="80%"
                                    imageWidth="100%"
                                    rotateAmplitude={12}
                                    scaleOnHover={1.05}
                                    showMobileWarning={false}
                                    showTooltip={false}
                                    displayOverlayContent={true}
                                    overlayContent={
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                            className={`w-full h-full group group-hover max-w-md bg-gradient-to-br shadow-2xl shadow-${project.bgColor} bg-${project.bgColor} backdrop-blur-md p-6 rounded-lg flex flex-col justify-end`}
                                        >
                                            {/* Tags */}
                                            <div className="flex w-full gap-2 mb-3">
                                                {project.tags.map((tag, i) => (
                                                    <span key={i} className={`text-xs cursor-default text-${project.bgColor} font-medium bg-blue-900/20 px-2 py-1 rounded-full`}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300">
                                                {project.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-300 text-sm mb-3">
                                                {project.description}
                                            </p>

                                            {/* Image Styling Directly Here */}
                                            <img
                                                src={project.image2}
                                                alt={project.title}
                                                className={`w-full h-auto mb-6 group-hover:scale-105 transition-all duration-300 shadow-${project.bgColor} sm:object-scale-down lg:object-cover rounded-lg`}
                                            />

                                            {/* Year & View Button */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1 text-gray-400">
                                                    <Clock className="w-4 h-4" />
                                                    <span className="text-sm">{project.year}</span>
                                                </div>

                                                <div
                                                    onClick={() => handleNavigate(project)}
                                                    className="flex cursor-pointer items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300"
                                                >
                                                    <span>View Project</span>
                                                    <ArrowUpRight className="w-4 h-4 group-hover:scale-110 group-hover:text-cyan-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    }
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
        </div>
    );
};

export default Projects;