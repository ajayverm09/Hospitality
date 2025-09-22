  import React, { useState } from "react";
  import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
  import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

  const testimonials = [
    {
      rating: 5,
      title: "Professional & Knowledgeable Staff",
      quote:
        "Every doctor and specialist I met was highly knowledgeable and professional. They took time to answer all my questions and made sure I was comfortable with my treatment plan. The follow-up care was excellent too. I couldn't ask for better care.",
      author: "Aditi",
      role: "Surgery Patient",
      date: "April 2024",
      avatar:
        "https://images.pexels.com/photos/4347209/pexels-photo-4347209.jpeg",
    },
    {
      rating: 4,
      title: "Excellent Patient Care",
      quote:
        "The nurses were incredibly attentive and made me feel at ease during my stay. The facility was clean, and all the staff members were very friendly and supportive. Truly a positive experience.",
      author: "Rahul S.",
      role: "Cardiac Patient",
      date: "March 2024",
      avatar:
        "https://images.pexels.com/photos/4031826/pexels-photo-4031826.jpeg",
    },
    {
      rating: 5,
      title: "State-of-the-Art Facilities",
      quote:
        "I was impressed by the modern equipment and technology used here. It gave me confidence in the diagnoses and treatments. The overall experience was top-notch.",
      author: "Priya K.",
      role: "Diagnostic Patient",
      date: "February 2024",
      avatar:
        "https://images.pexels.com/photos/14081714/pexels-photo-14081714.jpeg",
    },
    {
      rating: 5,
      title: "Compassionate and Understanding",
      quote:
        "The doctors and staff showed genuine compassion and understanding throughout my treatment. They listened to my concerns and provided the best possible care. Highly recommend!",
      author: "Amit V.",
      role: "Ortho Patient",
      date: "January 2024",
      avatar:
        "https://images.pexels.com/photos/4100670/pexels-photo-4100670.jpeg",
    },
    {
      rating: 4,
      title: "Quick and Efficient Service",
      quote:
        "From admission to discharge, everything was handled very efficiently. There were minimal waiting times, and all procedures were explained clearly. A great experience overall.",
      author: "Sneha L.",
      role: "General Checkup",
      date: "December 2023",
      avatar:
        "https://images.pexels.com/photos/4098354/pexels-photo-4098354.jpeg",
    },
  ];

  const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };

    const goToNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
      <div className="bg-gradient-to-br from-[#fffbf8] to-[#fff0e5] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#ff7137] opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#122271] opacity-5 translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#ffefe7] text-[#ff7137] text-sm font-semibold mb-6">
            <span>Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#232946] to-[#ff7137] mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-[#555a73] max-w-2xl mx-auto mb-16">
            Experience world-class healthcare through the eyes of our valued
            patients
          </p>

          <div className="relative flex items-center justify-center">
            {/* Left Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 -ml-4 md:-ml-8 lg:-ml-12 cursor-pointer z-10 w-14 h-14 flex items-center justify-center rounded-full bg-white text-[#ff7137] shadow-lg hover:bg-[#ff7137] hover:text-white transition-all duration-300 border-2 border-[#ff7137]"
            >
              <HiArrowSmLeft className="w-7 h-7" />
            </button>

            {/* Testimonial Card */}
            <div className="bg-white rounded-4xl shadow-xl p-10 max-w-6xl w-full min-h-[450px] relative transform transition-all duration-500 hover:shadow-2xl border border-[#ffefe7]">
              <div className="absolute top-8 left-10 text-5xl text-[#ffefe7]">
                <FaQuoteLeft />
              </div>
              <div className="absolute bottom-8 right-10 text-5xl text-[#ffefe7]">
                <FaQuoteRight />
              </div>

              <div className="text-left relative">
                <h3 className="text-2xl md:text-3xl font-bold text-[#232946] mb-6 mt-12 leading-tight">
                  {currentTestimonial.title}
                </h3>
                <div className="flex items-center mb-6">
                  <div className="flex text-[#ff7137] mr-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < currentTestimonial.rating
                            ? "text-[#eae628]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {currentTestimonial.rating}/5
                  </span>
                </div>
                <p className="text-gray-700 italic leading-relaxed text-lg mb-10">
                  "{currentTestimonial.quote}"
                </p>

                <div className="flex flex-col md:flex-row items-center justify-between bg-[#fffbf8] p-5 rounded-2xl border border-[#ffefe7]">
                  <div className="flex items-center mb-4 md:mb-0">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.author}
                      className="w-16 h-16 object-cover rounded-full mr-5 border-2 border-[#ff7137]"
                    />
                    <div>
                      <p className="font-bold text-[#101946] text-xl">
                        {currentTestimonial.author}
                      </p>
                      <p className="text-sm text-[#ff7137] font-semibold">
                        {currentTestimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[#555a73] bg-[#ffefe7] px-3 py-1 rounded-full">
                    {currentTestimonial.date}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={goToNext}
              className="absolute right-0 -mr-4 md:-mr-8 lg:-mr-12 z-10 w-14 h-14 flex cursor-pointer items-center justify-center rounded-full bg-white text-[#ff7137] shadow-lg hover:bg-[#ff7137] hover:text-white transition-all duration-300 border-2 border-[#ff7137]"
            >
              <HiArrowSmRight className="w-7 h-7" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#ff7137] w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default TestimonialSection;
