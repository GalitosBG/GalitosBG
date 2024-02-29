"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/_components/UI/Button";
import {useContext} from "react";
import langContext from "@/_context/langContext";
import {translate} from "@/_context/lang";

const HeroBottom = () => {
  const {lang} = useContext(langContext)
  return (<div className={`bg-[#f9f9fb] py-10 mt-[3.5rem] sm:mt-[7rem]`}>
    <div
      className={` grid grid-cols-2   container mx-auto 2xl:px-[8rem] gap-x-[0rem] relative`}
    >
      <div
        className={`col-span-1 max-md:col-span-2 flex flex-col gap-2 max-md:text-center relative items-start max-md:items-center`}
      >
        <h1
          className={`text-[3.1rem] uppercase sm:text-[4.5rem] leading-[100%] font-bold`}
        >
          {translate[lang]["Piri-Piri savršenstvo"]}
        </h1>{" "}
        <span
          className={`text-transparent bg-clip-text bg-gradient-to-r max-sm:leading-[100%] from-[#ffce04] to-[#c43937] font-bold text-[4.5rem] max-sm:text-[3.1rem] leading-[100%]`}
        >
         {translate[lang]["NA DOHVAT RUKE"]}
        </span>
        <p className={`text-[1rem] max-w-md text-slate-500 leading-[1.5rem]`}>
          {translate[lang]["Preuzmite Galito's aplikaciju."]}
        </p>
        <div className={`flex items-center mt-5 gap-3`}>
          <a href={`https://yum.bi/galapp`} target="_blank">
            <Image
              src={`/Images/appstore.png`}
              alt={``}
              width={200}
              height={60}
            />
          </a>
          <a href={`https://yum.bi/galapp`} target="_blank">
            <Image src={`/Images/gplay.png`} alt={``} width={200} height={60} />
          </a>
        </div>
      </div>
      <div className={`col-span-1 relative max-md:hidden`}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFCE04"
            d="M60.2,-44.4C72,-33.2,71.5,-8.5,65.2,13.1C58.9,34.7,46.7,53.1,30.2,60C13.8,66.9,-6.9,62.1,-23.7,52.7C-40.4,43.2,-53.2,29.2,-57.5,12.5C-61.8,-4.2,-57.7,-23.5,-46.7,-34.5C-35.7,-45.6,-17.9,-48.5,3.2,-51C24.2,-53.6,48.4,-55.7,60.2,-44.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className={`absolute top-0`}>
          <a href={`https://yum.bi/galapp`} target="_blank">
          <img
            src={`/Images/app.png`}
            alt={``}
            height={500}
            width={500}
            className={`w-full relative h-full object-cover  !-top-16 !left-20 `}
          /></a>
        </div>
      </div>
    </div></div>
  );
};

export default HeroBottom;
