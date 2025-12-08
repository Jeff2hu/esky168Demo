import BasicCard from "@/components/common/Card/BasicCard";
import { useTranslation } from "react-i18next";
import type { LinkCardType } from "./ActionCard";
import ActionCard from "./ActionCard";

interface QuickActionProps {
  data: LinkCardType[];
}

const QuickAction = ({ data }: QuickActionProps) => {
  const { t } = useTranslation();

  return (
    <BasicCard className="p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        {t(`HOME.QUICK_ACTIONS`)}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {data.map((action, index) => (
          <ActionCard key={index} {...action} />
        ))}
      </div>
    </BasicCard>
  );
};

export default QuickAction;
