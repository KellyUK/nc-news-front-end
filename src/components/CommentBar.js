import React, { Component } from "react";
import moment from "moment";
import { Link } from "@reach/router";
import Vote from "./Vote.js";

class CommentBar extends Component {
  state = { comments: "None" };
  render() {
    const { article, article_id, handleVote } = this.props;
    const rawDate = article.created_at;
    const formattedDate = moment(rawDate).format("YYYY MM DD");
    const votes = article.votes;
    return (
      <section>
        <Vote article_id={article_id} votes={votes} handleVote={handleVote} />
        <p>Comments: {article.comment_count}</p>
        <p>Date: {formattedDate}</p>
      </section>
    );
  }
}

export default CommentBar;
