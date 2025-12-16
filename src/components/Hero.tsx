import React from "react";
import ScreenshotGrid from "./ScreenshotGrid";
import home from "../../public/phone screenshots/Home.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        {/* RIGHT – PHONE (MOBILE FIRST) */}
        <div
          data-aos="fade-up"
          className="relative flex justify-center w-full md:w-1/2"
        >
          {/* Glow */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-blue-400/20 blur-3xl rounded-full -z-10 top-10" />

          <div data-aos='fade-up' className="animate-floating">
            <ScreenshotGrid
              image={home}
              width="w-[220px] sm:w-[260px] md:w-[300px]"
              height="h-[480px] sm:h-[540px] md:h-[620px]"
            />
          </div>
        </div>

        {/* LEFT – TEXT */}
        <div
          data-aos="fade-up"
          className="max-w-xl text-center md:text-left md:w-1/2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6 font-poppins">
            Unlock Your <span className="text-blue-600">Potential</span>, <br />
            One Lesson at a Time
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
            Join thousands of learners on the most intuitive and engaging
            educational platform. Start your journey today.
          </p>

          <button
            className="bg-[#5156FF] text-white px-8 py-4 rounded-xl text-base sm:text-lg font-medium
                       shadow-lg hover:shadow-xl hover:bg-blue-700 transition
                       active:scale-95"
          >
            Download for Android
          </button>
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        .animate-floating {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
