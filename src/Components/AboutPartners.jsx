// components/PartnersSection.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnersSection = () => {
  const partners = [
    {
      id: 1,
      name: "Partner 1",
      logo: "https://noblehealthcity.com/assets/img/partner/East%20West%20Assist%20Insurance%20TPA%20Services%20Pvt.%20Ltd.png",
    },
    {
      id: 2,
      name: "Partner 2",
      logo: "https://noblehealthcity.com/assets/img/partner/Ericson%20TPA.png",
    },
    {
      id: 3,
      name: "Partner 3",
      logo: "https://noblehealthcity.com/assets/img/partner/Family%20Health%20Plan%20Insurance%20TPA%20Limited.png",
    },
    {
      id: 4,
      name: "Partner 4",
      logo: "https://noblehealthcity.com/assets/img/partner/GoDigit%20General%20Insurance%20Co%20Ltd.png",
    },
    {
      id: 5,
      name: "Partner 5",
      logo: "https://noblehealthcity.com/assets/img/partner/Good%20Health%20Insurance%20TPA%20Ltd.jpg",
    },
    {
      id: 6,
      name: "Partner 6",
      logo: "https://noblehealthcity.com/assets/img/partner/National%20Insurance%20Company%20Ltd.png",
    },
    {
      id: 7,
      name: "Partner 7",
      logo: "https://noblehealthcity.com/assets/img/partner/United%20India%20Insurance%20Company%20Ltd.png",
    },
    {
      id: 8,
      name: "Partner 8",
      logo: "https://noblehealthcity.com/assets/img/partner/The%20oriental%20Insurance.jpg",
    },
    {
      id: 9,
      name: "Partner 9",
      logo: "https://noblehealthcity.com/assets/img/partner/Paramount%20Health%20Services%20&%20Insurance%20TPA%20Pvt.png",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default for small devices
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  return (
    <section className="w-full bg-[#FFF4E6] py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#F77300] mb-6 relative">
          Our Partners
          <span className="block w-20 h-1 mt-2 mx-auto bg-[#F77300] rounded"></span>
        </h2>

        <Slider {...sliderSettings}>
          {partners.map((partner) => (
            <div key={partner.id} className="px-2">
              <div className="flex items-center justify-center h-20 sm:h-24 md:h-28 bg-white rounded-lg shadow transition-all duration-300 hover:shadow-md">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 sm:max-h-12 md:max-h-16 max-w-full object-contain
                    md:grayscale md:opacity-70 
                    md:hover:grayscale-0 md:hover:opacity-100 
                    transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PartnersSection;
