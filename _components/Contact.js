"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/_components/UI/Button";
import { useContext } from "react";
import langContext from "@/_context/langContext";
import { translate } from "@/_context/lang";
import Map from "@/_components/Map/Map";

const ContactPage = ({ className }) => {
  const { lang } = useContext(langContext);
  return (
    <div
      className={` grid sm:py-20 grid-cols-2 mt-[5rem] container mx-auto 2xl:px-[8rem] gap-x-[0rem] relative`}
    >
      <div
        className={`col-span-1 max-md:col-span-2 flex flex-col gap-2 max-md:text-center relative items-start max-md:items-center`}
      >
        {/*<h1*/}
        {/*  className={`text-[3.5rem] sm:text-[4.5rem] max-sm:leading-[100%] leading-[1.75rem] font-bold`}*/}
        {/*>*/}
        {/*  GET IN TOUCH*/}
        {/*</h1>{" "}*/}
        <span
          className={`${
            lang === "en" ? className : `bebas`
          } max-sm:leading-[100%]  font-bold text-[4.5rem] leading-[100%]`}
        >
          {translate[lang]["STUPITE U KONTAKT SA NAMA"]}
        </span>
        <p className={`text-[1rem] max-w-md text-slate-500 leading-[1.5rem]`}>
          {
            translate[lang][
              "Ako želite da nam ispričate svoje iskustvo u Galito'su ili želite saznati više o nama, nalazite se na pravom mestu. Pišite nam na mejl i mi ćemo vam odgovoriti."
            ]
          }
        </p>
        <div className={`flex items-center gap-3`}>
          <Link href={`/menu`}>
            <Button text={translate[lang]["Vidite naš meni"]} />
          </Link>
          <Link href={`/our-story`}>
            <Button text={translate[lang]["O nama"]} />
          </Link>
          <div className={`w-[40%] max-md:hidden mx-auto mt-auto`}>
            <img
              className={`w-full -left-2 -top-2 relative -z-10`}
              src={`/Images/waves.svg`}
              alt={``}
            />
          </div>
        </div>
      </div>
      <div className={`col-span-1 relative max-md:col-span-2`}>
        <div className={`bg-white md:w-[90%] ml-auto p-5`}>
          <div className={`bg-white border-2 border-dotted border-[#e9e9e9]`}>
            <form
              className={`flex flex-col gap-3 items-start justify-center p-5 w-full`}
            >
              <h1 className={`font-semibold text-[1.5rem] text-slate-800`}>
                {translate[lang]["Pošalji poruku"]}
              </h1>
              <p className={`text-slate-500 text-[1rem]`}>
                - {translate[lang]["Naš email:"]}
                <a
                  className={`text-[#ffce04]`}
                  href={`mailto:rm.galitos@novusrestaurants.rs`}
                >
                  rm.galitos@novusrestaurants.rs
                </a>
              </p>
              <p className={`text-slate-500 text-[1rem]`}>
                - {translate[lang]["Kontakt telefon:"]}
                <a className={`text-[#ffce04]`} href={`tel:+381 62 82 88 088`}>
                  +381 62 82 88 088
                </a>
              </p>
              <h1 className={`font-semibold text-[1.5rem] text-slate-800`}>
                {translate[lang]["Naša adresa"]}
              </h1>
              <a
                href={`https://g.co/kgs/jU2jfw`}
                target={`_blank`}
                className={`text-[#ffce04] text-[1rem]`}
              >
                {
                  translate[lang][
                    "Nivo 2, Galerija Mall (parking A), Bulevar Vudroa Vilsona 12, 11000 Beograd"
                  ]
                }
              </a>
            </form>
          </div>
        </div>
      </div>
      <div className={`col-span-2 mt-10 h-[300px] md:h-[500px] relative`}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1190.2591135464088!2d20.44654356406776!3d44.802631234351416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6552e46a468f%3A0x8a7d95d9015cc2cf!2sGalerija%20-%20Beograd!5e0!3m2!1sen!2srs!4v1701300366841!5m2!1sen!2srs'
          width='600'
          height='450'
          style={{ border: 0, width: "100%" }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
