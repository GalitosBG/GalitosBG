import TopCategories from "@/_pages/Menu/TopCategories";
import Products from "@/_pages/Menu/Products";
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
const Menu = () => {
  return (
    <>
      <TopCategories />
      <Products className={TarzanaWide.className} />
    </>
  );
};

export default Menu;
