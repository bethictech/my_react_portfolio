import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import france_icon from "../assets/france_icon.png";
import england_icon from "../assets/england_icon.png";
import {
  useLanguage,
  useTranslation,
  useChangeLanguage,
} from "../TranslationContext";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  useLanguage();

  // Utiliser le hook useTranslation pour obtenir les messages traduits
  const translations = useTranslation();

  // Utiliser le hook useChangeLanguage pour changer la langue
  const changeLanguage = useChangeLanguage();

  return (
    <header className="flex justify-between px-2 py-2 bg-primary text-[#6db096] fixed w-full z-10">
      <div className="flex items-center">
        {/* Drapeaux pour changer la langue */}
        <img
          src={france_icon}
          alt="French"
          className="mx-0 cursor-pointer h-5 w-8"
          onClick={() => changeLanguage("fr")}
        />
        <img
          src={england_icon}
          alt="English"
          className="mx-1 cursor-pointer h-5 w-8"
          onClick={() => changeLanguage("en")}
        />

        <a href="/" className="logo px-5 text-2xl font-bold text-accent">
          A. Benkirane
        </a>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:block font-semibold text-[#6db096]">
        <ul className="flex">
          <li>
            <a href="/#about">{translations.nav.about}</a>
          </li>
          <li>
            <a href="/#projects">{translations.nav.projects}</a>
          </li>
          <li>
            <a href="/#clients">{translations.nav.clients}</a>
          </li>
          <li>
            <a href="/#education">{translations.nav.education}</a>
          </li>
          <li>
            <a href="/#contact">{translations.nav.contact}</a>
          </li>
          <li
            onMouseEnter={() => setShowLanguageDropdown(true)}
            onMouseLeave={() => setShowLanguageDropdown(false)}
            className="relative"
          >
            <a href="" without rel="noreferrer" className="relative">
              {translations.nav.resume}
            </a>
            {showLanguageDropdown && (
              <div className="absolute right-2 mt-1 bg-primary max-w-xs">
                <ul className="flex flex-col items-end">
                  <li>
                    <a
                      href={process.env.REACT_APP_RESUME_EN}
                      target="_blank"
                      className="p-2"
                    >
                      EN
                    </a>
                  </li>
                  <li>
                    <a
                      href={process.env.REACT_APP_CV_FR}
                      target="_blank"
                      className="p-2"
                    >
                      FR
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={`${
          toggle ? "block" : "hidden"
        } md:hidden font-semibold text-[#6db096] bg-primary`}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/#about">{translations.nav.about}</a>
          </li>
          <li>
            <a href="/#projects">{translations.nav.projects}</a>
          </li>
          <li>
            <a href="/#clients">{translations.nav.clients}</a>
          </li>
          <li>
            <a href="/#education">{translations.nav.education}</a>
          </li>
          <li>
            <a href="/#contact">{translations.nav.contact}</a>
          </li>
          <li
            onMouseEnter={() => setShowLanguageDropdown(true)}
            onMouseLeave={() => setShowLanguageDropdown(false)}
            className="relative"
          >
            <a href="#" without rel="noreferrer" className="relative">
              {translations.nav.resume}
            </a>
            {showLanguageDropdown && (
              <div className="absolute right-0 mt-1 bg-primary max-w-xs">
                <ul className="flex flex-col items-end">
                  <li>
                    <a
                      href={process.env.REACT_APP_RESUME_EN}
                      target="_blank"
                      className=" p-2"
                    >
                      EN
                    </a>
                  </li>
                  <li>
                    <a
                      href={process.env.REACT_APP_CV_FR}
                      target="_blank"
                      className=" p-2"
                    >
                      FR
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
