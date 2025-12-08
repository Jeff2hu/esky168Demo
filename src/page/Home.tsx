import { useTranslation } from "react-i18next";
import StatisticCardsList from "@/components/page/Home/Statistic/StatisticCardsList";
import QuickAction from "@/components/page/Home/QuickAction/QuickAction";
import { useAuthStore } from "@/store/useAuthStore";
import Button from "@/components/common/Button/Button";

const Home = () => {
  const { t } = useTranslation();
  const { logout } = useAuthStore();

  const statsData = [
    {
      id: 1,
      title: "TOTAL_SALES",
      value: "123",
    },
    {
      id: 2,
      title: "ORDER_COUNT",
      value: "1,234",
    },
    {
      id: 3,
      title: "INVENTORY_PRODUCT",
      value: "3,456",
    },
    {
      id: 4,
      title: "TOTAL_CUSTOMERS",
      value: "567",
    },
  ];

  const quickActions = [
    { id: 1, title: "SALES_MANAGEMENT", path: "/sales-management" },
    { id: 2, title: "MANAGE_INVENTORY", path: "/sales-management" },
    { id: 3, title: "MANAGE_CUSTOMERS", path: "/sales-management" },
    { id: 4, title: "REPORT_STATISTICS", path: "/sales-management" },
  ];

  return (
    <div className="min-h-full bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {t("HOME.TITLE")}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {t("HOME.DESCRIPTION")}
            </p>
          </div>
          <Button
            variant="outline"
            className="bg-red-500 text-white cursor-pointer"
            onClick={logout}
          >
            {t("LOGIN.LOGOUT")}
          </Button>
        </div>

        <StatisticCardsList data={statsData} />
        <QuickAction data={quickActions} />
      </div>
    </div>
  );
};

export default Home;
