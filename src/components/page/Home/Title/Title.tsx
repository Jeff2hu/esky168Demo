import { useTranslation } from "react-i18next";

const Title = ({ title }: { title: string }) => {
  const { t } = useTranslation();

  return (
    <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2 px-2">
      <div className="w-1 h-5 gradient-accent-bar rounded-full"></div>
      {t(title)}
    </h2>
  );
};

export default Title;
