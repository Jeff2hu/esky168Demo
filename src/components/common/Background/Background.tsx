import { cn } from "@/lib/utils";

interface BackgroundProps {
  className?: string;
}

const Background = ({ className }: BackgroundProps) => {
  return (
    <div
      className={cn(
        "fixed inset-0 -z-100 bg-linear-to-b from-[#f4f4f4] to-[#ffffff]",
        className
      )}
    />
  );
};

export default Background;
