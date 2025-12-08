import StatisticCard, {
  type Statistic,
} from "@/components/page/Home/Statistic/StatisticCard";

interface StatisticCardsListProps {
  data: Statistic[];
}

const StatisticCardsList = ({ data }: StatisticCardsListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((statistic, index) => (
        <StatisticCard key={index} statistic={statistic} />
      ))}
    </div>
  );
};

export default StatisticCardsList;
