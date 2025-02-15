import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Use `next/link` if using Next.js
import Waves from "../components/Waves"; // Import the Waves component

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-950 text-white relative overflow-hidden">
            {/* Waves Background */}
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

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    {/* 404 Text */}
                    <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                        404
                    </h1>

                    {/* Message */}
                    <h2 className="text-4xl font-bold text-white">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        The page you're looking for doesn't exist or has been moved. <br />Let's get you back on track.
                    </p>

                    {/* Back to Home Button */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8"
                    >
                        <Link
                            to="/" // Replace with your main page route
                            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                        >
                            Go Back Home
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;