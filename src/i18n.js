import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],  
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    saveMissing:true,
  });

export default i18n;

// 🚨🚨🚨 agr i18n ni config wu ko'rinishda yozilsa quyidagi amallani qilish shart !🚨
// 1. locals file nomi 🚨translation bo'lishi shart , bomasam ishlamidi;
// 2. file ishida tranlationlani object qilib ham ishlatib bomidi; "navbar": {"home": "home", "contact": "contact"}

