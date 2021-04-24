import styles from "./nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={styles.Navbar}>
      <div>
        <Link href="/">
          <img src="https://i.imgur.com/6ETwsTP.png" alt="logo"></img>
        </Link>
      </div>
      <div>
        <Link href="/signUp/dash">
          <div
            style={{
              width: 40,
              height: 40,

              backgroundColor: "#BD1A8D",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              borderRadius: "50%",
              marginLeft: 20,
            }}
          >
            <img
              style={{
                height: "100%",
                borderRadius: "50%",
                border: "2px solid #BD1A8D",
                cursor: "pointer",
              }}
              src="https://cdn1.vectorstock.com/i/1000x1000/29/90/grey-man-icon-vector-12512990.jpg"
              alt="user"
            ></img>
          </div>
        </Link>
        <Link href="/">
          <div
            style={{
              width: 100,
              height: 40,
              backgroundColor: "#BD1A8D",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              borderRadius: 5,
              marginLeft: 50,
            }}
          >
            <p style={{ fontSize: 20, cursor: "pointer", color: "#333951" }}>
              Logout
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
