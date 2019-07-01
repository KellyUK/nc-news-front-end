import React from "react";
import Vote from "../Vote.js";
import styles from "../../style/ArticleInformation.module.css";

export const ArticleInformation = ({
  article,
  article_id,
  handleVote,
  votes,
  voteChange
}) => {
  const { comment_count } = article;
  return (
    <section className={styles.body}>
      <Vote
        article_id={article_id}
        votes={votes}
        handleVote={handleVote}
        voteChange={voteChange}
      />
      <p className={styles.commentCount}>Comments: {comment_count}</p>
    </section>
  );
};

export default ArticleInformation;
