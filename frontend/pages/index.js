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
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgqBNJrR9qRm6E4jvyKwPU-oo9Rq-R6lDrUxFQerIEvBnU7MeTn-a1n4AzBz458bt02RA&usqp=CAU' 
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
