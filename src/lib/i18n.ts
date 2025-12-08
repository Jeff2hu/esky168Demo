import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "../locale/en-us.json";
import zhTW from "../locale/zh-tw.json";

i18n.use(initReactI18next).init({
  fallbackLng: "zh",
  debug: true,
  resources: {
    en: {
      translation: enUS,
    },
    zh: {
      translation: zhTW,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
