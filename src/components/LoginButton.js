import React from "react";
import styles from "../style/LoginButton.module.css";

const LoginButton = ({ handleLoginClick }) => {
  return (
    <div className={styles.login}>
      <button onClick={handleLoginClick} value="true">
        Login
      </button>
    </div>
  );
};

export default LoginButton;
