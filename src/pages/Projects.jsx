import React from "react";
import { projects } from "../data/projectsData";
import TiltedCard from "../components/ui/TiltedCard";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Particles from "../components/ui/Particles";


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
        <div className="container mx-auto text-white">
            {/* Hero Section */}
            <div className="relative py-10 pt-16 overflow-hidden">
                <div className="max-w-7xl lg:pb-16 mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
                        Our Projects
                    </h1>
                    <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
                        Transforming ideas into digital excellence through innovative design and technology
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <section className="max-w-7xl lg:pt-0 pt-24 mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2   gap-16">
                    {projects.map((project, index) => (
                        <div key={index} className="flex -my-16 lg:-my-20 justify-center md:p-0 ">
                            <TiltedCard
                                imageSrc={project.image2}
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
                                        className={`w-full h-full lg:mt-0 -mt-16  group group-hover max-w-md bg-gradient-to-br shadow-2xl shadow-${project.bgColor}  bg-${project.bgColor} backdrop-blur-md p-6 rounded-lg flex flex-col justify-end`}
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

                                        {/* Year & View Button */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1 text-gray-400">
                                                <Clock className="w-4 h-4" />
                                                <span className="text-sm">{project.year}</span>
                                            </div>

                                            <div
                                                onClick={() => handleNavigate(project)}
                                                className="flex cursor-pointer items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                                                <span>View Project</span>
                                                <ArrowUpRight className="w-4 h-4 group-hover:scale-110 group-hover:text-cyan-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </div>
                                        </div>
                                    </motion.div>
                                }
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;