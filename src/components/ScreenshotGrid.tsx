// components/ScreenshotGrid.tsx
import Image from "next/image";
import home from "../../public/phone screenshots/Home.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ScreenshotGridProps {
  image: StaticImport;
  width?: string;   // tailwind width classes
  height?: string;  // tailwind height classes
  delay?: number;   // animation delay in ms
}


export default function ScreenshotGrid({ image,
  width = "w-[280px] sm:w-[320px] md:w-[360px]",
  height = "h-[700px]",
  delay = 0
}: ScreenshotGridProps) {
  return (
     <section>
      <div data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="700" className="flex justify-center">
        
        {/* PHONE FRAME */}
        <div
          className={`relative ${width} bg-black rounded-[30px] p-3 shadow-2xl`}
        >
          {/* SCREEN */}
          <div className="rounded-[22px] overflow-hidden">
            <Image
              src={image}
              alt="phone screenshot"
              className={`w-full ${height} object-cover`}
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
