import React from "react";
import { ArrowLeft, LogOut, type LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import Button from "../Button/Button";
import { useAuthStore } from "@/store/useAuthStore";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isLogout?: boolean;
}

const Header = ({
  title,
  description,
  icon,
  isLogout = false,
}: HeaderProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const Icon = icon as React.ElementType;

  const buttonClass = cn(
    "group bg-white cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md gap-2",
    isLogout
      ? "bg-red-50 text-red-600 border-red-200 hover:border-red-400 hover:text-white hover:bg-red-600"
      : "bg-blue-50 text-blue-600 border-blue-200 hover:border-blue-400 hover:text-white hover:bg-blue-600"
  );

  const handleLogout = () => {
    if (isLogout) {
      logout();
      navigate("/login");
      return;
    }

    navigate(-1);
  };

  return (
    <div className="flex gap-4 justify-between items-center sm:items-start bg-white/60 rounded-2xl p-6 shadow-lg border border-white/50">
      <div className="flex items-center gap-5">
        <div className="w-12 h-12 rounded-xl gradient-blue flex items-center justify-center shadow-md">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold gradient-brand-text bg-clip-text text-transparent">
            {t(title)}
          </h1>
          <p className="text-sm text-gray-600 mt-0.5">{t(description)}</p>
        </div>
      </div>
      <Button variant="outline" className={buttonClass} onClick={handleLogout}>
        {isLogout ? (
          <LogOut className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
        ) : (
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
        )}
        {isLogout ? t("LOGIN.LOGOUT") : t("COMMON.BACK")}
      </Button>
    </div>
  );
};

export default Header;
