import Hero from "@/_components/Hero/Hero";
import Hero2 from "@/_pages/Sauces/Hero";
import Products from "@/_pages/Sauces/Products";
import localFont from "next/font/local";
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
const Sauces = () => {
  return (
    <div className={`max-md:w-[95%] mx-auto`}>
      <Hero2 className={TarzanaWide.className}/>
      <Products />
    </div>
  );
};

export default Sauces;
