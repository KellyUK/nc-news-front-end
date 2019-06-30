import React, { Component } from "react";
import Vote from "./Vote.js";
import styles from "../style/ArticleInformation.module.css";

export const ArticleInformation = ({
  article,
  article_id,
  handleVote,
  votes,
  voteChange
}) => {
  console.log(votes, voteChange, "in articleinfo");
  return (
    <section className={styles.body}>
      <Vote
        article_id={article_id}
        votes={votes}
        handleVote={handleVote}
        voteChange={voteChange}
      />
      <p>Comments: {article.comment_count}</p>
    </section>
  );
};

export default ArticleInformation;
