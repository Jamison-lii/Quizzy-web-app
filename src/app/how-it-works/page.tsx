
export default function LearningJourneyPage() {
  return (
    <main className="min-h-screen w-full bg-[#B9BBFF] flex flex-col items-center relative overflow-hidden">
      {/* Title */}
      <h1
        className="mt-[91px] text-center font-bold text-black"
        style={{
          width: "773px",
          fontSize: "48px",
          lineHeight: "120%",
          letterSpacing: "-0.03em",
        }}
      >
        Your Learning Journey
      </h1>

      {/* Subheading */}
      <p
        className="mt-2 text-center text-black"
        style={{
          width: "621px",
          fontSize: "16px",
          lineHeight: "120%",
        }}
      >
        Follow these simple steps to begin your personalized educational
        experience with our app.
      </p>

      <main className="min-h-screen w-full bg-[#B9BBFF] flex flex-col items-center py-24 gap-16">
      {/* Card 1 - Top */}
      <div className="bg-white rounded-[10px] shadow-md flex flex-col items-center gap-4 p-6 w-[350px] h-[200px]">
        <h2 className="font-semibold text-lg text-black">Download App</h2>
        <p className="text-center text-black w-[220px] leading-[140%] text-base">
          Join thousands of learners on the most intuitive and engaging educational platform. Start your journey today.
        </p>
      </div>

      {/* Card 2 - Bottom left */}
      <div className="self-start ml-90 bg-white rounded-[10px] shadow-md flex flex-col items-center gap-4 p-6 w-[350px] h-[200px]">
        <h2 className="font-semibold text-lg text-black">Your Learning Journey</h2>
        <p className="text-center text-black w-[200px] leading-[140%] text-base">
          Follow these simple steps to begin your personalized educational experience with our app.
        </p>
      </div>

      {/* Card 3 - Bottom right */}
      <div className="self-end mr-100 bg-white rounded-[10px] shadow-md flex flex-col items-center gap-4 p-6 w-[350px] h-[200px]">
        <h2 className="font-semibold text-lg text-black">Get Started</h2>
        <p className="text-center text-black w-[200px] leading-[140%] text-base">
          Sign up and explore hundreds of personalized courses designed for your learning journey.
        </p>
      </div>

      {/* Card 4 - Bottom left */}
      <div className="self-start ml-90 bg-white rounded-[10px] shadow-md flex flex-col items-center gap-4 p-6 w-[350px] h-[200px]">
        <h2 className="font-semibold text-lg text-black">Explore More</h2>
        <p className="text-center text-black w-[200px] leading-[140%] text-base">
          Access advanced tools and track your progress across all courses to maximize learning.
        </p>
      </div>
    </main>
       <section className="relative w-full flex justify-center mt-24">
      {/* Big Box */}
      <div
        className="bg-[#0308AC] rounded-[30px] flex flex-col items-center justify-center p-12"
        style={{
          width: "1160px",
          height: "373px",
        }}
      >
        {/* Title */}
        <h2
          className="text-white font-bold text-center"
          style={{
            fontSize: "32px", // replace with your Title Page size
            lineHeight: "120%",
            letterSpacing: "-0.02em",
          }}
        >
          Ready to Start Your Learning Journey?
        </h2>

        {/* Subheading */}
        <p
          className="text-white text-center mt-4"
          style={{
            fontSize: "16px", // replace with your Body/Size Medium
            lineHeight: "140%",
          }}
        >
          Join thousands of students today and take the first step towards mastering new
          skills. It's free to get started!
        </p>

        {/* Download Button */}
        <div
          className="mt-8 bg-white rounded-[45px] flex items-center justify-center cursor-pointer"
          style={{
            width: "394px",
            height: "79px",
          }}
        >
          <span
            className="text-[#0308AC] font-semibold text-lg"
            style={{
              width: "396px",
              height: "58px",
              textAlign: "center",
              lineHeight: "58px",
            }}
          >
            Download Now
          </span>
        </div>
      </div>
    </section>


    </main>
  );
}
