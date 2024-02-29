"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/_components/UI/Button";

const Hero = () => {
  return (
    <div
      className={` grid grid-cols-2 mt-[5rem] container mx-auto 2xl:px-[8rem] gap-x-[0rem] relative`}
    >
      <div className={`col-span-1 max-md:col-span-2 flex flex-col gap-2 max-md:text-center relative items-start max-md:items-center`}>
        <h1 className={`text-[3.5rem] sm:text-[4.5rem] leading-[1.75rem] font-bold`}>
          FIRING UP
        </h1>{" "}
        <span
          className={`text-transparent bg-clip-text bg-gradient-to-r max-sm:leading-[100%] from-[#ffce04] to-[#c43937] font-bold text-[4.5rem]`}
        >
          THE WORLD
        </span>
        <p className={`text-[1rem] max-w-md text-slate-500 leading-[1.5rem]`}>
          With decades of franchising expertise we are able to offer
          comprehensive support for our Master Franchisees all over the world.
        </p>
        <div className={`flex items-center gap-3`}>
          <Link href={`/menu`}>
            <Button text={`Our menu`} />
          </Link>
          <Link href={`/our-story`}>
            <Button text={`About us`} />
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
      <div className={`col-span-1 relative max-md:hidden`}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFCE04"
            d="M60.2,-44.4C72,-33.2,71.5,-8.5,65.2,13.1C58.9,34.7,46.7,53.1,30.2,60C13.8,66.9,-6.9,62.1,-23.7,52.7C-40.4,43.2,-53.2,29.2,-57.5,12.5C-61.8,-4.2,-57.7,-23.5,-46.7,-34.5C-35.7,-45.6,-17.9,-48.5,3.2,-51C24.2,-53.6,48.4,-55.7,60.2,-44.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className={`absolute top-0`}>
          <img
            src={`/Images/chicken.png`}
            alt={``}
            height={500}
            width={500}
            className={`w-full relative h-full object-cover  !-top-10`}
          />
        </div>
        <div className={`absolute left-[15px] top-[16%]`}>
          <img
            className={`animate-[bounce_3s_ease-in-out_infinite]`}
            src={`/Images/pepper.png`}
            alt={``}
            height={150}
            width={150}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
