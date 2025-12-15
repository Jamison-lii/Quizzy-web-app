import Image from "next/image";
import phone from "../../../public/images/phone.png";


const features = [
  {
    title: "Engaging Interactive Lessons",
    description:
      "Our platform makes learning fun and active. Dive into lessons that capture your attention and master new concepts with ease through videos, simulations, and hands-on activities.",
    image: phone,
  },
  {
    title: "Track Your Progress with Ease",
    description:
      "Monitor your learning milestones with a clean dashboard that highlights strengths and areas for improvement.",
    image: phone,
  },
  {
    title: "Quizzes Tailored Just for You",
    description:
      "Reinforce your knowledge with adaptive quizzes personalized to your learning pace and style.",
   image: phone,
  },
];

const boxColors = ["bg-purple-100", "bg-blue-100", "bg-pink-100"];

const FeaturePage = () => {
  return (
    <div className="w-full flex flex-col items-center">

      {/* Hero */}
      <section className="w-full bg-purple-300 py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Discover What Makes QUIZZY Special
        </h1>
        <p className="max-w-[500px] mx-auto text-base md:text-lg text-gray-800">
          Unlock your full potential with our engaging lessons, personalized quizzes, and detailed progress tracking.
        </p>
      </section>

      {/* Features */}
      <section className="w-full py-20 px-6 flex flex-col gap-14">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`
              w-full 
              max-w-[50%]        /* THIS makes each box take max 50% screen width */
              mx-auto            /* THIS centers the box */
              rounded-3xl shadow-lg p-10 
              flex flex-row items-center justify-between
              ${boxColors[index % boxColors.length]}
            `}
            style={{
              minHeight: "260px"
            }}
          >
            {/* Left: Text */}
            <div className="flex-1 text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                {feature.title}
              </h2>
              <p className="text-gray-700 md:text-lg">
                {feature.description}
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex-1 flex justify-end relative">

              {/* Decorative gradient circles */}
              <div className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full 
                bg-gradient-to-tr from-purple-400 via-blue-400 to-purple-500 
                opacity-20 -z-10 top-1/2 right-4 transform -translate-y-1/2">
              </div>

              <div className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full 
                bg-gradient-to-tr from-blue-400 via-purple-400 to-cyan-400 
                opacity-30 -z-10 top-1/2 right-8 transform -translate-y-1/2">
              </div>

              {/* Image */}
              <Image
                src={feature.image}
                alt={feature.title}
                width={150}
                height={150}
                className="drop-shadow-xl relative z-10"
              />
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="w-full py-20 bg-blue-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="mb-8 text-lg md:text-xl">
          Join thousands of students today and take the first step towards mastering new skills.
        </p>
        <button className="bg-white text-blue-900 px-10 py-4 rounded-half font-semibold hover:bg-gray-200 hover:shadow-lg transition">
          Download Now
        </button>
      </section>

    </div>
  );
};

export default FeaturePage;
