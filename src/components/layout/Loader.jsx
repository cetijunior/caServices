import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoader } from "./LoaderContext"; // ✅ Import properly

const Loader = () => {
    const { isLoading } = useLoader();
    const words = ["CREATING", "ANALYZING", "DESIGNING", "BUILDING"];
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const wordInterval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 400);
        return () => clearInterval(wordInterval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 0.95,
                        transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="fixed inset-0 flex flex-col items-center justify-center w-full h-full bg-black/95 backdrop-blur-md z-[999]"
                >
                    {/* 🔵 Animated Background */}
                    <motion.div
                        className="absolute inset-0 opacity-20"
                        animate={{
                            background: [
                                "radial-gradient(circle at 0% 0%, #4F46E5 0%, transparent 50%)",
                                "radial-gradient(circle at 100% 100%, #4F46E5 0%, transparent 50%)",
                                "radial-gradient(circle at 0% 100%, #4F46E5 0%, transparent 50%)",
                                "radial-gradient(circle at 100% 0%, #4F46E5 0%, transparent 50%)"
                            ]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />

                    {/* 🔥 Main Content Container */}
                    <motion.div
                        className="relative p-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                        animate={{
                            scale: [1, 1.02, 1],
                            rotate: [0, 1, -1, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="relative bg-black rounded-2xl p-8 overflow-hidden">
                            {/* 🌐 Background Motion Lines */}
                            <div className="absolute inset-0 opacity-20">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                                        style={{ top: `${20 * i}%` }}
                                        animate={{
                                            x: [-1000, 1000],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: i * 0.2,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* 🔵 Logo Animation */}
                            <motion.div
                                className="relative w-32 h-32 mb-6 mx-auto"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                                <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.8, 0.3],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />

                                <motion.div
                                    className="absolute inset-0 rounded-full border-t-2 border-blue-500"
                                    animate={{
                                        rotate: [0, 360],
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />

                                <motion.img
                                    src="/assets/logos/logo.png"
                                    alt="Logo"
                                    className="w-full h-full object-contain"
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        opacity: [0.9, 1, 0.9],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </motion.div>

                            {/* 🏆 Brand Name */}
                            <motion.h1
                                className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mb-4"
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                CA SERVICES
                            </motion.h1>

                            {/* 🏗️ Animated Words */}
                            <div className="h-8 overflow-hidden">
                                <motion.p
                                    key={words[currentWord]}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="text-center text-gray-400 font-light tracking-wider"
                                >
                                    {words[currentWord]}
                                </motion.p>
                            </div>

                            {/* 🔵 Loading Bar */}
                            <div className="relative w-48 h-1 bg-gray-800/50 rounded-full mt-6 overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                                    animate={{
                                        x: [-192, 192],
                                        backgroundPosition: ["0% 50%", "100% 50%"],
                                    }}
                                    transition={{
                                        x: {
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        },
                                        backgroundPosition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
