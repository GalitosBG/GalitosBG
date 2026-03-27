"use client";

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
      <section className={`relative pb-10 lg:pb-16`}>
        <div
          className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden`}
          aria-hidden
        >
          <img
            src={`/hero_decal_1.svg`}
            alt={``}
            className={`ml-4 sm:ml-20 max-w-[min(100%,280px)] sm:max-w-none`}
          />
          <img
            src={`/hero_focus_2.png`}
            alt={``}
            className={`absolute -right-4 max-md:max-w-[min(85%,320px)] max-md:w-auto sm:-right-20 lg:-right-32 top-20 sm:top-32 sm:max-w-none`}
          />
        </div>

        <div
          className={`relative z-[1] flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-14 pt-6 sm:pt-10`}
        >
          <div className={`order-2 w-full shrink-0 lg:order-1 lg:w-[40%] lg:max-w-xl`}>
            <img
              src={`/Images/hero.png`}
              alt={``}
              className={`h-auto w-full rounded-md object-cover max-md:min-h-[260px] max-md:object-cover max-md:object-center sm:min-h-0`}
            />
          </div>
          <div
            className={`order-1 min-w-0 flex-1 lg:order-2 lg:pt-4 xl:pt-8`}
          >
            <h1
              className={`text-4xl font-bold uppercase sm:text-5xl lg:text-6xl ${
                lang === "en" ? TarzanaWide.className : `bebas`
              } text-center lg:text-left`}
            >
              {translate[lang]["Naša priča"]}
            </h1>
            <p
              className={`mx-auto mt-6 max-w-[600px] text-center text-[20px] font-light leading-relaxed text-black sm:text-[23px] lg:mx-0 lg:max-w-none lg:text-left`}
            >
              {
                translate[lang][
                  "Gallos halal piri piri piletina pečena na plamenu predstavlja pravo uživanje na tanjiru. Nudi savršen nivo ljutine u kombinaciji sa bogatim, neodoljivim slojevima ukusa. Naša kućna marinada napravljena je od 100% prirodnih sastojaka i pažljivo odabranih začina i biljaka, omogućavajući piletini da upije bogat ukus tokom najmanje 24 sata. Sveže pečena na vatri po porudžbini, sa prepoznatljivom sočnom koricom — to je najukusnija i najkvalitetnija portugalska piletina pečena na plamenu u okolini. Želite Gallos ukus i kod kuće? Nabavite naše ekskluzivne sosove, marinade ili već marinirane pileće filete (flatties) u varijantama: limun i začinsko bilje, blago i ljuto."
                ]
              }
            </p>
          </div>
        </div>
      </section>
      <h1
        className={`${
                lang === "en" ? TarzanaWide.className : `bebas`
              } mt-16 text-[50px] font-bold text-center uppercase sm:mt-20`}
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
            {translate[lang]["ZAŠTO IZABRATI GALLO'S?"]}
          </h1>
          <p
            className={`text-center text-[20px] font-light max-w-[600px] mx-auto mt-10`}
          >
            {
              translate[lang][
                "Zato što verujemo da dobra hrana mora imati dušu. Svako jelo pripremamo s pažnjom, biramo samo proverene sastojke i trudimo se da svaki zalogaj donese isti osećaj zadovoljstva. Kod nas vas uvek čeka toplo gostoprimstvo, autentičan ukus i iskustvo kojem ćete se rado vraćati."
              ]
            }
          </p>
          
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
