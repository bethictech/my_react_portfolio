import React, { createContext, useContext, useState, useEffect } from "react";
import translations from "./translations.json";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translatedTexts, setTranslatedTexts] = useState(
    translations[language]
  );

  useEffect(() => {
    setTranslatedTexts(translations[language]);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <TranslationContext.Provider
      value={{ language, translatedTexts, changeLanguage }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useLanguage = () => {
  const { language } = useContext(TranslationContext);
  return language;
};

export const useTranslation = () => {
  const { translatedTexts } = useContext(TranslationContext);
  return translatedTexts;
};

export const useChangeLanguage = () => {
  const { changeLanguage } = useContext(TranslationContext);
  return changeLanguage;
};
