import React from "react";
import BasicCard from "@/components/common/Card/BasicCard";
import { useTranslation } from "react-i18next";
import { DollarSign, ShoppingCart, Package, Users } from "lucide-react";

export type Statistic = {
  id: number;
  title: string;
  value: string;
};

const IconMap = {
  1: DollarSign,
  2: ShoppingCart,
  3: Package,
  4: Users,
};

interface StatisticCardProps {
  statistic: Statistic;
}

const gradientClasses = [
  "gradient-blue",
  "gradient-green",
  "gradient-orange",
  "gradient-purple-pink",
];

const iconBgColors = [
  "bg-blue-50",
  "bg-green-50",
  "bg-orange-50",
  "bg-purple-50",
];

const iconColors = [
  "text-blue-600",
  "text-green-600",
  "text-orange-600",
  "text-purple-600",
];

const StatisticCard = ({ statistic }: StatisticCardProps) => {
  const { t } = useTranslation();
  const { title, value, id } = statistic;
  const Icon = IconMap[id as keyof typeof IconMap] as React.ElementType;
  const gradientClass = gradientClasses[id - 1];
  const iconBgClass = iconBgColors[id - 1];
  const iconColorClass = iconColors[id - 1];

  return (
    <BasicCard className="cursor-pointer p-6 backdrop-blur-sm bg-white/90 border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
      <div
        className={`absolute inset-0 ${gradientClass} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />

      <div className="relative flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-2">
            {t(`HOME.${title}`)}
          </p>
          <p className="text-3xl font-bold text-gray-900 tracking-tight">
            {value}
          </p>
        </div>
        <div
          className={`p-4 rounded-2xl ${iconBgClass} shadow-md group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={`w-7 h-7 ${iconColorClass}`} />
        </div>
      </div>
    </BasicCard>
  );
};

export default StatisticCard;
