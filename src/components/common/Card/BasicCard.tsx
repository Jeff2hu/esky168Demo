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
        "bg-white rounded-lg shadow-md p-4 border border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BasicCard;
