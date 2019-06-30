import * as React from "react";
import moment from "moment";
import styles from "../style/ArticleCard.module.css";
import { Link } from "@reach/router";
import User from "./User";

export const ArticleCard = ({ article_id, article }) => {
  const rawDate = article.created_at;
  const formattedDate = moment(rawDate).format("Do MMM YY");
  const username = article.author;
  const { title, topic, votes, comment_count } = article;
  return (
    <div className={styles.articleCard}>
      <User username={username} />
      <Link to={`/articles/${article_id}`}>
        <h2 className={styles.articleTitle}>{title}</h2>
        <h3 className={styles.topic}>Topic: {topic}</h3>

        <section className={styles.additional}>
          <p>Votes: {votes}</p>
          <p>Comments: {comment_count}</p>
          <p>{formattedDate}</p>
        </section>
      </Link>
    </div>
  );
};

export default ArticleCard;
