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

const ActionCard = ({ title, id, path }: LinkCardType) => {
  const { t } = useTranslation();
  const Icon = IconMap[id as keyof typeof IconMap] as React.ElementType;

  return (
    <Link
      to={path}
      className="flex flex-col items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
    >
      <Icon className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors" />
      <span className="text-sm font-medium text-gray-900">
        {t(`HOME.${title}`)}
      </span>
    </Link>
  );
};

export default ActionCard;
