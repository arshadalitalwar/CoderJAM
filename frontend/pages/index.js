import styles from "./index.module.css"
import Nav from "../src/components/Navbar"

const Home = () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.parentNav}>
          <Nav></Nav>
        </div>
        <div className={styles.mainImgParent}>
          <div className={styles.mainPageInfo}>
            <div className={styles.mainPageInfoHeader}>
              <h1>Best Doctor Gives The Least Medicine</h1>
            </div>
            <div className={styles.mainPageImagesDiv}>
              <img 
                src='https://i.pinimg.com/736x/2a/d9/36/2ad9365c45aed10d134f78a867707cb1.jpg' 
                alt=''
              />
            </div>
            <div className={styles.mainPageHospInfo}>
              <div>
                <h3>Working Hours</h3>
                <p>Mon - Wed <span>9am - 10pm</span></p>
                <p>Thr - Sun <span>11am - 10pm</span></p>
                <p>Emergency <span>24hrs</span></p>
              </div>
              <div>
                <h3>Emergency</h3>
                <p>24 Hours Service available</p>
                <p>Call:<span>1800 1800 1800</span></p>
                <p>Wist us at:<span>www.medicJAM.com</span></p>
              </div>
              <div>
                <h3>Specialists In</h3>
                <p>COVID - 19</p>
                <p>Heriditary Disorders</p>
                <p>Endocrynology</p>
              </div>
            </div>
          </div>

          <div className={styles.mainPageImg}>
            <img
              src='https://i.pinimg.com/originals/49/3a/4e/493a4eb8d3ac129972f68cb87fa612a7.gif'
              alt='backimg'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
