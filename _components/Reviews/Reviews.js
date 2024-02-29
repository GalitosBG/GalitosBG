"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {useContext, useState} from "react";
import Button from "@/_components/UI/Button";
import {translate} from "@/_context/lang";
import langContext from "@/_context/langContext";

const Reviews = ({ text }) => {
  const [swiper, setSwiper] = useState(null);
  const handlePrev = () => {
    swiper.slidePrev();
  };

  const handleNext = () => {
    swiper.slideNext();
  };
const {lang} = useContext(langContext)
  const data = [
    {
      id: 1,
      name: translate[lang]["Izvanredna usluga"],
      numofstars: 5,

      description:
        translate[lang]["Hrana je bila izvanredna, a usluga je bila brza i vrlo profesionalna. Kvalitet obroka je bio sjajan, i zaista sam uživala u svakom zalogaju. Izvanredna usluga."],
      user: "John Doe",
    },
    {
      id: 1,
      name: translate[lang]["Izvanredna usluga"],
      numofstars: 5,

      description:
        translate[lang]["Iskustvo u ovom restoranu bilo je fantastično! Hrana je bila sveža i ukusna, a osoblje je bilo veoma ljubazno. Definitivno ću se vratiti. Izvanredna usluga"],
      user: "John Doe",
    },
    {
      id: 1,
      name: translate[lang]["Izvanredna usluga"],
      numofstars: 5,

      description:
        translate[lang]["Ovaj restoran stvarno zna kako da zadovolji svoje goste. Hrana je bila sočna i puna ukusa, a usluga je bila izuzetno profesionalna. Preporučila bih ga svima!"],
      user: "John Doe",
    },
    {
      id: 1,
      name: translate[lang]["Izvanredna usluga"],
      numofstars: 5,

      description:
        translate[lang]["Nisam mogao biti srećniji što sam odlučio jesti u ovom restoranu. Kvalitet hrane je bio vrhunski, a brza dostava je dodala dodatni plus. Ovo mesto je zaista vredno posete."],
      user: "John Doe",
    },
  ];

  const generateUser = (firstName) => (lastName) => (yearOfBirth) => {
    const user = {
      yearOfBirth: yearOfBirth,
      firstName: firstName,
      lastName: lastName,
      age: function () {
        return new Date().getFullYear() - this.yearOfBirth;
      },
      isOldEnough: function () {
        return this.age() >= 18;
      },
    };
    return [
      {
        ...user,
        age: user.age(),
        isOldEnough: user.isOldEnough(),
      },
    ];
  };

  const users = [
    {
      firstName: "John",
      lastName: "Doe",
      yearOfBirth: 1990,
    },
    {
      firstName: "Mary",
      lastName: "Smith",
      yearOfBirth: 2009,
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      yearOfBirth: 1995,
    },
  ];

  const generatedUsers = [];

  users.forEach((user) => {
    generatedUsers.push(
      ...generateUser(user.firstName)(user.lastName)(user.yearOfBirth)
    );
  });
  console.log(generatedUsers);
  return (
    <div className={`mt-20 container mx-auto 2xl:px-[9rem]`}>
      <h1 className={`font-semibold text-slate-800 text-[2.5rem]`}>{text}</h1>{" "}
      <div className={`flex max-md:flex-col items-center mt-5 justify-between`}>

        <div className={`flex max-md:ml-auto max-md:mt-4 items-center gap-3`}>
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

          {/*<Button className={`!m-auto`} text={`All reviews`} />*/}
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        speed={800}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className={`mt-16`}
        spaceBetween={25}
        loop={true}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className={`flex flex-col items-start gap-3`}>
                <h1 className={`text-lg font-semibold`}>{item?.name}</h1>
                <div className={`flex items-center gap-3`}>
                  {[...Array(item?.numofstars)].map((item) => {
                    return (
                      <i
                        key={item}
                        className={`fas fa-star text-[#ffce04]`}
                      ></i>
                    );
                  })}
                </div>
                <p className={`text-base text-slate-500`}>
                  {item?.description}
                </p>
                <div className={`flex items-center gap-3`}>
                  {/*<div*/}
                  {/*  className={`w-[50px] h-[50px] rounded-full bg-slate-200`}*/}
                  {/*></div>*/}
                  {/*<div className={`flex flex-col`}>*/}
                  {/*  <h1 className={`text-base font-semibold`}>{item?.user}</h1>*/}
                  {/*  <p className={`text-sm text-slate-500`}>Customer</p>*/}
                  {/*</div>*/}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Reviews;
