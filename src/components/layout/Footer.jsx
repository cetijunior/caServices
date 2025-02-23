import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    const location = useLocation(); // Detect current page

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling effect
        });
    };


    return (
        <footer className="mx-auto bg-black/95 text-gray-400 border-t z-[999] border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div
                        className="space-y-4">
                        <div onClick={scrollToTop}
                            className="flex items-center cursor-pointer space-x-3">
                            <img src="/assets/logos/logo.png" alt="CA Logo" className="w-10 h-10 animate-spin" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                                CA Services
                            </span>
                        </div>
                        <p className="text-sm text-gray-500">
                            Pushing the boundaries of innovation and technology to create solutions that shape the future.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {/* External Links (Social Media) */}
                            {[
                                { icon: Facebook, url: "https://facebook.com" },
                                { icon: Twitter, url: "https://twitter.com" },
                                { icon: Instagram, url: "https://instagram.com" },
                                { icon: Linkedin, url: "https://linkedin.com" },
                            ].map(({ icon: Icon, url }, index) => (
                                <a
                                    key={index}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "About", path: "/about" },
                                { name: "Projects", path: "/projects" },
                                { name: "Services", path: "/services" },
                                { name: "Careers", path: "/careers" },
                                { name: "Contact", path: "/contact" },
                            ].map(({ name, path }) => (
                                <li key={name}>
                                    <Link
                                        to={path}
                                        onClick={scrollToTop}
                                        className={`text-sm hover:text-blue-400 transition-colors duration-200 block
                                            ${location.pathname === path ? "text-blue-400" : ""}`}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            {[
                                "Web Development",
                                "Mobile Apps",
                                "Cloud Solutions",
                                "AI & Machine Learning",
                                "Consulting",
                            ].map((service) => (
                                <li key={service}>
                                    <Link
                                        to="/services"
                                        onClick={scrollToTop}
                                        className="text-sm hover:text-blue-400 transition-colors duration-200 block"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:cawebsiteservices@gmail.com" className="text-sm flex items-center space-x-2 hover:text-blue-400 transition-colors">
                                    <Mail className="w-4 h-4" />
                                    <span>cawebsiteservices@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+1234567890" className="text-sm flex items-center space-x-2 hover:text-blue-400 transition-colors">
                                    <Phone className="w-4 h-4" />
                                    <span>+1 (234) 567-890</span>
                                </a>
                            </li>
                            <li className="flex items-start space-x-2">
                                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                <span className="text-sm">
                                    123 Innovation Street,<br />
                                    Tech Valley, CA 94043<br />
                                    United States
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-sm text-gray-500">
                        © {new Date().getFullYear()} CA-SERVICES. All rights reserved.
                    </div>
                    <div className="flex space-x-6 text-sm">
                        {[
                            { name: "Privacy Policy", path: "/privacy" },
                            { name: "Terms of Service", path: "/terms" },
                            { name: "Cookie Policy", path: "/cookies" },
                        ].map(({ name, path }) => (
                            <Link key={name} to={path} className="hover:text-blue-400 transition-colors">
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
