import type { LinkCardType } from "./ActionCard";
import ActionCard from "./ActionCard";

interface QuickActionProps {
  data: LinkCardType[];
}

const QuickAction = ({ data }: QuickActionProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {data.map((action, index) => (
        <ActionCard key={index} {...action} />
      ))}
    </div>
  );
};

export default QuickAction;
