import NavBar from "../../src/components/Navbar"
import styles from "./hospital.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faCalendarAlt, faHospital } from "@fortawesome/free-regular-svg-icons";
import {faBed, faHospitalUser, faMapMarker, faUserMd, faWineBottle} from "@fortawesome/free-solid-svg-icons"
let data=
    {
        id:1,
        name:"Sri Sri Holistic Hospitals | Nizampet",
        address:"1-2, 49/13B, Nizampet Rd, Survey 37, Hyder Nagar, Nagarjuna Homes, Kukatpally, Hyderabad, Telangana 500072",
        lat_lon:[17.50437313399618, 78.38920279565887],
        no_of_beds:20,
        isCovid:true,
        no_of_oxygen:6,
        doctors:["doctor1","doctor2"]
        }

  let doctor = {
    "id":1,
    "name":"Dr. Suresh H. Advani",
    "url":"https://www.vaidam.com/sites/default/files/dr._suresh_h._advani_-_oncologist.jpg",
    "specialization":"Medical Oncologist",
    "isAvailable":true
    }

const Hospital = () => {
    return (
      <>
      <NavBar></NavBar>
      <h1 className={styles.h1}>{data.name}</h1>
        <div className={styles.Box}>
          <h3>Regarding covid-19</h3> 
        <p><FontAwesomeIcon icon={faBed} className={styles.logo}/>8 beds available</p>
        <p><FontAwesomeIcon icon={faWineBottle} className={styles.logo}/>Oxygen supply available for 40 patients</p>
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
        <div className={styles.DocBox}>
          <p style={{padding:"15px"}}><FontAwesomeIcon icon={faUserMd} className={styles.logo}/>{doctor.name}</p>
          <p><FontAwesomeIcon icon={faAddressCard} className={styles.logo}/>{doctor.specialization}</p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className={styles.logo}/>Doctor not available</p>
          <button  className={styles.button2}>Book appoinment</button>
        </div>
        <div className={styles.DocBox}>
          <p style={{padding:"15px"}}><FontAwesomeIcon icon={faUserMd} className={styles.logo}/>{doctor.name}</p>
          <p><FontAwesomeIcon icon={faAddressCard} className={styles.logo}/>{doctor.specialization}</p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className={styles.logo}/>Doctor not available</p>
          <button  className={styles.button2}>Book appoinment</button>
        </div>
        <div className={styles.DocBox}>
          <p style={{padding:"15px"}}><FontAwesomeIcon icon={faUserMd} className={styles.logo}/>{doctor.name}</p>
          <p><FontAwesomeIcon icon={faAddressCard} className={styles.logo}/>{doctor.specialization}</p>
          <p><FontAwesomeIcon icon={faCalendarAlt} className={styles.logo}/>Doctor not available</p>
          <button  className={styles.button2}>Book appoinment</button>
        </div>
        </div>
      </>
    );
  };
  
  export default Hospital;
  