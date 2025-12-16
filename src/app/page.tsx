import ActionScreens from "@/components/ActionScreens";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import Trusted from "@/components/Trusted";
import Whatyouneed from "@/components/Whatyouneed";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen " >
       <Hero/>
       <Whatyouneed/>
       <ActionScreens/>
       <Trusted/>
       <CallToAction/>
    </div>
  );
}
