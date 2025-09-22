import React from 'react';

const AdvantagesSection = () => {
  const advantages = [
    {
      title: 'Experienced Doctors',
      description: 'Highly qualified medical professionals with years of expertise in their respective fields.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
    },
    {
      title: 'Wide Range of Services',
      description: 'Comprehensive healthcare services covering all medical specialties under one roof.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
    },
    {
      title: 'Advanced Technology',
      description: 'State-of-the-art medical equipment for precise diagnosis and effective treatment.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v2H5zm0-4h14v2H5zm0-4h14v2H5z" />
        </svg>
      ),
    },
    {
      title: 'Personalized Care',
      description: 'Individual attention and customized treatment plans tailored to patient needs.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
    },
    {
      title: 'Affordable Treatments',
      description: 'Quality healthcare at competitive prices with transparent billing and flexible options.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1.93.65 1.64 2.08 1.64 1.51 0 2.09-.67 2.09-1.35 0-.85-.59-1.28-2.35-1.66-1.89-.41-3.64-1.15-3.64-3.27 0-1.67 1.32-2.72 3.13-3.07V5h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.26 2.35 1.64 1.89.41 3.64 1.15 3.64 3.27 0 1.78-1.32 2.83-3.26 3.07z" />
        </svg>
      ),
    },
    {
      title: 'Caring Environment',
      description: 'Warm atmosphere designed to make patients feel comfortable and supported.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
    },
    {
      title: 'High-Quality Care',
      description: 'Commitment to excellence with internationally recognized standards and practices.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      title: 'Accurate Diagnoses',
      description: 'Precise diagnostic services backed by advanced testing and expert analysis.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes rotate360 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .group:hover .icon-rotate {
          animation: rotate360 0.6s ease-in-out;
        }
      `}</style>
      <div className="bg-[#fffbf8] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#ffefe7] text-[#ff7137] text-sm font-semibold mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v10.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V3a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Our Advantages</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-orange-500 mb-4">
            Why Choose Our Healthcare
          </h2>
          <p className="text-lg text-[#555a73] max-w-2xl mx-auto mb-16">
            Experience excellence in medical care with our comprehensive range of services.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="relative p-4 rounded-2xl bg-white shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group border-l-4 border-[#ff7137] hover:border-l-8"
              >
                <div className="relative z-10 flex items-center space-x-4">
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 bg-[#ffefe7] group-hover:bg-[#ff7137]"
                  >
                    <span className="text-[#ff7137] group-hover:text-white transition-colors duration-300 inline-block icon-rotate">
                      {advantage.icon}
                    </span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold text-[#0D3E87] mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-[#555a73]">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvantagesSection;