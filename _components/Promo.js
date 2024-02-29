"use client";

import Image from "next/image";
import { translate } from "@/_context/lang";
import { useContext } from "react";
import langContext from "@/_context/langContext";
import Link from "next/link";

const Promo = () => {
  const { lang } = useContext(langContext);
  const data = [
    {
      id: 1,
      title: translate[lang]["Flame grilled chicken"],
      image: "/Images/Homepage_Flame-Grill.png",
      slug: "flame-grilled-chicken",
    },
    {
      id: 2,
      title: translate[lang]["Supe i salate"],
      image: "/Images/Homepage_Vegetarian.png",
      slug: "supa-i-salate",
    },
    {
      id: 3,
      title: translate[lang]["Činije pirinča"],
      image: "/Images/Homepage_Big-Bowls-1.png",
      slug: "cinije-pirinca",
    },
    {
      id: 4,
      title: translate[lang]["Promocija"],
      image: "/Images/promo.png",
      slug: "promocija",
    },
    {
      id: 5,
      title: translate[lang]["Prilozi"],
      image: "/Images/Homepage_Sides.png",
      slug: "prilozi",
    },
  ];

  return (
    <section
      className={`container -mt-5 mx-auto max-md:w-[95%] lg:max-w-[70%]`}
    >
      <div className={`grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10`}>
        {data?.map((item) => {
          const isPromo = item?.title === translate[lang]["Promocija"];

          return (
            <div
              className={`${
                isPromo
                  ? `max-sm:row-start-3 col-span-2 bg-[#FFCE04] `
                  : `bg-white max-lg:col-span-2 lg:col-span-1`
              } relative p-5 border-2 border-slate-300 shadow-xl rounded-xl flex flex-col items-center justify-center text-center`}
            >
              <Link href={`/menu/#${item?.slug}`}>
                <Image
                  src={item?.image}
                  width={isPromo ? 700 : 400}
                  height={isPromo ? 700 : 400}
                  alt={``}
                />
              </Link>
              <h1
                className={`${
                  isPromo ? `text-white` : `text-black`
                } font-bold text-4xl uppercase`}
              >
                {item?.title}
              </h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Promo;
