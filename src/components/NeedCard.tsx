// components/NeedCard.tsx
import React from "react";
import { LucideIcon } from "lucide-react";

interface NeedCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const NeedCard = ({ Icon, title, description, delay = 0 }: NeedCardProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="700"
      className="group w-full max-w-sm p-8 bg-white rounded-2xl
                 border border-gray-100 shadow-md
                 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
                 transition-all duration-300"
    >
      {/* Icon */}
      <div
        className="h-14 w-14 rounded-xl bg-blue-600/10 flex items-center justify-center
                   text-blue-600 group-hover:bg-blue-600 group-hover:text-white
                   transition-colors duration-300"
      >
        <Icon size={26} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mt-6">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-3 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default NeedCard;
