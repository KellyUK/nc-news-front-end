import * as React from "react";
import moment from "moment";
import styles from "../style/ArticleCard.module.css";
import { Link } from "@reach/router";

export const ArticleCard = ({ article_id, article }) => {
  const rawDate = article.created_at;
  const formattedDate = moment(rawDate).format("YYYY MM DD");

  return (
    <div className={styles.articleCard}>
      <Link to={`articles/${article.article_id}`}>
        <h2 className={styles.articleTitle}>{article.title}</h2>
        <h3>Topic: {article.topic}</h3>
        <h3>Article by: {article.author}</h3>
        <section className={styles.additional}>
          <p>Votes: {article.votes}</p>
          <p>Comments: {article.comments}</p>
          <p>Date: {formattedDate}</p>
        </section>
      </Link>
    </div>
  );
};

export default ArticleCard;
