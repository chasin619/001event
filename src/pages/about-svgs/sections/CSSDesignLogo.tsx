import { cn } from "@/lib/utils";

interface CSSDesignLogoProps {
  className?: string;
}

const CSSDesignLogo = ({ className }: CSSDesignLogoProps) => {
  return (
    <div className={cn("flex items-center justify-center text-white", className)}>
      <span className="font-bold tracking-tight">CSS</span>
      <span className="font-normal">Design</span>
      <span className="font-light">Awards</span>
    </div>
  );
};

export default CSSDesignLogo;