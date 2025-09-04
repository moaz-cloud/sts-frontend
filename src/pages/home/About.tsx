import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 bg-white">
      {/* Left Side: Heading and Text */}
      <div className="md:w-2/3 w-full flex flex-col justify-center">
        <h1 className="text-5xl font-light text-gray-800 mb-10 md:mb-12">About Us</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">Welcome To Our Software Development<br className="hidden md:block" /> Services Company</h2>
        <p className="text-lg text-gray-500 leading-relaxed font-normal max-w-2xl">
          In 2018 a visionary group of talented professionals joined hands to create a dream that has evolved into a new company Step To Soft based in Asansol, West Bengal, India. We have research and development team working on products for several types of applications. Simultaneously, we help people and students to get a better step in proffession life. Starting with Product development, Step To Soft diversified into IT Services, Product maintenance and build solutions.
        </p>
      </div>
      {/* Right Side: Image */}
      <div className="md:w-1/3 w-full flex justify-center mt-10 md:mt-0">
        <img src="https://steptosoft.com/assets/images/1.png" alt="About Us" className="w-64 h-64 object-contain" />
      </div>
    </div>
  );
};

export default About;