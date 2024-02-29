"use client";

import Image from "next/image";
import { useContext } from "react";
import langContext from "@/_context/langContext";
import { translate } from "@/_context/lang";
import localFont from "next/font/local";
import Button from "@/_components/UI/Button";
import Link from "next/link";

const TarzanaWide = localFont({
  src: [
    {
      path: "./tarzanawide-regular.ttf",
      weight: "400",
      style: "normal",
    },
    { path: "./tarzanabold.otf", weight: "800", style: "bold" },
  ],
});

const OurStory = () => {
  const { lang } = useContext(langContext);
  return (
    <div className={`max-md:w-[95%] mx-auto container overflow-x-hidden overflow-y-visible`}>
      <div className={`h-max `}>
        <div className={`relative`}>
          <img
            src={`/hero_decal_1.svg`}
            alt={``}
            className={`ml-20 `}
          />
          <img
            src={`/hero_focus_2.png`}
            alt={``}
            className={`absolute -right-32 top-32 `}
          />
          <img
            src={`/Images/hero.png`}
            alt={``}
            className={`absolute 
        -bottom-10 left-0 object-cover w-[40%] `}
          />

          <div className={`  absolute max-lg:top-[1rem] lg:top-44 left-0 right-0 `}>
            <h1
              className={`text-6xl uppercase font-bold text-center ${
                lang === "en" ? TarzanaWide.className : `bebas`
              }`}
            >
              {translate[lang]["Naša priča počinje pre 27 godina."]}
            </h1>
            <p
              className={`
            text-center text-black text-[23px] font-light max-w-[600px] mx-auto mt-10
            
          `}
            >
              {
                translate[lang][
                  "Osnovan u malom gradu Nelspruitu u Južnoj Africi 1996. godine, Galito's se kontinuirano širio kako u Južnoj Africi, tako i na međunarodnim tržištima."
                ]
              }
            </p>
          </div>
        </div>
      </div>
      <h1
        className={`${
                lang === "en" ? TarzanaWide.className : `bebas`
              } text-[50px] font-bold text-center max-sm:mt-36 mt-20 uppercase`}
      >
        {translate[lang]["Naša hrana je srce svega što radimo."]}
      </h1>
      <p
        className={`text-center text-[20px] font-light max-w-[600px] mx-auto mt-10`}
      >
        {
          translate[lang][
            "Serviramo 100% pileće meso sa roštilja, marinirano samo najboljim sastojcima, u raznim ukusima - BBQ, Limun i Bilje, Blago ljuto, Ljuto i Extra Ljuto Piri-Piri."
          ]
        }
      </p>
      <div className={`flex items-center justify-center`}>
        <Link href={`/menu`}>
          <Button
            text={translate[lang]["Vidite naš meni"]}
            className={`bg-[#C43937] text-[20px] text-white font-bold px-8 py-4 rounded-xl`}
          >
            {translate[lang]["Vidite naš meni"]}
          </Button>
        </Link>
      </div>
      <div
        className={`relative overflow-hidden max-lg:flex-col flex items-start justify-between`}
      >
        <div className={`flex flex-col items-start`}>
          <h1
            className={`${
                lang === "en" ? TarzanaWide.className : `bebas`
              } text-[40px] font-bold text-center mt-20 uppercase`}
          >
            {translate[lang]["ZAŠTO IZABRATI GALITO'S?"]}
          </h1>
          <p
            className={`text-center text-[20px] font-light max-w-[600px] mx-auto mt-10`}
          >
            {
              translate[lang][
                "Sa više od 27 godina iskustva u franšizingu, omogućavamo potpunu podršku franšiznim partnerima širom sveta."
              ]
            }
          </p>
          <img src={`/Images/waves2.svg`} alt={``} className={`mt-10 ml-5`} />
        </div>
        <div className={``}>
          <img
            alt={``}
            className={`
            object-cover
            w-[90%]
            float-right
          `}
            src={`/Images/chicken2.png`}
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
