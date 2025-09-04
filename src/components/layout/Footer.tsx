import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-green-300 text-white mt-6">
      {/* Main content */}
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between px-6 py-10 rounded-xl backdrop-blur-sm bg-opacity-90 gap-10">
        
  {/* Who We Are */}
  <div className="md:w-1/3 t flex flex-col justify-start">
          <h2 className="text-2xl font-bold mb-4">WHO WE ARE</h2>
          <p className="text-gray-100 text-sm leading-relaxed mb-3">
            Team S2S is committed towards providing quality technical resources
            at affordable prices to the IT community, contributing towards making
            India an IT powerhouse.
          </p>
          <p className="text-gray-100 text-sm leading-relaxed mb-3">
            We believe in imparting robust, industry-focused knowledge along with
            leadership qualities that help build a stronger nation—one that stands
            tall among the community of nations.
          </p>
          <p className="text-yellow-200 text-sm font-semibold">
            Trusted by more than 1000+ people
          </p>
        </div>

  {/* Quick Links */}
  <div className="md:w-1/4 text-center flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">QUICK LINKS</h2>
          <ul className="space-y-2 text-gray-100 text-sm">
            <li>
              <a href="/" className="hover:text-green-200 transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-200 transition-colors">About</a>
            </li>
            <li>
              <a href="/services" className="hover:text-green-200 transition-colors">Services</a>
            </li>
          </ul>
        </div>

  {/* Contact Us */}
  <div className="md:w-1/3 text-right flex flex-col items-end justify-end">
          <h2 className="text-2xl font-bold mb-4">CONTACT US</h2>
          <ul className="space-y-3 text-gray-100 text-sm">
            <li className="flex items-start gap-2">
              <MdLocationOn size={20} className="text-green-200 mt-1" />
              <span>
                Module-21, Asansol Webel IT Park,<br />
                Asansol-713304, West Bengal, INDIA
              </span>
            </li>
            <li className="flex items-center gap-2">
              <MdPhone size={20} className="text-green-200" />
              <a href="tel:+913413556956" className="hover:text-green-200 transition-colors">
                +91-3413556956
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail size={20} className="text-green-200" />
              <a href="mailto:info@steptosoft.com" className="hover:text-green-200 transition-colors">
                info@steptosoft.com
              </a>
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex space-x-4 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 shadow hover:bg-blue-600 transition"
            >
              <FaFacebookF size={18} className="text-blue-600 hover:text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 shadow hover:bg-pink-500 transition"
            >
              <FaInstagram size={18} className="text-pink-500 hover:text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 shadow hover:bg-blue-400 transition"
            >
              <FaTwitter size={18} className="text-blue-400 hover:text-white" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 shadow hover:bg-red-600 transition"
            >
              <FaYoutube size={18} className="text-red-600 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
