"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Button from "@/_components/UI/Button";
import Link from "next/link";

const PopularDishes = () => {
  const [swiper, setSwiper] = useState(null);
  const handlePrev = () => {
    swiper.slidePrev();
  };

  const handleNext = () => {
    swiper.slideNext();
  };

  const data = [
    {
      id: 1,
      name: "Full Chicken",
      price: 11,
      image: "/Products/fullchicken.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "1/2 Chicken",
      price: 10,
      image: "/Products/chicken12.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      name: "Chicken Wrap",
      price: 12,
      image: "/Products/chickenwrap.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      name: "Wings",
      price: 5,
      image: "/Products/wings.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className={`mt-16 container mx-auto 2xl:px-[9rem]`}>
      <h1 className={`font-semibold text-slate-800 text-[2.5rem]`}>
        Most popular dishes
      </h1>{" "}
      <div className={`flex max-md:flex-col items-center mt-5 justify-between`}>
        <p className={`text-slate-500 max-w-[465px] text-[1rem] mr-auto`}>
          Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
        </p>
        <div className={`flex max-md:mt-4 max-md:ml-auto items-center gap-3`}>
          <div className={`flex items-center gap-3`}>
            <button
              onClick={handlePrev}
              className={`p-3 rounded-full border border-black flex items-center justify-center hover:border-slate-600`}
            >
              <i className={`fas fa-arrow-left text-slate-600`}></i>
            </button>
            <button
              onClick={handleNext}
              className={`p-3 rounded-full border border-black flex items-center justify-center hover:border-slate-600`}
            >
              <i className={`fas fa-arrow-right text-slate-600`}></i>
            </button>
          </div>
          <Link href={`/menu`}>
            <Button className={`!m-auto`} text={`Full menu`} />
          </Link>
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        speed={800}
        breakpoints={{
          320: {
            slidesPerView: 1.4,
          },
          768: {
            slidesPerView: 2.4,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className={`mt-16`}
        spaceBetween={25}
        loop={true}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className={`h-[370px]  relative`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-full object-cover hover:scale-110 transition-all duration-500 cursor-pointer`}
                />
                <div
                  className={`absolute flex items-center bottom-0 left-0 w-full bg-white`}
                >
                  <h1 className={`text-[1.2rem] font-semibold`}>
                    {item?.name}
                  </h1>
                  {/*<div*/}
                  {/*  className={`flex flex-col items-center justify-center ml-auto`}*/}
                  {/*>*/}
                  {/*  <h1*/}
                  {/*    className={`text-[1.2rem] aspect-square font-semibold p-2  bg-[#ffce04]`}*/}
                  {/*  >*/}
                  {/*    <span className={`text-sm font-normal`}>$</span>*/}
                  {/*    {item?.price}*/}
                  {/*  </h1>*/}
                  {/*</div>*/}
                </div>
              </div>
              <p className={`text-sm text-slate-500 mt-2`}>
                {item?.description}
              </p>
              <div className={`mt-2 flex items-center gap-2`}>
                <i className={`fas fa-star text-[#ffce04]`}></i>
                <i className={`fas fa-star text-[#ffce04]`}></i>
                <i className={`fas fa-star text-[#ffce04]`}></i>
                <i className={`fas fa-star text-[#ffce04]`}></i>
                <i className={`fas fa-star text-[#ffce04]`}></i>
              </div>{" "}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PopularDishes;
