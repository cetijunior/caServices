import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Waves from "../ui/Waves";

const Hero = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="relative select-none h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
            {/* Interactive Wave Background */}
            <div className="absolute inset-0 z-10 pointer-events-none">
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
                />
            </div>

            {/* Gradient Overlays */}
            <div className="absolute bg-white inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-black/50 opacity-80 z-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-blue-900/10 opacity-40 z-0" />

            {/* Animated Logo */}
            <motion.img
                src="/assets/logos/logo.png"
                alt="Glowing Logo"
                initial={{ opacity: 0.2, scale: 1 }}
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.4, 1],
                    rotate: [0, 180, 360],
                    y: [0, -30, 0],
                    x: [-20, 20, -20],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                }}
                className="absolute w-72 h-72 md:w-[400px] md:h-[400px] opacity-20 blur-[8px] z-10"
            />

            {/* Hero Content */}
            <div className="relative text-center max-w-5xl px-6 z-20">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight"
                >
                    MAKE YOUR{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600/70 via-white/60 to-blue-600/60">
                        DIGITAL DREAMS
                    </span>{" "}
                    A REALITY
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-gray-300 mt-6 text-lg md:text-xl max-w-2xl mx-auto"
                >
                    Empowering businesses with cutting-edge solutions and technology-driven strategies.
                </motion.p>



                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
                >
                    {/* Primary CTA */}
                    <Link
                        onClick={scrollToTop}
                        to="/services"
                        className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-full overflow-hidden"
                    >
                        <div className="absolute inset-0 w-full h-full bg-white/5 border border-white/10 backdrop-blur-3xl transition-all duration-300 group-hover:bg-white/10" />
                        <div className="absolute inset-0 w-full h-full backdrop-blur-3xl shadow-2xl shadow-blue-400 bg-gradient-to-br from-white/20 via-blue-600/20 to-black/30 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300" />
                        <div className="relative flex items-center justify-center text-white">
                            Explore Services
                            <motion.span
                                initial={{ x: -4, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.5 }}
                                className="ml-2 text-xl"
                            >
                                →
                            </motion.span>
                        </div>
                    </Link>

                    {/* Secondary CTA */}
                    <Link
                        onClick={scrollToTop}
                        to="/contact"
                        className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-full overflow-hidden"
                    >
                        <div className="absolute inset-0 w-full h-full bg-white/5 border border-white/10 backdrop-blur-3xl transition-all duration-300 group-hover:bg-white/10" />
                        <div className="absolute inset-0 w-full h-full backdrop-blur-3xl shadow-2xl shadow-blue-400 bg-gradient-to-br from-white/20 via-blue-600/20 to-black/30 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300" />
                        <div className="relative flex items-center justify-center text-white">
                            <span className="relative text-gray-300 group-hover:text-white transition-colors duration-300">
                                Contact Us
                            </span>
                        </div>
                    </Link>
                </motion.div>


            </div>
        </div>
    );
};

export default Hero;