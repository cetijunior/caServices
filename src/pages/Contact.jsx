import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, MessageSquare, Sparkles } from "lucide-react";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
        subject: "General Inquiry"
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeField, setActiveField] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            value: "contact@company.com",
            link: "mailto:contact@company.com"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            value: "+1 (555) 123-4567",
            link: "tel:+15551234567"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Office",
            value: "123 Innovation Drive, Tech City, TC 12345",
            link: "https://maps.google.com"
        }
    ];

    // Floating particles animation
    const Particles = () => (
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-[2px] h-[2px] bg-gradient-to-b from-teal-200 to-blue-400 rounded-full"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight
                    }}
                    animate={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );

    return (
        <div className="pt-16 bg-gradient-to-b from-black to-gray-950 overflow-hidden">
            <div className="-z-0">
                <Particles />
            </div>
            {/* Hero Section */}
            <section className="relative py-20">
                <div className="absolute inset-0  bg-black backdrop-blur-3xl">
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
                </div>

                <motion.div
                    className="relative max-w-7xl mx-auto px-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative inline-block"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-3xl"
                        />
                        <h1 className="py-4 text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-100 to-blue-500">
                            Let's Create Together
                        </h1>
                    </motion.div>

                    <motion.p
                        className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Have a project in mind? We'd love to hear about it.
                    </motion.p>
                </motion.div>
            </section>

            {/* Contact Methods & Form */}
            <section className="relative z-10 max-w-4xl mx-auto py-16 px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Methods */}
                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl font-bold text-white"
                        >
                            Get in Touch
                        </motion.h2>
                        <p className="text-gray-400">
                            Whether you have a question about our services or anything else, we're here to help.
                        </p>

                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-gray-900/50 border border-gray-700 rounded-lg p-4 hover:border-blue-400 transition-all"
                                whileHover={{ scale: 1.05 }}
                            >
                                {method.icon}
                                <div>
                                    <h4 className="text-lg text-white">{method.title}</h4>
                                    <p className="text-gray-400">{method.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="relative"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-3xl blur-3xl"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        <form onSubmit={handleSubmit} className="relative space-y-6 p-8 rounded-2xl bg-gray-900/50 backdrop-blur-xl border border-gray-800">
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
                                            className="mt-1 w-full rounded-lg bg-gray-900/50 border border-gray-700 focus:border-blue-500 text-white focus:ring-2 focus:ring-blue-500  p-3 placeholder-gray-500 transition-all duration-300"
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
                                        className="mt-1 w-full rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent p-3 placeholder-gray-500"
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
            </section>
        </div>
    );
};

export default Contact;