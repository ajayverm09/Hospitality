// components/HeroSection.jsx
import React from 'react';
import { FaCalendarAlt, FaStethoscope } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img 
        src="https://noblehealthcity.com/assets/breadcrumbs/banner-noble.webp"
        alt="Hospital Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Expert Care at Noble Health City
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Meet our team of skilled doctors, offering top-notch medical services with empathy and care. Let us be your partner in health!
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex items-center gap-2 cursor-pointer bg-orange-500 text-white hover:text-black font-semibold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300">
            <FaCalendarAlt className="w-5 h-5" />
            Book Appointment
          </button>
          <button className="flex items-center gap-2 border-2 cursor-pointer border-white text-white font-semibold py-3 px-6 rounded-full text-lg hover:bg-white hover:text-blue-900 transition duration-300">
            <FaStethoscope className="w-5 h-5" />
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
