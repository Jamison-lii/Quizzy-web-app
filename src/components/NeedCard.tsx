import React from "react";

const NeedCard = () => {
  return (
    <div
      className="w-80 p-6 bg-white rounded-2xl shadow-lg border border-gray-100
                 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Icon */}
      <div className="h-12 w-12 rounded-xl bg-[#33E3D4] flex items-center justify-center text-white text-xl font-bold">
        📘
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mt-4">
        Interactive Lessons
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
        Engage with hands-on lessons and quizzes that make learning enjoyable
        and effective.
      </p>
    </div>
  );
};

export default NeedCard;
