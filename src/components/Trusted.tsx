import React from "react";
import TrustedCard from "./TrustedCard";
import { BookOpen, BarChart3, Target } from "lucide-react";

const Trusted = (delay=600) => {
  return (
    <section data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="700" className="px-6 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-4 font-poppins">
          See the App in Action
        </h1>

        <p className="mb-16 text-base sm:text-md max-w-2xl text-gray-600">
          Enjoy the intuitive design and powerful features that make learning
          with us a joy.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          <TrustedCard
            Icon={BookOpen}
            title="Interactive Lessons"
            description="Engage with hands-on lessons and quizzes that make learning effective and enjoyable."
          />

          <TrustedCard
            Icon={BarChart3}
            title="Smart Progress Tracking"
            description="Visualize your learning journey with clear metrics and real-time progress insights."
          />

          <TrustedCard
            Icon={Target}
            title="Personalized Learning"
            description="Get content recommendations tailored to your goals, pace, and learning style."
          />
        </div>
      </div>
    </section>
  );
};

export default Trusted;
