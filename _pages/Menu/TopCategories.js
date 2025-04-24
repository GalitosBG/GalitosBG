"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import langContext from "@/_context/langContext";
import { translate } from "@/_context/lang";

const TopCategories = () => {
  const { lang } = useContext(langContext);

  const categories = [
    {
      id: 1,
      name: translate[lang]["PREDJELA"],
      slug: "predjela",
    },
    {
      id: 2,
      name: translate[lang]["SUPA I SALATE"],
      slug: "supa-i-salate",
    },
    {
      id: 3,
      name: translate[lang]["GALITOS CLASSIC`s"],
      slug: "flame-grilled-chicken",
    },
    {
      id: 4,
      name: translate[lang]["BURGERI I WRAPOVI"],
      slug: "burgeri-i-wrappovi",
    },
    {
      id: 5,
      name: translate[lang]["ČINIJE PIRINČA"],
      slug: "cinije-pirinca",
    },
    {
      id: 6,
      name: translate[lang]["PODELI OBROK"],
      slug: "porodicni-obrok",
    },
    {
      id: 7,
      name: translate[lang]["PRILOZI"],
      slug: "prilozi",
    },
    {
      id: 8,
      name: translate[lang]["PIRI KRILCA"],
      
      slug: "piri-krilca",
    },
    {
      id: 9,
      name: translate[lang]["DEČIJI MENI"],
      slug: "deci-meni",
    },
    {
      id: 10,
      name: translate[lang]["DEZERTI"],
      slug: "dezerti",
    },
  ];

  const [active, setActive] = useState(1);
  return (
    <div
      className={`border-b z-[2] md:sticky md:top-[4.6rem] bg-white border-b-[#e9e9e9]`}
    >
      <div
        className={`container mx-auto 2xl:px-[8rem] flex-wrap gap-2 flex items-center justify-center py-4`}
      >
        {categories.map((category) => {
          return (
            <div
              key={category?.id}
              className={`flex hover:text-white transition-all duration-500 rounded-lg cursor-pointer  text-black p-3 hover:bg-[#91c055] ${
                active === category?.id ? "bg-[#91c055] text-white imgseen" : ""
              } items-center gap-2`}
            >
              <Link
                onClick={() => {
                  setActive(category?.id);
                }}
                href={`#${category?.slug}`}
                className={`imgreveal flex items-center gap-1 ${
                  active === category?.id ? "imgseen" : ""
                }`}
              >
                <p className={`text-sm`}>{category?.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCategories;
