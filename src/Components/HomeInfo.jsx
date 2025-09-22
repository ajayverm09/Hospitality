import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaUserMd, FaHospital, FaSearchLocation, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 1,
    title: '24/7 Emergency Services',
    phone: '+91 6262848460',
    email: 'info@noblehealthcity.com',
    buttonText: 'Get in Touch',
    image: 'https://noblehealthcity.com/img/home/DSC00183.webp',
  },
  {
    id: 2,
    title: 'Find a Doctor',
    features: ['200+ Specialists', '50+ Departments', 'Online Booking'],
    buttonText: 'Search Doctors',
    image: 'https://noblehealthcity.com/img/home/DSC09767.webp',
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const InfoCards = () => {
  return (
    <section className="bg-[#fff5f0] py-12 px-4 md:px-20 overflow-x-hidden">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="relative rounded-[2rem] overflow-hidden shadow-md min-h-[360px] md:min-h-[420px]"
            variants={cardVariants}
          >
            {/* Background Image */}
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 p-8 text-white flex flex-col h-full justify-center items-center text-center space-y-4">
              {/* Icon */}
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg">
                {card.id === 1 ? <FaPhoneAlt /> : <FaSearchLocation />}
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold leading-snug">{card.title}</h2>

              {/* Info or Features */}
              {card.id === 1 ? (
                <div className="space-y-3 mt-2">
                  <div className="flex items-center justify-center gap-3 text-lg">
                    <FaPhoneAlt className="text-orange-500 text-xl" />
                    <span>{card.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-lg">
                    <FaEnvelope className="text-orange-500 text-xl" />
                    <span>{card.email}</span>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2 mt-2 text-lg">
                  {card.features.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-3">
                      {idx === 0 && <FaUserMd className="text-orange-500 text-2xl" />}
                      {idx === 1 && <FaHospital className="text-orange-500 text-2xl" />}
                      {idx === 2 && <FaCalendarAlt className="text-orange-500 text-2xl" />}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Button */}
              <button className="mt-6 bg-white text-blue-900 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition duration-300 w-full max-w-xs sm:max-w-sm">
                {card.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default InfoCards;
