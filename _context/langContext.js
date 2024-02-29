"use client";
import { createContext, useEffect, useState } from "react";

const LangContext = createContext({
  lang: "sr",
  setLang: () => {},
});

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("sr");

  const setNewLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  useEffect(() => {
    const localLang = localStorage.getItem("lang");
    if (localLang) {
      setLang(localLang.toLowerCase());
    } else {
      setNewLang("sr");
    }
  }, []);

  return (
    <LangContext.Provider value={{ lang: lang, setLang: setNewLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext;
