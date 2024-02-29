import HeroNew from "@/_components/HeroNew/HeroNew";
import Promo from "@/_components/Promo";
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
const Index = () => {
  return (
    <div className={`max-md:w-[95%] mx-auto overflow-hidden`}>
      <HeroNew className={TarzanaWide.className} />
      <Promo />
    </div>
  );
};

export default Index;
