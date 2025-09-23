import React from "react";
import Slider from "react-slick";
import { FaUserMd, FaCalendarAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const doctors = [
  {
    name: "Dr. Monika Sharma",
    specialty: "Obstetrics & Gynaecology",
    image: "https://noblehealthcity.com/admin/uploads/1749120697Dr-monika.webp",
  },
  {
    name: "Dr. Kush Bhatia",
    specialty: "Interventional Cardiology",
    image:
      "https://noblehealthcity.com/admin/uploads/1749120449Dr%20Vikram.webp",
  },
  {
    name: "Dr. Vinod Malik",
    specialty: "Neurosurgery",
    image:
      "https://noblehealthcity.com/admin/uploads/1749120449Dr%20Vikram.webp",
  },
  {
    name: "Dr. Kapil Sangwan",
    specialty: "Orthopaedics & Sports Injury",
    image:
      "https://noblehealthcity.com/admin/uploads/17543681071749120512Dr%20Vinod%20Malik.webp",
  },
  {
    name: "Dr. Anjali Sharma",
    specialty: "Pediatrics & Neonatology",
    image:
      "https://noblehealthcity.com/admin/uploads/1749120449Dr%20Vikram.webp",
  },
  {
    name: "Dr. Rohan Verma",
    specialty: "Dermatology & Cosmetology",
    image:
      "https://noblehealthcity.com/admin/uploads/1749120449Dr%20Vikram.webp",
  },
  {
    name: "Dr. Priya Gupta",
    specialty: "Oncology & Cancer Care",
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg",
  },
  {
    name: "Dr. Aditya Mehra",
    specialty: "Gastroenterology",
    image:
      "https://noblehealthcity.com/admin/uploads/1749120070Dr%20Sandeep%20Kala.webp",
  },
  {
    name: "Dr. Neha Yadav",
    specialty: "Endocrinology & Diabetes",
    image:
      "https://noblehealthcity.com/admin/uploads/1749120314Dr%20Veenu%20Kadian.webp",
  },
  {
    name: "Dr. Arjun Singh",
    specialty: "Pulmonology & Critical Care",
    image:
      "https://noblehealthcity.com/admin/uploads/1749119923Dr%20Ravinder%20Kadian.webp",
  },
  {
    name: "Dr. Tanya Gulia",
    specialty: "Obstetrics & IVF Specialist",
    image:
      "https://noblehealthcity.com/admin/uploads/1749117500Dr%20Tanya%20Gulia.webp",
  },
  {
    name: "Dr. Sweta Rose",
    specialty: "Psychiatry & Mental Health",
    image:
      "https://noblehealthcity.com/admin/uploads/1749116634Dr%20Sweta%20Rose.webp",
  },
  {
    name: "Dr. Rajeev Kumar",
    specialty: "General Surgery",
    image:
      "https://noblehealthcity.com/admin/uploads/1749119481Dr%20Harish%20Bhardwaj.webp",
  },
  {
    name: "Dr. Meena Choudhary",
    specialty: "ENT Specialist",
    image: "https://images.pexels.com/photos/5214950/pexels-photo-5214950.jpeg",
  },
  {
    name: "Dr. Suresh Patel",
    specialty: "Nephrology & Kidney Care",
    image:
      "https://noblehealthcity.com/admin/uploads/1749119481Dr%20Harish%20Bhardwaj.webp",
  },
];

const ExpertDoctorsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Custom hover styles */}
      <style>{`
        .doctor-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .doctor-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }
        @media (max-width: 768px) {
          .slick-slide {
            display: flex !important;
            justify-content: center;
          }
          .slick-slide > div {
            width: 95% !important;
            padding: 0 !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#ffefe7] text-[#ff7137] text-sm font-semibold mb-6">
          <span>Our Team</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Meet Our Expert Doctors
        </h2>

        <p className="text-base sm:text-lg text-[#555a73] max-w-2xl mx-auto mb-10 sm:mb-12">
          Highly qualified specialists dedicated to providing exceptional
          healthcare services
        </p>

        <Slider {...settings}>
          {doctors.map((doctor, index) => (
            <div key={index} className="px-2 sm:px-3">
              <div className="doctor-card bg-white rounded-2xl sm:rounded-3xl shadow-md h-full flex flex-col">
                <div className="overflow-hidden rounded-t-2xl sm:rounded-t-3xl h-56 sm:h-64">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 sm:p-6 flex flex-col flex-grow text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-[#ff7137] text-sm sm:text-base font-semibold mb-4">
                    {doctor.specialty}
                  </p>

                  <div className="flex gap-3 mt-auto flex-wrap">
                    <button className="flex items-center justify-center gap-2 flex-1 px-4 py-2 bg-[#ff7137] text-white rounded-full text-sm sm:text-base font-medium hover:bg-white hover:text-[#0D3E87] hover:border hover:border-[#0D3E87] cursor-pointer transition">
                      <FaCalendarAlt />
                      Book
                    </button>
                    <button className="flex items-center justify-center gap-2 flex-1 px-4 py-2 border border-[#0D3E87] text-[#0D3E87] rounded-full text-sm sm:text-base font-medium hover:bg-[#0D3E87] cursor-pointer hover:text-white transition">
                      <FaUserMd />
                      Profile
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
