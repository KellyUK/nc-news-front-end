import React from "react";
import styles from "../../style/Login.module.css";

const Login = ({ user }) => {
  return (
    <div className={styles.login}>
      <p className={styles.logged}>
        Logged in as <span className={styles.user}> {user}</span>
      </p>
    </div>
  );
};

export default Login;
