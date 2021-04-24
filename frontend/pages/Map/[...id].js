import { useState, useRef, useCallback } from "react";
import ReactMap, { Marker, Popup } from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-regular-svg-icons";
import {faBed, faWineBottle} from "@fortawesome/free-solid-svg-icons"
import Geocoder from "react-map-gl-geocoder";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import styles from "./index.module.css"
import Image from 'next/image'

let data = [
  { name: "hospital 1", latitude: 17.385044, longitude: 78.486671 },
  { name: "hospital 2", latitude: 16.385044, longitude: 77.486671 },
  { name: "hospital 3", latitude: 16.385044, longitude: 78.486671 },
];

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 17.385044,
    longitude: 78.486671,
    width: "100vw",
    height: "100vh",
    zoom: 12,
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
        </>
      ))}
      {open ? (
        <Popup
        longitude={open.longitude}
        latitude={open.latitude}
        onClose={() => setOpen(false)}
        className={styles.ll}
        >
          <div className={styles.popup}>
            <img src="/hospital.jpg" alt="pic" width={100} height={100}  className={styles.img}></img>
            <h2>{open.name}</h2>
            <h4><FontAwesomeIcon icon={faHospital} className={styles.logo}/>Treament for covid</h4>
            <h4><FontAwesomeIcon icon={faBed} className={styles.logo}/>8 beds available</h4>
            <h4><FontAwesomeIcon icon={faWineBottle} className={styles.logo}/>Oxygen supply available for 40 patients</h4>
            <button className={styles.button}>More details</button>
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

export default Map;
