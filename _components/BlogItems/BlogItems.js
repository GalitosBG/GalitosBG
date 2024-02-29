"use client";
import { useContext } from "react";
import blog_items from "@/_context/blog";
import LangContext from "@/_context/langContext";
import Image from "next/image";
import NoImg from "@/public/noimg.png";
import Link from "next/link";

const BlogItems = () => {
  const { lang } = useContext(LangContext);
  console.log(blog_items);
  return (
    <div
      className={`container mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 max-sm:w-[95%] 2xl:px-[8rem] mt-[4rem]`}
    >
      {blog_items.map(({ key, data }) => {
        return (
          <div
            className={`flex w-full border-4 drop-shadow-sm rounded-2xl border-[#ededed] items-start md:p-[1.6rem] p-5 gap-[1rem] justify-between flex-wrap col-span-1 `}
          >
            <Link href={`/blog/${key}`} className='block w-full'>
              <div className={`w-full mb-8`}>
                {data?.image ? (
                  <Image
                    src={data?.image}
                    alt={`Galitos`}
                    width={350}
                    height={300}
                    className={`object-cover w-full rounded-2xl`}
                  />
                ) : (
                  <Image
                    src={NoImg}
                    alt={`Galitos`}
                    className={`w-full h-auto rounded-2xl`}
                  />
                )}
              </div>
              <div className={`flex max-sm:max-w-[270px] flex-col gap-2`}>
                <h1
                  className={`text-left w-full text-lg font-semibold`}
                  dangerouslySetInnerHTML={{ __html: data[lang]?.title }}
                ></h1>
                <div
                  className={`font-light text-base h-12 w-full inline-block overflow-hidden whitespace-nowrap text-ellipsis`}
                  dangerouslySetInnerHTML={{
                    __html: `${data[lang]?.text}`,
                  }}
                ></div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogItems;
