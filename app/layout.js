import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/_components/Header/Header";
import Script from "next/script";
import Footer from "@/_components/Footer/Footer";
import { LangProvider } from "@/_context/langContext";
import localFont from "next/font/local";
import { GoogleTagManager } from "@next/third-parties/google";

const tagManagerArgs = {
  gtmId: "GTM-NRH4NTLN",
};

export const metadata = {
  title: "Galitos ",
  description:
    "Savor the bold taste of Galito's at Galerija Mall- Your destination for Flame-Grilled Piri Piri perfection! Indulge in healthy flame-grilled chicken delights from grilled chicken salad, Piri Piri Chicken, burgers and wraps to rice bowl.",
  image: "https://ridgewaysmall.co.ke/wp-content/uploads/2021/10/Galitos-2.jpg",
  openGraph: {
    title: "Galitos",
    description:
      "Savor the bold taste of Galito's at Galerija Mall- Your destination for Flame-Grilled Piri Piri perfection! Indulge in healthy flame-grilled chicken delights from grilled chicken salad, Piri Piri Chicken, burgers and wraps to rice bowl.",
    images: [
      {
        url: "https://ridgewaysmall.co.ke/wp-content/uploads/2021/10/Galitos-2.jpg",
        width: 800,
        height: 600,
        alt: "Galitos",
      },
    ],
  },
  keywords: [
    "Portuguese",
    "African",
    "South African",
    "Piri Piri Sauce",
    "Peri Peri",
    "Chicken",
    "Grill",
    "Grilled Chicken",
    "Flame-Grilled",
    "Healthy Dining",
    "Burger",
    "Rice Bowl",
    "Best Chicken Restaurant",
    "Best Grilled Chicken in Belgrade",
    "Waterfront restaurants",
    "Casual Dining",
  ],
};

const myFont = localFont({
  src: [
    {
      path: "./Avenir.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <LangProvider>
      <html lang='en' className={myFont.className}>
        <head>
          <link
            href='https://fonts.googleapis.com/css2?family=Monoton&family=Rubik:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'
            rel='stylesheet'
          />
          <Script
            crossOrigin='anonymous'
            src='https://kit.fontawesome.com/f141ac3909.js'
          />{" "}
        </head>
        <body id='google_translate_element' className='translate'>
          <Header />
          {children}
          <Footer />
        </body>
        <GoogleTagManager gtmId='GTM-NRH4NTLN' />
      </html>
    </LangProvider>
  );
}
