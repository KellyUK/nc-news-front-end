import React from "react";
import styles from "../style/Error.module.css";
import { Link } from "@reach/router";

const Error = ({ err }) => {
  return (
    <div className={styles.error}>
      <i className="fas fa-exclamation-circle" />
      <h1>"Oops!"</h1>
      <p>{"Sorry! Something went wrong!" || err}</p>
      <br />
      <Link to={"/"}>
        <button className={styles.errorButton}>Back to Homepage</button>
      </Link>
    </div>
  );
};

export default Error;
