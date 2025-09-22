import React from "react";
import { FaStar, FaCog, FaAward, FaUserMd, FaHospital, FaHeartbeat, FaMicroscope, FaAmbulance } from "react-icons/fa";

const HealthcareSection = () => {
  return (
    <>
      {/* Hero / About Header */}
      <div className="bg-[#f7f3e8] text-center py-12">
        <h2 className="text-xl font-semibold text-orange-500 border w-36 text-center mb-8 rounded-full p-1 flex justify-center mx-auto">
          About Us
        </h2>
        <h2 className="text-6xl font-bold bg-gradient-to-r from-[#184082] to-[#D76833] bg-clip-text text-transparent">
          Welcome to Healthcare Excellence
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Caring for our community with trusted medical care for over 20 years.
        </p>
      </div>

      {/* Content Section */}
      <div className="bg-[#f7f3e8] p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-semibold text-[#00438a]">
              Your Trusted Healthcare Partner
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Noble Health City, founded by a team of experienced medical
              professionals, is a leading hospital in Rohtak. Equipped with
              state-of-the-art technology and staffed by skilled doctors and
              nurses, we are dedicated to delivering exceptional patient care.
              Our patient-centric approach ensures that every individual
              receives comprehensive, compassionate healthcare, combining
              advanced diagnostics and treatments with the highest standards of
              care. At Noble Health City, we strive to redefine healthcare
              excellence and positively impact the well-being of our community.
            </p>

            {/* Features with Icons */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="mt-1 p-2 bg-orange-100 rounded-full">
                  <FaAward className="text-[#D76833] text-xl" />
                </div>
                <div>
                  <p className="text-lg font-medium text-[#00438a]">Accredited Excellence</p>
                  <p className="text-sm text-gray-600">Internationally recognized healthcare standards</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 p-2 bg-orange-100 rounded-full">
                  <FaMicroscope className="text-[#D76833] text-xl" />
                </div>
                <div>
                  <p className="text-lg font-medium text-[#00438a]">Advanced Technology</p>
                  <p className="text-sm text-gray-600">State-of-the-art medical equipment</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 p-2 bg-orange-100 rounded-full">
                  <FaUserMd className="text-[#D76833] text-xl" />
                </div>
                <div>
                  <p className="text-lg font-medium text-[#00438a]">Expert Medical Staff</p>
                  <p className="text-sm text-gray-600">Highly qualified healthcare professionals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 p-2 bg-orange-100 rounded-full">
                  <FaHeartbeat className="text-[#D76833] text-xl" />
                </div>
                <div>
                  <p className="text-lg font-medium text-[#00438a]">Compassionate Care</p>
                  <p className="text-sm text-gray-600">Patient-centered treatment approach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://noblehealthcity.com/assets/About.webp"
              alt="Noble Health City"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthcareSection;