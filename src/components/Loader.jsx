import React from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 4, ease: "easeInOut" }} // Slower transition
                className="fixed inset-0 bg-black flex items-center justify-center z-50"
            >
                {/* Rotating Logo with Smoother Transition */}
                <motion.img
                    src="/assets/logos/logo.png" // Replace with your actual logo path
                    alt="Loading..."
                    initial={{ rotate: 0, scale: 0.8, }}
                    animate={{ rotate: 360, scale: 1, opacity: 0, }}
                    transition={{ duration: 1, opacity: 0, ease: "easeInOut" }} // Matches the transition time
                    className="w-24 h-24 opacity-80"
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default Loader;
