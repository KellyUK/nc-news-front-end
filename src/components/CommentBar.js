import React, { Component } from "react";
import moment from "moment";
import Vote from "./Vote.js";

class CommentBar extends Component {
  render() {
    const { article, article_id, handleVote, votes } = this.props;
    const rawDate = article.created_at;
    const formattedDate = moment(rawDate).format("YYYY MM DD");
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
