"use client";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Garlic",
      amount: "250ml",
      image: "/Sauces/List/garlic.png",
      color: "#d033ca",
    },
    {
      id: 2,
      name: "Lemon & Herb",
      amount: "250ml",
      image: "/Sauces/List/lemon.png",
      color: "#f4e900",
    },
    {
      id: 3,
      name: "Green Chilli",
      amount: "250ml",
      image: "/Sauces/List/chili.png",
      color: "#88c619",
    },
    {
      id: 4,
      name: "BBQ Piri-Piri",
      amount: "250ml",
      image: "/Sauces/List/bbq.png",
      color: "#f16005",
    },
    {
      id: 5,
      name: "BBQ",
      amount: "250ml",
      image: "/Sauces/List/bbq2.png",
      color: "#f59200",
    },
    {
      id: 6,
      name: "Mild",
      amount: "250ml",
      image: "/Sauces/List/mild.png",
      color: "#4ecddf",
    },
    {
      id: 7,
      name: "Hot",
      amount: "250ml",
      image: "/Sauces/List/hot.png",
      color: "#e50490",
    },
    {
      id: 8,
      name: "Premium Reserve",
      amount: "250ml",
      image: "/Sauces/List/premium.png",
      color: "#d90010",
    },
    {
      id: 9,
      name: "XXX Hot",
      amount: "250ml",
      image: "/Sauces/List/xxxhot.png",
      color: "#e40313",
    },
  ]);
  const possible = [
    "border-[#e40313]",
    "border-[#d90010]",
    "border-[#e50490]",
    "border-[#4ecddf]",
    "border-[#f59200]",
    "border-[#f16005]",
    "border-[#88c619]",
    "border-[#f4e900]",
    "border-[#d033ca]",
  ];
  return (
    <div className={`container mx-auto 2xl:px-[8rem] lg:-mt-10`}>
      <div className={`grid grid-cols-2 mt-10 md:grid-cols-3 gap-10`}>
        {products.map((product) => {
          return (
            <div
              className={`flex border-2 border-[${product?.color}] py-4 rounded-lg col-span-1 flex-col items-center justify-center`}
            >
              <div className={``}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`object-contain rounded-md transition-all duration-300 hover:scale-110`}
                />
              </div>
              <h1 id={product?.id} className={`text-xl text-center uppercase -mt-9 font-medium`}>
                {product.name}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
