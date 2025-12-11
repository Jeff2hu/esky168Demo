import FallbackList from "@/components/common/FallbackList/FallbackList";
import type { LinkCardType } from "./ActionCard";
import ActionCard from "./ActionCard";

interface QuickActionProps {
  data: LinkCardType[];
}

const QuickActionList = ({ data }: QuickActionProps) => {
  return (
    <FallbackList
      data={data}
      gridClassName="grid-cols-2 sm:grid-cols-4"
      renderItem={(action, index) => <ActionCard key={index} {...action} />}
    />
  );
};

export default QuickActionList;
