"use client";
import {useContext} from "react";
import langContext from "@/_context/langContext";
import {translate} from "@/_context/lang";

const TopSection = () => {
  const {lang} = useContext(langContext)
  return (
    <div className={`bg-[#f9f9fb] max-sm:py-0 py-[2rem]`}>
      <div className={`container mx-auto 2xl:px-[8rem]`}>
        <div className={`flex flex-col items-center relative justify-center max-sm:py-5 py-10`}>
          <p className={`p-1 bg-[#F2F3F5] text-sm text-slate-500`}>{translate[lang]["O nama"]}</p>
          <h1
            className={`text-[4.5rem] leading-[100%] py-5 text-center font-semibold text-slate-800 relative z-10`}
          >
            {translate[lang]["Naša priča počinje pre 27 godina."]}
            {/*<span*/}
            {/*  className={`text-transparent bg-clip-text bg-gradient-to-r max-sm:leading-[100%] from-[#ffce04] to-[#c43937]`}*/}
            {/*>*/}
            {/*  {" "}*/}
            {/*  {new Date().getFullYear() - 1996}*/}
            {/*</span>{" "}*/}
          </h1>
          <p className={`text-slate-500 sm:max-w-[50%] sm:text-center`}>
            {translate[lang]["Osnovan u malom gradu Nelspruitu u Južnoj Africi 1996. godine, Galito's se kontinuirano širio kako u Južnoj Africi, tako i na međunarodnim tržištima."]}
          </p>
          <img src={`/Images/dots.png`} alt={``} width={100} height={100}  className={`mt-10 mx-auto`} />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
