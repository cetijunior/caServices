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
    Code,
    GraduationCap,
    Heart,
    Globe,
    Sparkles,
    Lightbulb,
    Trophy
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { teamMembers } from "../data/teamData";

import Lanyard1 from "../components/ui/LanyardC";
import Lanyard2 from "../components/ui/LanyardA";

// Import your background components (ensure these exist in your project)
import Particles from "../components/ui/Particles";
import Waves from "../components/ui/Waves";
import SpotlightCard from "../components/ui/SpotlightCard";




const stats = [
    { icon: <Users className="w-6 h-6 text-blue-400 group-hover:text-blue-500 transition-all duration-300" />, value: "50+", label: "Team Members" },
    { icon: <Timer className="w-6 h-6 text-teal-400 group-hover:text-teal-500 transition-all duration-300" />, value: "10+", label: "Years Experience" },
    { icon: <Building className="w-6 h-6 text-yellow-400 group-hover:text-yellow-500 transition-all duration-300" />, value: "100+", label: "Projects Completed" },
    { icon: <Award className="w-6 h-6 text-purple-400 group-hover:text-purple-500 transition-all duration-300" />, value: "25+", label: "Awards Won" }
];

const visionCards = [
    {
        icon: <Heart className="w-8 h-8 text-rose-400" />,
        title: "Affordable, Beautiful Websites for All",
        description: "We believe a strong online presence should be a right, not a privilege. Our commitment is to deliver professional web design that's accessible to everyone, regardless of budget."
    },
    {
        icon: <Globe className="w-8 h-8 text-blue-400" />,
        title: "Empowering Dreams",
        description: "From small businesses to artists, freelancers to dreamers - we're here to help you shine online. Your story deserves to be told beautifully and reach its audience effectively."
    },
    {
        icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
        title: "Quality Without Compromise",
        description: "We combine cutting-edge technology with timeless design principles to create websites that not only look stunning but perform excellently across all devices."
    }
];

const AboutSection = () => {
    const navigate = useNavigate();

    const navigateToMember = (member) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setTimeout(() => {
            navigate(`/about/${member.id}`);
        }, 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            {/* Background Components */}

            {/* Hero Section */}


            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <Particles />
                </div>

                <div className="lg:min-h-[50vh] min-h-[70vh] flex justify-center items-center text-center relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl pb-2 sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                            Crafting Digital Excellence
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                            Where innovation meets accessibility. We're dedicated to making the web beautiful and accessible for everyone.
                        </p>

                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="relative py-24 px-6 bg-gradient-to-b from-black to-gray-900">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-7xl mx-auto text-center mb-16"
                >
                    <h2 className="text-5xl font-bold text-white mb-6">Our Vision</h2>
                    <p className="text-xl text-gray-300 italic max-w-3xl mx-auto">
                        "At the heart of our mission is a simple belief: that every person and every business, regardless of size, deserves to shine online."
                    </p>
                </motion.div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {visionCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gray-800/40 border border-gray-700/40 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="flex justify-center mb-6">{card.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                            <p className="text-gray-300">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <div className=" bg-gradient-to-t from-black to bg-gray-900 space-y-16 py-12">

                {/* Values Section */}
                <section className="container mx-auto space-y-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Values ✨</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <SpotlightCard className="p-6">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Lightbulb className="w-6 h-6 text-blue-500" />
                                    <h3 className="text-xl font-semibold">Innovation with Purpose 💡</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    We push the boundaries of web design while keeping our solutions practical
                                    and accessible. Every innovation serves a purpose in enhancing your digital presence.
                                </p>
                            </div>
                        </SpotlightCard>

                        <SpotlightCard className="p-6">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Trophy className="w-6 h-6 text-yellow-500" />
                                    <h3 className="text-xl font-semibold">Client Success First 🏆</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Your success is our success. We measure our achievements through the growth
                                    and satisfaction of our clients, building lasting partnerships that drive mutual growth.
                                </p>
                            </div>
                        </SpotlightCard>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="container mx-auto space-y-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Impact 📈</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <SpotlightCard key={index} className="p-6">
                                <div className="flex flex-col items-center space-y-4 text-center">
                                    <div className="text-blue-500">
                                        {stat.icon}
                                    </div>
                                    <span className="text-3xl font-bold">{stat.value}</span>
                                    <span className="text-gray-600 dark:text-gray-300">{stat.label}</span>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </section>
            </div>



            {/* Team Section*/}
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
                                className="group h-full items-center justify-center flex"
                            >
                                <div className="bg-gray-900/40 border border-gray-800/40 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                                    {/* Image Section */}
                                    <div className="relative h-full">
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
                                                    onClick={() => navigateToMember(member)}
                                                    className="border md:mr-0 -mr-10 md:scale-100 scale-75 p-1 px-3 rounded-2xl transition-all duration-300 border-blue-500 text-blue-400 hover:bg-blue-500/20 hover:text-white"
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
                <div className="-mt-2 container rounded-2xl mx-auto md:visible hidden md:grid grid-cols-2">
                    <Lanyard1 position={[0, 0, 20]} gravity={[0, -40, 0]} />
                    <Lanyard2 position={[0, 0, 20]} gravity={[0, -40, 0]} />

                </div>
            </section>


            {/* Join Us Section with Enhanced Message */}
            <section className="relative mt-4 pb-24 px-6 bg-gradient-to-b from-black to-blue-900/20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Be Part of Our Story
                    </h2>
                    <p className="text-gray-300 mb-8">
                        Join us in our mission to democratize web design. Together, we can create a digital landscape where every voice has the opportunity to be heard and every business has the tools to succeed.
                    </p>

                    <div className="flex items-center justify-evenly">
                        <Link
                            onClick={scrollToTop}
                            to="/careers"
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-full overflow-hidden"
                        >
                            <div className="absolute inset-0 w-full h-full bg-white/5 border border-white/10  group-hover:bg-white/10" />
                            <div className="absolute inset-0 w-full h-full  shadow-2xl shadow-blue-400 bg-gradient-to-br from-white/20 via-blue-600/20 to-black/30 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300" />
                            <div className="relative flex items-center justify-center text-white">
                                View Open Positions
                                <motion.span
                                    initial={{ x: -4, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.5 }}
                                    className="ml-2 text-xl"
                                >
                                    →
                                </motion.span>
                            </div>
                        </Link>

                        <Link
                            onClick={scrollToTop}
                            to="/contact"
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-full overflow-hidden"
                        >
                            <div className="absolute inset-0 w-full h-full bg-white/5 border border-white/10  group-hover:bg-white/10" />
                            <div className="absolute inset-0 w-full h-full  shadow-2xl shadow-blue-400 bg-gradient-to-br from-white/20 via-blue-600/20 to-black/30 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300" />
                            <div className="relative flex items-center justify-center text-white">
                                Contact Us!
                                <motion.span
                                    initial={{ x: -4, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.5 }}
                                    className="ml-2 text-xl"
                                >
                                    →
                                </motion.span>
                            </div>
                        </Link>
                    </div>
                </motion.div>
            </section>

        </div>
    );
};

export default AboutSection;
