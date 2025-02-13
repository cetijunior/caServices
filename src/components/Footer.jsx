import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-black/90 py-6 mt-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="text-sm text-gray-500">
                    © {new Date().getFullYear()} NEBULA - All Rights Reserved
                </div>
                <div className="space-x-4 text-gray-400 text-sm mt-4 md:mt-0">
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/careers">Careers</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer

