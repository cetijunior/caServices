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
    Award,
    ExternalLink,
    Briefcase,
    Code,
    GraduationCap
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { teamMembers } from "../data/teamData"; // Import teamMembers from teamData.js

const stats = [
    { icon: <Users className="w-6 h-6 text-blue-400 group-hover:text-blue-500 transition-all duration-300" />, value: "50+", label: "Team Members" },
    { icon: <Timer className="w-6 h-6 text-teal-400 group-hover:text-teal-500 transition-all duration-300" />, value: "10+", label: "Years Experience" },
    { icon: <Building className="w-6 h-6 text-yellow-400 group-hover:text-yellow-500 transition-all duration-300" />, value: "100+", label: "Projects Completed" },
    { icon: <Award className="w-6 h-6 text-purple-400 group-hover:text-purple-500 transition-all duration-300" />, value: "25+", label: "Awards Won" }
];

const AboutSection = () => {
    const navigate = useNavigate();

    const navigateToProjects = (member) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling effect
        });

        setTimeout(() => {
            navigate(`/about/${member.id}`); // Navigate to the member's portfolio page using their ID
        }, 300); // Adjust timeout to match smooth scroll duration
    };

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 max-w-7xl mx-auto text-center"
                >
                    <h1 className="text-6xl font-bold text-white mb-6">
                        Innovating the Future of Technology
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We're a team of passionate technologists dedicated to pushing the boundaries
                        of what's possible in software development and artificial intelligence.
                    </p>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="relative py-16 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6"
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
            </section>

            {/* Team Section */}
            <section className="relative py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold text-white mb-4">
                            Meet Our Leaders
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Experienced innovators shaping the future of technology
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="group"
                            >
                                <div className="bg-gray-900/40 border border-gray-800/40 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                                    {/* Image Section */}
                                    <div className="relative h-80">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute transition-transform duration-500 group-hover:scale-105 inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8">
                                        <div className="mb-6">
                                            <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                                            <p className="text-blue-400 text-lg font-medium">{member.role}</p>
                                        </div>

                                        <div className="space-y-6">
                                            {/* Bio */}
                                            <p className="text-gray-300">{member.bio}</p>

                                            {/* Expertise */}
                                            <div>
                                                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                                    <Code className="w-4 h-4" /> Expertise
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {member.skills.technical.map((skill, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Achievements */}
                                            <div>
                                                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                                    <Award className="w-4 h-4" /> Key Achievements
                                                </h4>
                                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                                    {member.experience[0].highlights.map((achievement, idx) => (
                                                        <li key={idx}>{achievement}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Education */}
                                            <div className="flex items-center gap-2 text-gray-300">
                                                <GraduationCap className="w-4 h-4" />
                                                <span>{member.education[0].degree}, {member.education[0].school}</span>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex items-center justify-between mt-8">
                                                {/* Social Links */}
                                                <div className="flex gap-4">
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

                                                {/* Portfolio Button */}
                                                <button
                                                    onClick={() => navigateToProjects(member)}
                                                    className="border p-1 px-3 rounded-2xl transition-all duration-300 border-blue-500 text-blue-400 hover:bg-blue-500/20 hover:text-white"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        View Portfolio <ExternalLink className="w-4 h-4" />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us Section */}
            <section className="relative py-24 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Join Our Journey
                    </h2>
                    <p className="text-gray-300 mb-8">
                        We're always looking for passionate individuals to join our team
                        and help shape the future of technology.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white">
                        <a href="/careers" className="flex items-center gap-2">
                            View Open Positions <ArrowRight className="w-5 h-5" />
                        </a>
                    </button>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutSection;