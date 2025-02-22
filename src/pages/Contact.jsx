import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import Particles from "../components/ui/Particles";
import SplashCursor from "../components/ui/SplashCursor";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeField, setActiveField] = useState(null);
    const [isTyping, setIsTyping] = useState(false);

    // 🔵 UseCallback prevents unnecessary re-renders
    const handleChange = useCallback((e) => {
        setFormState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API delay
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            value: "contact@company.com",
            link: "mailto:contact@company.com",
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            value: "+1 (555) 123-4567",
            link: "tel:+15551234567",
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Office",
            value: "123 Innovation Drive, Tech City, TC 12345",
            link: "https://maps.google.com",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-950 overflow-hidden relative"
            onFocus={() => setIsTyping(true)} // Disable cursor effect when input is focused
            onBlur={() => setIsTyping(false)}
        >


            {/* Splash Cursor */}
            {!isTyping && <SplashCursor />} {/* Disable SplashCursor when typing */}

            {/* Particles Background */}
            <div className="absolute inset-0 -z-10">
                <Particles />
            </div>

            {/* Split-Screen Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Left Side: Visuals and Contact Methods */}
                <motion.div
                    className="relative flex flex-col justify-center p-8 lg:p-16 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Radial Gradient Animation */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            background: [
                                "radial-gradient(circle at 30% 30%, #3b82f6aa 0%, transparent 50%)",
                                "radial-gradient(circle at 70% 70%, #3b82f6aa 0%, transparent 50%)",
                                "radial-gradient(circle at 30% 30%, #3b82f6aa 0%, transparent 50%)",
                            ]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl font-bold lg:mt-0 mt-10 pb-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400 mb-6"
                        >
                            Let's Build Something Amazing
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-gray-400 mb-12"
                        >
                            Whether you're looking to start a new project or improve an existing one, we're here to help. Let's collaborate and create something extraordinary.
                        </motion.p>

                        {/* Contact Methods */}
                        <div className="space-y-6">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={index}
                                    href={method.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-6 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-blue-400 transition-all"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className={`p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-teal-500/10`}>
                                        {method.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-white">{method.title}</h4>
                                        <p className="text-gray-400">{method.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Contact Form */}
                <motion.div
                    className="flex flex-col justify-center p-8 lg:p-16 bg-gray-950/50 backdrop-blur-sm"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-6xl font-bold lg:mt-0 mt-10 pb-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400 mb-6"
                    >
                        Send us a quick Email!
                    </motion.h1>



                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            {[
                                { name: "name", type: "text", label: "Name", placeholder: "John Doe" },
                                { name: "email", type: "email", label: "Email", placeholder: "john@example.com" }
                            ].map((field) => (
                                <motion.div
                                    key={field.name}
                                    whileHover={{ scale: 1.01 }}
                                >
                                    <label className="text-sm font-medium text-gray-400">{field.label}</label>
                                    <motion.input
                                        type={field.type}
                                        value={formState[field.name]}
                                        onChange={(e) => setFormState({ ...formState, [field.name]: e.target.value })}
                                        onFocus={() => setActiveField(field.name)}
                                        onBlur={() => setActiveField(null)}
                                        className="mt-1 w-full rounded-lg bg-gray-900/50 border border-gray-800 focus:border-blue-500 text-white focus:ring-2 focus:ring-blue-500 p-3 placeholder-gray-500 transition-all duration-300"
                                        placeholder={field.placeholder}
                                    />
                                    <AnimatePresence>
                                        {activeField === field.name && (
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                exit={{ width: 0 }}
                                                className="h-0.5 bg-blue-500 mt-1"
                                            />
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}

                            <motion.div whileHover={{ scale: 1.01 }}>
                                <label className="text-sm font-medium text-gray-400">Message</label>
                                <motion.textarea
                                    rows="4"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    onFocus={() => setActiveField('message')}
                                    onBlur={() => setActiveField(null)}
                                    className="mt-1 w-full rounded-lg bg-gray-900/50 border border-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent p-3 placeholder-gray-500"
                                    placeholder="Tell us about your project..."
                                />
                            </motion.div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full py-4 rounded-xl font-medium text-white relative overflow-hidden
                                ${isSubmitted
                                    ? 'bg-green-500'
                                    : 'bg-gradient-to-r from-blue-500 to-teal-500'} 
                                transition-all duration-300 flex items-center justify-center space-x-2`}
                            disabled={isSubmitting || isSubmitted}
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : isSubmitted ? (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="flex items-center space-x-2"
                                >
                                    <CheckCircle className="w-5 h-5" />
                                    <span>Message Sent!</span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="flex items-center space-x-2"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </motion.div>
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;