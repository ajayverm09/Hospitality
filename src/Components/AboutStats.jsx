import React from "react";
import CountUp from "react-countup";

const customGray = "#666666";

const stats = [
  {
    id: 1,
    iconUrl: "https://noblehealthcity.com/img/home/Medical%20&%20Surgical%20Specialists.png",
    value: 100,
    suffix: "+",
    label: "Specialists",
  },
  {
    id: 2,
    iconUrl: "https://noblehealthcity.com/img/home/Satisfied%20patients.png",
    value: 50000,
    suffix: "+",
    label: "Satisfied patients",
  },
  {
    id: 3,
    iconUrl: "https://noblehealthcity.com/img/home/beds.png",
    value: 250,
    suffix: "+",
    label: "Beds",
  },
  {
    id: 4,
    iconUrl: "https://noblehealthcity.com/img/home/Years%20of%20Experience.png",
    value: 20,
    suffix: "+",
    label: "Years of Experience",
  },
];

export default function Stats() {
  return (
    <div className="py-6 md:py-8 lg:py-12" style={{ backgroundColor: customGray }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ id, iconUrl, value, suffix, label }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center text-white text-opacity-80 text-center"
            >
              <img
                src={iconUrl}
                alt={label}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-2 sm:mb-3 md:mb-4 opacity-80 drop-shadow"
              />
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  <CountUp end={value} suffix={suffix} duration={3} />
                </div>
                <div className="text-sm sm:text-base md:text-base font-medium tracking-wide">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}