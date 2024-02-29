import ContactPage from "@/_components/Contact";
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
const Contact = () => {
  return (
    <>
      <ContactPage className={TarzanaWide.className}/>

    </>
  );
};

export default Contact;
