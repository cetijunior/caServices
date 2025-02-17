import React from "react";
import { projects } from "../data/projectsData";
import TiltedCard from "../components/ui/TiltedCard";
import { useNavigate } from "react-router-dom";



const Projects = () => {
    const navigate = useNavigate();


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling effect
        });
    };

    return (
        <div className="bg-black container mx-auto text-white">
            {/* Hero Section */}
            <div className="relative py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
                        Our Projects
                    </h1>
                    <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
                        Transforming ideas into digital excellence through innovative design and technology
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <section className="max-w-7xl mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {projects.map((project, index) => (
                        <div key={index} className="flex justify-center  md:p-0 p-2">
                            <TiltedCard
                                imageSrc={project.image}
                                altText={project.title}
                                captionText={project.title}
                                containerHeight="600px"
                                containerWidth="100%"
                                imageHeight="100%"
                                imageWidth="100%"
                                rotateAmplitude={12}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip={true}

                                displayOverlayContent={true}
                                overlayContent={
                                    <div onClick={() => navigate(`/projects/${encodeURIComponent(project.title)}`, { state: project })}
                                        className={`w-full h-full cursor-pointer shadow-2xl shadow-${project.bgColor} flex flex-col justify-between p-8 ${project.bgColor} bg-opacity-80 backdrop-blur-sm`}>
                                        {/* Top Section */}
                                        <div className="flex justify-between items-start">
                                            <span className="px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                                                {project.year}
                                            </span>
                                        </div>

                                        {/* Bottom Section */}
                                        <div className="space-y-4">
                                            <h3 className="text-4xl font-bold text-white">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-200 text-lg">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full text-white/90 hover:bg-white/20 transition-colors duration-300"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
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