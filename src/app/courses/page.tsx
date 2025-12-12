import Image from "next/image";

export default function CoursesPage() {
  const subjects = [
    {
      id: 1,
      title: "Mathematics",
      description: "Master the fundamentals of mathematics with engaging quizzes covering algebra, geometry, calculus, and more.",
      icon: "📐"
    },
    {
      id: 2,
      title: "Biology",
      description: "Explore the wonders of life sciences through interactive quizzes on cells, genetics, ecology, and human anatomy.",
      icon: "🧬"
    },
    {
      id: 3,
      title: "Chemistry",
      description: "Dive into the world of atoms and molecules with quizzes on organic chemistry, reactions, and periodic table.",
      icon: "⚗️"
    },
    {
      id: 4,
      title: "Physics",
      description: "Understand the laws of nature with quizzes covering mechanics, thermodynamics, electricity, and quantum physics.",
      icon: "⚛️"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F3FBFD]">
      {/* Main Content */}
      <main className="px-10 md:px-16 lg:px-20 pt-20 md:pt-28 lg:pt-32 pb-20">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-black mb-3 md:mb-4">
            Explore Your Subjects
          </h1>
          <p className="text-base md:text-lg text-[#444444] leading-relaxed max-w-2xl mx-auto">
            Choose from our wide range of subjects and start learning today
          </p>
        </div>

        {/* Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="bg-white rounded-3xl shadow-[0px_4px_12px_rgba(0,0,0,0.12)] p-6 md:p-8 hover:shadow-[0px_6px_16px_rgba(0,0,0,0.15)] transition-shadow duration-300 cursor-pointer"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#52D4E7] flex items-center justify-center mb-4 md:mb-5">
                <span className="text-2xl md:text-3xl">{subject.icon}</span>
              </div>

              {/* Card Content */}
              <h3 className="text-lg md:text-xl font-semibold text-black mb-3">
                {subject.title}
              </h3>
              <p className="text-sm md:text-[15px] text-[#4A4A4A] leading-relaxed">
                {subject.description}
              </p>
            </div>
          ))}
        </div>
      </main>

      
    </div>
  );
}