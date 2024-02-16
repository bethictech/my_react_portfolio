import React from "react";
import onvs_project from "../assets/onvs_project.png";
import galec from "../assets/GALEC_Eleclerc.png";
import portfolio from "../assets/asmae_react_portfolio.png";
import candyDukes from "../assets/CandyDukes.png";
import {
  useLanguage,
  useTranslation,
  useChangeLanguage,
} from "../TranslationContext";

const Projects = () => {
  useLanguage();
  useChangeLanguage();
  const translations = useTranslation();

  const projects = [
    {
      img: onvs_project,
      title: translations.projects.onvs.title,
      desc: translations.projects.onvs.desc,
      live: process.env.REACT_APP_ONVS_LIVE,
      code: "",
    },
    {
      img: galec,
      title: translations.projects.galec.title,
      desc: translations.projects.galec.desc,
      live: process.env.REACT_APP_GALEC_LIVE,
      code: "",
    },
    {
      img: candyDukes,
      title: translations.projects.candydukes.title,
      desc: translations.projects.candydukes.desc,
      live: process.env.REACT_APP_CANDYDUKES_LIVE,
      code: "",
    },
    {
      img: portfolio,
      title: translations.projects.portfolio.title,
      desc: translations.projects.portfolio.desc,
      live: process.env.REACT_APP_PORTFOLIO_LIVE,
      code: process.env.REACT_APP_PORTFOLIO_CODE,
    },
  ];

  return (
    <section className="bg-primary text-[#FAFAD2] px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] inline-block border-green-200 pb-2">
            {translations.nav.projects}
          </h2>

          <p className="pb-5">{translations.projects.intro}</p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative border-[5px] border-green-200" key={i}>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-[#FAFAD2]">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-[#6db096] border-2 border-[#071511] text-[#071511] font-semibold  px-5 py-2 hover:bg-transparent hover:border-[#FAFAD2] hover:text-[#FAFAD2]"
                  >
                    Live
                  </a>
                  {project.code != "" && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="btn bg-[#6db096] border-2 border-[#071511] text-[#071511] font-semibold  px-5 py-2 hover:bg-transparent hover:border-[#FAFAD2] hover:text-[#FAFAD2]"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
