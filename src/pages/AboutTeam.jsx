import React from "react";
import { useParams } from "react-router-dom";
import { teamMembers } from "../data/teamData";
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    ExternalLink,
    Code,
    Brain,
    Terminal,
    Award,
    GraduationCap,
    BookOpen,
    Calendar,
    Globe,
    MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";

const AboutTeam = () => {
    const { userId } = useParams();
    const member = teamMembers.find((member) => member.id === userId);

    if (!member) {
        return <div>Member not found</div>;
    }

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-6"
                >
                    <h1 className="text-7xl font-bold text-white mb-6">{member.name}</h1>
                    <p className="text-3xl text-blue-400 mb-8">{member.role}</p>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">{member.tagline}</p>

                    <div className="flex justify-center gap-6">
                        {Object.entries(member.social).map(([platform, link]) => {
                            const Icon = {
                                twitter: Twitter,
                                linkedin: Linkedin,
                                github: Github,
                            }[platform];

                            return (
                                <a
                                    key={platform}
                                    href={link}
                                    className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon className="w-8 h-8" />
                                </a>
                            );
                        })}
                    </div>
                </motion.div>
            </section>

            {/* Main Content */}
            <main className="relative z-10 bg-black">
                {/* About Section */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="container mx-auto grid lg:grid-cols-2 gap-12 items-center"
                        >
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
                                <p className="text-gray-300 text-lg mb-6">{member.bio}</p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <Globe className="w-5 h-5" />
                                        <span>{member.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <Mail className="w-5 h-5" />
                                        <span>{member.email}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <Calendar className="w-5 h-5" />
                                        <span>{member.availability}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                                {Object.entries(member.skills).map(([category, skills]) => (
                                    <div key={category} className="bg-gray-900/50 rounded-xl p-6">
                                        <h3 className="text-white font-semibold mb-4 capitalize">{category}</h3>
                                        <div className="flex flex-wrap cursor-default gap-2">
                                            {skills.map((skill) => (
                                                <div
                                                    key={skill}
                                                    className="border rounded-2xl px-2 py-1 hover:scale-105 transition-all duration-200 text-blue-400"
                                                >
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="py-24 px-6 bg-gray-900/30">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {member.projects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group"
                                    >
                                        <div className="bg-gray-800/50 border-gray-700/50 overflow-hidden">
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                                <p className="text-gray-400 mb-4">{project.description}</p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.tech.map((tech) => (
                                                        <div
                                                            key={tech}
                                                            className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm"
                                                        >
                                                            {tech}
                                                        </div>
                                                    ))}
                                                </div>
                                                <button
                                                    className="w-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg py-2 px-4 transition-all duration-300 flex items-center justify-center gap-2"
                                                >
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2"
                                                    >
                                                        View Project <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>
                            <div className="space-y-8">
                                {member.experience.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-gray-900/50 rounded-xl p-8 border border-gray-800/50"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                                <p className="text-blue-400">{exp.company}</p>
                                            </div>
                                            <span className="text-gray-400">{exp.period}</span>
                                        </div>
                                        <ul className="space-y-2">
                                            {exp.highlights.map((highlight, idx) => (
                                                <li key={idx} className="text-gray-300 flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Education Section */}
                <section className="py-24 px-6 bg-gray-900/30">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold text-white mb-8">Education</h2>
                            <div className="space-y-6">
                                {member.education?.length > 0 ? (
                                    member.education.map((edu, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
                                        >
                                            <div className="flex items-start gap-4">
                                                <GraduationCap className="w-6 h-6 text-blue-400" />
                                                <div>
                                                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                                    <p className="text-gray-400">{edu.school}</p>
                                                    <p className="text-gray-500">{edu.year}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-400">No education details available.</p>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Speaking Engagements Section */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold text-white mb-8">Speaking Engagements</h2>
                            <div className="space-y-6">
                                {member.speaking?.length > 0 ? (
                                    member.speaking.map((event, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50"
                                        >
                                            <div className="flex items-start gap-4">
                                                <MessageSquare className="w-6 h-6 text-blue-400" />
                                                <div>
                                                    <h3 className="text-xl font-bold text-white">{event.event}</h3>
                                                    <p className="text-gray-400">{event.topic}</p>
                                                    <p className="text-gray-500">{event.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-400">No speaking engagements available.</p>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-24 px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
                            <p className="text-gray-300 mb-8">
                                Interested in collaboration, speaking engagements, or just want to chat about technology?
                                Feel free to reach out!
                            </p>
                            <div className="flex justify-center gap-4">
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 transition-all duration-300 flex items-center gap-2"
                                >
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="flex items-center gap-2"
                                    >
                                        <Mail className="w-5 h-5" />
                                        Email Me
                                    </a>
                                </button>
                                <button
                                    className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg py-2 px-4 transition-all duration-300 flex items-center gap-2"
                                >
                                    <a
                                        href={member.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                        LinkedIn
                                    </a>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900/30 py-12 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex justify-center gap-6 mb-8">
                        {Object.entries(member.social).map(([platform, link]) => {
                            const Icon = {
                                twitter: Twitter,
                                linkedin: Linkedin,
                                github: Github,
                            }[platform];

                            return (
                                <a
                                    key={platform}
                                    href={link}
                                    className="text-gray-400 hover:text-white transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon className="w-6 h-6" />
                                </a>
                            );
                        })}
                    </div>
                    <p className="text-gray-400">© {new Date().getFullYear()} {member.name}. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default AboutTeam;