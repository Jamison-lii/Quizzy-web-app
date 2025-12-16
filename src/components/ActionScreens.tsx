import React from "react";
import home from "../../public/phone screenshots/Home.jpg";
import ScreenshotGrid from "./ScreenshotGrid";

const ActionScreens = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 py-10">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-4 font-poppins">
        See the App in Action
      </h1>

      <p className="mb-8 text-md max-w-2xl text-gray-600">
        Enjoy the intuitive design and powerful features that make learning with us a joy.
      </p>

      {/* Screenshots */}
      <div
        className="
          w-full
          flex gap-6
          overflow-x-auto
          flex-nowrap
          md:justify-center md:overflow-visible
          scroll-smooth
          pb-4
        "
      >
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div key={index} className="flex-shrink-0">
            <ScreenshotGrid
              image={home}
              width="w-[220px] sm:w-[250px]"
              height="h-[480px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActionScreens;
