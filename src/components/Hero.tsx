import React from "react";
import ScreenshotGrid from "./ScreenshotGrid";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFF] to-[#EEF3FF] py-20 px-6 md:py-32">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-20">

        {/* LEFT SIDE */}
        <div data-aos="fade-up" className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6 font-poppins">
            Unlock Your <span className="text-blue-600">Potential</span>,  
            <br />
            One Lesson at a Time
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Join thousands of learners on the most intuitive and engaging
            educational platform. Start your journey today.
          </p>

          <button
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium 
                       shadow-lg hover:shadow-xl hover:bg-blue-700 transition-transform 
                       duration-200 hover:-translate-y-1 active:scale-95"
          >
            Download for Android
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div data-aos="fade-left" className="relative flex justify-center w-full">

          {/* Soft Glow Behind Phone */}
          <div
            className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-400/20 blur-3xl rounded-full -z-10 top-10"
          />

          {/* Floating Phone */}
          <div className="animate-floating">
            <ScreenshotGrid />
          </div>
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style>{`
        .animate-floating {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
