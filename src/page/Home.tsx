import Header from "@/components/common/Header/Header";
import Title from "@/components/common/Title/Title";
import QuickActionList from "@/components/page/Home/QuickAction/QuickActionList";
import StatisticCardsList from "@/components/page/Home/Statistic/StatisticCardsList";
import { Sparkles } from "lucide-react";

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

const Home = () => {
  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="relative p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500 flex flex-col gap-3">
          <Header
            title="HOME.TITLE"
            description="HOME.DESCRIPTION"
            icon={Sparkles}
            isLogout={true}
          />

          <div className="flex flex-col gap-3">
            <Title title="HOME.STATISTICS" />
            <StatisticCardsList data={statsData} />
          </div>

          <div className="flex flex-col gap-3">
            <Title title="HOME.QUICK_ACTIONS" />
            <QuickActionList data={quickActions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
