import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="relative select-none h-screen flex items-center justify-center bg-bgDark overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-bgDark via-bgGradientDark to-black opacity-95"></div>

            <div className="bg-gradient-to-r from-blue-100 to-blue-900"></div>

            {/* Glowing LOGO in BG with Rotating Circular Animation */}
            <motion.img
                src="/assets/logos/logo.png" // Replace with actual logo
                alt="Glowing Logo"
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                animate={{
                    opacity: 1,
                    scale: [1, 1.2, 1],
                    rotate: [-45, 180, 360], // Full rotation cycle
                    y: [0, -40, 0],
                    x: [-30, 30, 0],

                }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                className="absolute w-80 h-80 md:w-[450px] md:h-[450px] opacity-60 blur-[8px] md:blur-[6px]"
            />

            {/* Hero Content */}
            <div className="relative z-50 text-center max-w-5xl px-6">
                {/* Animated Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-md"
                >
                    MAKE YOUR <span className="text-textAccent">DIGITAL DREAMS</span> A REALITY
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.6, duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="text-textSecondary mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-sm"
                >
                    Empowering businesses with cutting-edge solutions and technology-driven strategies.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3, duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="mt-8 flex flex-col z-50 md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6"
                >
                    <Link
                        to="/services"
                        className="relative z-50 px-8 py-3 bg-gradient-to-r from-btnPrimary to-btnHover text-white rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50 overflow-hidden group"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-btnHover to-gray-100 scale-0 group-hover:scale-100 transition-transform duration-300 opacity-30"></span>
                        <span className="relative z-10">Explore Services</span>
                    </Link>

                    <Link
                        to="/contact"
                        className="relative px-8 py-3 border border-borderLight text-textSecondary  hover:text-white hover:border-white rounded-full text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-gray-600/50 backdrop-blur-md overflow-hidden group"
                    >
                        <span className="absolute inset-0 bg-white opacity-10 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                        <span className="relative z-10">Contact Us</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
