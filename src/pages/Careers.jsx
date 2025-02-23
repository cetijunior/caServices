import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Search,
    MapPin,
    Clock,
    Briefcase,
    Filter,
    Mail,
    Workflow,
    PlusSquare,
    ArrowUpFromLine,
    ChevronDown
} from "lucide-react";
import careersData from "../data/careersData";
import Particles from "../components/ui/Particles";

const Careers = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState("All");
    const [expandedJob, setExpandedJob] = useState(null);

    const jobTypes = ["All", ...new Set(careersData.map(job => job.type))];

    const filteredJobs = careersData.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === "All" || job.type === selectedType;
        return matchesSearch && matchesType;
    });

    const toggleJobExpansion = (index) => {
        setExpandedJob(expandedJob === index ? null : index);
    };

    return (
        <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <Particles />
                </div>

                <div className="min-h-[70vh] flex justify-center items-center text-center relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                            Join Our Team
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                            Be part of something extraordinary. We're looking for talented individuals
                            passionate about innovation and making a difference.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                            onClick={() => document.getElementById("job-listings").scrollIntoView({ behavior: "smooth" })}
                        >
                            View Open Positions
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <div className="sticky top-15 lg:top-0 z-10 bg-gray-950/90 backdrop-blur-sm py-4">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search positions or locations..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Filter className="text-gray-400 h-5 w-5" />
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="w-full sm:w-auto px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                            >
                                {jobTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Job Listings */}
            <div id="job-listings" className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
                <div className="space-y-6">
                    {filteredJobs.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12 text-gray-400"
                        >
                            No positions found matching your criteria.
                        </motion.div>
                    ) : (
                        filteredJobs.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                            >
                                {/* Job Header */}
                                <div
                                    className="p-6 cursor-pointer"
                                    onClick={() => toggleJobExpansion(index)}
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                        <div className="space-y-2">
                                            <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                                {job.title}
                                                <motion.span
                                                    animate={{ rotate: expandedJob === index ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ChevronDown className="h-5 w-5 text-gray-400" />
                                                </motion.span>
                                            </h2>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="h-4 w-4" />
                                                    {job.location}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Briefcase className="h-4 w-4" />
                                                    {job.type}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-4 w-4" />
                                                    {job.applyBy || "Open until filled"}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <a
                                                href={`mailto:bsncetijunior@gmail.com?subject=Application for ${job.title}`}
                                                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Expandable Content */}
                                <motion.div
                                    initial={false}
                                    animate={{ height: expandedJob === index ? "auto" : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 border-t border-gray-800 space-y-4">
                                        {job.description && (
                                            <div className="space-y-2">
                                                <h3 className="text-lg font-medium text-blue-400">Description</h3>
                                                <p className="text-gray-400">{job.description}</p>
                                            </div>
                                        )}

                                        {job.requirements && (
                                            <div className="space-y-2">
                                                <h3 className="text-lg font-medium text-blue-400">Requirements</h3>
                                                <p className="text-gray-400">{job.requirements}</p>
                                            </div>
                                        )}

                                        {job.responsibilities && (
                                            <div className="space-y-2">
                                                <h3 className="text-lg font-medium text-blue-400">Responsibilities</h3>
                                                <p className="text-gray-400">{job.responsibilities}</p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>

            {/* Benefits Section */}
            {/* <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl font-bold text-center mb-12"
                >
                    Why Join Us?
                </motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {[
                        { icon: Workflow, title: "Growth & Development", description: "Continuous learning opportunities and career advancement paths" },
                        { icon: PlusSquare, title: "Work-Life Balance", description: "Flexible working hours and remote work options" },
                        { icon: ArrowUpFromLine, title: "Competitive Benefits", description: "Comprehensive healthcare, retirement plans, and more" }
                    ].map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-6 rounded-xl hover:border-cyan-600 transition-all duration-300 hover:scale-105 bg-gray-900/50 border border-gray-800"
                        >
                            <benefit.icon className="h-8 w-8 text-blue-400 mb-4" />
                            <h3 className="text-lg sm:text-xl font-semibold mb-3">{benefit.title}</h3>
                            <p className="text-gray-400">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section> */}
        </div>
    );
};

export default Careers;