import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#012435] mt-4 text-white">
            {/* Main content */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left p-8 mt-6">

                {/* Who We Are */}
                <div>
                    <h1 className="text-xl font-semibold mb-3">WHO WE ARE</h1>
                    <p className="text-gray-500 text-md leading-relaxed tracking-wide mt-4 font-sans font-light">
                        Team S2S is committed towards providing quality Technical resource at
                        affordable price to IT company community augmented and hence contribute
                        towards making India an IT power house.
                    </p>
                    <p className="text-gray-500 text-md leading-relaxed tracking-wide mt-4 font-sans font-light">
                        Team S2S strongly believes in imparting robust and industry-focused
                        technical knowledge along with leadership qualities that would enable the
                        creation of a better and strong nation, a nation that can hold its head
                        high in the community of nations.
                    </p>
                    <p className="text-gray-300 text-md mt-6 tracking-wider font-sans font-semibold">
                        Trusted by more than 1000+ people
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h1 className="text-xl font-semibold mb-3 ml-24">QUICK LINKS</h1>
                    <ul className="space-y-2 text-gray-500 ml-32 font-sans text-md">
                        <li><a href="/" className="hover:text-gray-300">Home</a></li>
                        <li><a href="/about" className="hover:text-gray-300">About</a></li>
                        <li><a href="/services" className="hover:text-gray-300">Services</a></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h1 className="text-xl font-semibold mb-3">CONTACT US</h1>
                    <ul className="space-y-3 text-gray-500 text-md font-sans">
                        <li className="flex items-start space-x-2">
                            <MdLocationOn size={20} className="text-gray-400 mt-1" />
                            <span>
                                Module-21, Asansol Webel IT Park,<br />
                                Asansol-713304, West Bengal, INDIA
                            </span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <MdPhone size={20} className="text-gray-400" />
                            <a href="tel:+913413556956" className="hover:text-gray-300">
                                +91-3413556956
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <MdEmail size={20} className="text-gray-400" />
                            <a href="mailto:info@steptosoft.com" className="hover:text-gray-300">
                                info@steptosoft.com
                            </a>
                        </li>
                    </ul>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-4 text-gray-500">
                        <a href="https://facebook.com" className="text-blue-600">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://instagram.com" className="text-pink-500">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://twitter.com" className="text-blue-400">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://youtube.com" className="text-red-600">
                            <FaYoutube size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Full-width bottom strip */}
            <div className="w-full bg-[#535556] text-center text-md py-4 font-sans text-gray-800">
                &copy; {new Date().getFullYear()} Digital. All Rights Reserved | Design by
                <p className="text-orange-400 font-semibold text-md inline-block ml-1 font-sans">
                    Step To Soft & Team
                </p>
            </div>
        </footer>
    );
};

export default Footer;
