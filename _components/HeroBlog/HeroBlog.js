"use client";

import Button from "@/_components/UI/Button";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import langContext from "@/_context/langContext";
import { translate } from "@/_context/lang";
import localFont from "next/font/local";

const HeroBlog = ({ className }) => {
  const { lang } = useContext(langContext);

  return (
    <div className={`bgimg overflow-hidden`}>
      <div className={`container mx-auto relative`}>
        <div
          className={`flex items-center py-10 gap-2 justify-center flex-col max-w-[620px] min-h-[500px] mx-auto  text-center md:text-center xl:text-left `}
        >
          <h1
            className={` relative max-md:mt-[11rem] w-full z-[2] font-extrabold max-md:text-[45px] text-[63px] uppercase leading-[100%] `}
          >
            <span className={lang === "en" ? className : `bebas`}>
              {translate[lang]["blogTitle"]}
            </span>
          </h1>
          <p className={`text-[23px] z-[2] font-light w-full`}>
            {translate[lang]["blogSubtitle"]}
          </p>
        </div>
      </div>
      <div
        className={`absolute top-[11.5rem] z-0 left-0 2xl:top-[9.5rem] 2xl:left-[2.5rem] 2xl:w-[450px] lg:w-[350px] lg:h-[350px] xl:w-[450px] 2xl:h-[450px] xl:h-[450px] 3xl:w-[550px]`}
      >
        <Image
          src={`/Images/hero_decal_1.svg`}
          fill
          alt={``}
          className='translate-x-20 -translate-y-20 scale-125'
        />
        <Image src={`/Images/hero_dish.png`} fill alt={``} />
        <Image
          src={`/Images/hero-focus.png`}
          alt={``}
          width={100}
          height={100}
          className={`absolute top-0 right-0`}
        />
      </div>
      <div
        className={`absolute top-[11.5rem] right-0 2xl:top-[9.5rem] 2xl:right-[2.5rem] 2xl:w-[450px] lg:w-[350px] lg:h-[350px] xl:w-[450px] 2xl:h-[450px] xl:h-[450px] 3xl:w-[550px]`}
      >
        <Image
          src={`/Images/hero_veggies2.png`}
          className={`object-contain -translate-x-28 scale-110`}
          fill
          alt={``}
        />
      </div>
      <div
        className={`absolute w-[95%] mx-auto overflow-hidden md:hidden top-16  flex items-center gap-1`}
      >
        <Image
          src={`/Images/hero_dish.png`}
          width={330}
          height={200}
          alt={``}
          className={`object-cover`}
        />
        <Image
          src={`/Images/hero-focus.png`}
          alt={``}
          width={200}
          height={200}
          className={`object-cover -right-[2rem] scale-50 absolute`}
        />
      </div>
    </div>
  );
};

export default HeroBlog;
