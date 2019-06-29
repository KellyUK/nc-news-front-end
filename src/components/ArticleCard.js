import * as React from "react";
import moment from "moment";
import styles from "../style/ArticleCard.module.css";
import { Link } from "@reach/router";
import User from "./User";

export const ArticleCard = ({ article_id, article }) => {
  const rawDate = article.created_at;
  const formattedDate = moment(rawDate).format("Do MMM YY");
  const username = article.author;

  return (
    <div className={styles.articleCard}>
      <User username={username} />
      <Link to={`/articles/${article_id}`}>
        <h2 className={styles.articleTitle}>{article.title}</h2>
        <h3>Topic: {article.topic}</h3>

        <section className={styles.additional}>
          <p>Votes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
          <p>{formattedDate}</p>
        </section>
      </Link>
    </div>
  );
};

export default ArticleCard;
