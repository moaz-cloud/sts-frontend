

import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-gradient-to-r from-blue-500 to-green-300 shadow-md px-4 py-3">
            <div className="flex justify-between items-center mx-auto max-w-7xl">
                <div className="flex items-center">
                    <img src="/src/assets/logo3.png" alt="STS Logo" className="h-10 w-10 object-contain" />
                    <span className="font-bold text-2xl text-white tracking-wide">TEP TO SOFT</span>
                </div>
                <div className="hidden md:flex gap-8">
                    <a href="/" className="text-white font-medium text-base hover:text-green-100 transition-colors duration-200 py-2 px-3">Home</a>
                    <a href="/about" className="text-white font-medium text-base hover:text-green-100 transition-colors duration-200 py-2 px-3">About</a>
                    <a href="/contactus" className="text-white font-medium text-base hover:text-green-100 transition-colors duration-200 py-2 px-3">Contact Us</a>
                    <a href="/login" className="bg-white text-blue-500 font-semibold rounded-lg py-2 px-4 shadow hover:bg-blue-100 transition-colors duration-200">Login</a>
                </div>
                <button
                    className="md:hidden flex items-center text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col gap-2 mt-2 bg-blue-500 rounded-lg shadow p-4 animate-slideIn">
                    <a href="/" className="text-white font-medium text-base hover:text-green-100 transition-colors duration-200 py-2 px-3">Home</a>
                    <a href="/about" className="text-white font-medium text-base hover:text-green-100 transition-colors duration-200 py-2 px-3">About</a>
                    <a href="/contactus" className="text-white font-medium text-base hover:text-green-100 transition-colors duration-200 py-2 px-3">Contact Us</a>
                    <a href="/login" className="bg-white text-blue-500 font-semibold rounded-lg py-2 px-4 shadow hover:bg-blue-100 transition-colors duration-200">Login</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;