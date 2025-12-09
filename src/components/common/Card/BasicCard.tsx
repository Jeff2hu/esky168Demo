import { cn } from "@/lib/utils";
import React from "react";

interface BasicCardProps {
  children: React.ReactNode;
  className?: string;
}

const BasicCard = ({ children, className }: BasicCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BasicCard;
