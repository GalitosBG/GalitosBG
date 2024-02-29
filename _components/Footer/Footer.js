"use client"
import Link from "next/link";
import Image from "next/image";
import {useContext} from "react";
import langContext from "@/_context/langContext";
import {translate} from "@/_context/lang";

const Footer = () => {
  const {lang} = useContext(langContext)
  return (
    <div className={`bg-[#f9f9fb] max-sm:mt-10 py-5 mt-5`}>
      <div
        className={`container flex items-center max-sm:flex-col max-sm:gap-5 max-sm:items-center max-sm:justify-center justify-between mx-auto max-sm:w-[95%] 2xl:px-[8rem]`}
      >
        <div className={`flex self-start flex-col items-start gap-2`}>
          <Link href={`/`}>
            <Image
              src={`/Images/Galitos-Logo.svg`}
              alt={``}
              width={160}
              height={120}
            />
          </Link>
        </div>
        <div className={`flex self-start flex-col items-start gap-3`}>
          <h1 className={`text-2xl font-bold`}>{translate[lang]["Jela"]}</h1>
          <Link href={`/menu`} className={`text-lg relative hovered font-normal`}>
            {translate[lang]["Meni"]}
          </Link>
          <Link href={`/sauces`} className={`text-lg relative hovered font-normal`}>
            {translate[lang]["Sosevi"]}          </Link>
        </div>
        <div className={`flex flex-col self-start items-start gap-3`}>
          <h1 className={`text-2xl font-bold`}>{translate[lang]["Naša priča"]}</h1>
          <Link href={`/our-story`} className={`text-lg relative hovered font-normal`}>
            {translate[lang]["Naša priča"]}
          </Link>

        </div>
        <div className={`flex flex-col self-start items-start gap-3`}>
          <h1 className={`text-2xl font-bold`}>{translate[lang]["Razgovarajte sa nama"]}</h1>
          <Link href={`/contact`} className={`text-lg relative hovered font-normal`}>
            {translate[lang]["Kontakt"]}
          </Link>

        </div>
      </div>
      <div className={`container my-10 flex items-center max-sm:flex-col max-sm:gap-5 max-sm:items-center max-sm:justify-center gap-5 mx-auto max-sm:w-[95%] 2xl:px-[8rem]`}>
        <h1>
          {
            new Date().getFullYear()
          } &copy; Galito's
        </h1>
        <Link href={`/privacy-policy`}>Privacy policy</Link>
      </div>
    </div>
  );
};

export default Footer;
