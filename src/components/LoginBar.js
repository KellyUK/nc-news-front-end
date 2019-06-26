import React from "react";
import styles from "../style/LoginBar.module.css";

const LoginBar = handleLoginClick => {
  console.log(handleLoginClick);
  return (
    <div className={styles.login}>
      <button onClick={handleLoginClick} value="true">
        <i className="fas fa-user">Login</i>
      </button>
    </div>
  );
};

export default LoginBar;
