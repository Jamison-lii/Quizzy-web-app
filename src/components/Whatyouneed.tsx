import React from "react";
import NeedCard from "./NeedCard";
import { BookOpen, Sparkles, BarChart3 } from "lucide-react";

const Whatyouneed = () => {
  return (
    <section
      className="relative bg-blue-600 py-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        {/* HEADER */}
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight
                     text-white mb-6 font-poppins"
        >
          Everything You Need to Succeed
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-base sm:text-lg max-w-2xl text-white mb-16"
        >
          Our app is packed with powerful features designed to make learning
          effective, personalized, and fun.
        </p>

        {/* CARDS */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full place-items-center"
        >
          <NeedCard
            Icon={BookOpen}
            title="Interactive Lessons"
            description="Engage with hands-on lessons and quizzes that make learning enjoyable and effective."
            delay={0}
          />

          <NeedCard
            Icon={Sparkles}
            title="Smart Learning Experience"
            description="Personalized content adapts to your pace and learning style automatically."
            delay={100}
          />

          <NeedCard
            Icon={BarChart3}
            title="Progress Tracking"
            description="Track your growth with clear insights and performance analytics."
            delay={200}
          />
        </div>
      </div>
    </section>
  );
};

export default Whatyouneed;
