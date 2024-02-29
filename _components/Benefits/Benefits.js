"use client"
import {useContext} from "react";
import langContext from "@/_context/langContext";
import {translate} from "@/_context/lang";

const Benefits = () => {
  const {lang} =useContext(langContext)
  const data = [
    {
      id: "01",
      title: translate[lang]["Nalazimo se u centru grada."],

    },
    {
      id: "02",
      title: translate[lang]["Sveže sastojke dobavljamo sa organskih farmi."],

    },
    {
      id: "03",
      title: translate[lang]["Brza dostava u vlasništvu. Maksimalno 30 minuta."],

    },
    {
      id: "04",
      title: translate[lang]["Profesionalni, iskusni kuvari."],

    },
    {
      id: "05",
      title: translate[lang]["Najviši standardi usluge."],

    },
  ];

  return (
    <div className={`container mt-20 mx-auto 2xl:px-[8rem]`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10`}>
        {data.map((item) => {
          return (
            <div key={item.id} className={`flex px-3 gap-5 items-start`}>
              <h1 className={`text-[2.625rem] monoton text-[#F9A109] font-normal`}>
                {item.id}
              </h1>
              <div className={`flex flex-col items-start gap-2`}>
                <h1 className={`font-semibold text-[1.375rem]`}>{item?.title}</h1>
                <p className={`text-sm text-slate-500`}>{item?.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
