import React from "react";
import { motion } from "framer-motion";
import {
    Linkedin,
    Twitter,
    Github,
    ArrowRight,
    Users,
    Timer,
    Building,
    Award
} from "lucide-react";

const stats = [
    { icon: <Users className="w-6 h-6" />, value: "50+", label: "Team Members" },
    { icon: <Timer className="w-6 h-6" />, value: "10+", label: "Years Experience" },
    { icon: <Building className="w-6 h-6" />, value: "100+", label: "Projects Completed" },
    { icon: <Award className="w-6 h-6" />, value: "25+", label: "Awards Won" }
];

const teamMembers = [
    {
        name: "John Doe",
        role: "CEO",
        image: "/path-to-image.jpg",
        bio: "Visionary leader with 15+ years of experience in tech innovation.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "John Doe",
        role: "CEO",
        image: "/path-to-image.jpg",
        bio: "Visionary leader with 15+ years of experience in tech innovation.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "John Doe",
        role: "CEO",
        image: "/path-to-image.jpg",
        bio: "Visionary leader with 15+ years of experience in tech innovation.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    // Add more team members here...
];

const TeamSection = () => {
    return (
        <section className="bg-gradient-to-b from-gray-900 to-black py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                        Our Leadership Team
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Meet the visionaries behind our success. A team of dedicated professionals
                        pushing the boundaries of innovation.
                    </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/30 border border-gray-700/30 rounded-2xl p-6 text-center group hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="flex justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-gray-400 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative overflow-hidden rounded-2xl bg-gray-800/30 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300">
                                {/* Image */}
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="relative p-6">
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-blue-400 font-medium mb-3">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-400 mb-4">
                                        {member.bio}
                                    </p>

                                    {/* Social Links */}
                                    <div className="flex items-center space-x-4">
                                        {Object.entries(member.social).map(([platform, link], idx) => {
                                            const Icon = {
                                                linkedin: Linkedin,
                                                twitter: Twitter,
                                                github: Github
                                            }[platform];

                                            return (
                                                <a
                                                    key={idx}
                                                    href={link}
                                                    className="text-gray-400 hover:text-white transition-colors duration-300"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Icon className="w-5 h-5" />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <a
                        href="/careers"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
                    >
                        <span>Join Our Team</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;