import React from 'react';
import { FaCode, FaTools, FaCloud, FaUsers, FaCheckCircle, FaCloudUploadAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-pink-500 text-4xl mb-2" />,
    title: 'Custom Software Development',
    desc: 'We provide custom software development services from startups to enterprises that helps in solving complex challenges with reliable and agile digital solutions.'
  },
  {
    icon: <FaTools className="text-blue-500 text-4xl mb-2" />,
    title: 'Maintenance & Management',
    desc: 'We help your software applications stay relevant by adopting and addressing changing business requirements. We also help with pro-active safety and performance optimization strategies.'
  },
  {
    icon: <FaCloud className="text-green-500 text-4xl mb-2" />,
    title: 'SaaS & Software Products',
    desc: 'We offer end-to-end software product engineering & development services. Our teams align your requirements and forge in building high quality & scalable products.'
  },
  {
    icon: <FaUsers className="text-[#8d6e63] text-4xl mb-2" />,
    title: 'Dedicated Software Developers',
    desc: 'We offer on-demand software developers ranging across a variety of technologies for ease of scalability, reduced time-to-market and enhanced ROI. Setup your team from scratch or extend an existing team with ease.'
  },
  {
    icon: <FaCheckCircle className="text-pink-400 text-4xl mb-2" />,
    title: 'Testing & QA Services',
    desc: 'We offer comprehensive testing and QA services including manual testing, automated, performance and security testing utilizing modern test frameworks and technologies.'
  },
  {
    icon: <FaCloudUploadAlt className="text-blue-400 text-4xl mb-2" />,
    title: 'Modernization & Migration Services',
    desc: 'Modernize your legacy application and harness the potential of latest software and cloud technologies for enhanced ROI and reduced ongoing management/maintenance costs.'
  },
];

const Service: React.FC = () => {
  return (
    <div className="min-h-[80vh] bg-gray-50 py-12 px-4 md:px-10">
      <h1 className="text-5xl font-light text-gray-800 mb-10">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xs flex flex-col items-start hover:shadow-2xl transition-shadow duration-300">
            {service.icon}
            <h2 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h2>
            <p className="text-gray-500 text-sm font-normal">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
