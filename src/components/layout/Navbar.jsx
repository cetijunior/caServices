import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Waves from "../Waves";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? "unset" : "hidden";
    };


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling effect
        });
    };


    // Handle navbar background on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Projects", path: "/projects" },
        { title: "Services", path: "/services" },
        { title: "Careers", path: "/careers" },
        { title: "Contact", path: "/contact" },
    ];

    return (
        <nav className={`fixed select-none  top-0 left-0 right-0 z-[100] transition-colors duration-500 ease-in-out
            ${scrolled
                ? "bg-gradient-to-r from-gray-900 to-black "
                : ""}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div onClick={scrollToTop} className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-3 text-white group transition-transform duration-300 hover:scale-105"
                    >
                        <img src="/assets/logos/logo.png" alt="CA Logo" className="w-8 h-8 hover:animate-spin" />
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent
                            group-hover:from-blue-300 group-hover:to-teal-300 transition-all duration-300">
                            CA
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(({ title, path }) => (
                            <Link
                                key={title}
                                to={path}
                                className={`relative text-gray-300 transition-all duration-300 text-sm font-medium 
                                    group hover:text-white
                                    ${location.pathname === path ? "text-blue-400" : ""}`}
                            >
                                {title}
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 
                                    group-hover:w-full
                                    ${location.pathname === path ? "w-full" : ""}`}>
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className={`md:hidden p-2 rounded-md transition-colors duration-300
                            hover:text-white focus:outline
                            ${scrolled ? 'text-gray-400 hover:bg-gray-700/50' : 'text-white hover:bg-white/10'}`}
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
                        ) : (
                            <Menu className="h-6 w-6 transition-transform duration-300" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden fixed h-screen top-16 inset-0  shadow-lg backdrop-blur-sm
                    transition-all bg-black duration-500 ease-in-out transform
                    ${isOpen
                        ? "opacity-100 translate-x-0  "
                        : "opacity-0 translate-x-full pointer-events-none"}`}
            >
                <Waves
                    lineColor="#ffffff40"
                    backgroundColor="rgba(0, 0, 0, 0.95)"
                    waveSpeedX={0.03}
                    waveSpeedY={0.02}
                    waveAmpX={35}
                    waveAmpY={25}
                    friction={0.95}
                    tension={0.025}
                    maxCursorMove={80}
                    xGap={24}
                    yGap={40}
                />
                <div className="flex flex-col items-center justify-start space-y-10 py-28 h-full">
                    {navLinks.map(({ title, path }, index) => (
                        <Link
                            key={title}
                            to={path}
                            onClick={toggleMenu}
                            style={{
                                transitionDelay: `${isOpen ? index * 100 : 0}ms`
                            }}
                            className={`relative border rounded-4xl px-14 p-2 text-white text-2xl font-medium
                                transition-all duration-300 ease-out transform
                                ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}
                                hover:text-blue-400 hover:scale-105
                                ${location.pathname === path ? "border-2 border-blue-400" : ""}`}
                        >
                            {title}
                            {/* <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 
                                transition-all duration-300 hover:w-full
                                ${location.pathname === path ? "w-full" : ""}`}>
                            </span> */}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;