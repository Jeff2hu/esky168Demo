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

const StatisticCard = ({ statistic }: StatisticCardProps) => {
  const { t } = useTranslation();
  const { title, value } = statistic;
  const Icon = IconMap[
    statistic.id as keyof typeof IconMap
  ] as React.ElementType;

  return (
    <BasicCard className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 ">{t(`HOME.${title}`)}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className="p-3 rounded-lg bg-gray-100">
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </BasicCard>
  );
};

export default StatisticCard;
