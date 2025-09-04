import React from "react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Contact: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-gray-50 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12">
      {/* Left Side: Contact Info */}
      <div className="md:w-1/2 w-full flex flex-col justify-center mb-10 md:mb-0 md:mr-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Contact Us</h1>
        <ul className="space-y-6 text-lg text-gray-700">
          <li className="flex items-center gap-3">
            <MdLocationOn className="text-blue-500 text-2xl" />
            <span>Module-21, Asansol Webel IT Park, Asansol-713304, West Bengal, INDIA</span>
          </li>
          <li className="flex items-center gap-3">
            <MdPhone className="text-blue-500 text-2xl" />
            <a href="tel:+913413556956" className="hover:text-blue-700 transition-colors">+91-3413556956</a>
          </li>
          <li className="flex items-center gap-3">
            <MdEmail className="text-blue-500 text-2xl" />
            <a href="mailto:info@steptosoft.com" className="hover:text-blue-700 transition-colors">info@steptosoft.com</a>
          </li>
        </ul>
      </div>
      {/* Right Side: Contact Form */}
      <div className="md:w-1/2 w-full bg-white rounded-xl shadow-lg p-8 flex flex-col">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
        <form className="space-y-5">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
          <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
