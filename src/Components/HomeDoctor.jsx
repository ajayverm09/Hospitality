import React from "react";
import Slider from "react-slick";
import { FaUserMd, FaCalendarAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const doctors = [
  { name: "Dr. Monika Sharma", specialty: "Obstetrics & Gynaecology", image: "https://noblehealthcity.com/admin/uploads/1749120697Dr-monika.webp" },
  { name: "Dr. Kush Bhatia", specialty: "Interventional Cardiology", image: "https://noblehealthcity.com/admin/uploads/1749120449Dr%20Vikram.webp" },
  { name: "Dr. Vinod Malik", specialty: "Neurosurgery", image: "https://noblehealthcity.com/admin/uploads/1749120449Dr%20Vikram.webp" },
  { name: "Dr. Kapil Sangwan", specialty: "Orthopaedics & Sports Injury", image: "https://noblehealthcity.com/admin/uploads/17543681071749120512Dr%20Vinod%20Malik.webp" },
  { name: "Dr. Anjali Sharma", specialty: "Pediatrics & Neonatology", image: "https://noblehealthcity.com/admin/uploads/1749120449Dr%20Vikram.webp" },
  { name: "Dr. Rohan Verma", specialty: "Dermatology & Cosmetology", image: "https://noblehealthcity.com/admin/uploads/1749120449Dr%20Vikram.webp" },
  { name: "Dr. Priya Gupta", specialty: "Oncology & Cancer Care", image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg" },
  { name: "Dr. Aditya Mehra", specialty: "Gastroenterology", image: "https://noblehealthcity.com/admin/uploads/1749120070Dr%20Sandeep%20Kala.webp" },
  { name: "Dr. Neha Yadav", specialty: "Endocrinology & Diabetes", image: "https://noblehealthcity.com/admin/uploads/1749120314Dr%20Veenu%20Kadian.webp" },
  { name: "Dr. Arjun Singh", specialty: "Pulmonology & Critical Care", image: "https://noblehealthcity.com/admin/uploads/1749119923Dr%20Ravinder%20Kadian.webp" },
  { name: "Dr. Tanya Gulia", specialty: "Obstetrics & IVF Specialist", image: "https://noblehealthcity.com/admin/uploads/1749117500Dr%20Tanya%20Gulia.webp" },
  { name: "Dr. Sweta Rose", specialty: "Psychiatry & Mental Health", image: "https://noblehealthcity.com/admin/uploads/1749116634Dr%20Sweta%20Rose.webp" },
  { name: "Dr. Rajeev Kumar", specialty: "General Surgery", image: "https://noblehealthcity.com/admin/uploads/1749119481Dr%20Harish%20Bhardwaj.webp" },
  { name: "Dr. Meena Choudhary", specialty: "ENT Specialist", image: "https://images.pexels.com/photos/5214950/pexels-photo-5214950.jpeg" },
  { name: "Dr. Suresh Patel", specialty: "Nephrology & Kidney Care", image: "https://noblehealthcity.com/admin/uploads/1749119481Dr%20Harish%20Bhardwaj.webp" },
];

const ExpertDoctorsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4, // Default for mobile screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },  // Tablets
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } }, // Small desktops
      { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1 } }, // Large desktops
    ],
  };

  return (
    <div className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Custom styles */}
      <style>{`
        .doctor-card {
          transition: all 0.3s ease;
        }
        .doctor-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 24px rgba(255,113,55,0.25);
        }
      `}</style>

      <div className="max-w-7xl mx-auto text-center">
        {/* Section Tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#ffefe7] text-[#ff7137] text-sm font-semibold mb-6">
          <span>Our Team</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-orange-500 mb-4">
          Meet Our Expert Doctors
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#555a73] max-w-2xl mx-auto mb-10 sm:mb-12">
          Highly qualified specialists dedicated to providing exceptional healthcare services
        </p>

        {/* Doctors Slider */}
        <Slider {...settings}>
          {doctors.map((doctor, index) => (
            <div key={index} className="px-2 sm:px-3">
              <div className="doctor-card bg-white rounded-2xl sm:rounded-3xl shadow-md h-full flex flex-col">
                {/* Image */}
                <div className="overflow-hidden rounded-t-2xl sm:rounded-t-3xl h-56 sm:h-64">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="p-4 sm:p-6 text-left flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#131d51] mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-[#ff7137] text-sm sm:text-base font-semibold mb-4">
                    {doctor.specialty}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <button className="flex items-center justify-center gap-2 flex-1 px-3 py-2 sm:px-4 sm:py-2 bg-[#ffefe7] text-[#ff7137] rounded-full text-sm sm:text-base font-medium hover:bg-[#ff7137] hover:text-white transition">
                      <FaCalendarAlt />
                      <span>Book</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 flex-1 px-3 py-2 sm:px-4 sm:py-2 border border-[#0D3E87] text-[#0D3E87] rounded-full text-sm sm:text-base font-medium hover:bg-[#0D3E87] hover:text-white transition">
                      <FaUserMd />
                      <span>Profile</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExpertDoctorsSection;