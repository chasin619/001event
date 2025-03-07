
import React from 'react';
import { cn } from "@/lib/utils";

interface AwardCardProps {
  number: string;
  title: string;
  subtitle?: string;
  logo?: React.ReactNode;
  className?: string;
}

const AwardCard = ({ number, title, subtitle, logo, className }: AwardCardProps) => {
  return (
    <div className={cn("award-card flex flex-col items-center justify-center p-6 bg-black text-white animate-scale-in", className)}>
      <div className="award-number mb-2 text-[80px]">{number}</div>
      {logo && <div className="mb-2">{logo}</div>}
      <div className="text-center">
        <h3 className="text-lg font-medium uppercase tracking-wider">{title}</h3>
        {subtitle && <p className="text-sm text-zinc-400 uppercase tracking-wide">{subtitle}</p>}
      </div>
    </div>
  );
};

export default AwardCard;