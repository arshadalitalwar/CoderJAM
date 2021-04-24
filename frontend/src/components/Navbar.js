import styles from "./navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div>
        <img src="https://i.imgur.com/wJ5fdPf.png" alt="logo"></img>
      </div>
      <div>
        <Link href="/signUp/login">
          <p style={{ fontSize: 20, cursor: "pointer", color: "#BD1A8D" }}>
            Login
          </p>
        </Link>
        <Link href="/signUp">
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
              marginLeft: 20,
            }}
          >
            <p style={{ fontSize: 20, cursor: "pointer", color: "#8ab4f8" }}>
              Sign up
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
