"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/_components/UI/Button";
import { useContext } from "react";
import langContext from "@/_context/langContext";
import { translate } from "@/_context/lang";

const Hero2 = ({ className }) => {
  const { lang } = useContext(langContext);
  return (
    <div
      className={` grid  grid-cols-2 mt-[5rem] container mx-auto 2xl:px-[8rem] gap-x-[0rem] relative`}
    >
      <div
        className={`col-span-1 max-md:col-span-2 flex flex-col gap-2 max-md:text-center relative items-start max-md:items-center`}
      >
        <span
          className={`${
            lang === "en" ? className : "bebas"
          } max-sm:leading-[100%]  font-bold text-[4.5rem]`}
        >
          {translate[lang]["UKUS KAO KOD KUĆE."]}
        </span>
        <div className={`md:hidden flex items-center gap-5`}>
          <div>
            <img src={`/Sauces/Hero/chilli.png`} alt={``} />
          </div>
          <div>
            <img src={`/Sauces/Hero/lemon.png`} alt={``} />
          </div>
          <div>
            <img src={`/Sauces/Hero/piri.png`} alt={``} />
          </div>
        </div>
        <p className={`text-[1rem] max-w-md text-slate-500 leading-[1.5rem]`}>
          {
            translate[lang][
              "Prodajemo različite Galito's jedinstvene soseve kako biste mogli poneti iskustvo Galito'sa sa sobom kući."
            ]
          }
        </p>
        {/*<div className={`flex items-center gap-3`}>*/}
        {/*  <Link href={`/menu`}>*/}
        {/*    <Button text={`Our menu`} />*/}
        {/*  </Link>*/}
        {/*  <Link href={`/our-story`}>*/}
        {/*    <Button text={`About us`} />*/}
        {/*  </Link>*/}
        {/*  <div className={`w-[40%] max-md:hidden mx-auto mt-auto`}>*/}
        {/*    <img*/}
        {/*      className={`w-full -left-2 -top-2 relative -z-10`}*/}
        {/*      src={`/Images/waves.svg`}*/}
        {/*      alt={``}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      <div className={`col-span-1 overflow-hidden relative max-md:hidden`}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFCE04"
            d="M60.2,-44.4C72,-33.2,71.5,-8.5,65.2,13.1C58.9,34.7,46.7,53.1,30.2,60C13.8,66.9,-6.9,62.1,-23.7,52.7C-40.4,43.2,-53.2,29.2,-57.5,12.5C-61.8,-4.2,-57.7,-23.5,-46.7,-34.5C-35.7,-45.6,-17.9,-48.5,3.2,-51C24.2,-53.6,48.4,-55.7,60.2,-44.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className={`absolute top-0 left-0 `}>
          <img
            src={`/Sauces/Hero/lemon.png`}
            alt={``}
            height={200}
            width={200}
            className={` relative h-full object-cover top-10`}
          />
        </div>
        <div className={`absolute top-0 `}>
          <img
            src={`/Sauces/Hero/chilli.png`}
            alt={``}
            height={200}
            width={200}
            className={` relative h-full object-cover -right-[23rem] top-10`}
          />
        </div>
        <div className={`absolute top-0 `}>
          <img
            src={`/Sauces/Hero/piri.png`}
            alt={``}
            height={200}
            width={200}
            className={` relative h-full object-cover -right-[13rem] top-10`}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
