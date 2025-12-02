"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Translate from "@/_components/Translate/Translate";
import { useContext, useState } from "react";
import langContext from "@/_context/langContext";
import { translate } from "@/_context/lang";
import instagram_icon from "@/public/Icons/instagram-icon.png"
import facebook_icon from "@/public/Icons/facebook-icon.png"

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { lang } = useContext(langContext);
  return (
    <>
      <div
        className={`border-b bg-white/90 @container backdrop-blur-md sticky top-0 border-b-[#e9e9e9] z-50`}
      >
        <div className={`container  text-[1rem] mx-auto 2xl:px-[8rem]`}>
          <div
            className={`flex  py-[0.25rem] items-center w-full justify-between`}
          >
            <div className={`flex items-center gap-2`}>
              <Link href={`/`}>
                {/* <Image
                  src={`/Images/logo.svg`}
                  alt={`logo`}
                  width={110}
                  height={40}
                /> */}
              </Link>
              <Link href={`/`}>
                <Image
                  src={`/Images/gallosblack_left.png`}
                  alt={``}
                  width={300}
                  height={100}
                />
              </Link>
            </div>
            <div
              className={`@[990px]:flex hidden items-center gap-[0rem] @[1100px]:gap-[10rem] md:ml-5`}
            >
              <div className={`flex items-center gap-[3rem] `}>
                <div className={`flex items-center gap-2`}>
                  <Link
                    className={`
                 hover:from-0% hover:to-100% hover:bg-gradient-to-r relative hover:text-[#91c055] transition-all duration-300 ease-in-out
                `}
                    href={`/`}
                  >
                    {translate[lang]["Početna"]}
                    {pathname === "/" && (
                      <div
                        className={`absolute w-full -bottom-1 h-[2px] bg-[#91c055]`}
                      ></div>
                    )}
                  </Link>
                </div>

                <div className={`flex items-center gap-2`}>
                  <Link
                    className={`
                 hover:from-0% hover:to-100% whitespace-nowrap hover:bg-gradient-to-r relative hover:text-[#91c055] transition-all duration-300 ease-in-out
                `}
                    href={`/our-story`}
                  >
                    {translate[lang]["Naša priča"]}
                    {pathname === "/our-story" && (
                      <div
                        className={`absolute w-full -bottom-1 h-[2px] bg-[#91c055]`}
                      ></div>
                    )}
                  </Link>
                </div>
                <div className={`flex items-center gap-2`}>
                  <Link
                    className={`
                 hover:from-0% hover:to-100% hover:bg-gradient-to-r hover:text-[#91c055] relative transition-all duration-300 ease-in-out
                `}
                    href={`/menu`}
                  >
                    {translate[lang]["Meni"]}
                    {pathname === "/menu" && (
                      <div
                        className={`absolute w-full -bottom-1 h-[2px] bg-[#91c055]`}
                      ></div>
                    )}
                  </Link>
                </div>
                {/* <div className={`flex items-center gap-2`}>
                  <Link
                    className={`
                 hover:from-0% hover:to-100% hover:bg-gradient-to-r relative hover:text-[#91c055] transition-all duration-300 ease-in-out
                `}
                    href={`/sauces`}
                  >
                    {translate[lang]["Sosevi"]}
                    {pathname === "/sauces" && (
                      <div
                        className={`absolute w-full -bottom-1 h-[2px] bg-[#91c055]`}
                      ></div>
                    )}
                  </Link>
                </div> */}
                <div className={`flex items-center gap-2`}>
                  <Link
                    className={`
                 hover:from-0% hover:to-100% hover:bg-gradient-to-r relative hover:text-[#91c055] transition-all duration-300 ease-in-out
                `}
                    href={`/blog`}
                  >
                    {translate[lang]["blog"]}
                    {pathname === "/blog" && (
                      <div
                        className={`absolute w-full -bottom-1 h-[2px] bg-[#91c055]`}
                      ></div>
                    )}
                  </Link>
                </div>
                <div className={`flex items-center gap-2`}>
                  <Link
                    className={`
                 hover:from-0% hover:to-100% hover:bg-gradient-to-r hover:text-[#91c055] relative transition-all duration-300 ease-in-out
                `}
                    href={`/contact`}
                  >
                    {translate[lang]["Kontakt"]}
                    {pathname === "/contact" && (
                      <div
                        className={`absolute w-full -bottom-1 h-[2px] bg-[#91c055]`}
                      ></div>
                    )}
                  </Link>
                </div>
              </div>
              <div className={`flex items-center gap-2`}>
                <Translate />
                <Link
                  href={`https://www.instagram.com/gallos_serbia/`}
                  target={`_blank`}
                >
              
                  <Image src={instagram_icon} alt="Instagram icon Galos" className="w-[26px]" width={30} height={30}/>
                </Link>
                {/* <Link
                  href={`https://www.facebook.com/profile.php?id=61550593080288&mibextid=ZbWKwL`}
                  target={`_blank`}
                >
               
                  <Image src={facebook_icon} alt="Instagram icon Galos" className="w-[26px]" width={30} height={30}/>
                </Link> */}
              </div>
            </div>
            <div className={`ml-auto mr-1 @[990px]:hidden`}>
              <Translate />
              
            </div>
            <div
              className={`mr-3 @[990px]:hidden`}
              onClick={() => setOpen(!open)}
            >
              <i
                className={`fa ${
                  open ? "fa-times" : "fa-bars"
                } text-2xl cursor-pointer p-2 rounded-lg border border-[#e9e9e9]`}
              ></i>
            </div>
            <div className={`ml-2  @[990px]:hidden`}>
            <Link
                  href={`https://www.instagram.com/gallos_serbia/`}
                  target={`_blank`}
                >
              
                  <Image src={instagram_icon} alt="Instagram icon Galos" className="w-[26px]" width={30} height={30}/>
                </Link>
                </div>
          </div>
        </div>
      </div>
      
      <div
        className={
          open
            ? `translate-x-0 top-0 z-[100] left-0 duration-500 transition-all h-screen fixed bg-white w-[70%]`
            : `-translate-x-full top-0 z-[100] left-0 duration-500 transition-all h-screen fixed bg-white w-[70%]`
        }
      >
        <div className={`flex flex-col items-center justify-center h-full`}>
          <div className={`flex flex-col items-center justify-center gap-5`}>
            <div className={`flex items-center gap-2`}>
              {pathname === "/" && (
                <div
                  className={`h-[8px] w-[8px] bg-[#ffce04] rounded-full`}
                ></div>
              )}
              <Link
                onClick={() => setOpen(false)}
                className={`
                    hover:from-0% hover:to-100% hover:bg-gradient-to-r hover:text-[#ffce04] transition-all duration-300 ease-in-out
                     `}
                href={`/`}
              >
                {translate[lang]["Početna"]}
              </Link>
            </div>
            <div className={`flex items-center gap-2`}>
              {pathname === "/our-story" && (
                <div
                  className={`h-[8px] w-[8px] bg-[#ffce04] rounded-full`}
                ></div>
              )}
              <Link
                onClick={() => setOpen(false)}
                className={`
                    hover:from-0% hover:to-100% hover:bg-gradient-to-r hover:text-[#ffce04] transition-all duration-300 ease-in-out
                        `}
                href={`/our-story`}
              >
                {translate[lang]["Naša priča"]}
              </Link>
            </div>
            <div className={`flex items-center gap-2`}>
              {pathname === "/menu" && (
                <div
                  className={`h-[8px] w-[8px] bg-[#ffce04] rounded-full`}
                ></div>
              )}
              <Link
                onClick={() => setOpen(false)}
                className={`
                    hover:from-0% hover:to-100% hover:bg-gradient-to-r hover:text-[#ffce04] transition-all duration-300 ease-in-out
                        `}
                href={`/menu`}
              >
                {translate[lang]["Meni"]}
              </Link>
            </div>
            <div className={`flex items-center gap-2`}>
              {pathname === "/sauces" && (
                <div
                  className={`h-[8px] w-[8px] bg-[#ffce04] rounded-full`}
                ></div>
              )}
              <Link
                onClick={() => setOpen(false)}
                className={`
                    hover:from-0% hover:to-100% hover:bg-gradient-to-r hover:text-[#ffce04] transition-all duration-300 ease-in-out
                        `}
                href={`/sauces`}
              >
                {translate[lang]["Sosevi"]}
              </Link>
            </div>
            <div className={`flex items-center gap-2`}>
              {pathname === "/blog" && (
                <div
                  className={`h-[8px] w-[8px] bg-[#ffce04] rounded-full`}
                ></div>
              )}
              <Link
                onClick={() => setOpen(false)}
                className={`
                    hover:from-0% hover:to-100% hover:bg-gradient-to-r hover:text-[#ffce04] transition-all duration-300 ease-in-out
                        `}
                href={`/blog`}
              >
                {translate[lang]["blog"]}
              </Link>
            </div>
            <div className={`flex items-center gap-2`}>
              {pathname === "/contact" && (
                <div
                  className={`h-[8px] w-[8px] bg-[#ffce04] rounded-full`}
                ></div>
              )}
              <Link
                onClick={() => setOpen(false)}
                className={`
                    hover:from-0% hover:to-100% hover:bg-gradient-to-r hover:text-[#ffce04] transition-all duration-300 ease-in-out
                        `}
                href={`/contact`}
              >
                {translate[lang]["Kontakt"]}
              </Link>
            </div>
          </div>
        </div>
      </div>
   
      {open && (
        <div
          className={`fixed top-0 z-[10] left-0 w-screen h-screen bg-black/40`}
          onClick={() => setOpen(false)}
        ></div>
      )}
      
    </>
  );
};

export default Header;
