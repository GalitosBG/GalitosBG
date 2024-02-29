"use client";

import Link from "next/link";
import Button from "@/_components/UI/Button";

const About = () => {
  return (
    <div className={`container mx-auto 2xl:px-[8rem] mt-10 xl:-mt-[9rem]`}>
      <div className={`grid grid-cols-2 overflow-visible gap-x-[4rem]`}>
        <div className={`col-span-1 max-md:col-span-2 relative `}>
          <img src="/Images/spice_dish.png" alt="about" className={`w-full`} />
          <div
            className={`bg-white rounded-md shadow-md absolute max-[535px]:bottom-[185px] bottom-0 right-0 p-5`}
          >
            <div
              className={`border-dashed border p-4 text-center border-slate-300`}
            >
              <h1 className={`font-normal text-5xl monoton`}>27</h1>
              <p className={`font-medium text-lg`}>years</p>
              <p className={`font-medium text-lg`}>experience</p>
            </div>
          </div>
          <div
            className={`w-[50px] shadow-lg h-[50px] rounded-full animate-[bounce_3s_ease-in-out_infinite] absolute bottom-48 bg-[#ffce04] -left-6`}
          ></div>
          <div
            className={`w-[80px] shadow-lg h-[80px] rounded-full animate-[bounce_3s_ease-in-out_infinite] absolute bottom-16 bg-transparent border-[20px] border-white left-[30%]`}
          ></div>
        </div>
        <div className={`col-span-1 max-md:col-span-2 max-md:mt-4 flex flex-col gap-5 justify-center`}>
          <h1 className={`font-bold text-4xl text-slate-900`}>
            HOME IS WHERE GALITO'S IS
          </h1>
          <p className={`text-[1rem] max-w-md text-slate-500 leading-[1.5rem]`}>
            Our unique flame-grilled and fiery flavour remains at the heart of
            our success no matter how far from home you find us.
          </p><img

            src={`/Images/waves.svg`}
            alt={``}
            className={`w-[40%] max-sm:w-full scale-1`}
        />
          <div className={`relative flex items-center gap-2`}>
            <Link href={`/menu`}>
              <Button text={`Our menu`} />
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
