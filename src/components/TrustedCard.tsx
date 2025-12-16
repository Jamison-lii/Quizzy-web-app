// components/TrustedCard.tsx
import React from "react";
import { LucideIcon } from "lucide-react";

interface TrustedCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const TrustedCard = ({ Icon, title, description, delay=600 }: TrustedCardProps) => {
  return (
    <div data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="700"
      className="group w-full max-w-sm p-6 bg-white rounded-2xl border border-gray-100
                 shadow-md hover:shadow-xl transition-all duration-300
                 hover:-translate-y-1"
    >
      {/* Icon */}
      <div
        className="h-12 w-12 rounded-xl bg-blue-600/10 flex items-center justify-center
                   text-blue-600 group-hover:bg-blue-600 group-hover:text-white
                   transition-colors duration-300"
      >
        <Icon size={22} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mt-5">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default TrustedCard;
