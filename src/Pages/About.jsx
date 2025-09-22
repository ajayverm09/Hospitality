import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import ValuesSection from "../Components/AboutValue";
import Stats from "../Components/AboutStats";
import PartnersSection from "../Components/AboutPartners";

const AboutUs = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Define the custom orange color
  const customOrange = "#F77300";

  // Mission and Vision data with icons
  const missionVisionData = [
    {
      id: 1,
      type: "mission",
      iconUrl: "https://noblehealthcity.com/assets/img/icons/7.png",
      title: "Our Mission",
      description:
        "To provide exceptional healthcare services with compassion, integrity, and innovation, improving the health and well-being of our community through patient-centered care and advanced medical treatments.",
    },
    {
      id: 2,
      type: "vision",
      iconUrl: "https://noblehealthcity.com/assets/img/icons/8.png",
      title: "Our Vision",
      description:
        "To be the leading healthcare institution recognized for excellence in patient care, innovative research, and medical education, creating a healthier future for all.",
    },
  ];

  return (
    <div className="font-sans mt-12 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative py-12 md:py-20 px-4"
        style={{
          backgroundImage:
            "url(https://noblehealthcity.com/assets/img/breadcrumb/tAbout.png)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About Our Hospital
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Compassionate Care, Advanced Medicine, Dedicated to Your Health
          </p>
        </div>
      </div>

      {/* Mission & Vision Section - Centered */}
      <div style={{ backgroundColor: customOrange }}>
        <div className="py-8 md:py-12 px-2 md:px-4">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {missionVisionData.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 md:p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 bg-white"
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                      <div className="mb-3 md:mb-0 md:mr-4 flex-shrink-0">
                        <img
                          src={item.iconUrl}
                          alt={item.title}
                          className="w-12 h-12 md:w-16 md:h-16"
                          style={{ color: customOrange }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-xl md:text-2xl font-bold mb-3"
                          style={{ color: customOrange }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-6 px-2 md:px-4">
          <div className="max-w-6xl mx-auto">
            <ValuesSection />
          </div>
        </div>

        {/* Contact Us for Healthcare Section */}
        <div className="py-8 md:py-12 px-2 md:px-4">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Contact Us for Healthcare
            </h2>
            <p className="text-sm md:text-base text-amber-50 mb-6 max-w-2xl mx-auto">
              If you have any questions or need to schedule an appointment,
              please don't hesitate to contact us. Our team is ready to assist
              you with all your healthcare needs.
            </p>
            <button className="px-6 md:px-8 py-3 bg-white font-bold text-[#F77300] rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:text-white hover:bg-[#F77300]">
              Make Appointment
            </button>
          </div>
        </div>
      </div>

      {/* About Hospital Section */}
      <div className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 relative"
            style={{ color: customOrange }}
          >
            About Our Hospital
            <span
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-1 mt-2"
              style={{ backgroundColor: customOrange }}
            ></span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="md:w-1/2">
              <img
                src="https://noblehealthcity.com/assets/img/ABOUT%20(1).png"
                alt="Hospital Building"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <p className="mb-3 md:mb-4 text-sm md:text-base text-gray-600">
                Established with a vision to provide world-class healthcare
                services, our hospital has been at the forefront of medical
                excellence for over 15 years. We combine state-of-the-art
                technology with compassionate care to deliver the best possible
                outcomes for our patients.
              </p>
              <p className="mb-3 md:mb-4 text-sm md:text-base text-gray-600">
                Our team of highly skilled medical professionals, supported by
                advanced diagnostic and treatment facilities, ensures that each
                patient receives personalized care tailored to their specific
                needs. We are committed to continuous innovation and improvement
                in healthcare delivery.
              </p>
              <p className="text-sm md:text-base text-gray-600">
                As a leading healthcare institution, we take pride in our
                comprehensive range of medical services, from preventive care to
                complex treatments, all under one roof. Our patient-centered
                approach focuses not just on treating illnesses but on promoting
                overall health and well-being.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />

      {/* Partners Section */}
      <PartnersSection />
    </div>
  );
};

export default AboutUs;