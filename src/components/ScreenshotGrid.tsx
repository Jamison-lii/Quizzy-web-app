// components/ScreenshotGrid.tsx
import Image from "next/image";
import home from "../../public/phone screenshots/Home.jpg";

export default function ScreenshotGrid() {
  return (
    <section className="pl-40">
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        
        {/* PHONE FRAME */}
        <div className="relative h-auto w-[280px] sm:w-[320px] md:w-[360px] 
                        bg-black rounded-[30px] p-3 shadow-2xl">

          {/* NOTCH */}
          

          {/* SCREEN */}
          <div className="rounded-[22px] overflow-hidden">
            <Image
              src={home}
              alt="home"
              className="w-full h-[700px] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
