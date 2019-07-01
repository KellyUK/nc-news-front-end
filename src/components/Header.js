import * as React from "react";
import styles from "../style/Header.module.css";
import Login from "./Login";
import NavBar from "./NavBar.js";

export const Header = ({ user }) => {
  return (
    <>
      <section className={styles.fixedHeader}>
        <div className={styles.logo}>
          <h1 className={styles.header}>NC News</h1>
        </div>
        <NavBar />
      </section>
      <div>
        <Login user={user} />
      </div>
    </>
  );
};

export default Header;
