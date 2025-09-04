import React from "react";
import { FaCloud, FaRobot, FaCode, FaShoppingCart, FaMobileAlt, FaUsers, FaCheckCircle, FaPalette, FaSearch } from "react-icons/fa";

const services = [
  {
    icon: <FaRobot className="text-green-500 text-3xl" />,
    title: "AI/ML & GenAI",
  },
  {
    icon: <FaCloud className="text-green-500 text-3xl" />,
    title: "Cloud Engineering",
  },
  {
    icon: <FaCode className="text-green-500 text-3xl" />,
    title: "Software Development",
  },
  {
    icon: <FaShoppingCart className="text-green-500 text-3xl" />,
    title: "E-commerce",
  },
  {
    icon: <FaPalette className="text-green-500 text-3xl" />,
    title: "UI/UX",
  },
  {
    icon: <FaSearch className="text-green-500 text-3xl" />,
    title: "QA",
  },
  {
    icon: <FaCode className="text-green-500 text-3xl" />,
    title: "Web Development",
  },
  {
    icon: <FaMobileAlt className="text-green-500 text-3xl" />,
    title: "Mobile App Development",
  },
  {
    icon: <FaUsers className="text-green-500 text-3xl" />,
    title: "Dedicated Teams",
  },
];

const ServiceGrid: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center tracking-tight">Software Development & Consulting</h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-10 text-center max-w-3xl mx-auto font-medium">
        We help startups and enterprises achieve their business goals with advanced software solutions. Explore our luxury portfolio of custom software development services:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-green-50 border border-gray-200 rounded-xl shadow-lg px-6 py-7 hover:scale-105 transition-transform duration-300 group">
            <div className="flex items-center gap-4">
              <span className="bg-green-100 rounded-full p-3 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </span>
              <span className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300">{service.title}</span>
            </div>
            <FaCheckCircle className="text-green-400 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
