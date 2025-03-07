
import { cn } from "@/lib/utils";

interface AwwwardsLogoProps {
  className?: string;
}

const AwwwardsLogo = ({ className }: AwwwardsLogoProps) => {
  return (
    <div className={cn("flex items-center justify-center text-white font-bold tracking-wide", className)}>
      AWWWARDS
    </div>
  );
};

export default AwwwardsLogo;