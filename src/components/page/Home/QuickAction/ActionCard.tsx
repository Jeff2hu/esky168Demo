import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { ShoppingCart, Package, Users, BarChart3 } from "lucide-react";

export type LinkCardType = {
  id: number;
  title: string;
  path: string;
};

const IconMap = {
  1: ShoppingCart,
  2: Package,
  3: Users,
  4: BarChart3,
};

const gradientClasses = [
  "gradient-blue",
  "gradient-green",
  "gradient-orange",
  "gradient-purple-pink",
];

const hoverBgColors = [
  "hover:bg-blue-50",
  "hover:bg-green-50",
  "hover:bg-orange-50",
  "hover:bg-purple-50",
];

const ActionCard = ({ title, id, path }: LinkCardType) => {
  const { t } = useTranslation();
  const Icon = IconMap[id as keyof typeof IconMap] as React.ElementType;
  const gradientClass = gradientClasses[id - 1];
  const hoverBgClass = hoverBgColors[id - 1];

  return (
    <Link
      to={path}
      className={`flex flex-col items-center gap-4 p-6 rounded-2xl bg-white border border-gray-100 ${hoverBgClass} hover:shadow-lg hover:border-transparent transition-all duration-300 group hover:-translate-y-1`}
    >
      <div
        className={`p-3 rounded-xl ${gradientClass} shadow-md group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className="text-sm font-semibold text-gray-700 text-center group-hover:text-gray-900 transition-colors">
        {t(`HOME.${title}`)}
      </span>
    </Link>
  );
};

export default ActionCard;
