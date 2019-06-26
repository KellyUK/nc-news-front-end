import * as React from "react";
import styles from "../style/Header.module.css";
import LoginBar from "./LoginBar";
import FilterArticlesDropdown from "./FilterArticlesDropdown";
import NavBar from "./NavBar.js";

export const Header = ({ handleLoginClick, handleSortChange }) => {
  return (
    <div>
      <div className={styles.logo}>
        <h1 className={styles.header}>NC News</h1>
      </div>
      <NavBar />
      <LoginBar handleLoginClick={handleLoginClick} />
      <FilterArticlesDropdown handleSortChange={handleSortChange} />
    </div>
  );
};

export default Header;
