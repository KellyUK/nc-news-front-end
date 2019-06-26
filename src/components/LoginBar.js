import React from "react";
import styles from "../style/LoginBar.module.css";

const LoginBar = ({ handleLoginClick }) => {
  return (
    <div className={styles.login}>
      <button handleLoginClick={console.log("hello")} value={true}>
        <i className="fas fa-user">Login</i>
      </button>
    </div>
  );
};

export default LoginBar;
