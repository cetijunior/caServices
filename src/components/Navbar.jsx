import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Prevent scrolling when menu is open
        document.body.style.overflow = !isOpen ? "hidden" : "unset";
    };

    return (
        <nav className="fixed select-none top-0 left-0 right-0 z-50 bg-gradient-to-l from-black to-gray-900 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-3 text-white hover:opacity-90 transition"
                    >
                        <img src="/assets/logos/logo.png" alt="CA Logo" className="md:size-10 w-8 h-8" />
                        <span className="md:text-3xl text-2xl  font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent">
                            CA
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {[
                            ["Home", "/"],
                            ["About", "/about"],
                            ["Projects", "/projects"],
                            ["Services", "/services"],
                            ["Careers", "/careers"],
                            ["Contact", "/contact"],
                        ].map(([title, url]) => (
                            <Link
                                key={title}
                                to={url}
                                className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 text-sm font-medium"
                            >
                                {title}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? (
                            <X className="transition-all duration-75 h-8 w-8" aria-hidden="true" />
                        ) : (
                            <Menu className="transition-all duration-75 h-8 w-8" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`
          md:hidden top-16 fixed inset-0 bg-gradient-to-r from-black to-gray-900 backdrop-blur-sm transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}
        `}
            >
                <div className="flex flex-col items-center justify-evenly h-full space-y-8 p-4">
                    {[
                        ["Home", "/"],
                        ["About", "/about"],
                        ["Projects", "/projects"],
                        ["Services", "/services"],
                        ["Careers", "/careers"],
                        ["Contact", "/contact"],
                    ].map(([title, url]) => (
                        <Link
                            key={title}
                            to={url}
                            onClick={toggleMenu}
                            className="text-white text-2xl font-medium hover:text-blue-400 transition-colors duration-200"
                        >
                            [ {title} ]
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;