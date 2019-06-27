import React from "react";
import styles from "../style/LoginBar.module.css";

const LoginBar = ({ handleLoginClick }) => {
  return (
    <div className={styles.login}>
      <button onClick={handleLoginClick} value="true">
        Login
      </button>
    </div>
  );
};

export default LoginBar;
