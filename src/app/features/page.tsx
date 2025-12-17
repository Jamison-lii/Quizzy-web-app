"use client";

import Image from "next/image";
import phone from "../../../public/phone screenshots/Home.jpg";

const features = [
  {
    title: "Engaging Interactive Lessons",
    description:
      "Learn faster with visually rich lessons and interactive drills designed to keep you focused and motivated.",
  },
  {
    title: "Track Your Progress with Ease",
    description:
      "Stay on top of your learning with progress insights that highlight strengths and improvement areas.",
  },
  {
    title: "Quizzes Tailored Just for You",
    description:
      "Adaptive quizzes adjust to your pace and help reinforce concepts through repetition and challenge.",
  },
];

const FeaturePage = () => {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden">

      {/* HERO */}
      <section className="w-full bg-blue-600 py-20 px-6 text-center text-white">
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Discover What Makes QUIZZY Special
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="max-w-xl mx-auto text-base md:text-lg opacity-90"
        >
          Unlock your full potential with engaging lessons, personalized quizzes,
          and powerful progress tracking.
        </p>
      </section>

      {/* FEATURES */}
     <div className="w-full overflow-hidden">

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto py-20 px-6 space-y-28">

        {features.map((feature, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`
                flex flex-col
                md:flex-row
                items-center
                gap-14 md:gap-24
                ${isReversed ? "md:flex-row-reverse" : ""}
              `}
            >
              {/* TEXT */}
              <div
                data-aos={isReversed ? "fade-left" : "fade-right"}
                className="flex-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
                  {feature.description}
                </p>
              </div>

              {/* PHONE MOCKUP */}
              <div
                data-aos={isReversed ? "fade-right" : "fade-left"}
                className="flex-1 flex justify-center relative"
              >
                {/* Glow */}
                <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-3xl -z-10" />

                {/* Phone */}
                <div className="
                  relative
                  w-[240px] sm:w-[280px] md:w-[300px]
                  bg-black
                  rounded-[36px]
                  p-3
                  shadow-2xl
                ">
                  {/* Notch */}
                  <div className="
                    absolute
                    top-2 left-1/2
                    -translate-x-1/2
                    w-28 h-5
                    bg-black
                    rounded-b-2xl
                    z-20
                  " />

                  {/* Screen */}
                  <div className="rounded-[28px] overflow-hidden">
                    <Image
                      src={phone}
                      alt="Quizzy App Screenshot"
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>

    </div>
  );
};

export default FeaturePage;
