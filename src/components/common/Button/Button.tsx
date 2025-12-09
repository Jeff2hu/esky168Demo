import React from "react";
import { Button as ShadButton } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export type ButtonProps = React.ComponentProps<typeof ShadButton> & {
  isLoading?: boolean;
};

const Button = ({ children, isLoading, ...props }: ButtonProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <ShadButton {...props} disabled>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin" />
          <span>{t("COMMON.LOADING")}</span>
        </div>
      </ShadButton>
    );
  }

  return <ShadButton {...props}>{children}</ShadButton>;
};

export default Button;
