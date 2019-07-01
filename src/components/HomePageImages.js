import React from "react";
import coding from "../images/coding.jpeg";
import cooking from "../images/cooking.jpeg";
import football from "../images/football.jpeg";
import article from "../images/article.jpeg";
import styles from "../style/Home.module.css";
import { Link } from "@reach/router";

const HomePageImages = () => {
  return (
    <section className={styles.homePageImages}>
      <div className={styles.container}>
        <img className={styles.homeImages} src={coding} alt="coding" />
        <Link to="/topics/coding">
          <button>View Coding Articles</button>
        </Link>
      </div>
      <div className={styles.container}>
        <img className={styles.homeImages} src={cooking} alt="cooking" />
        <Link to="/topics/cooking">
          <button>View Cooking Articles</button>
        </Link>
      </div>
      <div className={styles.container}>
        <img className={styles.homeImages} src={football} alt="football" />
        <Link to="/topics/football">
          <button>View Football Articles</button>
        </Link>
      </div>
      <div className={styles.container}>
        <img className={styles.homeImages} src={article} alt="football" />
        <Link to="/topics/article">
          <button>View All Articles</button>
        </Link>
        <h3 className={styles.popularTitle}>Popular Articles</h3>
      </div>
    </section>
  );
};

export default HomePageImages;
