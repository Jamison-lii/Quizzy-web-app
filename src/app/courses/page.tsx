import {
  Network,
  Database,
  BarChart3,
  Code2,
  Cpu,
  Layers3
} from "lucide-react";

export default function CoursesPage() {
  const subjects = [
    {
      id: 1,
      title: "System Analysis",
      description:
        "Learn how to analyze, design, and optimize systems through structured problem-solving and real-world scenarios.",
      icon: Layers3,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "Database & Design",
      description:
        "Master database concepts including ER diagrams, normalization, SQL, and efficient data modeling.",
      icon: Database,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 3,
      title: "Data Analysis",
      description:
        "Develop skills in analyzing, interpreting, and visualizing data to drive informed decisions.",
      icon: BarChart3,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 4,
      title: "Software Engineering",
      description:
        "Understand software development methodologies, best practices, testing, and project lifecycle management.",
      icon: Code2,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      id: 5,
      title: "Computer Networks",
      description:
        "Explore networking fundamentals including protocols, architectures, security, and data transmission.",
      icon: Network,
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: 6,
      title: "Operating Systems",
      description:
        "Learn how operating systems manage processes, memory, storage, and hardware resources efficiently.",
      icon: Cpu,
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3FBFD]">
      <main className="px-6 sm:px-10 md:px-16 lg:px-20 pt-20 md:pt-28 pb-20">

        {/* HEADER */}
        <div
          className="text-center mb-14 md:mb-20"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-black mb-4">
            Explore Your Subjects
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#444444] max-w-2xl mx-auto">
            Practice core computer science subjects through interactive quizzes
            designed for deep understanding.
          </p>
        </div>

        {/* SUBJECT GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6 md:gap-8
            max-w-7xl mx-auto
          "
        >
          {subjects.map((subject, index) => {
            const Icon = subject.icon;

            return (
              <div
                key={subject.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="
                  bg-white
                  rounded-3xl
                  p-6 sm:p-8
                  shadow-md
                  hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  cursor-pointer
                "
              >
                {/* ICON */}
                <div
                  className={`
                    w-14 h-14 sm:w-16 sm:h-16
                    rounded-full
                    flex items-center justify-center
                    mb-5
                    ${subject.color}
                  `}
                >
                  <Icon size={28} />
                </div>

                {/* CONTENT */}
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-3">
                  {subject.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#4A4A4A] leading-relaxed">
                  {subject.description}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
