"use client"
import Link from "next/link";
import Button from "@/_components/UI/Button";
import {useContext} from "react";
import langContext from "@/_context/langContext";
import {translate} from "@/_context/lang";

const Promo = () => {
  const {lang} =useContext(langContext)
  return (
    <div className={`container mt-20 mx-auto 2xl:px-[8rem]`}>
      <div className={`grid grid-cols-2 gap-x-10 gap-y-10`}>
        <div className={`col-span-2 md:col-span-1 flex flex-col items-start`}>
          <p className={`p-1 bg-[#F2F3F5] text-sm text-slate-500`}>
            {translate[lang]["100% zadovoljstvo"]}
          </p>
          <h1
            className={`text-[2.5rem] leading-[100%] py-5 text-left font-semibold text-slate-800 relative z-10`}
          >
            {translate[lang]["ZAŠTO IZABRATI GALITO'S?"]}
          </h1>
          <p className={`text-slate-500  sm:text-left`}>
            {translate[lang]["Sa više od 27 godina iskustva u franšizingu, omogućavamo potpunu podršku franšiznim partnerima širom sveta."]}

          </p>
          <div className={`relative flex items-center gap-2 mt-0`}>
            <Link href={`/menu`}>
              <Button text={translate[lang]["Vidite naš meni"]}></Button>
            </Link>
          </div>
          <img
            src={`/Images/waves2.svg`}
            alt={``}
            className={`mt-10 mx-auto`}
          />
        </div>
        <div className={`col-span-2 md:col-span-1 flex flex-col items-start`}>
          <img src={`/Images/chicken2.png`} alt={``} className={`w-full`} />
        </div>
      </div>
    </div>
  );
};

export default Promo;
