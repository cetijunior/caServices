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
    { icon: <Users className="w-6 h-6 text-blue-400 group-hover:text-blue-500 transition-all duration-300" />, value: "50+", label: "Team Members" },
    { icon: <Timer className="w-6 h-6 text-teal-400 group-hover:text-teal-500 transition-all duration-300" />, value: "10+", label: "Years Experience" },
    { icon: <Building className="w-6 h-6 text-yellow-400 group-hover:text-yellow-500 transition-all duration-300" />, value: "100+", label: "Projects Completed" },
    { icon: <Award className="w-6 h-6 text-purple-400 group-hover:text-purple-500 transition-all duration-300" />, value: "25+", label: "Awards Won" }
];

const teamMembers = [
    {
        name: "CJ",
        role: "CEO",
        image: "/assets/images/twitchpfp.jpg",
        bio: "Visionary leader with 15+ years of experience in tech innovation.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "Archie",
        role: "CTO",
        image: "/assets/images/archie.jpeg",
        bio: "Tech strategist and AI expert leading next-gen software solutions.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        name: "CJ",
        role: "CEO",
        image: "/assets/images/twitchpfp.jpg",
        bio: "Visionary leader with 15+ years of experience in tech innovation.",
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
];

const TeamSection = () => {
    return (
        <section className="relative bg-black py-24 px-6">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-90"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto text-center">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-extrabold text-white tracking-wide">
                        Meet Our Team
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
                        A team of passionate innovators pushing boundaries in technology.
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
                            className="bg-gray-800/40 border border-gray-700/40 rounded-2xl p-6 text-center group hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                {stat.icon}
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Team Members Grid */}
                {/* <div className="grid md:grid-cols-3 gap-10"> */}
                <div className="grid md:grid-cols-3 content-center gap-10">

                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative overflow-hidden rounded-2xl bg-gray-900/40 border border-gray-800/40 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group-hover:scale-[1.02]">
                                {/* Image */}
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
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

                                    {/* Social Icons */}
                                    <div className="flex justify-between px-10 items-center space-x-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                                        {Object.entries(member.social).map(([platform, link], idx) => {
                                            const Icon = {
                                                twitter: Twitter,
                                                linkedin: Linkedin,
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

                {/* Call to Action */}
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
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;
