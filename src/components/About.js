import React from "react";
import {
  useLanguage,
  useTranslation,
  useChangeLanguage,
} from "../TranslationContext";

const About = () => {
  useLanguage();
  useChangeLanguage();
  const translations = useTranslation();

  return (
    <section className="bg-secondary text-[#FAFAD2] px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-1 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold inline-block mb-5 border-b-[5px]  border-green-200 pb-2">
            {translations.about.me}
          </h2>

          <p className="pb-5">{translations.about.p1}</p>
          <p className="pb-5">{translations.about.p2}</p>
          <p className="pb-5">{translations.about.p3}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
