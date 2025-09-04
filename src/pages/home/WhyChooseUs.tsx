import React from "react";
import { FaCloud, FaLaptopCode, FaMobileAlt, FaShoppingCart, FaUsers, FaCheck, FaDraftingCompass, FaBug } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

const services = [
  { title: "AI / ML / GenAI", icon: <GiArtificialIntelligence className="text-green-600 text-4xl" /> },
  { title: "Cloud Engineering", icon: <FaCloud className="text-green-600 text-4xl" /> },
  { title: "Software Development", icon: <FaLaptopCode className="text-green-600 text-4xl" /> },
  { title: "E-commerce", icon: <FaShoppingCart className="text-green-600 text-4xl" /> },
  { title: "UI/UX", icon: <FaDraftingCompass className="text-green-600 text-4xl" /> },
  { title: "QA & Testing", icon: <FaBug className="text-green-600 text-4xl" /> },
  { title: "Web Development", icon: <FaLaptopCode className="text-green-600 text-4xl" /> },
  { title: "Mobile App Development", icon: <FaMobileAlt className="text-green-600 text-4xl" /> },
  { title: "Dedicated Teams", icon: <FaUsers className="text-green-600 text-4xl" /> },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="px-6 md:px-16 py-14">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Software Development and Consulting
      </h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
       Partnering with us means accelerating your growth through reliable, cutting-edge software solutions. We deliver tailored services that align with your business needs, including:
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border rounded-lg px-6 py-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              {service.icon}
              <span className="font-semibold text-lg">{service.title}</span>
            </div>
            <FaCheck className="text-gray-400 text-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
