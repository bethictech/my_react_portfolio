import React from "react";

import logo_MMA from "../assets/logo_MMA.png";
import logo_MNT from "../assets/logo_MNT.png";
import logo_MGEN from "../assets/logo_MGEN.png";
import logo_Lectra from "../assets/logo_Lectra.png";
import logo_Legalec from "../assets/logo_Legalec.png";
import logo_SFR from "../assets/logo_SFR.png";
import logo_Orange from "../assets/logo_Orange.png";
import logo_NordCompo from "../assets/logo_NordCompo.png";
import logo_CandyDukes from "../assets/logo_CandyDukes.png";

import {
  useLanguage,
  useTranslation,
  useChangeLanguage,
} from "../TranslationContext";

const Clients = () => {
  useLanguage();
  useChangeLanguage();
  const translations = useTranslation();

  const clients = [
    {
      img: logo_MMA,
      title: "MMA",
      desc: translations.clients.MMA.desc,
      website: "https://www.mma.fr/",
    },
    {
      img: logo_MNT,
      title: "MNT",
      desc: translations.clients.MNT.desc,
      website: "https://www.mnt.fr/",
    },
    {
      img: logo_MGEN,
      title: "MGEN",
      desc: translations.clients.MGEN.desc,
      website: "https://www.mnt.fr/",
    },
    {
      img: logo_Legalec,
      title: "GALEC",
      desc: translations.clients.Galec.desc,
      website: "https://scalesquad.io/galec/",
    },
    {
      img: logo_Lectra,
      title: "Lectra",
      desc: translations.clients.Lectra.desc,
      website: "https://www.lectra.com/fr",
    },
    {
      img: logo_SFR,
      title: "SFR",
      desc: translations.clients.SFR.desc,
      website: "https://www.sfr.fr/",
    },
    {
      img: logo_NordCompo,
      title: "Nord Compo",
      desc: translations.clients.NordCompo.desc,
      website: "https://www.orange.fr/",
    },
    {
      img: logo_CandyDukes,
      title: "Candy Dukes",
      desc: translations.clients.CandyDukes.desc,
      website: "https://www.candydukes.com/",
    },
    {
      img: logo_Orange,
      title: "Orange",
      desc: translations.clients.Orange.desc,
      website: "https://www.orange.fr/",
    },
  ];

  return (
    <section className="bg-secondary text-[#FAFAD2] px-5 py-32" id="clients">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] inline-block border-green-200 pb-2">
            Clients
          </h2>

          <p className="pb-5">{translations.clients.intro}</p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="clients container mx-auto grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-12 gap-6 text-center">
        {clients.map((client, i) => {
          return (
            <div className="relative" key={i}>
              <img
                src={client.img}
                alt={client.title}
                className="w-full h-full object-contain"
              />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="mx-auto py-5 text-sm text-center px-2 text-[#FAFAD2]">
                  {client.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={client.website}
                    target="_blank"
                    className=" btn text-sm bg-[#6db096] border-2 border-[#071511] text-[#071511]  px-2 py-1 hover:bg-transparent hover:border-[#FAFAD2] hover:text-[#FAFAD2]"
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
