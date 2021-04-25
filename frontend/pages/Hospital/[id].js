import NavBar from "../../src/components/Navbar"
import styles from "./hospital.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faCalendarAlt, faHospital } from "@fortawesome/free-regular-svg-icons";
import {faBed, faHospitalUser, faMapMarker, faUserMd, faWineBottle} from "@fortawesome/free-solid-svg-icons"
import {withRouter} from "next/router"

let data=
{
  "id":3,
    "name":"KIMS Hospitals Kondapur",
    "address":"# 1-112 / 86, Survey No 5 / EE, beside Andhra Bank, Kondapur, Telangana 500084",
    latitude:17.469254,
    longitude: 78.367880,
  "no_of_beds":30,
  "isCovid":true,
  "no_of_oxygen":20
  }

  let doctor = [{
    "id":1,
    "name":"Dr. Suresh H. Advani",
    "url":"https://www.vaidam.com/sites/default/files/dr._suresh_h._advani_-_oncologist.jpg",
    "specialization":"Medical Oncologist",
    "isAvailable":true
    }]
    

const Hospital = (props) => {
    return (
      <>
      <NavBar></NavBar>
      <h1 className={styles.h1}>{data.name}</h1>
        <div className={styles.Box}>
          <h3>Regarding covid-19</h3> 
        <p><FontAwesomeIcon icon={faBed} className={styles.logo}/>{data.no_of_beds} beds available</p>
        <p><FontAwesomeIcon icon={faWineBottle} className={styles.logo}/>Oxygen supply available for {data.no_of_oxygen} patients</p>
        <button  className={styles.button}>Book Bed</button>
        </div>
        <div className={styles.Box}>
          <h3>Regarding HealthCare</h3>
        <p><FontAwesomeIcon icon={faUserMd} className={styles.logo}/>More than 12 doctors</p>
        <p><FontAwesomeIcon icon={faHospitalUser} className={styles.logo}/>24/7 service for all health care problems</p>
        <p style={{fontSize:"13px",lineHeight:"25px"}}><FontAwesomeIcon icon={faMapMarker} className={styles.logo}/>{data.address}</p>
        </div>
        <div className={styles.Box2}>
        <h1  className={styles.h1}>Doctors Available Online</h1>
        {doctor.map(item=>(
          <div className={styles.DocBox}>
          <p style={{padding:"15px"}}><FontAwesomeIcon icon={faUserMd} className={styles.logo}/>{item.name}</p>
          <p><FontAwesomeIcon icon={faAddressCard} className={styles.logo}/>{item.specialization}</p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className={styles.logo}/>Doctor available now</p>
          <button onClick={()=>props.router.push("/signUp/dash")} className={styles.button2}>Book appoinment</button>
        </div>
        ))}
        
        </div>
      </>
    );
  };
  
  export default withRouter(Hospital);
  