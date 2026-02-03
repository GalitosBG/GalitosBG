import TopCategories from "@/_pages/Menu/TopCategories";
import Products from "@/_pages/Menu/Products";
import localFont from "next/font/local";
import HeroBlog from "@/_components/HeroBlog/HeroBlog";
import BlogItems from "@/_components/BlogItems/BlogItems";

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

const Blog = () => {
  return (
    <>
      <HeroBlog className={TarzanaWide.className} />
      {/* Blog posts disabled - re-enable to show list */}
      {/* <BlogItems className={TarzanaWide.className} /> */}
    </>
  );
};

export default Blog;
