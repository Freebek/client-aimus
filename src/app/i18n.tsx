import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import uzTranslation from "../../public/locales/uz.json";
import ruTranslation from "../../public/locales/ru.json";
import enTranslation from "../../public/locales/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    resources: {
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation },
      en: { translation: enTranslation },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
