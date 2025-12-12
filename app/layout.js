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
  title: "Gallos",
  description:
    "Savor the bold taste of Gallo's at Galerija Mall- Your destination for Flame-Grilled Piri Piri perfection! Indulge in healthy flame-grilled chicken delights from grilled chicken salad, Piri Piri Chicken, burgers and wraps to rice bowl.",
  image: "/app/favicon.ico",
  openGraph: {
    title: "Gallos",
    description:
      "Savor the bold taste of Gallo's at Galerija Mall- Your destination for Flame-Grilled Piri Piri perfection! Indulge in healthy flame-grilled chicken delights from grilled chicken salad, Piri Piri Chicken, burgers and wraps to rice bowl.",
    images: [
      {
        url: "/app/favicon.ico",
        width: 800,
        height: 600,
        alt: "Gallos",
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
          <meta
            name='facebook-domain-verification'
            content='srzagrf58aglni0ez1vvju4xia6qg6'
          />
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
            src='https://kit.fontawesome.com/28b0bfb74b.js'
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
