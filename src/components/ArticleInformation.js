import React, { Component } from "react";
import moment from "moment";
import Vote from "./Vote.js";
import styles from "../style/ArticleInformation.module.css";

class ArticleInformation extends Component {
  render() {
    const { article, article_id, handleVote, votes, voteChange } = this.props;
    const rawDate = article.created_at;
    const formattedDate = moment(rawDate).format("YYYY MM DD");
    console.log("votes in article info", this.props.votes);
    return (
      <section className={styles.body}>
        <Vote
          article_id={article_id}
          votes={votes}
          handleVote={handleVote}
          votes={votes}
          voteChange={voteChange}
        />
        <p>Comments: {article.comment_count}</p>
        <p>Date: {formattedDate}</p>
      </section>
    );
  }
}

export default ArticleInformation;
