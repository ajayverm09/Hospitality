import React, { useState } from "react";
import CountUp from "react-countup";
import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaBaby,
  FaPills,
  FaSyringe,
  FaStethoscope,
  FaBed,
  FaChild,
} from "react-icons/fa";

const CentersOfExcellence = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState(0);

  const specialties = [
    {
      name: "Cardiac Care",
      icon: <FaHeartbeat />,
      description:
        "Our Cardiac Center provides comprehensive care for heart-related conditions. From preventive check-ups to complex surgeries, our expert team ensures the best possible outcomes.",
      services: [
        "24/7 Cardiac Emergency Services",
        "Cutting-edge Cath Lab",
        "Personalized Cardiac Rehab Programs",
        "Heart Transplant Services",
      ],
      imageUrl: "https://noblehealthcity.com/assets/Cardiac%20Care.webp",
    },
    {
      name: "Neurosurgery",
      icon: <FaBrain />,
      description:
        "Our Neurosurgery Center offers advanced surgical and non-surgical treatments for brain, spine, and nervous system conditions with precision and care.",
      services: [
        "Minimally Invasive Brain Surgery",
        "Spine Surgery Programs",
        "Neuro-Oncology Treatments",
        "Stroke Intervention Services",
      ],
      imageUrl: "https://noblehealthcity.com/assets/Neurosurgery.webp",
    },
    {
      name: "Orthopedics",
      icon: <FaBone />,
      description:
        "Our Orthopedic Center specializes in the diagnosis, treatment, and rehabilitation of musculoskeletal conditions, including sports injuries and joint replacement.",
      services: [
        "Joint Replacement Surgery",
        "Sports Medicine Programs",
        "Physical Therapy Services",
        "Minimally Invasive Procedures",
      ],
      imageUrl: "https://noblehealthcity.com/assets/Orthopedic.webp",
    },
    {
      name: "IVF Center",
      icon: <FaBaby />,
      description:
        "Our IVF Center provides advanced fertility treatments to help couples achieve parenthood with personalized care and guidance.",
      services: [
        "IVF & IUI Treatments",
        "Egg & Sperm Freezing",
        "Fertility Assessments",
        "Counseling & Support Programs",
      ],
      imageUrl: "https://noblehealthcity.com/assets/IVF.webp",
    },
    {
      name: "General Medicine",
      icon: <FaPills />,
      description:
        "Our General Medicine department offers holistic care for a wide range of adult medical conditions, focusing on prevention and long-term health.",
      services: [
        "Preventive Health Checkups",
        "Chronic Disease Management",
        "Infectious Disease Care",
        "Lifestyle Disorder Management",
      ],
      imageUrl: "https://noblehealthcity.com/assets/General%20Medicine.webp",
    },
    {
      name: "General Surgery",
      icon: <FaSyringe />,
      description:
        "Our General Surgery team performs a wide range of surgical procedures with precision, safety, and quick recovery.",
      services: [
        "Abdominal Surgery",
        "Trauma & Emergency Surgery",
        "Thyroid & Breast Surgery",
        "Day-Care Surgeries",
      ],
      imageUrl: "https://noblehealthcity.com/assets/general-surgery.webp",
    },
    {
      name: "Obstetrics",
      icon: <FaBed />,
      description:
        "Our Obstetrics department provides comprehensive care for women during pregnancy, childbirth, and postpartum recovery.",
      services: [
        "Prenatal & Postnatal Care",
        "High-Risk Pregnancy Management",
        "Painless Deliveries",
        "Fetal Medicine Services",
      ],
      imageUrl: "https://noblehealthcity.com/assets/Obstetrics.webp",
    },
    {
      name: "Gynecology",
      icon: <FaSyringe />,
      description:
        "Our Gynecology department offers specialized care for women at every stage of life, from adolescence to menopause.",
      services: [
        "Menstrual Disorder Management",
        "Infertility & Hormonal Care",
        "Minimally Invasive Surgeries",
        "Cancer Screening Programs",
      ],
      imageUrl: "https://noblehealthcity.com/assets/Gynecology.webp",
    },
    {
      name: "Pediatrics",
      icon: <FaChild />,
      description:
        "Our Pediatrics department provides specialized care for infants, children, and adolescents, ensuring healthy growth and development.",
      services: [
        "Neonatal Intensive Care (NICU)",
        "Childhood Immunization",
        "Pediatric Surgery",
        "Child Development Programs",
      ],
      imageUrl: "https://noblehealthcity.com/assets/Pediatrics.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#184082] font-semibold text-lg mb-2">
            World Class Healthcare
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#184082] to-[#D76833] mb-4">
            Centers of Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert doctors and advanced technology work together to give you the
            best care.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-16">
          {specialties.map((specialty, index) => (
            <button
              key={index}
              onClick={() => setSelectedSpecialty(index)}
              className={`
        group relative rounded-full p-2 cursor-pointer text-lg overflow-hidden transition-all duration-500
        flex items-center justify-center
        ${
          selectedSpecialty === index
            ? "text-white"
            : "bg-white text-[#0D3E87] shadow-md"
        }
      `}
              style={{
                background:
                  selectedSpecialty === index
                    ? "linear-gradient(to right, #D76833, #184082)"
                    : "white",
                boxShadow:
                  selectedSpecialty === index
                    ? "0 4px 14px rgba(0,0,0,0.15)"
                    : "0 2px 6px rgba(0,0,0,0.08)",
              }}
            >
              {/* Overlay for hover gradient */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D76833] to-[#184082] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* Icon + Name */}
              <div
                className={`relative z-10 flex items-center space-x-2 transition-colors duration-300 ${
                  selectedSpecialty === index || "group-hover:text-white "
                }`}
              >
                <span className="text-2xl">{specialty.icon}</span>
                <h3 className="text-lg font-semibold">{specialty.name}</h3>
              </div>
            </button>
          ))}
        </div>

        {/* Specialty Details Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left Content */}
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-3">
                  {specialties[selectedSpecialty].icon}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {specialties[selectedSpecialty].name}
                </h1>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                {specialties[selectedSpecialty].description}
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Our Services Include:
              </h2>
              <ul className="space-y-3 mb-10">
                {specialties[selectedSpecialty].services.map(
                  (service, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#184082] mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  )
                )}
              </ul>

              <button
                onClick={() => (window.location.href = "/blogs")}
                className="text-white font-semibold py-3 px-8 cursor-pointer rounded-lg transition duration-300 transform hover:scale-105"
                style={{
                  background: "linear-gradient(to right, #D76833, #184082)",
                }}
              >
                Learn More
              </button>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 bg-gray-100 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#184082]/30 to-transparent"></div>
              <img
                src={specialties[selectedSpecialty].imageUrl}
                alt={specialties[selectedSpecialty].name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* New Section from Image */}
        <div className="bg-white py-12 mt-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              <div className="text-3xl font-bold text-[#E76B2D]">
                <CountUp start={0} end={50000} duration={3} suffix="+" />
                <p className="text-sm text-gray-500">SURGERIES</p>
              </div>
              <div className="text-3xl font-bold text-[#E76B2D]">
                <CountUp start={0} end={98} duration={3} suffix="%" />
                <p className="text-sm text-gray-500">SUCCESS RATE</p>
              </div>
              <div className="text-3xl font-bold text-[#E76B2D]">
                <CountUp start={0} end={200} duration={3} suffix="+" />
                <p className="text-sm text-gray-500">SPECIALISTS</p>
              </div>
              <div className="text-3xl font-bold text-[#E76B2D]">
                <CountUp start={0} end={24} duration={3} suffix="/7" />
                <p className="text-sm text-gray-500">EMERGENCY</p>
              </div>
            </div>

            <h2 className="text-3xl font-semibold text-[#184082] mb-4">
              Get Expert Medical Care, All in One Place
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our specialized departments for complete, trusted
              healthcare.
            </p>

            <button
              onClick={() => (window.location.href = "/contact")}
              className="text-white bg-[#184082] cursor-pointer hover:bg-gradient-to-r from-[#D76833] to-[#184082] hover:text-white text-xl py-3 px-8 rounded-full"
            >
              Book your consultation today!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentersOfExcellence;
