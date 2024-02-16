import React from "react";
import HeroImg from "../assets/hero-img.png";
import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  useLanguage,
  useTranslation,
  useChangeLanguage,
} from "../TranslationContext";

const Hero = () => {
  useLanguage();
  useChangeLanguage();
  const translations = useTranslation();
  const MY_LINKEDIN_PROFILE = process.env.REACT_APP_MY_LINKEDIN_PROFILE;

  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-2xl lg:text-3xl text-[#FAFAD2]">
            {translations.hero.portfolio}
          </h1>

          <p className="text-2xl lg:text-2xl py-5 text-[#FAFAD2]">
            {translations.hero.presentation}
          </p>

          <div className="flex py-5 ">
            <a
              href=""
              className="pr-4 inline-block text-accent hover:text-[#FAFAD2]"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href=""
              className="pr-4 inline-block text-accent hover:text-[#FAFAD2]"
            >
              {" "}
              <AiOutlineYoutube size={40} />{" "}
            </a>
            <a
              href={MY_LINKEDIN_PROFILE}
              target="_blank"
              className="pr-4 inline-block text-accent hover:text-[#FAFAD2]"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
          </div>

          <a
            href="/#contact"
            className=" btn bg-accent  border-2 border-[#071511] text-[#071511] font-semibold  px-6 py-3 hover:bg-transparent hover:border-[#FAFAD2] hover:text-[#FAFAD2]"
          >
            {translations.hero.contactMe}
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
