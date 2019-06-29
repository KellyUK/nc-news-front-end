import React from "react";
import styles from "../style/SortArticles.module.css";

const SortArticles = ({ handleSort }) => {
  return (
    <div className={styles.sortButtons}>
      <button
        className={styles.button}
        name="comment_count"
        value="comment_count"
        onClick={handleSort}
      >
        Most Comments
      </button>
      <button
        className={styles.button}
        name="created_at"
        value="created_at"
        onClick={handleSort}
      >
        Most Recent
      </button>
      <button
        className={styles.button}
        name="votes"
        value="votes"
        onClick={handleSort}
      >
        Most Votes
      </button>
    </div>
  );
};

export default SortArticles;
