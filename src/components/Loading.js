import React from "react";
import Spinner from "react-spinner-material";
import styles from "../style/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <Spinner
          className={styles.spinner}
          size={100}
          spinnercolor={"#333"}
          spinnerwidth={2}
          visible={true}
        />
      </div>
      <h1>Page is loading...</h1>
    </div>
  );
};

export default Loading;
