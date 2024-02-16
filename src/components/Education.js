import React from "react";
import logo_ENSEIRB from "../assets/logo_ENSEIRB.png";
import {
  useLanguage,
  useTranslation,
  useChangeLanguage,
} from "../TranslationContext";

const Education = () => {
  useLanguage();
  useChangeLanguage();
  const translations = useTranslation();

  return (
    <section className="bg-primary px-5 text-white py-32" id="education">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h2 className="text-[#FAFAD2] text-4xl font-bold mb-5 border-b-[5px] inline-block border-green-200 pb-2">
            {translations.nav.education}
          </h2>

          <h2 className=" text-[#FAFAD2]">{translations.education.p1}</h2>
          <p className=" py-5 text-[#FAFAD2]">{translations.education.p2}</p>
        </div>

        <div className="hero-img mr-5">
          <a href="https://enseirb-matmeca.bordeaux-inp.fr/fr" target="_blank">
            <img
              src={logo_ENSEIRB}
              alt="ENSEIRB-MATMECA"
              className="h-24 l-24 ml-20 mt-5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Education;
