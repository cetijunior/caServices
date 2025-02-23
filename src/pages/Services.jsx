import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Code, Globe, Palette, Cloud, Database, Shield,
    BrainCircuit, Smartphone, Rocket, LineChart,
    ChevronRight, CheckCircle2, ArrowRight, Star,
    GitBranch, Laptop, Search, Timer, ArrowRightIcon, Lightbulb,
} from 'lucide-react';


import Particles from '../components/ui/Particles';
import Waves from '../components/ui/Waves';
import SpotlightCard from '../components/ui/SpotlightCard';
import { Link } from 'react-router-dom';
import Threads from '../components/ui/Threads';
import Services from './Services2';

const ServicesPage = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [hoveredService, setHoveredService] = useState(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const services = [
        {
            id: 'web',
            category: 'development',
            title: "Custom Web Development",
            icon: <Code className="w-8 h-8" />,
            gradient: "from-blue-500 to-cyan-400",
            description: "Craft exceptional digital experiences with cutting-edge web solutions",
            features: [
                "Responsive Design Architecture",
                "Progressive Web Apps (PWA)",
                "Custom CMS Development",
                "E-commerce Solutions"
            ],
            technologies: ["React", "Node.js", "Laravel", "Vue.js"]
        },
        {
            id: 'ai',
            category: 'innovation',
            title: "AI Integration",
            icon: <BrainCircuit className="w-8 h-8" />,
            gradient: "from-purple-500 to-pink-500",
            description: "Harness the power of artificial intelligence for your business",
            features: [
                "Machine Learning Integration",
                "ChatGPT Implementation",
                "Predictive Analytics",
                "AI-Powered Automation"
            ],
            technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn"]
        },
        {
            id: 'cloud',
            category: 'infrastructure',
            title: "Cloud Solutions",
            icon: <Cloud className="w-8 h-8" />,
            gradient: "from-cyan-500 to-blue-500",
            description: "Scale your business with robust cloud infrastructure",
            features: [
                "Cloud Migration Strategy",
                "AWS/Azure Solutions",
                "Serverless Architecture",
                "Cloud Security"
            ],
            technologies: ["AWS", "Azure", "Google Cloud", "Docker"]
        }
    ];

    const [activeStep, setActiveStep] = useState(0);

    const processSteps = [
        {
            icon: <Search className="w-6 h-6 text-blue-400" />,
            title: "Discovery",
            description: "Understanding your needs and goals through deep research and analysis"
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
            title: "Strategy",
            description: "Developing a comprehensive plan tailored to your objectives"
        },
        {
            icon: <Code className="w-6 h-6 text-green-400" />,
            title: "Development",
            description: "Bringing ideas to life with cutting-edge technology and design"
        },
        {
            icon: <Rocket className="w-6 h-6 text-purple-400" />,
            title: "Launch",
            description: "Deploying and optimizing for maximum impact and success"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % processSteps.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section with Parallax */}
            <div className="absolute inset-0">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    className="w-full h-full"
                />
            </div>
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "radial-gradient(circle at 50% 50%, #4F46E5 0%, transparent 50%)",
                        transform: `translateY(${scrollY * 0.5}px)`
                    }}
                />
                <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Transform Your Digital Vision
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
                            We craft exceptional digital experiences that drive growth and innovation
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                onClick={scrollToTop}
                                to="/contact">
                                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                                    Start Your Project
                                </button>
                            </Link>
                            <Link
                                onClick={scrollToTop}
                                to="/projects">
                                <button className="px-8 py-4 border border-gray-700 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300">
                                    View Our Work
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Services Section */}
            <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
                <div className="mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Our Expertise
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Delivering cutting-edge solutions across the digital spectrum
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <SpotlightCard className="p-8 mx-auto hover:scale-105 transition-all duration-200 rounded-2xl backdrop-blur-md group hover:bg-gray-800/50">

                                <Waves
                                    lineColor="#ffffff40"
                                    className="pointer-events-none -z-10"
                                />
                                <div className='h-full justify-between'>
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-gray-400 mb-6">{service.description}</p>

                                    <div className={`space-y-3 transition-all duration-300}`}>
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-center text-gray-300">
                                                <CheckCircle2 className="w-4 h-4 mr-2 text-blue-400" />
                                                {feature}
                                            </div>
                                        ))}

                                        <div className="pt-4 mt-4 border-t border-gray-800">
                                            <div className="flex flex-wrap gap-2">
                                                {service.technologies.map((tech) => (
                                                    <span key={tech} className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </section>

            <section className="md:py-24 py-8 px-6 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16 relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
                            Our Process
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto relative">
                            A streamlined approach to delivering exceptional results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative transform transition-all duration-500 ease-in-out ${index === activeStep ? 'scale-105' : 'scale-100'
                                    }`}
                            >
                                <div
                                    className={`p-6 rounded-xl border transition-all duration-500 ease-in-out relative group
                  ${index === activeStep
                                            ? 'bg-gray-800/80 border-blue-500/50 shadow-lg shadow-blue-500/20'
                                            : 'bg-gray-900/50 border-gray-800 hover:bg-gray-800/50'
                                        }
                `}
                                >
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-500
                    ${index === activeStep
                                                ? 'bg-blue-500/30 scale-110'
                                                : 'bg-blue-500/20'
                                            }
                  `}
                                    >
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-gray-400">{step.description}</p>

                                    {/* Animated border */}
                                    <div
                                        className={`absolute inset-0 rounded-xl transition-all duration-500
                    ${index === activeStep
                                                ? 'border-2 border-blue-500/50 scale-105 opacity-100'
                                                : 'border border-transparent scale-100 opacity-0'
                                            }
                  `}
                                    />
                                </div>

                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                                        <ArrowRightIcon
                                            className={`w-6 h-6 transition-all duration-500 ${index === activeStep
                                                ? 'text-blue-400 scale-125 ml-9'
                                                : 'text-gray-600'
                                                }`}
                                        />
                                    </div>
                                )}

                                {/* Animated gradient background */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl transition-all duration-500
                  ${index === activeStep
                                            ? 'opacity-100 scale-110'
                                            : 'opacity-0 scale-100'
                                        }
                `}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Background animation elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                    </div>
                </div>
            </section>



            <section>
                <div className="text-center mt-4 py-8 relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
                        Components
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto relative">
                        A demonstration of some of the components we offer!
                    </p>
                </div>
                <div className='-mt-16'>
                    <Services />
                </div>
            </section>








            {/* CTA Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <Waves
                    lineColor="#ffffff40"
                    backgroundColor="rgba(0, 0, 0, 0.95)"
                    waveSpeedX={0.03}
                    waveSpeedY={0.02}
                    waveAmpX={35}
                    waveAmpY={25}
                    friction={0.95}
                    tension={0.025}
                    maxCursorMove={80}
                    xGap={24}
                    yGap={40}
                    className="absolute inset-0"
                />
                <div className="relative z-10 text-center px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-white mb-8"
                    >
                        Ready to Build Something Amazing?
                    </motion.h2>
                    <Link
                        onClick={scrollToTop}
                        to="/contact"
                        className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-full overflow-hidden"
                    >
                        <div className="absolute inset-0 w-full h-full bg-white/5 border border-white/10  group-hover:bg-white/10" />
                        <div className="absolute inset-0 w-full h-full  shadow-2xl shadow-blue-400 bg-gradient-to-br from-white/20 via-blue-600/20 to-black/30 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300" />
                        <div className="relative flex items-center justify-center text-white">
                            <span className="relative text-gray-300 group-hover:text-white transition-colors duration-300">
                                Contact Us
                            </span>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;