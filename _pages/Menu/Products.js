"use client";
import { useContext, useEffect, useState } from "react";
import langContext from "@/_context/langContext";
import { translate } from "@/_context/lang";
import NoImg from "@/public/noimg.png";
import Image from "next/image";
const Products = ({ className }) => {
  const { lang } = useContext(langContext);
  const [imageModal, setImageModal] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    if (imageModal?.image && imageModal?.name) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [imageModal]);

  const menu = [
    {
      category: translate[lang]["PREDJELA"],
      slug: "predjela",
      items: [
        {
          name: translate[lang]["PIRI KRILCA"],
          description: translate[lang]["Pileća krilca grilovana na plamenu"],
          price: 680,
          image: "/Food/Starters & Soup salad/Piri Wings.jpg",
        },
        {
          name: translate[lang]["GRILOVANA PILEĆA DŽIGERICA"],
          description:
            translate[lang][
              "U šišebo sosu i hlebom sa belim lukom i začinskim biljem"
            ],
          price: 720,
          image: "/Food/Starters & Soup salad/Livers.jpg",
        },
        {
          name: translate[lang]["PIRI PEČURKE (V)"],
          description:
            translate[lang][
              "Grilovani šampinjoni u šišebo sosu i hlebom sa belim lukom i začinima"
            ],
          price: 580,
          image: "/Food/Starters & Soup salad/Pirishrooms.jpg",
        },
        {
          name: translate[lang]["SATAY SA LIMUNOM I ZAČINIMA"],
          description:
            translate[lang][
              "Grilovani pileći ražnjići sa umakom od kikirikija"
            ],
          price: 580,
          image: "/Food/Starters & Soup salad/L&H Chciken Satay.jpg",
        },
        {
          name: "CHICK-E-NAISE",
          description:
            translate[lang][
              "Hleb sa belim lukom sa kockicama grilovane piletine, majonezom i mocarela sirom"
            ],
          price: 790,
          image: "/Food/Starters & Soup salad/Chcikenaise.jpg",
        },
        {
          name: translate[lang]["TAKOS SA PILETINOM GRILOVANOM NA PLAMENU"],
          description:
            translate[lang][
              "Takos tortilja sa čili bin i ajsberg salatom, drpana piletina sa grilovanom paprikom i lukom"
            ],
          price: 690,
          image: "/Food/Starters & Soup salad/Flame Grilled Chicken Tacos.jpg",
        },
        {
          name: "PIRIMMUS   (V)",
          description: translate[lang]["Humus sa piri začinom i pita hlebom"],
          price: 450,
          image: "/Food/Starters & Soup salad/Pirimmus.jpg",
        },

        {
          name: "CHEESY FRIES (V)",
          description: translate[lang]["Hrskavi krompirići sa sosom od sira"],
          price: 380,
          image: "/Food/Starters & Soup salad/Cheesy Fries.jpg",
        },
        {
          name: "TRIPLE DIP (V)",
          description:
            translate[lang]["Humus, Ajvar Humus, Cvekla Humus, pita hleb"],
          price: 690,
          image: "/Food/Starters & Soup salad/Triple Dip.jpg",
        },
      ],
    },
    {
      category: translate[lang]["SUPA I SALATE"],
      slug: "supa-i-salate",
      items: [
        {
          name: translate[lang]["PILEĆA ČORBA"],
          description: translate[lang]["Pileća krem čorba"],
          price: 390,
          image: "/Food/Starters & Soup salad/Chicken Soup.jpg",
        },
        {
          name: translate[lang]["CEZAR SALATA"],
          description:
            translate[lang][
              "Pileći file grilovan na plamenu, ajsberg salata, krutoni, cezar dresing, parmezan sir"
            ],
          price: 790,
          image: "/Food/Starters & Soup salad/Galito's Caesar Salad.jpg",
        },
        {
          name: translate[lang]["GRILL MASTER'S SALATA (V)"],
          description:
            translate[lang][
              "Marinirana cvekla, mešana zelena salata, paprika, paradajz, krasatavac, crni luk, beli sir, krutoni , dresing od limuna"
            ],
          price: 640,
          image: "/Food/Starters & Soup salad/Grill Master's Salad.jpg",
        },
      ],
    },
    {
      category: "FLAME GRILLED CHICKEN",
      slug: "flame-grilled-chicken",
      items: [
        {
          name: translate[lang]["ČETVRTINA PILETA"],
          description: translate[lang]["( 350g sa koskom) "],
          price1: 780,
          price2: 1010,
          image:
            "/Food/Flame Grilled Chicken and rice bowls/Quarter Chicken.jpg",
        },
        {
          name: translate[lang]["POLA PILETA"],
          description: translate[lang]["(2x350g sa koskom)"],
          price1: 1240,
          price2: 1490,
          image: "/Food/Flame Grilled Chicken and rice bowls/Half Chicken.jpg",
        },
        {
          name: translate[lang]["PILEĆI FILE"],
          description: translate[lang]["(2x 180g filea)"],
          price1: 1190,
          price2: 1420,
          image:
            "/Food/Flame Grilled Chicken and rice bowls/Boneless Chicken.jpg",
        },
        {
          name: translate[lang]["DURBAN BATAK"],
          description:
            translate[lang][
              "(2x180g batka sa kožom, bez kostiju, začinjen sa afričkim začinima)"
            ],
          price1: 1220,
          price2: 1490,
          image:
            "/Food/Flame Grilled Chicken and rice bowls/durban with 1 side.jpg",
        },
        {
          name: "CHICKEN ESPETADA",
          description:
            translate[lang][
              "(1 X 300g bataka bez kostiju i kože na ražnjiću sa povrćem)"
            ],
          price1: 1390,
          price2: 1590,
          image: "/Food/Flame Grilled Chicken and rice bowls/Espetada.jpg",
        },
      ],
    },
    {
      category: translate[lang]["BURGERI I WRAPOVI"],
      slug: "burgeri-i-wrappovi",
      items: [
        {
          name: translate[lang]["PILEĆI FILE GRILOVAN NA PLAMENU (BURGER)"],
          price: 980,
          image: "/Food/Burgers &nWrap/Chicken Burger.jpg",

          description:
            translate[lang][
              "Grilovani pileći file na plamenu, majonez, ajsberg salata, paradajz, čedar sir"
            ],
        },
        {
          name: translate[lang]["PILEĆI FILE GRILOVAN NA PLAMENU (WRAP)"],
          price: 980,
          image: "/Food/Burgers &nWrap/ChickenWrap.jpg",

          description:
            translate[lang][
              "Grilovani pileći file na plamenu, majonez, ajsberg salata, paradajz, čedar sir"
            ],
        },
        {
          name: translate[lang]["DUPLI PILEĆI FILE"],
          description:
            translate[lang][
              "Dva grilovana pileća filea, majonez, ajsberg salata, paradajz, čedar sir"
            ],
          price: 1490,
          image: "/Food/Burgers &nWrap/Double-Up Burger.jpg",
        },
        {
          name: translate[lang]["WRAP SA DRPANIM PILEĆIM MESOM"],
          description:
            translate[lang][
              "Tortilja, drpana piletina, paprika, luk, šišebo sos, čedar sir, ajsberg salata"
            ],
          price: 890,
          image: "/Food/Burgers &nWrap/Pulled Chciken Wrap.jpg",
        },
        {
          name: "SMASH BURGER",
          description:
            translate[lang][
              "Juneći burger, Prego sos, majonez, senf, ajsberg salata, kiseli krastavac, čedar sir"
            ],
          price: 1180,
          image: "/Food/Burgers &nWrap/Smash Beef Burger.jpg",
        },
        {
          name: "SMASH WRAP",
          description:
            translate[lang][
              "Juneći burger, Prego sos, majonez, senf, ajsberg salata, kiseli krastavac, čedar sir"
            ],
          price: 1180,
          image: "/Food/Burgers &nWrap/Smash Beef wrap.jpg",
        },
        {
          name: translate[lang]["GRILOVANI SIR  (V)   (BURGER/WRAP)"],
          description:
            translate[lang]["Grilovani sir, paradajz, humus, rukola"],
          price: 890,
          image: "/Food/Burgers &nWrap/Grilled Cheese Burger.jpg",
        },
      ],
    },
    {
      category: translate[lang]["ČINIJE PIRINČA"],
      slug: "cinije-pirinca",
      items: [
        {
          name: translate[lang]["BOWL SA PILEĆIM FILEOM"],
          description:
            translate[lang]["Grilovan pileći file na plamenu, O'porto pirinač"],
          price: 760,
          image: "/Food/Flame Grilled Chicken and rice bowls/Chicken Rice.jpg",
        },
        {
          name: translate[lang]["BOWL SA GRILOVANOM DŽIGERICOM"],
          description:
            translate[lang]["Pileća džigerica, šišebo sos, O'porto pirinač"],
          price: 820,
          image:
            "/Food/Flame Grilled Chicken and rice bowls/Livers Rice Bowl.jpg",
        },
        {
          name: translate[lang]["BOWL SA GRILOVANIM PILEĆIM FILEOM I POVRĆEM"],
          description:
            translate[lang][
              "Grilovan pileći file na plamenu, grilovano povrće, šišebo sos, O'porto pirinač"
            ],
          price: 790,
          image:
            "/Food/Flame Grilled Chicken and rice bowls/Chick and veggie rice.jpg",
        },
        {
          name: "GALIBOWL",
          description:
            translate[lang][
              "Spanać, čili bin salata, grilovan pileći FILE na plamenu, O'porto pirinač"
            ],
          price: 890,
          image: "/Food/Flame Grilled Chicken and rice bowls/Galibowl.jpg",
        },
        {
          name: "VEGGIE",
          description:
            translate[lang]["Grilovano povrće, šišebo sos, O'porto pirinač"],
          price: 620,
          image:
            "/Food/Flame Grilled Chicken and rice bowls/Veggie Rice Bowl.jpg",
        },
      ],
    },
    {
      category: translate[lang]["PORODIČNI OBROK"],
      slug: "porodicni-obrok",
      items: [
        {
          name: translate[lang]["PILEĆA COMBOTADA"],
          description:
            translate[lang]["2 ražnjića pilećih bataka sa 2 priloga"],
          price: 2690,
          image: "/Food/meals to share and Piri Wings/Combotada.jpg",
        },
        {
          name: "GALITO’S FULL PACK",
          description: translate[lang]["1 celo pile sa 4 priloga"],
          price: 2980,
          image: "/Food/meals to share and Piri Wings/Galito's Full Pack.jpg",
        },
        {
          name: "GALITO'S DOUBLE PACK   ",
          description: translate[lang]["2 cela pileta sa 6 priloga"],
          price: 5180,
          image: "/Food/meals to share and Piri Wings/Galito's double pack.jpg",
        },
        // {
        //   name: "CHILLAZ PACK",
        //   description:
        //     translate[lang]["2 predjela, 1 celo pile, 1 espetada, 4 priloga"],
        //   price: 5490,
        // },
      ],
    },
    {
      category: translate[lang]["PRILOZI"],
      slug: "prilozi",
      items: [
        {
          name: translate[lang]["O'PORTO PIRINAČ"],
          description: "",
          price: 290,
          type: "regular",
          image: "/Food/Sides/Oporto rice.jpg",
        },
        {
          name: translate[lang]["POMFRIT"],
          description: "",
          price: 290,
          type: "regular",
          image: "/Food/Sides/fries.jpg",
        },
        {
          name: translate[lang]["PERI POMFRIT"],
          description: "",
          price: 290,
          type: "regular",
          image: "/Food/Sides/Piri fries.jpg",
        },
        {
          name: "COLESLAW",
          description: "",
          price: 290,
          type: "regular",
          image: "/Food/Sides/Coleslaw.jpg",
        },
        {
          name: translate[lang]["SVEŽA SALATA"],
          description: "",
          price: 290,
          type: "regular",
          image: "/Food/Sides/Side Salad.jpg",
        },
        {
          name: translate[lang]["HLEB SA BELIM LUKOM"],
          description: "",
          price: 290,
          type: "regular",
          image: "/Food/Sides/Garlic Bread.jpg",
        },
        {
          name: translate[lang]["ČILI BIN SALATA"],
          description: "",
          price: 290,
          type: "regular",
          image: "/Food/Sides/Chilli Bean.jpg",
        },
        {
          name: translate[lang]["POMFRIT OD SLATKOG KROMPIRA"],
          description: "",
          price: 390,
          type: "signature",
          image: "/Food/Sides/Sweet Potato Fries.jpg",
        },
        {
          name: translate[lang]["PIRE KROMPIR"],
          description: "",
          price: 390,
          type: "signature",
          image: "/Food/Sides/Mashed Potatoes.jpg",
        },
        {
          name: translate[lang]["GRILOVANO POVRĆE"],
          description: "",
          price: 390,
          type: "signature",
          image: "/Food/Sides/grilled Vegetables.jpg",
        },
        {
          name: translate[lang]["SPANAĆ"],
          description: "",
          price: 390,
          type: "signature",
          image: "/Food/Sides/Spinach With Potatoes.jpg",
        },
        {
          name: translate[lang]["BROKOLI NA PARI"],
          description: "",
          price: 390,
          type: "signature",
          image: "/Food/Sides/broccoli.jpg",
        },
      ],
    },
    {
      category: translate[lang]["PIRI KRILCA"],
      slug: "piri-krilca",
      items: [
        {
          name: `15 ${translate[lang]["KRILACA"]}`,
          description: "",
          price: 2450,
          image: "/Food/meals to share and Piri Wings/15 Winglets.jpg",
        },
        {
          name: `20 ${translate[lang]["KRILACA"]}`,
          description: "",
          image: "/Food/meals to share and Piri Wings/20 winglets.jpg",
          price: 3200,
        },
        {
          name: `30 ${translate[lang]["KRILACA"]}`,
          description: "",
          image: "/Food/meals to share and Piri Wings/30 Winglets.jpg",
          price: 4800,
        },
      ],
    },
    {
      category: translate[lang]["DEZERTI"],
      slug: "dezerti",
      items: [
        {
          name: `${translate[lang]["ČOKOLADNI BROWNIE"]}`,
          description: "",
          price: 480,
          image: "/Food/Desserts/Chocolate Brownie.jpg",
        },
        {
          name: `${translate[lang]["TOFFEE PUDING"]}`,
          description: "",
          image: "/Food/Desserts/Sticky Toffee Pudding.jpg",
          price: 420,
        },
      ],
    },
  ];

  return (
    <div
      className={`container mx-auto gap-y-10 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 max-sm:w-[95%] 2xl:px-[8rem] mt-[4rem]`}
    >
      {menu.map((product) => {
        return (
          <>
            <div
              className={`flex flex-col col-span-2 md:col-span-3 2xl:col-span-4  mt-10 items-start justify-start gap-5`}
            >
              <h1
                id={product?.slug}
                className={`text-6xl text-center py-4 w-full uppercase font-bold ${
                  lang === "en" ? className : `bebas`
                }`}
              >
                {product?.category}
              </h1>
              <div
                className={`grid w-full mt-10  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10`}
              >
                {product.items.map((item) => {
                  return (
                    <div
                      className={`flex border-4 drop-shadow-sm rounded-2xl border-[#ededed] items-start md:p-[1.6rem] p-5 gap-[1rem] justify-between flex-wrap col-span-1 `}
                      onClick={() => {
                        console.log("click");
                        setImageModal({
                          name:
                            imageModal?.name === item?.name ? "" : item?.name,
                          image:
                            imageModal?.image === item?.image
                              ? ""
                              : item?.image,
                        });
                      }}
                    >
                      {item?.type && (
                        <h1
                          className={` text-lg text-center w-full font-semibold uppercase`}
                        >
                          {item?.type}
                        </h1>
                      )}
                      {item?.image ? (
                        <div
                          className={` w-full relative ${
                            item?.name ===
                              translate[lang]["PILEĆA COMBOTADA"] ||
                            item?.name === "CHICKEN ESPETADA"
                              ? "h-[350px] xl:h-[380px] 2xl:h-[470px]"
                              : "h-[250px] xl:h-[280px] 2xl:h-[270px]"
                          }`}
                        >
                          <Image
                            src={item?.image}
                            alt={`Galitos`}
                            sizes={`100vw`}
                            width={0}
                            height={0}
                            className={`w-full h-full object-cover rounded-2xl`}
                          />
                        </div>
                      ) : (
                        <Image
                          src={NoImg}
                          alt={`Galitos`}
                          className={`w-full h-auto rounded-2xl`}
                        />
                      )}
                      <div
                        className={`flex max-sm:max-w-[270px] flex-col gap-2`}
                      >
                        <h1 className={`text-left text-lg font-semibold`}>
                          {item.name}
                        </h1>
                        <p className={`font-light text-base`}>
                          {item?.description}
                        </p>
                        <>
                          {item?.price1 && item?.price2 ? (
                            <>
                              <div
                                className={`flex items-start  w-full justify-between`}
                              >
                                <div
                                  className={`flex flex-col items-start justify-start text-left`}
                                >
                                  <p>1 reg side</p>
                                  <p className={`text-xl font-medium`}>
                                    {item?.price1 ? `${item?.price1} RSD` : ``}
                                  </p>
                                </div>
                                <div
                                  className={`flex flex-col items-start justify-start text-left`}
                                >
                                  {" "}
                                  <p>2 reg sides</p>
                                  <p className={`text-xl font-medium`}>
                                    {item?.price2 ? `${item?.price2} RSD` : ``}
                                  </p>
                                </div>
                              </div>
                            </>
                          ) : (
                            <p className={`text-xl font-medium`}>
                              {item?.price ? `${item?.price} RSD` : ``}
                            </p>
                          )}
                        </>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
      {imageModal?.name && imageModal?.image && (
        <div
          onClick={() => {
            setImageModal({
              name: "",
              image: "",
            });
          }}
          className={`fixed top-0 left-0 m-auto z-[100] h-screen w-screen bg-black/80 backdrop-blur-md flex flex-col justify-center items-center`}
        >
          <Image
            src={imageModal?.image}
            alt={imageModal?.name}
            width={200000}
            quality={100}
            height={200000}
          />
        </div>
      )}
    </div>
  );
};

export default Products;
