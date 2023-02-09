import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: { loadPath: "/assets/i18next/{{lng}}/{{ns}}.json" },
    fallbackLng: "fr",
    debug: true,
    ns: ["common", "about", "contact", "home", "projects", "skills"],
    interpolation: { escapeValue: false, formatSeparator: "," },
    react: { wait: true },
  });
