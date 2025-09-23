import React from "react";
import {
  FaHeartbeat,
  FaBaby,
  FaBone,
  FaUserMd,
  FaSyringe,
  FaPills,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: "Heart Care (Cardiology)",
    description:
      "From 24/7 cardiac emergencies to heart surgery and rehab, we've got your heart covered.",
    tags: ["Heart Surgery", "Cath Lab", "ECG"],
    status: "24/7 Emergency",
    imageUrl:
      "https://noblehealthcity.com/assets/img/Heart-Care-(Cardiology).webp",
  },
  {
    id: 2,
    icon: <FaBaby className="text-white text-xl" />,
    title: "IVF & Fertility Center",
    description:
      "Personalized fertility treatments using advanced reproductive tech to help you start your family.",
    tags: ["IVF", "IUI", "Fertility Tests"],
    status: "24/7 Trauma",
    imageUrl:
      "https://noblehealthcity.com/assets/img/IVF-&-Fertility-Center.webp",
  },
  {
    id: 3,
    icon: <FaBone className="text-white text-xl" />,
    title: "Orthopedics & Sports Medicine",
    description:
      "Expert care for bones, joints, spine, and sports injuries — including trauma and joint replacements.",
    tags: ["Joint Replacement", "Sports Medicine"],
    status: "24/7 Emergency",
    imageUrl: "https://noblehealthcity.com/assets/img/sport-injury.webp",
  },
  {
    id: 4,
    icon: <FaUserMd className="text-white text-xl" />,
    title: "ENT & Head & Neck Oncology",
    description:
      "Advanced ENT care, from hearing tests to surgeries and allergy treatments.",
    tags: ["Hearing Tests", "Allergy", "ENT Surgery"],
    status: "Open Daily",
    imageUrl: "https://noblehealthcity.com/assets/img/ent.webp",
  },
  {
    id: 5,
    icon: <FaSyringe className="text-white text-xl" />,
    title: "Laparoscopy & GI Surgery",
    description:
      "Minimally invasive surgeries for quicker recovery and less pain.",
    tags: ["Laparoscopy", "Bariatric"],
    status: "Open Daily",
    imageUrl:
      "https://noblehealthcity.com/assets/img/Laparoscopy-&-GI-Surgery.webp",
  },
  {
    id: 6,
    icon: <FaPills className="text-white text-xl" />,
    title: "Pharmacy",
    description:
      "Round-the-clock pharmacy with home delivery and expert support for all your medical needs.",
    tags: ["24/7 Service", "Home Delivery", "Medicines"],
    status: "24/7 Available",
    imageUrl: "https://noblehealthcity.com/assets/img/pharmacy.webp",
  },
];

const HealthExcellence = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center font-sans antialiased text-center">
      {/* Header */}
      <div className="flex flex-col items-center mb-16">
        <span className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-4 shadow-md">
          <FaUserMd className="h-4 w-4" />
          <span>Our Medical Services</span>
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-orange-500">
          Healthcare Excellence
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Advanced departments deliver complete medical care with modern
          technology and expert doctors — all under one roof.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Icon */}
              <div
                className={`absolute bottom-60 left-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-[#184082]`}
              >
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold text-[#184082] pt-6">
                {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 text-xs">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium group-hover:bg-orange-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-4">
              <Link
                to={`/blog/${service.id}`}
                className="flex items-center space-x-2 text-orange-600 font-semibold text-sm group-hover:text-[#184082]"
              >
                <span>Learn More</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <div className="flex items-center text-gray-500 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                <span>{service.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 w-full max-w-sm">
        <button
          onClick={() => (window.location.href = "/contact")}
          className="w-full py-4 px-6 rounded-full text-white cursor-pointer font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-orange-500 to-blue-800"
        >
          Schedule Your Consultation Today
        </button>
      </div>
    </div>
  );
};

export default HealthExcellence;
