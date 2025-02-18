import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onFinish }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onFinish(); // Notify parent that the loader is finished
        }, 2000); // Adjust time to match animation duration

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex flex-col items-center justify-center w-full h-full bg-black z-[999] transition-all duration-150"
                >
                    {/* Rotating Logo */}
                    <motion.img
                        src="/assets/logos/logo.png" // Replace with actual logo path
                        alt="Loading..."
                        initial={{ rotate: 0, scale: 0.8 }}
                        animate={{ rotate: 360, scale: 1, opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="w-24 h-24 opacity-80"
                    />
                    <h1
                        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600/70 via-white/60 to-blue-600/60 font-bold text-5xl md:text-6xl ml-4"                    >
                        CA SERVICES
                    </h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
