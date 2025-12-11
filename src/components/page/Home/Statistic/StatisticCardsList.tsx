import FallbackList from "@/components/common/FallbackList/FallbackList";
import StatisticCard, {
  type Statistic,
} from "@/components/page/Home/Statistic/StatisticCard";

interface StatisticCardsListProps {
  data: Statistic[];
}

const StatisticCardsList = ({ data }: StatisticCardsListProps) => {
  return (
    <FallbackList
      data={data}
      gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      renderItem={(statistic, index) => (
        <StatisticCard key={index} statistic={statistic} />
      )}
    />
  );
};

export default StatisticCardsList;
