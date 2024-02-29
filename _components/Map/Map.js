import GoogleMapReact from "google-map-react";
import { footerMapStyle } from "./FooterMapStyle";
import Image from "next/image";
import classes from "./Footer.module.css";

import pin from "@/public/location-pin.png";

const Marker = () => {
  return (
    <div
      className={"relative"}
      style={{
        color: "white",
        width: "40px",
        height: "80px",
        padding: "15px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Image src={pin} alt="" layout="fill" objectFit="contain" />
    </div>
  );
};

const Map = () => {
  return (
    <div className={classes.footerMap}>
      <div className={classes.footerMapCover} />
      <div style={{ height: "100%", width: "100%" }}>
        <a
          href={`https://g.co/kgs/jU2jfw`}
          target={`_blank`}
          className={`z-50 cursor-pointer`}
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAb3yABiMy-kIRMSGFD1YQMMp8pMHPZ2m0",
            }}
            defaultCenter={{
              lat: 44.8105502,
              lng: 20.4534788,
            }}
            defaultZoom={15}
            options={{ styles: footerMapStyle }}
            yesIWantToUseGoogleMapApiInternals={true}
            draggable={false}
            style={{cursor:"pointer"}}
          >
            <Marker lat={44.8105502} lng={20.4534788} active={true} />
          </GoogleMapReact>
        </a>
      </div>
    </div>
  );
};

export default Map;
