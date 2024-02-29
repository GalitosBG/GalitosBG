"use client";
import { useContext, useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import langContext from "@/_context/langContext";

const Translate = () => {
  const baseLanguage = "sr";
  const languages = [
    { label: "EN", value: "en" },
    { label: `RS`, value: "sr" },
  ];

  const { lang, setLang } = useContext(langContext);

  return (
    <>
      <div className="notranslate flex items-center gap-5">
        <select
          className=" rounded-lg border-none text-sm focus:ring-[#3333]"
          onChange={(e) => setLang(e.target.value)}
          defaultValue={lang}
          value={lang}
        >
          {languages.map((language) => (
            <option
              key={language.value}
              onChange={() => setLang(language.value)}
              value={language.value}
            >
              {language.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Translate;
