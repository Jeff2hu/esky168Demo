import React from "react";
import { Button as ShadButton } from "@/components/ui/button";

export type ButtonProps = React.ComponentProps<typeof ShadButton> & {
  isLoading?: boolean;
};

const Button = ({ children, isLoading, ...props }: ButtonProps) => {
  if (isLoading) {
    return (
      <ShadButton {...props} disabled>
        <div className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin" />
      </ShadButton>
    );
  }

  return <ShadButton {...props}>{children}</ShadButton>;
};

export default Button;
