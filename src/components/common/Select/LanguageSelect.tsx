import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

const languages = [
  { value: "en", label: "ENGLISH" },
  { value: "zh", label: "CHINESE" },
];

interface LanguageSelectProps {
  containerClassName?: string;
  onValueChange?: (value: string) => void;
}

const LanguageSelect = ({
  containerClassName,
  onValueChange,
}: LanguageSelectProps) => {
  const { t, i18n } = useTranslation();

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
    onValueChange?.(value);
  };

  return (
    <Select value={i18n.language} onValueChange={handleChange}>
      <SelectTrigger className={containerClassName}>
        <SelectValue placeholder={t("LANGUAGE.SELECT")} />
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.value} value={language.value}>
            {t(`LANGUAGE.${language.label}`)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;
