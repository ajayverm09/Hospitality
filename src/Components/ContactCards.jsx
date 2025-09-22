import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactCards = () => {
  return (
    <div className="py-16 px-4 bg-orange-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Address Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="bg-orange-100 w-16 h-16 rounded-full border-2 border-dashed border-orange-500 flex items-center justify-center mb-4 md:mb-0 md:mr-4 transition-all duration-300 group-hover:bg-orange-500 flex-shrink-0">
              <FaMapMarkerAlt className="text-orange-600 text-2xl transition-all duration-300 group-hover:text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-orange-700">Our Address</h3>
              <p className="text-gray-600">123 Healthcare Avenue<br />Medical District<br />City 12345</p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="bg-orange-100 w-16 h-16 rounded-full border-2 border-dashed border-orange-500 flex items-center justify-center mb-4 md:mb-0 md:mr-4 transition-all duration-300 group-hover:bg-orange-500 flex-shrink-0">
              <FaPhone className="text-orange-600 text-2xl transition-all duration-300 group-hover:text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-orange-700">Phone Number</h3>
              <p className="text-gray-600">Main: +1 (555) 123-4567<br />Emergency: +1 (555) 987-6543<br />Fax: +1 (555) 456-7890</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="bg-orange-100 w-16 h-16 rounded-full border-2 border-dashed border-orange-500  flex items-center justify-center mb-4 md:mb-0 md:mr-4 transition-all duration-300 group-hover:bg-orange-500 flex-shrink-0">
              <FaEnvelope className="text-orange-600 text-2xl transition-all duration-300 group-hover:text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-orange-700">Email Us</h3>
              <p className="text-gray-600">info@yourhospital.com<br />appointments@yourhospital.com<br />support@yourhospital.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;