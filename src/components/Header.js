import * as React from "react";
import { Link } from "@reach/router";
import styles from "../style/Header.module.css";
import LoginBar from "./LoginBar";
import FilterArticlesDropdown from "./FilterArticlesDropdown";

export const Header = ({ updateTopic }) => {
  return (
    <div>
      <div className={styles.logo}>
        <h1 className={styles.header}>NC News</h1>
      </div>
      <nav className={styles.navbar}>
        <Link to="/">
          <button className={styles.navButton}>Home</button>
        </Link>
        <Link to="/articles">
          <button className={styles.navButton}>Articles</button>
        </Link>
        <Link to="/articles/coding">
          <button className={styles.navButton}>Coding</button>
        </Link>
        <Link to="/articles/football">
          <button className={styles.navButton}>Football</button>
        </Link>
        <Link to="/articles/cooking">
          <button className={styles.navButton}>Cooking</button>
        </Link>
      </nav>
      <LoginBar />
      <FilterArticlesDropdown />
    </div>
  );
};

export default Header;
