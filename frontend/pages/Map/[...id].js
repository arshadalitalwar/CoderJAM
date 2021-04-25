import { useState, useRef, useCallback } from "react";
import ReactMap, { Marker, Popup } from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-regular-svg-icons";
import {faBed, faWineBottle} from "@fortawesome/free-solid-svg-icons"
import Geocoder from "react-map-gl-geocoder";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import styles from "./index.module.css"
import Image from 'next/image'
import {withRouter} from "next/router"

let data = [
  {
    "id":1,
      "name":"Sri Sri Holistic Hospitals | Nizampet",
      "address":"1-2, 49/13B, Nizampet Rd, Survey 37, Hyder Nagar, Nagarjuna Homes, Kukatpally, Hyderabad, Telangana 500072",
      latitude:17.50437313399618,
      longitude:78.38920279565887,
    "no_of_beds":20,
    "isCovid":false,
    "no_of_oxygen":6
    },
    {
      "id":3,
        "name":"KIMS Hospitals Kondapur",
        "address":"# 1-112 / 86, Survey No 5 / EE, beside Andhra Bank, Kondapur, Telangana 500084",
        latitude:17.48743449068216,
        longitude: 78.41094380337344,
      "no_of_beds":30,
      "isCovid":true,
      "no_of_oxygen":20
      },
    {
    "id":2,
      "name":"OMNI Hospitals",
      "address":"Mumbai Hwy, opp. BIG BAZAR, Balaji Nagar, Kukatpally, Hyderabad, Telangana 500072",

    latitude:17.469254,
        longitude: 78.367880,
    "no_of_beds":40,
    "isCovid":true,
    "no_of_oxygen":10
    },
    
];


const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 17.385044,
    longitude: 78.486671,
    width: "100vw",
    height: "100vh",
    zoom: 13,
  });
  const [open, setOpen] = useState(null);

  const mapRef = useRef();
  const value =
    "pk.eyJ1IjoibWFuaXNocmFnaGF2YW4iLCJhIjoiY2tudWl3eW00MGRhNzJwbWtxNnd6YTUwaSJ9.USR5HcEBE5ZYq-U8PdctMw";

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );


    const handleRoute=()=>{
      return props.router.push("/Hospital/1")
    }
  return (
    <html>
      <head>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>
      </head>
      <body>

    <ReactMap
      ref={mapRef}
      {...viewport}
      mapboxApiAccessToken={value}
      onViewportChange={handleViewportChange}
      mapStyle="mapbox://styles/manishraghavan/cknujbyrr0xbu17mf5kmxh9my"
      >
      {data.map((item, i) => (
        <>
          <Marker key={i} latitude={item.latitude} longitude={item.longitude}>
            <FontAwesomeIcon
              icon={faHospital}
              style={{ fontSize: "25px", cursor: "pointer" }}
              onClick={() => setOpen(item)}
              />
          </Marker>
          <Marker key={i} latitude={item.latitude+0.0210111} longitude={item.longitude+0.0210111}>
            <div  className={styles.covid}>

            </div>
          </Marker>
        </>
      ))}
      {open ? (
        <Popup
        longitude={open.longitude}
        latitude={open.latitude}
        onClick={() => setOpen(false)}
        className={styles.ll}
        >
          <div className={styles.popup}>
            <img src="/hospital.jpg" alt="pic" width={100} height={100}  className={styles.img}></img>
            <h2>{open.name}</h2>
            <h4><FontAwesomeIcon icon={faHospital} className={styles.logo}/>Treament for covid</h4>
            <h4><FontAwesomeIcon icon={faBed} className={styles.logo}/>{open.no_of_beds} beds available</h4>
            <h4><FontAwesomeIcon icon={faWineBottle} className={styles.logo}/>Oxygen supply available for {open.no_of_oxygen} patients</h4>
            <h4 onClick={handleRoute} className={styles.button}>More details</h4>
          </div>
        </Popup>
      ) : null}
      <Geocoder
        mapRef={mapRef}
        onViewportChange={handleGeocoderViewportChange}
        mapboxApiAccessToken={value}
        position="top-left"
        />
    </ReactMap>
    </body>
    </html>
  );
};

export default withRouter(Map);
