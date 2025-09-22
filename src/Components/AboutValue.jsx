import React from "react";

const values = [
  {
    letter: "N",
    color: "bg-orange-500",
    text: "Providing caring and compassionate healthcare to all.",
  },
  {
    letter: "O",
    color: "bg-gray-700",
    text: "Ensuring healthcare accessibility for every individual.",
  },
  {
    letter: "B",
    color: "bg-orange-500",
    text: "Innovating healthcare through the use of advanced technology and research.",
  },
  {
    letter: "L",
    color: "bg-gray-700",
    text: "Providing accountable and reliable healthcare services.",
  },
  {
    letter: "E",
    color: "bg-orange-500",
    text: "Maintaining a “Yes, We Can” attitude to serve with dedication and honesty.",
  },
];

export default function ValuesSection() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6 border-2 border-orange-500">
      <h2 className="text-2xl font-bold mb-6">Values</h2>
      <div className="space-y-4">
        {values.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center rounded-lg shadow bg-gray-50 p-4"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center text-white font-bold text-lg rounded-full ${item.color} mr-4`}
            >
              {item.letter}
            </div>
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
