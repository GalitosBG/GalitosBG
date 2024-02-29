"use client";
import blog_items from "@/_context/blog";
import LangContext from "@/_context/langContext";
import Image from "next/image";
import NoImg from "@/public/noimg.png";
import Link from "next/link";
import { useContext } from "react";
import localFont from "next/font/local";
import { translate } from "@/_context/lang";

const TarzanaWide = localFont({
  src: [
    {
      path: "./tarzanawide-regular.ttf",
      weight: "400",
      style: "normal",
    },
    { path: "./tarzanabold.otf", weight: "800", style: "bold" },
  ],
});

const BlogItem = ({ params }) => {
  const { lang } = useContext(LangContext);
  const item = blog_items.find((item) => item.key === params.id);
  console.log(item);

  return (
    <div className={`container mx-auto relative ${TarzanaWide.className}`}>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full relative lg:w-8/12'>
          <Image
            src='/Images/mask.png'
            alt={item?.data[lang]?.title}
            width={960}
            height={600}
            className='relative z-10 top-0 left-0 w-full'
          />
          <Image
            src={item?.data?.image}
            alt={item?.data[lang]?.title}
            width={960}
            height={600}
            className='absolute z-0 top-0 left-0 w-full h-full'
          />
        </div>
        <div className='w-full lg:w-4/12 flex items-center'>
          <h1
            className='font-extrabold  text-[33px] md:text-[65px] z-20 uppercase leading-[100%] text-center lg:-translate-x-28 lg:text-left'
            dangerouslySetInnerHTML={{ __html: item?.data[lang]?.title }}
          ></h1>
        </div>
      </div>
      <div className='px-10 xl:px-80 py-10 text-xl'>
        <div dangerouslySetInnerHTML={{ __html: item?.data[lang]?.text }} />
        <Link href='/blog' className='font-bold block text-2xl underline my-10'>
          {translate[lang]?.back}
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
