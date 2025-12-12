import Hero from "@/components/Hero";
import Whatyouneed from "@/components/Whatyouneed";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen " >
       <Hero/>
       <Whatyouneed/>
    </div>
  );
}
