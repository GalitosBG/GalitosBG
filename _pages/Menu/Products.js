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
          price: 790,
          image: "/Food/Starters & Soup salad/Piri Wings.jpg",
        },
        {
          name: translate[lang]["GRILOVANA PILEĆA DŽIGERICA"],
          description:
            translate[lang][
              "Grilovana pileća džigerica, sishebo sos, hleb sa belim lukom"
            ],
          price: 850,
          image: "/Food/Starters & Soup salad/Livers.jpg",
        },
        // {
        //   name: translate[lang]["PIRI PEČURKE (V)"],
        //   description:
        //     translate[lang][
        //       "Grilovani šampinjoni u šišebo sosu i hlebom sa belim lukom i začinima"
        //     ],
        //   price: 580,
        //   image: "/Food/Starters & Soup salad/Pirishrooms.jpg",
        // },
        // {
        //   name: "CHICK-E-NAISE",
        //   description:
        //     translate[lang][
        //       "Hleb sa belim lukom sa kockicama grilovane piletine, majonezom i mocarela sirom"
        //     ],
        //   price: 790,
        //   image: "/Food/Starters & Soup salad/Chcikenaise.jpg",
        // },
        {
          name: translate[lang]["PILEĆI TACOS"],
          description:
            translate[lang][
              "Takos tortilja sa čili bin i ajsberg salatom, drpana piletina sa grilovanom paprikom i lukom"],
          price: 790,
          image: "/Food/Starters & Soup salad/Flame Grilled Chicken Tacos.jpg",
        },
        {
          name: "PIRIMMUS   (V)",
          description: translate[lang]["Humus, piri začin, pita hleb"],
          price: 590,
          image: "/Food/Starters & Soup salad/Pirimmus.jpg",
        },
        {
          name: translate[lang]["MOZZARELA ŠTAPIĆI"],
          description:
            translate[lang][
              "Domaći prženi štapići mozzarelle uvaljani u panko"
            ],
          price: 590,
          image: "/Food/Starters & Soup salad/mozzarella sticks.jpg",
        },
        {
          name: translate[lang]["PILEĆI SATAY"],
          description:
            translate[lang][
              "Grilovani pileći file na štapiću sa piri-piri sosem od kikirikija"
            ],
          price: 790,
          image: "/Food/Starters & Soup salad/Pileci Satay sa limunom i zacinima.jpg",
        },
        {
          name: translate[lang]["PILEĆI POPCORN"],
          description:
            translate[lang][
              "Kokice od pohovanog pilećeg filea, pomfrit, topljeni sos od čedar sira"
            ],
          price: 790,
          image: "/Food/Starters & Soup salad/popcorn.jpg",
        },

        
 

        // {
        //   name: "TRIPLE DIP (V)",
        //   description:
        //     translate[lang]["Humus, Ajvar Humus, Cvekla Humus, pita hleb"],
        //   price: 690,
        //   image: "/Food/Starters & Soup salad/Triple Dip.jpg",
        // },
      ],
    },
    {
      category: translate[lang]["SUPA I SALATE"],
      slug: "supa-i-salate",
      items: [
        {
          name: translate[lang]["PILEĆA SUPA"],
          description: translate[lang]["Kremasta pileća supa sa svežim povrćem servirano sa hlebom sa belim lukom / garlic bread"],
          price: 490,
          image: "/Food/Starters & Soup salad/Chicken Soup.jpg",
        },
        {
          name: translate[lang]["TABBOULEH SALATA"],
          description:
            translate[lang][
              "Bulgur, peršun,paradajz, mladi luk, sveža nana, dresing od maslina i sveže isceđenog limuna"
            ],
          price: 490,
          image: "/Food/Starters & Soup salad/tabbouleh salad.jpg",
        },
        {
          name: translate[lang]["CAESAR SALATA"],
          
          description:
            translate[lang][
              "Grilovani pileći file, ajsberg salata, krutoni, parmezan, domaći caesar dressing"
            ],
          price: 990,
          image: "/Food/Starters & Soup salad/Galito's Caesar Salad.jpg",
        },
        {
          name: translate[lang]["GRILL MASTER,S (PILEĆA) SALATA"],
          description:
            translate[lang][
              "Grilovani pilećin file, mix zelene i ajsberg salate, krastavac, paradajz, crni luk, paprika, marinirana cvekla, grilovani slatki kukuruz (šećerac), sjenički sir, krutoni, fresh lemon dressing"
            ],
          price: 1090,
          image: "/Food/Starters & Soup salad/Grill Master's Salad with chicken.jpg",
        },
      ],
    },
    {
      category: translate[lang]["ČINIJE PIRINČA"],
      slug: "cinije-pirinca",
      items: [
        {
          name: translate[lang]["PILETINA BOWL"],
          
          description:
            translate[lang]["Grilovani pileći file, pirinač"],
          price: 990,
          image: "/Food/Flame Grilled Chicken and rice bowls/Chicken Rice.jpg",
        },
        {
          name: translate[lang]["PILETINA I POVRĆE BOWL"],
          description:
            translate[lang][
              "Grilovani pileći file, grilovano povrće i pečurke, pirinač, sishebo sauce"
            ],
          price: 990,
          image:
            "/Food/Flame Grilled Chicken and rice bowls/Chick and veggie rice.jpg",
        },
        {
          name: translate[lang]["PILEĆA DŽIGERICA BOWL"],
          description:
            translate[lang]["Grilovana pileća džigerica, pirinač, sishebo sauce"],
          price: 990,
          image:
            "/Food/Flame Grilled Chicken and rice bowls/Livers Rice Bowl.jpg",
        },
        {
          name: "VEGGIE BOWL",
          description:
            translate[lang]["Grilovano povrće i pečurke, pirinač, sishebo sauce"],
          price: 850,
          image:
            "/Food/Flame Grilled Chicken and rice bowls/Veggie Rice Bowl.jpg",
        },
        {
          name: "GALIBOWL",
          description:
            translate[lang][
              "Grilovani pileći file, spanać, chili beans, pirinač"
            ],
          price: 1090,
          image: "/Food/Flame Grilled Chicken and rice bowls/Galibowl.jpg",
        },
      ],
    },
    {
      category: translate[lang]["GALITOS CLASSIC`s"],
      slug: "flame-grilled-chicken",
      items: [
        {
          name: translate[lang]["BATAK OBROK"],
          description:
            translate[lang][
              "Grilovani pileći batak sa coleslaw  salatom"
            ],
          price: 890,
          image: "/Food/Starters & Soup salad/quarter leg meal.jpg",
        },
        {
          name: translate[lang]["GRILOVANI PILEĆI FILE SA POMFRITOM"],
          description:
            translate[lang][
              "Grilovani pileći file"
            ],
          price: 1090,
          image: "/Food/Starters & Soup salad/Boneless Chicken (fillets).jpg",
        },
        {
          name: translate[lang]["DURBAN PILETINA"],
          description:
            translate[lang][
              "Marinirani pileći batak (bez kostiju) serviran sa jednim od vaših omiljenih priloga"
            ],
          price: 1190,
          image:
            "/Food/Flame Grilled Chicken and rice bowls/durban with 1 side.jpg",
        },
        {
          name: translate[lang]["PILEĆA ESPETADA"],
          description:
            translate[lang][
              "Grilovani komadi pilećeg bataka (bez kostiju), grilovano povrće, servirano sa jednim od vaših omiljenih priloga"
            ],
          price: 1390,
          image: "/Food/Flame Grilled Chicken and rice bowls/Espetada.jpg",
        },
        {
          name: translate[lang]["HOT BOX 3"],
          description:
            translate[lang][
              "Tri komada piletine grilovane na otvorenom plamenu  sa pomfritom"
            ],
          price: 1090,
          image: "/Food/Starters & Soup salad/hot box 3.jpg",
        },
        {
          name: translate[lang]["HOT BOX 5"],
          description:
            translate[lang][
              "Pet komada piletine grilovane na otvorenom plamenu  sa pomfritom"
            ],
          price: 1390,
          image: "/Food/Starters & Soup salad/hot box 5.jpg",
        },
        // {
        //   name: translate[lang]["ČETVRTINA PILETA"],
        //   description: translate[lang]["( 350g sa koskom) "],
        //   price1: 780,
        //   price2: 1010,
        //   image:
        //     "/Food/Flame Grilled Chicken and rice bowls/Quarter Chicken.jpg",
        // },
        // {
        //   name: translate[lang]["POLA PILETA"],
        //   description: translate[lang]["(2x350g sa koskom)"],
        //   price1: 1240,
        //   price2: 1490,
        //   image: "/Food/Flame Grilled Chicken and rice bowls/Half Chicken.jpg",
        // },
        // {
        //   name: translate[lang]["PILEĆI FILE"],
        //   description: translate[lang]["(2x 180g filea)"],
        //   price1: 1190,
        //   price2: 1420,
        //   image:
        //     "/Food/Flame Grilled Chicken and rice bowls/Boneless Chicken.jpg",
        // },
      ],
    },
    {
      category: translate[lang]["BURGERI I WRAPOVI"],
      slug: "burgeri-i-wrappovi",
      items: [
        {
          name: translate[lang]["GALITOS PILEĆI BURGER"],
          price: 990,
          image: "/Food/Burgers &nWrap/Chicken Burger.jpg",

          description:
            translate[lang][
              "Grilovani pileći file, majonez, čedar sir, paradajz & servirano sa pomfritom"
            ],
        },
        {
          name: translate[lang]["HRSKAVI BURGER"],
          description:
            translate[lang][
              "Hrskavai pileći file uvaljan u panko, čedar sir, ajsberg salata, domaći burger sos & servirano sa pomfritom"
            ],
          price: 990,
          image: "/Food/Burgers &nWrap/crispy burger.jpg",
        },
        {
          name: translate[lang]["SMASH BEEF BURGER"],
          description:
            translate[lang][
              "Mlevena junetina, čedar sir, kiseli krastavci, domaći burger sos & servirano sa pomfritom"
            ],
          price: 1190,
          image: "/Food/Burgers &nWrap/Smash Beef Burger.jpg",
        },
        {
          name: translate[lang]["PILEĆI WRAP"],
          price: 990,
          image: "/Food/Burgers &nWrap/chicken wrap.jpg",

          description:
            translate[lang][
              "Trake od pilećeg filea, majonez, ajsberg salata, paradajz, čedar sir & servirano sa pomfritom"   
            ],
        },
        {
          name: translate[lang]["CEPKANA PILETINA WRAP"],
          description:
            translate[lang][
              "Cepkana piletina grilovana na otvorenom plamenu, crni luk, paprika, ajsberg salata, majonez, čedar, sishebo sos & servirano sa pomfritom"
            ],
          price: 990,
          image: "/Food/Burgers &nWrap/Pulled Chicken Wrap.jpg",
        },
        // {
        //   name: translate[lang]["PILEĆI BURGER"],
        //   description:
        //     translate[lang][
        //       "Mlevena piletina, homemade burger sos, sir, ajsberg"
        //     ],
        //   price: 980,
        //   image: "/Food/Burgers &nWrap/Double-Up Burger.jpg",
        // },
        {
          name: translate[lang]["CEZAR WRAP"],
          description:
            translate[lang]["Grilovani pileći file, ajsberg salata, krutoni, parmezan, domaći caesar dresing & servirano sa pomfritom"],
            
          price: 990,
          image: "/Food/Burgers &nWrap/Cezar Wrap.jpg",
        },
      ],
    },
    {
      category: translate[lang]["PODELI OBROK"],
      slug: "porodicni-obrok",
      items: [
        {
          name: "2 PACK",
          description: translate[lang]["Četiri parčeta piletine grilovane na otvorenom plamenu, dve porcije pomfrita, ciabatta hleb, dva pića (po tvom izboru)"],
          
          price: 2190,
          image: "/Food/meals to share and Piri Wings/2 pack.jpg",
        },
        {
          name: "4 PACK",
          description: translate[lang]["Osam parčeta piletine grilovane na otvorenom plamenu, četiri porcije pomfrita, ciabatta hleb, četiri pića (po tvom izboru)"],
          price: 3990,
          image: "/Food/meals to share and Piri Wings/4 pack.jpg",
        },
        {
          name: translate[lang]["PILEĆA COMBOTADA"],
          description:
            translate[lang]["Dva ražnjića sa pečenim kockicama pilećih bataka bez kostiju, grilovano povrće, servirano uz dva priloga po vašem izboru"],
          price: 2690,
          image: "/Food/meals to share and Piri Wings/Combotada.jpg",
        },
        {
          name: `15 ${translate[lang]["KRILACA"]}`,
          description: translate[lang]["Pečena pileća krilca na otvorenom plamenu"],
          price: 2490,
          image: "/Food/meals to share and Piri Wings/15 Winglets.jpg",
        },
        {
          name: `20 ${translate[lang]["KRILACA"]}`,
          description: translate[lang]["Pečena pileća krilca na otvorenom plamenu"],
          image: "/Food/meals to share and Piri Wings/20 winglets.jpg",
          price: 3290,
        },
        {
          name: `30 ${translate[lang]["KRILACA"]}`,
          description: translate[lang]["Pečena pileća krilca na otvorenom plamenu"],
          image: "/Food/meals to share and Piri Wings/30 Winglets.jpg",
          price: 4890,
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
          name: translate[lang]["POMFRIT"],
          description: translate[lang]["Prženi / hrskavi krompirići"],
          price: 290,
          type: "regular",
          image: "/Food/Sides/fries.jpg",
        },
        {
          name: translate[lang]["CHEESY FRIES"],
          description: translate[lang]["Prženi / hrskavi krompirići sa topljenim čedar sirom"],
          price: 450,
          type: "regular",
          image: "/Food/Sides/DSC03546.jpg",
        },
        {
          name: translate[lang]["PIRI POMFRIT"],
          description: translate[lang]["Prženi / hrskavi krompirići sa piri-piri začinima"],
          price: 290,
          type: "regular",
          image: "/Food/Sides/Piri fries.jpg",
        },
        {
          name: translate[lang]["BATAT"],
          description: translate[lang]["Prženi / hrsakvi batat (krompir)"],
          price: 350,
          type: "signature",
          image: "/Food/Sides/Sweet Potato Fries.jpg",
        },
        {
          name: translate[lang]["PIRINAČ"],
          description: translate[lang]["BASMATI PIRINAČ"],
          price: 290,
          type: "regular",
          image: "/Food/Sides/Oporto rice.jpg",
        },
        {
          name: "COLESLAW",
          description: translate[lang]["Šargarepa, kupus, majonez"],
          price: 350,
          type: "regular",
          image: "/Food/Sides/Coleslaw.jpg",
        },
        {
          name: translate[lang]["SVEŽA SALATA"],
          description: translate[lang]["Ajsberg salata, paprika, krastavac, paradajz, italijanski dresing"],
          price: 350,
          type: "regular",
          image: "/Food/Sides/Side Salad.jpg",
        },
        {
          name: translate[lang]["GARLIC BREAD"],
          description: translate[lang]["Ciabatta hleb, puter od belog luka"],
          price: 290,
          type: "regular",
          image: "/Food/Sides/Garlic Bread.jpg",
        },
        {
          name: translate[lang]["GRILOVANO POVRĆE"],
          description: translate[lang]["Grilovane šargarepe, paprika, beli luk, pečurke, tikvice, crni luk, origano"],
          price: 390,
          type: "signature",
          image: "/Food/Sides/grilled Vegetables.jpg",
        },
        {
          name: translate[lang]["CHILI BEAN SALATA"],
          description: translate[lang]["Boraniја, bob, pečeni pasulj, paprike, crni luk, naš domaći piri-piri sos sa slatko-ljutkastim ukusom"],
          price: 390,
          type: "regular",
          image: "/Food/Sides/Chilli Bean.jpg",
        },
        // {
        //   name: translate[lang]["PIRE KROMPIR"],
        //   description: "",
        //   price: 390,
        //   type: "signature",
        //   image: "/Food/Sides/Mashed Potatoes.jpg",
        // },
        // {
        //   name: translate[lang]["SPANAĆ"],
        //   description: "",
        //   price: 390,
        //   type: "signature",
        //   image: "/Food/Sides/Spinach With Potatoes.jpg",
        // },
        // {
        //   name: translate[lang]["BROKOLI NA PARI"],
        //   description: "",
        //   price: 390,
        //   type: "signature",
        //   image: "/Food/Sides/broccoli.jpg",
        // },
      ],
    },
    // {
    //   category: translate[lang]["PIRI KRILCA"],
    //   slug: "piri-krilca",
    //   items: [
    //     {
    //       name: `15 ${translate[lang]["KRILACA"]}`,
    //       description: "",
    //       price: 2450,
    //       image: "/Food/meals to share and Piri Wings/15 Winglets.jpg",
    //     },
    //     {
    //       name: `20 ${translate[lang]["KRILACA"]}`,
    //       description: "",
    //       image: "/Food/meals to share and Piri Wings/20 winglets.jpg",
    //       price: 3200,
    //     },
    //     {
    //       name: `30 ${translate[lang]["KRILACA"]}`,
    //       description: "",
    //       image: "/Food/meals to share and Piri Wings/30 Winglets.jpg",
    //       price: 4800,
    //     },
    //   ],
    // },
    {
      category: translate[lang]["DEČIJI MENI"],
      slug: "deci-meni",
      items: [
        {
          name: `${translate[lang]["CHICKEN NUGGETS / PILEĆI NUGGETSI"]}`,
          description: translate[lang]["Komadići pilećeg filea & servirano sa pomfritom"],
          price: 590,
          image: "/Food/Burgers &nWrap/chicken nuggets.jpg",
        },
        {
          name: `${translate[lang]["CHICKEN TENDERS / PILEĆI TENDERSI"]}`,
          description: translate[lang]["Trakice pilećeg filea & servirano sa pomfritom"],
          image: "/Food/Burgers &nWrap/chicken tenders.jpg",
          price: 590,
        },
        // {
        //   name: `${translate[lang]["SLADOLED"]}`,
        //   description: translate[lang]["Kugla sladoleda od vanile"],
        //   price: 590,
        //   image: "/Food/Desserts/Chocolate Brownie.jpg",
        // },
      ],
    },
    {
      category: translate[lang]["DEZERTI"],
      slug: "dezerti",
      items: [
        {
          name: `${translate[lang]["HOMEMADE NUTELLA BROWNIE"]}`,
          description: translate[lang]["Nutella brownie, sladoled od vanile"],
          price: 590,
          image: "/Food/Desserts/Chocolate Brownie.jpg",
        },
        {
          name: `${translate[lang]["STICKY DATE PUDDING"]}`,
          description: translate[lang]["Mekani kolač od urmi, sladoled od vanile, karamel sos"],
          image: "/Food/Desserts/Sticky Toffee Pudding.jpg",
          price: 550,
        },
        // {
        //   name: `${translate[lang]["SLADOLED"]}`,
        //   description: translate[lang]["Kugla sladoleda od vanile"],
        //   price: 190,
        //   image: "/Food/Desserts/Chocolate Brownie.jpg",
        // },
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
                              translate[lang]["PILEĆA ESPETADA"] ||
                            item?.name === "CHICKEN ESPETADA" || item?.name === translate[lang]["PILEĆA COMBOTADA"]
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
