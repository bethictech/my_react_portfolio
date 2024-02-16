import React from "react";
import {
  useLanguage,
  useTranslation,
  useChangeLanguage,
} from "../TranslationContext";

const Footer = () => {
  useLanguage();
  useChangeLanguage();
  const translations = useTranslation();

  return (
    <div className="py-4 text-center bg-primary text-[#FAFAD2] ">
      &copy; {translations.footer.mention}
    </div>
  );
};

export default Footer;
