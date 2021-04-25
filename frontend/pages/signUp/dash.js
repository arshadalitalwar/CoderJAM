import Nav from "../../src/components/Dash/Nav";
import styles from "../../src/components/Styles/dash.module.css";
import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import router from "next/router";
import Link from "next/link";

import "react-calendar/dist/Calendar.css";

const dash = () => {
  const [value, onChange] = useState(new Date());
  const [d, setD] = useState({});
  useEffect(() => {
    let detail = localStorage.getItem("patientHealthData");
    detail = JSON.parse(detail);
    setD(detail);
    console.log(d);
  }, []);

  return (
    <>
      <Nav></Nav>
      <div className={styles.dash}>
        <div className={styles.dash_left}>
          <div className={styles.dash_left_profile}>
            <div>
              <img
                src="https://cdn1.vectorstock.com/i/1000x1000/29/90/grey-man-icon-vector-12512990.jpg"
                alt="person"
              ></img>
            </div>
            <h1 style={{ color: "gray" }}>User</h1>
          </div>
          <div className={styles.dash_left_detail}>
            <Link href="/Map/1">
              <div
                style={{
                  backgroundColor: "#F9A698",
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F9A698",
                    display: "grid",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="https://i.imgur.com/pIOVsJZ.png"
                    alt="appointment"
                  ></img>
                </div>
                <div onClick={() => router.push("/Map/1")}>
                  <h2 style={{ color: "white" }}>Search Hospitals</h2>
                </div>
              </div>
            </Link>
            <div
              style={{
                backgroundColor: "#D593F7",
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#D593F7",
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="https://i.imgur.com/8hqyWSB.png"
                  alt="Book Test"
                ></img>
              </div>
              <div>
                <h2 style={{ color: "white" }}>Book Test</h2>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#57E1D4",
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#57E1D4",
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="https://i.imgur.com/ygmPhqA.png" alt="video"></img>
              </div>
              <div>
                <h2 style={{ color: "white" }}>Video Consultation</h2>
              </div>
            </div>
          </div>
          <div className={styles.dash_left_reports}>
            <h2>Deatails</h2>
            <div>
              <div>
                <h2>WEIGHT</h2>
                <h1>{d.weight && `${d.weight} Kg`}</h1>
              </div>
              <div>
                <h2>HEIGHT</h2>
                <h1>{d.height && `${d.height} cm`}</h1>
              </div>
              <div>
                <h2>BP</h2>
                <h1>{d.bp && `${d.bp}`}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dash_right}>
          <div className={styles.dash_right_calender}>
            <div className="class1 class2">
              <Calendar onChange={onChange} value={value} />
            </div>
          </div>
          <div className={styles.dash_right_appointment}>
            <h2>Appointments</h2>
            <div>
              <div>
                <img
                  src="https://www.kindpng.com/picc/m/96-969073_male-doctor-flat-icon-vector-doctor-vector-png.png"
                  alt="doctor"
                ></img>
                <div>
                  <h2>Dr. Ashok Seth</h2>
                  <h3>Date - 26-Apr-2021</h3>
                  <h3>Time - 05:30 PM </h3>
                </div>
              </div>
              <div style={{ border: "1px solid #cfcfcf" }}></div>
              <div>
                <img
                  style={{
                    height: 50,
                    width: 50,
                    cursor: "pointer",
                    margin: 20,
                  }}
                  src="https://i.imgur.com/yKWhUMW.png"
                  alt="Chat"
                ></img>
                <img
                  style={{ height: 50, width: 50, cursor: "pointer" }}
                  src="https://i.imgur.com/ygmPhqA.png"
                  alt="video"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dash;
