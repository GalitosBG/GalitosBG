"use client";

import Link from "next/link";
import Button from "@/_components/UI/Button";
import {translate} from "@/_context/lang";
import {useContext} from "react";
import langContext from "@/_context/langContext";

const About = () => {
  const {lang} = useContext(langContext)
  return (
    <div className={`container mx-auto 2xl:px-[8rem]`}>
      <div className={`grid grid-cols-2 overflow-visible gap-x-[4rem]`}>
        <div className={`col-span-1 max-md:col-span-2 relative `}>
          <img src="/Images/hero.png" alt="about" className={`w-full`} />
          <div
            className={`bg-white rounded-md shadow-md absolute max-[535px]:bottom-[185px] bottom-0 right-0 p-5`}
          >
            <div
              className={`border-dashed border p-4 text-center border-slate-300`}
            >
              <h1 className={`font-normal text-5xl monoton`}>27</h1>
              <p className={`font-medium text-lg`}>{translate[lang]["godina"]}</p>
              <p className={`font-medium text-lg`}>{translate[lang]["iskustva"]}</p>
            </div>
          </div>
          <div
            className={`w-[50px] shadow-lg h-[50px] rounded-full animate-[bounce_3s_ease-in-out_infinite] absolute bottom-48 bg-[#ffce04] -left-6`}
          ></div>
          <div
            className={`w-[80px] shadow-lg h-[80px] rounded-full animate-[bounce_3s_ease-in-out_infinite] absolute bottom-16 bg-transparent border-[20px] border-white left-[30%]`}
          ></div>
        </div>
        <div
          className={`col-span-1 max-md:col-span-2 max-md:mt-4 flex flex-col gap-5 justify-center`}
        >
          <h1 className={`font-bold text-4xl text-slate-900`}>
            {translate[lang]["Naša hrana je srce svega što radimo."]}
          </h1>
          <p className={`text-[1rem] max-w-md text-slate-500 leading-[1.5rem]`}>
            {translate[lang]["Serviramo 100% pileće meso sa roštilja, marinirano samo najboljim sastojcima, u raznim ukusima - BBQ, Limun i Bilje, Blago ljuto, Ljuto i Extra Ljuto Piri-Piri."]}
          </p>
          <img
            src={`/Images/waves.svg`}
            alt={``}
            className={`w-[40%] max-sm:w-full scale-1`}
          />
          <div className={`relative flex items-center gap-2`}>
            <Link href={`/menu`}>
              <Button text={translate[lang]["Vidite naš meni"]} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
