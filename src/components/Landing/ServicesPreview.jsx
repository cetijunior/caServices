import React from "react";
import { motion } from "framer-motion";
import {
    Code,
    Globe,
    Database,
    ArrowRight,
    Coffee,
    Cpu,
    CodeSquare,
    Smartphone,
    Server,
    Cloud,
    Terminal,
    Box,
    Globe2,
    Apple,
} from "lucide-react";
import SpotlightCard from "../ui/SpotlightCard";
import Waves from "../ui/Waves";
import RotatingText from "../ui/RotatingText"
import { useNavigate } from "react-router-dom";

const services = [
    {
        title: "Software Development",
        icon: <Code className="w-8 h-8 text-blue-400" />,
        description: "Custom software solutions tailored to your business needs with cutting-edge technology."
    },
    {
        title: "Software Upgrade Services",
        icon: <Globe className="w-8 h-8 text-green-400" />,
        description: "Upgrade services to ensure your software is always up-to-date and running efficiently."
    },
    {
        title: "Data Migration Services",
        icon: <Database className="w-8 h-8 text-purple-400" />,
        description: "Seamless data migration ensuring zero data loss and minimal downtime."
    }
];

// Duplicate tech stack for seamless loop
const techStack = [
    { name: "Java", icon: <Coffee className="w-12 h-12 text-yellow-400" /> },
    { name: "Python", icon: <Cpu className="w-12 h-12 text-green-400" /> },
    { name: "Laravel", icon: <CodeSquare className="w-12 h-12 text-red-400" /> },
    { name: "React Native", icon: <Smartphone className="w-12 h-12 text-blue-400" /> },
    { name: "PHP", icon: <Server className="w-12 h-12 text-indigo-400" /> },
    { name: "Android", icon: <Cloud className="w-12 h-12 text-green-500" /> },
    { name: "JavaScript", icon: <Terminal className="w-12 h-12 text-yellow-400" /> },
    { name: "Swift", icon: <Apple className="w-12 h-12 text-white" /> },
    { name: "Node.js", icon: <Box className="w-12 h-12 text-green-400" /> },
    { name: "GraphQL", icon: <Globe2 className="w-12 h-12 text-pink-400" /> },
];



const LogoWall = () => {
    return (
        <div className="relative flex overflow-hidden">
            <motion.div
                className="flex gap-8 py-4"
                animate={{
                    x: ["0%", "-50%"]
                }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {/* First set of logos */}
                {techStack.map((tech, index) => (
                    <div
                        key={`first-${index}`}
                        className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800/50 transition-all duration-300 group min-w-[160px]"
                    >
                        <div className="mb-4 p-3 rounded-lg bg-blue-500/10 flex items-center justify-center">
                            {tech.icon}
                        </div>
                        <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-all">
                            <span className="group-hover:text-cyan-500">
                                {tech.name}
                            </span>
                        </span>
                    </div>
                ))}

                {/* Duplicated set for seamless loop */}
                {techStack.map((tech, index) => (
                    <div
                        key={`second-${index}`}
                        className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800/50 transition-all duration-300 group min-w-[160px]"
                    >
                        <div className="mb-4 p-3 rounded-lg bg-blue-500/10 flex items-center justify-center">
                            {tech.icon}
                        </div>
                        <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-all">
                            <span className="group-hover:text-cyan-500">
                                {tech.name}
                            </span>
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};







const ServicesAndTechStack = () => {

    const navigate = useNavigate();

    const navigateToServices = (member) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setTimeout(() => {
            navigate(`/services`);
        }, 0);
    };

    return (
        <>
            <section className="relative bg-black py-24 px-4 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:text-5xl text-3xl font-bold text-white text-center mb-16"
                    >
                        <div className="flex items-center justify-center w-full ">
                            Our Premium
                            <span className="ml-4 text-blue-400">
                                <RotatingText
                                    texts={['Services', 'Skills', 'Talents']}
                                    mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg transition-all duration-300"
                                    staggerFrom={"last"}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={2000}
                                />
                            </span>
                        </div>
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        {services.map((service, index) => (
                            <SpotlightCard key={index} className="p-8 bg-gray-900/50 rounded-2xl backdrop-blur-md group transition-all duration-75 hover:bg-gray-800/50">

                                <Waves
                                    lineColor="#ffffff30"
                                    className="-z-10"
                                />

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="flex flex-col justify-between h-full items-start"
                                >
                                    <div className="mb-6 p-4 rounded-xl bg-blue-500/10">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-all">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6">
                                        {service.description}
                                    </p>
                                    <motion.div
                                        onClick={navigateToServices}
                                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                                        whileHover={{ x: 5 }}
                                    >
                                        Read more <ArrowRight className="ml-2 w-4 h-4" />
                                    </motion.div>
                                </motion.div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </section>



            <section className="relative bg-black py-24 ">
                <div className="mx-auto cursor-default">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-gray-400 mb-2 uppercase tracking-widest text-sm">
                            OUR TECHNOLOGY STACK
                        </h3>
                        <h1 className="text-4xl mt-10 font-bold text-gray-400">
                            Why Choose <span className="text-gray-400">Our Expertise?</span>
                        </h1>
                    </motion.div>

                    <LogoWall />
                </div>
            </section>
        </>
    );
};

export default ServicesAndTechStack;