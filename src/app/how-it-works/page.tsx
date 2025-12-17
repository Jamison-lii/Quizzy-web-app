"use client";

export default function LearningJourneyPage() {
  const steps = [
    {
      title: "Download the App",
      description:
        "Join thousands of learners on the most intuitive and engaging educational platform.",
    },
    {
      title: "Set Up Your Profile",
      description:
        "Customize your learning preferences and goals for a personalized experience.",
    },
    {
      title: "Start Learning",
      description:
        "Explore expertly designed courses tailored to your learning journey.",
    },
    {
      title: "Track Your Progress",
      description:
        "Monitor growth, unlock achievements, and stay motivated as you learn.",
    },
  ];

  return (
    <main className="w-full bg-[#F8FAFF] overflow-hidden">
      {/* HEADER */}
      <section className="pt-24 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Your Learning Journey
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          Follow these simple steps to begin your personalized educational
          experience with our app.
        </p>
      </section>

      {/* STEPS */}
      <section className="mt-24 flex flex-col gap-16 max-w-6xl mx-auto px-6">
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              data-aos={isLeft ? "fade-right" : "fade-left"}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                !isLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* CARD */}
              <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 w-full md:w-[380px]">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>

              {/* CONNECTOR */}
              <div className="hidden md:block flex-1 h-[2px] bg-blue-100 rounded-full" />
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="mt-32 px-6 pb-24 flex justify-center">
        <div className="bg-blue-600 rounded-3xl p-10 md:p-14 text-center max-w-5xl w-full shadow-xl">
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-white/90 mt-4 max-w-2xl mx-auto">
            Join thousands of students today and take the first step toward
            mastering new skills.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform">
            Download Now
          </button>
        </div>
      </section>
    </main>
  );
}
